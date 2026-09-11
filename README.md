# American Firearms Network (AFN) — Next.js Web Platform

A modern, high-performance web platform built with **Next.js (App Router)**, **JavaScript (ES Modules)**, and **Tailwind CSS v4** for the **American Firearms Network** ([americanfirearmsnetwork.com](https://americanfirearmsnetwork.com/)).

---

## 📁 Repository Architecture & Folder Structure

All web application source code is maintained inside the [`firearms-project/`](./firearms-project) directory, cleanly organized so any new developer can navigate, understand, and customize it within minutes:

```text
Firearms/
├── README.md                           # Single master documentation file
├── .gitignore                          # Ignores node_modules & build caches
│
└── firearms-project/                   # Next.js 15 Application (JavaScript + Tailwind v4)
    │
    ├── public/images/                  # Categorized site assets
    │   ├── logo/                       # Site main logo & favicon
    │   ├── hero/                       # High-resolution tactical range hero banner
    │   ├── about/                      # About us & Florida training ecosystem imagery
    │   ├── gallery/                    # 10 dynamic training drill & range photos
    │   └── video/                      # YouTube & tactical media background
    │
    ├── src/
    │   ├── data/                       # Decoupled Data Models (Single Source of Truth)
    │   │   ├── siteConfig.js           # Global instructor phone numbers, emails, social links
    │   │   ├── courses.js              # All 10 firearms courses with syllabus & gear
    │   │   ├── instructors.js          # Todd Grama & Paul Gayle credentials & bios
    │   │   ├── ranges.js               # 8 South Florida partner shooting complexes
    │   │   ├── gallery.js              # Image gallery data with category filters
    │   │   └── testimonials.js         # Verified student feedback & reviews
    │   │
    │   ├── components/                 # Modular Reusable Components
    │   │   ├── layout/                 # Global layout elements
    │   │   │   ├── Navbar.js           # Sticky glassmorphic navbar with mobile drawer
    │   │   │   └── Footer.js           # Multi-column footer with direct phone lines
    │   │   ├── home/                   # Dedicated homepage sections
    │   │   │   ├── Hero.js             # Hero banner with dual 1-on-1 vs Group CTAs
    │   │   │   ├── AboutOverview.js    # Mission pillars & Florida ecosystem
    │   │   │   ├── ServicesOverview.js # Private vs Group comparison & 10-course cards
    │   │   │   ├── InstructorsSection.js # Todd & Paul credentials & direct dials
    │   │   │   ├── RangesSection.js    # Florida partner facilities grid
    │   │   │   ├── YouTubeSection.js   # AFN digital intelligence & subscribe CTA
    │   │   │   └── TestimonialsSection.js # Student review cards
    │   │   ├── forms/
    │   │   │   └── ConsultationForm.js # Validated lead & scheduling form (state, time, format)
    │   │   └── ui/
    │   │       └── YouTubeIcon.js      # Vector SVG brand icon
    │   │
    │   └── app/                        # Next.js App Router (21 Pre-rendered Routes)
    │       ├── layout.js               # Global HTML shell, fonts, SEO & theme
    │       ├── globals.css             # Tailwind CSS v4 tokens & tactical design
    │       ├── page.js                 # Complete landing page (/)
    │       ├── about-us/page.js        # Mission, story & instructor dossier (/about-us)
    │       ├── services/               # Courses catalog (/services)
    │       │   ├── page.js             # Filterable 10 courses overview
    │       │   └── [slug]/page.js      # Dynamic individual course detail pages
    │       ├── training-ranges/page.js # 8 Florida partner ranges (/training-ranges)
    │       ├── gallery/page.js         # Filterable gallery with lightbox (/gallery)
    │       ├── contact-us/page.js      # Contact center & scheduling (/contact-us)
    │       ├── privacy-policy/page.js  # Legal privacy terms
    │       ├── terms-of-service/page.js# Range safety & service terms
    │       └── disclosure/page.js      # Firearms safety & liability disclaimer
    │
    ├── package.json                    # Dependencies (Next.js, React, Tailwind, Lucide)
    └── jsconfig.json                   # Path aliases (@/* -> ./src/*)
```

---

## 🚀 Quick Start Guide

### 1. Navigate to Project Directory
```bash
cd firearms-project
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🛠️ How to Edit Content (For Developers)

- **Change phone numbers, emails, or YouTube links**:
  Edit [`firearms-project/src/data/siteConfig.js`](./firearms-project/src/data/siteConfig.js).
- **Add or update courses (descriptions, duration, ammo requirements)**:
  Edit [`firearms-project/src/data/courses.js`](./firearms-project/src/data/courses.js).
- **Update instructor bios or credentials**:
  Edit [`firearms-project/src/data/instructors.js`](./firearms-project/src/data/instructors.js).
- **Add new photo to gallery**:
  Place the image in `firearms-project/public/images/gallery/` and add its entry into [`firearms-project/src/data/gallery.js`](./firearms-project/src/data/gallery.js).

---

## 🔄 Pushing Changes to GitHub

Whenever you make changes, commit and push using:
```bash
git add .
git commit -m "Your descriptive commit message"
git push origin main
```