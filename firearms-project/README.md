# American Firearms Network (AFN) — Next.js Web Application

A modern, high-performance web platform built with **Next.js 15 (App Router)**, **JavaScript (ES Modules)**, and **Tailwind CSS v4** for the American Firearms Network ([americanfirearmsnetwork.com](https://americanfirearmsnetwork.com/)).

---

## 📁 Architecture & Folder Structure

This project follows an intuitive, decoupled modular structure designed so that any developer can understand and maintain it within seconds:

```text
firearms-project/
├── public/                     # Public static assets
│   └── images/                 # Categorized site imagery
│       ├── logo/               # Site logo & favicon
│       ├── hero/               # Hero banner background
│       ├── about/              # About us & story images
│       ├── gallery/            # Training photos & action drills
│       └── video/              # Media & YouTube preview background
│
├── src/
│   ├── app/                    # Next.js App Router (Pages & Routes)
│   │   ├── layout.js           # Global layout shell, fonts, SEO, Navbar & Footer
│   │   ├── globals.css         # Tailwind CSS v4 design tokens & tactical theme
│   │   ├── page.js             # Homepage (/)
│   │   ├── about-us/page.js    # Mission, story & instructor dossiers (/about-us)
│   │   ├── services/           # Training courses catalog (/services)
│   │   │   ├── page.js         # All 10 courses with category filter
│   │   │   └── [slug]/page.js  # Dynamic course page with syllabus & gear
│   │   ├── training-ranges/    # 8 South Florida partner facilities (/training-ranges)
│   │   ├── gallery/page.js     # Filterable photo gallery with lightbox (/gallery)
│   │   ├── contact-us/page.js  # Direct instructor numbers & booking form (/contact-us)
│   │   ├── privacy-policy/     # Legal privacy policy (/privacy-policy)
│   │   ├── terms-of-service/   # Terms of service (/terms-of-service)
│   │   └── disclosure/         # Safety & liability disclaimer (/disclosure)
│   │
│   ├── components/             # Reusable UI Components
│   │   ├── layout/             # Global layout elements
│   │   │   ├── Navbar.js       # Sticky glassmorphic navbar with mobile drawer
│   │   │   └── Footer.js       # Multi-column footer with direct phone lines
│   │   ├── home/               # Homepage dedicated sections
│   │   │   ├── Hero.js         # Hero banner with dual CTAs (1-on-1 vs Group)
│   │   │   ├── AboutOverview.js# Mission pillars & Florida tactical ecosystem
│   │   │   ├── ServicesOverview.js # Private vs Group comparison & course cards
│   │   │   ├── InstructorsSection.js # Todd Grama & Paul Gayle certified profiles
│   │   │   ├── RangesSection.js# Partner shooting facilities
│   │   │   ├── YouTubeSection.js # AFN YouTube channel intel hub
│   │   │   └── TestimonialsSection.js # Student reviews & ratings
│   │   └── forms/              # Validated interactive forms
│   │       └── ConsultationForm.js # Direct instructor consultation booking engine
│   │
│   └── data/                   # Single Source of Truth (Easy to edit)
│       ├── siteConfig.js       # Global phone numbers, emails, social links
│       ├── courses.js          # All 10 courses with syllabus, duration & gear
│       ├── instructors.js      # Todd Grama & Paul Gayle bios & credentials
│       ├── ranges.js           # 8 Florida partner training ranges
│       ├── gallery.js          # Gallery images with category tags
│       └── testimonials.js     # Student reviews
│
├── package.json
├── jsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🛠️ How to Update Content (For Developers)

- **Change phone numbers, emails, or YouTube links**:
  Edit `src/data/siteConfig.js`.
- **Add or edit courses (prices, duration, gear)**:
  Edit `src/data/courses.js`.
- **Update instructor credentials or bios**:
  Edit `src/data/instructors.js`.
- **Add new photos**:
  Drop the image file into `public/images/gallery/` and add an entry in `src/data/gallery.js`.
