import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { sendContactNotification } from '@/lib/mail';

export const runtime = 'nodejs';

const MAX_FIELD_LENGTH = 500;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_SOURCES = new Set(['contact-page', 'contact-popup', 'consultation-form', 'home-page']);

// In-memory sliding window rate limiter: IP -> Array of timestamps
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_MINUTE = 5;       // Max 5 submissions per minute per IP
const EXTENDED_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_10MIN = 15;        // Max 15 submissions per 10 minutes per IP

function isRateLimited(ip) {
  if (!ip) return false;
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  // Filter timestamps within the 10-minute window
  const recent = timestamps.filter((t) => now - t < EXTENDED_WINDOW_MS);

  // Check 1-minute burst limit
  const minuteCount = recent.filter((t) => now - t < RATE_LIMIT_WINDOW_MS).length;
  if (minuteCount >= MAX_REQUESTS_PER_MINUTE) {
    return { limited: true, retryAfter: 60 };
  }

  // Check 10-minute limit
  if (recent.length >= MAX_REQUESTS_PER_10MIN) {
    return { limited: true, retryAfter: 300 };
  }

  recent.push(now);
  rateLimitMap.set(ip, recent);

  // Cleanup old entries periodically to avoid memory growth
  if (rateLimitMap.size > 2000) {
    for (const [key, times] of rateLimitMap.entries()) {
      if (times.every((t) => now - t >= EXTENDED_WINDOW_MS)) {
        rateLimitMap.delete(key);
      }
    }
  }

  return { limited: false };
}

function cleanString(value) {
  return typeof value === 'string' ? value.trim() : '';
}

async function verifyRecaptcha(token, remoteIp) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return { configured: false, success: false };

  const params = new URLSearchParams({ secret, response: token });
  if (remoteIp) params.set('remoteip', remoteIp);

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
      cache: 'no-store',
    });
    const result = await response.json();
    return { configured: true, success: result.success === true };
  } catch {
    return { configured: true, success: false };
  }
}

export async function POST(request) {
  const clientIp =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    '127.0.0.1';

  // 1. IP Rate Limiting check
  const rateCheck = isRateLimited(clientIp);
  if (rateCheck.limited) {
    return NextResponse.json(
      { error: 'Too many submissions. Please wait a moment before trying again.' },
      {
        status: 429,
        headers: {
          'Retry-After': String(rateCheck.retryAfter),
        },
      }
    );
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON request body.' }, { status: 400 });
  }

  const name = cleanString(body?.name);
  const phone = cleanString(body?.phone);
  const email = cleanString(body?.email);
  const timeToCall = cleanString(body?.timeToCall ?? body?.bestTime);
  const lessonType = cleanString(body?.lessonType);
  const state = cleanString(body?.state);
  const city = cleanString(body?.city ?? body?.cityLocation);
  const remarks = cleanString(body?.remarks);
  const source = cleanString(body?.source) || 'contact-page';
  const recaptchaToken = cleanString(body?.recaptchaToken);

  if (!name || name.length < 2) {
    return NextResponse.json(
      { error: 'Please enter your name.' },
      { status: 422 }
    );
  }

  const phoneDigits = phone.replace(/\D/g, '');
  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    return NextResponse.json(
      { error: 'Please enter a valid 10-digit phone number.' },
      { status: 422 }
    );
  }

  if (email && !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 422 });
  }

  const fields = [name, phone, email, timeToCall, lessonType, state, city, remarks];
  if (fields.some((field) => field.length > MAX_FIELD_LENGTH)) {
    return NextResponse.json(
      { error: `Each field must be ${MAX_FIELD_LENGTH} characters or fewer.` },
      { status: 422 }
    );
  }

  if (!ALLOWED_SOURCES.has(source)) {
    return NextResponse.json({ error: 'Invalid form source.' }, { status: 422 });
  }

  const verification = await verifyRecaptcha(recaptchaToken, clientIp);
  if (!verification.configured) {
    return NextResponse.json(
      { error: 'Spam protection is not configured. Please try again later.' },
      { status: 503 }
    );
  }
  if (!verification.success) {
    return NextResponse.json(
      { error: 'Please complete the reCAPTCHA challenge and try again.' },
      { status: 422 }
    );
  }

  if (!db) {
    return NextResponse.json(
      { error: 'Contact service is not configured. Please try again later.' },
      { status: 503 }
    );
  }

  try {
    const [result] = await db.execute(
      `INSERT INTO contact_submissions
        (name, phone, email, time_to_call, lesson_type, state, city, remarks, source, consent_given)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        name,
        phone,
        email || null,
        timeToCall || null,
        lessonType || null,
        state || null,
        city || null,
        remarks || null,
        source,
        1,
      ]
    );

    // Dispatch email notification via Nodemailer (non-blocking for user response)
    sendContactNotification({
      name,
      phone,
      email,
      timeToCall,
      lessonType,
      state,
      city,
      remarks,
      source,
    }).catch((mailErr) => {
      console.error('[Contact API] Background email dispatch error:', mailErr);
    });

    return NextResponse.json(
      { success: true, id: result.insertId, message: 'Your contact request has been received.' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Unable to save contact submission:', error.message);
    return NextResponse.json(
      { error: 'Unable to submit your request right now. Please try again later.' },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 });
}
