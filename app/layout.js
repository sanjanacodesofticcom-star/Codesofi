import "./globals.css";
import { siteConfig } from "../data/siteData";

export const metadata = {
  title: siteConfig.metaTitle,
  description: siteConfig.metaDescription,
  authors: [{ name: "Codesoftic Tech Private Limited" }],
  creator: "Codesoftic Tech Private Limited",
  publisher: "Codesoftic Tech Private Limited",
  metadataBase: new URL(siteConfig.canonicalUrl),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: siteConfig.metaTitle,
    description: siteConfig.metaDescription,
    url: siteConfig.canonicalUrl,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Codesoftic Tech Private Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.metaTitle,
    description: siteConfig.metaDescription,
    creator: "@codesoftic",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.shortName,
    legalName: siteConfig.name,
    image: `${siteConfig.canonicalUrl}/images/Logo.svg`,
    url: siteConfig.canonicalUrl,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "A-306, Bestech Business Tower, Sector 66",
      addressLocality: "Mohali",
      addressRegion: "Punjab",
      postalCode: "160062",
      addressCountry: "IN",
    },
    sameAs: siteConfig.socials.map((s) => s.url),
    priceRange: "$$$$",
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
