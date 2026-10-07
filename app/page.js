"use client";

import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TrustPartners from "../components/TrustPartners";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import CtaBanner from "../components/CtaBanner";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import LegalModal from "../components/LegalModal";

export default function Home() {
  const [legalModalType, setLegalModalType] = useState(null); // 'privacy' | 'disclaimer' | null

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* 1. Sticky Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* Accredited Partners Ribbon */}
        <TrustPartners />

        {/* 3. About Us Section with Proof Points */}
        <AboutUs />

        {/* 4. Core Services Grid */}
        <Services />

        {/* 5. Full-width CTA Banner */}
        <CtaBanner />

        {/* 6. Testimonials Section */}
        <Testimonials />
      </main>

      {/* 7. Footer */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* 8. Legal Modals (Privacy Policy & Disclaimer) */}
      <LegalModal
        isOpen={Boolean(legalModalType)}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
