import nodemailer from 'nodemailer';
import { siteConfig } from '../data/siteConfig.js';
import { config } from '../config.js';

/**
 * Creates and returns a Nodemailer transporter configured via central config.
 * Returns null if SMTP password is not configured.
 */
function getTransporter() {
  const { host, port, secure, user, pass } = config.mail;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
}

/**
 * Sends a notification email to the admin with all details of the new contact submission.
 * Also sends a courtesy acknowledgment to the lead if their email was provided.
 */
export async function sendContactNotification(submission) {
  const transporter = getTransporter();

  if (!transporter) {
    console.warn('[Mail Service] SMTP_PASS not set in environment. Email notification skipped.');
    return { success: false, reason: 'smtp_not_configured' };
  }

  const {
    name = '',
    phone = '',
    email = '',
    timeToCall = '',
    lessonType = '',
    state = '',
    city = '',
    remarks = '',
    source = 'website',
  } = submission;

  const adminTo = config.mail.to;
  const fromAddress = config.mail.from;

  const sourceLabels = {
    'contact-page': 'Contact Us Page',
    'contact-popup': 'Quick Consultation Popup',
    'home-page': 'Homepage Booking Section',
    'consultation-form': 'Consultation Form',
  };
  const sourceDisplay = sourceLabels[source] || source;
  const logoUrl = config.mail.logoUrl || 'https://americanfirearmsnetwork.com/wp-content/uploads/2026/01/American-Firearm-Logo-05-1.png';

  // Professional Admin Notification HTML (No emojis, clean corporate structure, hosted logo without attachment chip)
  const adminHtml = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Training Inquiry</title>
      </head>
      <body style="margin: 0; padding: 24px 10px; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1f2937;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" style="max-width: 620px; background-color: #ffffff; border-radius: 6px; overflow: hidden; border: 1px solid #e5e7eb; box-shadow: 0 4px 16px rgba(0,0,0,0.06);" cellspacing="0" cellpadding="0" border="0">
                
                <!-- Branded Header with Official Logo on Clean High-Contrast Background -->
                <tr>
                  <td align="center" style="background-color: #ffffff; padding: 26px 20px 20px 20px; border-bottom: 3px solid #B1800F;">
                    <img src="${logoUrl}" alt="American Firearms Network" width="220" style="display: block; max-width: 220px; width: 220px; height: auto; margin: 0 auto; border: 0;" />
                    <p style="margin: 10px 0 0 0; color: #B1800F; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px;">New Training Inquiry Received</p>
                  </td>
                </tr>

                <!-- Content Area -->
                <tr>
                  <td style="padding: 28px 24px 20px 24px;">
                    
                    <!-- Source Badge & Timestamp -->
                    <table role="presentation" width="100%" style="margin-bottom: 20px;" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td align="left">
                          <span style="display: inline-block; background-color: #fef3c7; color: #92400e; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; padding: 4px 10px; border-radius: 3px; border: 1px solid #fde68a;">
                            Source: ${sourceDisplay}
                          </span>
                        </td>
                        <td align="right" style="font-size: 12px; color: #6b7280;">
                          ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York', dateStyle: 'medium', timeStyle: 'short' })} EST
                        </td>
                      </tr>
                    </table>

                    <!-- Lead Information Table -->
                    <table role="presentation" width="100%" style="border-collapse: collapse; margin-bottom: 22px; border: 1px solid #e5e7eb;" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="padding: 12px 14px; background-color: #f9fafb; color: #4b5563; font-size: 13px; font-weight: 600; width: 34%; border-bottom: 1px solid #e5e7eb;">Full Name</td>
                        <td style="padding: 12px 14px; color: #111827; font-size: 14px; font-weight: 700; border-bottom: 1px solid #e5e7eb;">${name}</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 14px; background-color: #f9fafb; color: #4b5563; font-size: 13px; font-weight: 600; border-bottom: 1px solid #e5e7eb;">Phone Number</td>
                        <td style="padding: 12px 14px; border-bottom: 1px solid #e5e7eb;">
                          <a href="tel:${phone}" style="color: #B1800F; font-size: 14px; font-weight: 700; text-decoration: none;">${phone}</a>
                        </td>
                      </tr>
                      ${email ? `
                      <tr>
                        <td style="padding: 12px 14px; background-color: #f9fafb; color: #4b5563; font-size: 13px; font-weight: 600; border-bottom: 1px solid #e5e7eb;">Email Address</td>
                        <td style="padding: 12px 14px; border-bottom: 1px solid #e5e7eb;">
                          <a href="mailto:${email}" style="color: #B1800F; font-size: 14px; text-decoration: none;">${email}</a>
                        </td>
                      </tr>` : ''}
                      ${lessonType ? `
                      <tr>
                        <td style="padding: 12px 14px; background-color: #f9fafb; color: #4b5563; font-size: 13px; font-weight: 600; border-bottom: 1px solid #e5e7eb;">Course / Program</td>
                        <td style="padding: 12px 14px; color: #111827; font-size: 13.5px; font-weight: 600; border-bottom: 1px solid #e5e7eb;">${lessonType}</td>
                      </tr>` : ''}
                      ${state || city ? `
                      <tr>
                        <td style="padding: 12px 14px; background-color: #f9fafb; color: #4b5563; font-size: 13px; font-weight: 600; border-bottom: 1px solid #e5e7eb;">Location</td>
                        <td style="padding: 12px 14px; color: #111827; font-size: 13.5px; border-bottom: 1px solid #e5e7eb;">${[city, state].filter(Boolean).join(', ')}</td>
                      </tr>` : ''}
                      ${timeToCall ? `
                      <tr>
                        <td style="padding: 12px 14px; background-color: #f9fafb; color: #4b5563; font-size: 13px; font-weight: 600; border-bottom: 1px solid #e5e7eb;">Best Time to Call</td>
                        <td style="padding: 12px 14px; color: #111827; font-size: 13.5px; border-bottom: 1px solid #e5e7eb;">${timeToCall}</td>
                      </tr>` : ''}
                    </table>

                    ${remarks ? `
                    <!-- Notes / Remarks Block -->
                    <div style="margin-bottom: 24px;">
                      <div style="font-size: 12px; font-weight: 700; color: #374151; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">Notes / Questions:</div>
                      <div style="background-color: #f9fafb; border-left: 3px solid #B1800F; padding: 12px 16px; font-size: 13.5px; line-height: 1.5; color: #1f2937; border-radius: 0 4px 4px 0;">
                        ${remarks.replace(/\n/g, '<br>')}
                      </div>
                    </div>` : ''}

                    <!-- Action Buttons (No Emojis) -->
                    <table role="presentation" width="100%" style="margin: 10px 0 6px 0;" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td align="center">
                          <a href="tel:${phone}" style="display: inline-block; background-color: #B1800F; color: #ffffff; text-decoration: none; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; padding: 11px 24px; border-radius: 4px; margin: 4px;">
                            CALL LEAD
                          </a>
                          ${email ? `
                          <a href="mailto:${email}?subject=Regarding Your Firearms Training Inquiry - American Firearms Network" style="display: inline-block; background-color: #111827; color: #ffffff; text-decoration: none; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; padding: 11px 24px; border-radius: 4px; margin: 4px;">
                            REPLY VIA EMAIL
                          </a>` : ''}
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td align="center" style="background-color: #f9fafb; padding: 18px 24px; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb; line-height: 1.6;">
                    <strong>American Firearms Network</strong> &bull; Florida Firearms Education &amp; Training<br>
                    Instructor Todd: ${siteConfig.phoneToddFormatted} | Instructor Paul: ${siteConfig.phonePaulFormatted}<br>
                    <a href="https://americanfirearmsnetwork.com" style="color: #B1800F; text-decoration: none;">americanfirearmsnetwork.com</a>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  try {
    // 1. Send Admin Notification (No attachments array -> zero attachment chip in Gmail!)
    const adminInfo = await transporter.sendMail({
      from: fromAddress,
      to: adminTo,
      subject: `New Lead: ${name} - ${lessonType || 'Training Inquiry'}`,
      html: adminHtml,
      replyTo: email || undefined,
    });

    console.log('[Mail Service] Admin notification sent successfully:', adminInfo.messageId);

    // 2. Courtesy Acknowledgment to Lead (if email was entered, no emojis, branded logo)
    if (email) {
      try {
        const userHtml = `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Inquiry Confirmation</title>
            </head>
            <body style="margin: 0; padding: 24px 10px; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1f2937;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center">
                    <table role="presentation" width="100%" style="max-width: 580px; background-color: #ffffff; border-radius: 6px; overflow: hidden; border: 1px solid #e5e7eb; box-shadow: 0 4px 16px rgba(0,0,0,0.06);" cellspacing="0" cellpadding="0" border="0">
                      
                      <!-- Header with Logo on Clean High-Contrast Background -->
                      <tr>
                        <td align="center" style="background-color: #ffffff; padding: 24px 20px; border-bottom: 3px solid #B1800F;">
                          <img src="https://americanfirearmsnetwork.com/wp-content/uploads/2026/01/American-Firearm-Logo-05-1.png" alt="American Firearms Network" width="200" style="display: block; max-width: 200px; width: 200px; height: auto; margin: 0 auto; border: 0;" />
                        </td>
                      </tr>

                      <!-- Body -->
                      <tr>
                        <td style="padding: 28px 24px; font-size: 14px; line-height: 1.65; color: #374151;">
                          <p style="margin-top: 0;">Hello <strong>${name}</strong>,</p>
                          <p>Thank you for reaching out to the <strong>American Firearms Network</strong>. We have received your inquiry regarding <strong>${lessonType || 'firearms training instruction'}</strong>.</p>
                          <p>One of our certified instructors will review your training goals and contact you directly${timeToCall ? ` at your preferred time (${timeToCall})` : ''}.</p>
                          
                          <div style="background-color: #f9fafb; border-left: 3px solid #B1800F; padding: 14px 18px; margin: 20px 0; border-radius: 0 4px 4px 0;">
                            <strong style="color: #111827;">Direct Instructor Contact:</strong>
                            <div style="margin-top: 6px;">
                              Instructor Todd: <a href="tel:${siteConfig.phoneTodd}" style="color: #B1800F; text-decoration: none; font-weight: 700;">${siteConfig.phoneToddFormatted}</a><br>
                              Instructor Paul: <a href="tel:${siteConfig.phonePaul}" style="color: #B1800F; text-decoration: none; font-weight: 700;">${siteConfig.phonePaulFormatted}</a>
                            </div>
                          </div>

                          <p style="margin-bottom: 0;">
                            Sincerely,<br>
                            <strong>American Firearms Network Team</strong><br>
                            <a href="https://americanfirearmsnetwork.com" style="color: #B1800F; text-decoration: none;">americanfirearmsnetwork.com</a>
                          </p>
                        </td>
                      </tr>

                      <!-- Footer -->
                      <tr>
                        <td align="center" style="background-color: #f9fafb; padding: 16px 20px; font-size: 11.5px; color: #9ca3af; border-top: 1px solid #e5e7eb;">
                          American Firearms Network &bull; West Palm Beach, Florida
                        </td>
                      </tr>

                    </table>
                  </td>
                </tr>
              </table>
            </body>
          </html>
        `;

        await transporter.sendMail({
          from: fromAddress,
          to: email,
          subject: 'Inquiry Received - American Firearms Network',
          html: userHtml,
        });
      } catch (userMailErr) {
        console.warn('[Mail Service] User courtesy confirmation failed (non-critical):', userMailErr.message);
      }
    }

    return { success: true, messageId: adminInfo.messageId };
  } catch (error) {
    console.error('[Mail Service] Failed to send email notification:', error.message);
    return { success: false, error: error.message };
  }
}
