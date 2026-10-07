# Codesoftic Tech Private Limited — Single-Page Web Application

A modern, high-performance single-page website for **Codesoftic Tech Private Limited** engineered with Next.js 14 App Router, Tailwind CSS, and custom brand design tokens.

## 🚀 Live Brand Reference
- **Website**: [Codesoftic](https://codesoftic.com/)
- **Primary CTA**: [Book Free Consultation (Cal.com)](https://cal.com/codesoftic/collaboration-circle?user=codesoftic)

---

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 14 (App Router) + React 18
- **Styling**: Tailwind CSS + Custom CSS Variables Design System (`Plus Jakarta Sans` & `JetBrains Mono`)
- **Icons**: Lucide React
- **SEO & Schema**: OpenGraph, Twitter Cards, Semantic HTML5, JSON-LD `ProfessionalService` structured schema
- **Content**: Centralized single source of truth in `data/siteData.js`

---

## 📂 Project Structure

```text
├── app/
│   ├── globals.css        # Brand design tokens, gradients, animations, utilities
│   ├── layout.js          # Root layout with SEO meta tags & Schema.org JSON-LD
│   └── page.js            # Single-page assembly with smooth scroll anchors
├── components/
│   ├── Header.js          # Sticky navigation with mobile drawer & CTA
│   ├── Hero.js            # Hero section with animated keyword roller & showcase slider
│   ├── TrustPartners.js   # Partner badges (Meta, Shopify, WhatsApp, Microsoft)
│   ├── AboutUs.js         # Company story, mission & 4 highlight proof points
│   ├── Services.js        # 4 Core capability cards with bullet details
│   ├── CtaBanner.js       # Full-width dark electric gradient CTA banner
│   ├── Testimonials.js    # Carousel & Grid views with 5 client quotes
│   ├── Footer.js          # Corporate footer with address, phone, email, GST, CIN & socials
│   └── LegalModal.js      # Accessible Privacy Policy & Disclaimer modal dialogs
├── data/
│   └── siteData.js        # Global editable configuration for all content & copy
├── public/
│   ├── images/
│   │   ├── Logo.svg       # Official Codesoftic SVG vector logo
│   │   ├── og-image.png   # OpenGraph social share card
│   │   └── partners/      # Accredited partner SVGs
│   └── icon.png
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🏢 Corporate Details
- **Company**: Codesoftic Tech Private Limited
- **Address**: A-306, Bestech Business Tower, Sector 66, Mohali, Punjab – 160062
- **Phone**: +91 9999061692
- **Email**: growth@codesoftic.com
- **GST No**: 03AAGCC1639Q1ZG
- **CIN**: U72200PB2015PTC039689
- **Copyright**: © 2026 Codesoftic Tech Private Limited. All rights reserved.
