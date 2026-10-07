/**
 * Codesoftic Tech Private Limited - Global Site Data & Configuration
 * Single source of truth for site copy, navigation, statistics, services, testimonials, and legal disclosures.
 */

export const siteConfig = {
  name: "Codesoftic Tech Private Limited",
  shortName: "Codesoftic",
  tagline: "Transforming Today. Shaping Tomorrow with AI",
  intro: "Architecting intelligent web platforms, next-gen AI automations, and hyper-scale digital infrastructure for ambitious brands.",
  metaTitle: "Technical SEO, AI Automation & Enterprise Web Development | Codesoftic",
  metaDescription: "Bespoke web platforms, AI automation workflows and technical SEO for high-growth businesses.",
  canonicalUrl: "https://codesoftic.com",
  
  contact: {
    address: "A-306, Bestech Business Tower, Sector 66, Mohali, Punjab – 160062",
    addressShort: "Mohali, Punjab, India",
    phone: "+91 9999061692",
    phoneDisplay: "+91 9999061692",
    email: "growth@codesoftic.com",
    calendarUrl: "https://cal.com/codesoftic/collaboration-circle?user=codesoftic",
  },

  legal: {
    gst: "03AAGCC1639Q1ZG",
    cin: "U72200PB2015PTC039689",
    copyrightYear: 2026,
  },

  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/company/codesoftic/", icon: "Linkedin" },
    { name: "X (Twitter)", url: "https://x.com/codesoftic", icon: "Twitter" },
    { name: "Instagram", url: "https://www.instagram.com/codesoftic/", icon: "Instagram" },
    { name: "Facebook", url: "https://www.facebook.com/codesoftic", icon: "Facebook" },
    { name: "Pinterest", url: "https://in.pinterest.com/codesoftic/", icon: "Pin" },
  ],

  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],

  partners: [
    { name: "Meta Business Partner", logo: "/images/partners/meta-partner.svg" },
    { name: "Shopify Partner", logo: "/images/partners/shopify-partner.svg" },
    { name: "WhatsApp Business API Partner", logo: "/images/partners/whatsapp-partner.svg" },
    { name: "Microsoft Solutions Partner", logo: "/images/partners/microsoft-partner.svg" },
  ],

  hero: {
    badge: "ENTERPRISE DIGITAL ENGINEERING",
    headingLine1: "Transforming Today.",
    headingLine2Prefix: "Shaping Tomorrow with",
    rotatingWords: ["AI", "Next.js", "Shopify", "Automation", "SEO"],
    description: "Architecting intelligent web platforms, next-gen AI automations, and hyper-scale digital infrastructure for ambitious brands worldwide.",
    primaryCta: {
      text: "Book Free Consultation",
      href: "https://cal.com/codesoftic/collaboration-circle?user=codesoftic",
    },
    secondaryCta: {
      text: "Explore Services",
      href: "#services",
    },
    highlights: [
      { label: "Sub-second Page Load", value: "<800ms" },
      { label: "Client Retention Rate", value: "98.4%" },
      { label: "Global Enterprise Deployments", value: "150+" },
    ]
  },

  about: {
    badge: "WHO WE ARE",
    title: "Engineering Digital Excellence for High-Growth Enterprises",
    story: "Founded with a clear vision to bridge high-end engineering with tangible commercial outcomes, Codesoftic Tech Private Limited is an elite technology studio specializing in sub-second web architecture, autonomous AI agents, and algorithmic search dominance.",
    mission: "We partner with visionary founders and global enterprises to turn complex technical challenges into competitive market advantages—delivering ultra-fast websites, custom LLM workflows, and data-backed growth engines that scale reliably.",
    note: "Measurable impact from delivered client engagements:",
    stats: [
      {
        value: "+45%",
        metric: "Checkout Conversion Lift",
        subtext: "Achieved alongside <800ms load times across Shopify Plus & Next.js custom storefronts.",
        category: "E-Commerce & Web Platforms",
        icon: "TrendingUp"
      },
      {
        value: "10x",
        metric: "Daily Operational Output",
        subtext: "Delivered with a -52% reduction in recurring operating costs via custom AI agents & RPA.",
        category: "Enterprise AI Automation",
        icon: "Bot"
      },
      {
        value: "+180%",
        metric: "Organic Traffic Surge",
        subtext: "Engineered within 90 days using code-level technical SEO, schema graph architecture & AEO.",
        category: "Technical SEO & Search Dominance",
        icon: "Globe"
      },
      {
        value: "99.9%",
        metric: "Infrastructure Uptime",
        subtext: "Enterprise-grade cloud architectures built for peak traffic surges and resilient failover.",
        category: "Cloud & DevSecOps",
        icon: "ShieldCheck"
      }
    ]
  },

  services: [
    {
      id: "website-design",
      icon: "PanelsTopLeft",
      title: "Website Design & Development",
      description: "Bespoke, high-converting digital platforms engineered with modern UI/UX and uncompromising speed.",
      bullets: [
        "Shopify & Shopify Plus custom theme development",
        "Modern WordPress & headless CMS architectures",
        "Next.js full-stack web applications & React Server Components",
        "User-centric UI/UX design systems & interactive prototypes"
      ]
    },
    {
      id: "ai-automation",
      icon: "Bot",
      title: "Enterprise AI Automation",
      description: "Autonomous workflow pipelines and intelligent agents that replace repetitive overhead with hyper-efficiency.",
      bullets: [
        "AI voice assistants & multi-modal conversational chat agents",
        "Custom LLM fine-tuning, RAG pipelines & knowledge bases",
        "Workflow & Robotic Process Automation (RPA)",
        "Deep CRM, ERP & third-party API synchronization"
      ]
    },
    {
      id: "ai-audits",
      icon: "Cpu",
      title: "AI Audits & Readiness",
      description: "Comprehensive technical appraisals ensuring your infrastructure is primed for safe, scalable AI deployment.",
      bullets: [
        "Infrastructure, data pipeline & technical readiness audits",
        "AI security, compliance & data privacy risk assessments",
        "Algorithmic governance & hallucination mitigation frameworks",
        "Executive AI transformation roadmaps & implementation blueprints"
      ]
    },
    {
      id: "seo-search",
      icon: "Search",
      title: "SEO & Search Dominance",
      description: "Data-driven organic search strategies, code-level technical SEO, and AI engine optimization (AEO).",
      bullets: [
        "Local SEO & Google Business Profile (GMB) hyper-optimization",
        "AEO (Answer Engine Optimization) for ChatGPT, Perplexity & AI Overviews",
        "Programmatic SEO & structured JSON-LD schema architecture",
        "Conversion Rate Optimization (CRO), PPC & performance ad campaigns"
      ]
    }
  ],

  ctaBanner: {
    headline: "Ready to build something intelligent?",
    subtext: "Schedule a complimentary architectural review with our engineering leads to explore high-impact web platforms, custom AI automation, or technical SEO strategies.",
    buttonText: "Book Free Consultation",
    buttonUrl: "https://cal.com/codesoftic/collaboration-circle?user=codesoftic",
    features: ["No obligation 30-min discovery", "Direct senior engineer access", "Actionable architectural roadmap"]
  },

  testimonials: [
    {
      id: "godspeed",
      client: "Godspeed Study Abroad",
      role: "Founder & Managing Director",
      industry: "International Education & Visa Consultancy",
      quote: "The team did an excellent job understanding our study abroad services and translating them into a professional, modern website. The Divi WordPress website is structured, engaging, and much easier for students to navigate.",
      rating: 5,
      avatarInitials: "GS",
      highlight: "Divi WordPress Website"
    },
    {
      id: "alazizi",
      client: "Alazizi Global Projects",
      role: "Executive Leadership",
      industry: "Infrastructure & Global Trading",
      quote: "The team did an exceptional job of understanding our diverse business portfolio and translating our vision into a modern, high-tech website.",
      rating: 5,
      avatarInitials: "AG",
      highlight: "Corporate Portfolio Platform"
    },
    {
      id: "kaachvalaym",
      client: "Kaachvalaym",
      role: "Managing Partner",
      industry: "Artisanal E-Commerce & Retail",
      quote: "The team completely transformed our digital presence. From our WooCommerce website and product management to WhatsApp, Instagram, and Facebook marketing, their end-to-end support helped us take our sales to the next level.",
      rating: 5,
      avatarInitials: "KV",
      highlight: "WooCommerce & Social Growth"
    },
    {
      id: "parvathi",
      client: "Parvathi by VVM",
      role: "Brand Director",
      industry: "Luxury Women's Apparel & Fashion",
      quote: "The team gave our women's fashion brand a strong and professional Shopify presence, creating a seamless shopping experience tailored to our products and customers.",
      rating: 5,
      avatarInitials: "PB",
      highlight: "Custom Shopify Storefront"
    },
    {
      id: "coretherapy",
      client: "The Core Therapy",
      role: "Clinical Director",
      industry: "Healthcare & Specialized Wellness",
      quote: "The team understood the sensitivity and importance of our work and translated it beautifully into our digital presence. They created a professional, calm, and user-friendly website.",
      rating: 5,
      avatarInitials: "CT",
      highlight: "Accessible Healthcare Portal"
    }
  ],

  legalDocs: {
    privacyPolicy: {
      title: "Privacy Policy",
      lastUpdated: "October 07, 2026",
      summary: "This Privacy Policy governs the manner in which Codesoftic Tech Private Limited collects, uses, maintains, and discloses information collected from users of our website and services.",
      sections: [
        {
          heading: "1. Information We Collect",
          content: "We may collect personal identification information from Users in a variety of ways, including when Users visit our site, fill out a form, schedule a consultation via third-party scheduling tools, or engage with our digital services. This information may include your name, business email address, phone number, company name, project specifications, and any voluntary details submitted."
        },
        {
          heading: "2. Technical & Analytics Data",
          content: "We automatically collect non-personal technical data whenever you interact with our website. This includes browser type, operating system, IP address, referral URLs, time spent on pages, and navigation pathways to optimize our technical performance and Core Web Vitals."
        },
        {
          heading: "3. How We Use Collected Information",
          content: "Codesoftic Tech Private Limited collects and uses personal information for the following purposes: to provide technical consultations and proposals, to improve customer service, to enhance our web platforms, and to communicate project milestones or security advisories."
        },
        {
          heading: "4. Third-Party Services & Integrations",
          content: "Our website utilizes trusted third-party service providers, such as Cal.com for consultation scheduling and cloud infrastructure providers for analytics and hosting. These providers have access to information solely to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose."
        },
        {
          heading: "5. Cookies & Tracking Technologies",
          content: "Our site uses cookies to enhance user experience and maintain session continuity. You may choose to configure your web browser to refuse cookies or alert you when cookies are being sent. Note that some parts of the site may function with reduced interactivity if cookies are disabled."
        },
        {
          heading: "6. User Rights & Data Protection",
          content: "You have the right to request access to, correction of, or deletion of your personal information held by Codesoftic Tech Private Limited. To exercise any of these rights, please contact our privacy compliance team at growth@codesoftic.com."
        },
        {
          heading: "7. Contact Information",
          content: "If you have questions regarding this Privacy Policy or our data handling practices, please contact us at Codesoftic Tech Private Limited, A-306, Bestech Business Tower, Sector 66, Mohali, Punjab – 160062, India, or via email at growth@codesoftic.com."
        }
      ]
    },

    disclaimer: {
      title: "Legal Disclaimer & Terms",
      lastUpdated: "October 07, 2026",
      summary: "Please read this disclaimer carefully before using this website operated by Codesoftic Tech Private Limited.",
      sections: [
        {
          heading: "1. General Information & No Warranty",
          content: "All content, engineering benchmarks, insights, and materials provided on this website are for general informational and marketing purposes only. While Codesoftic Tech Private Limited strives to maintain accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, regarding completeness, reliability, or suitability."
        },
        {
          heading: "2. Case Study Metrics & Results Disclaimer",
          content: "All performance benchmarks, statistical increases (such as +45% conversion lift, <800ms load times, 10x output gains, or +180% organic traffic growth), and case study figures referenced on this website reflect specific historical results achieved for past client engagements under particular conditions. Results may vary based on industry, baseline traffic, market conditions, and client implementation diligence. Past performance does not guarantee identical future outcomes."
        },
        {
          heading: "3. Limitation of Liability",
          content: "Under no circumstances shall Codesoftic Tech Private Limited, its directors, employees, or partners be liable for any direct, indirect, incidental, consequential, or special damages resulting from the use of, or inability to use, this website or reliance on any technical materials presented."
        },
        {
          heading: "4. External Third-Party Links",
          content: "Our website contains links to third-party websites (including client sites, social media platforms, and calendar booking tools like Cal.com). We do not control or endorse the content, policies, or security practices of external sites and accept no liability for their operations."
        },
        {
          heading: "5. Intellectual Property",
          content: "The Codesoftic logo, brand assets, proprietary architecture frameworks, and website design are the intellectual property of Codesoftic Tech Private Limited. All other company names, brand logos, and trademarks referenced belong to their respective owners."
        },
        {
          heading: "6. Jurisdiction & Inquiries",
          content: "This disclaimer is governed by and construed in accordance with the laws of India. Any disputes arising in connection with this website shall be subject to the exclusive jurisdiction of the courts of Mohali, Punjab, India. For inquiries, contact growth@codesoftic.com."
        }
      ]
    }
  }
};
