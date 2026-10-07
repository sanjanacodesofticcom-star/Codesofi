"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "../data/siteData";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ["hero", "about", "services", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3.5"
          : "bg-white/80 backdrop-blur-sm border-b border-transparent py-5"
      }`}
    >
      <div className="site-container flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#hero"
          className="flex items-center gap-2 group transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-md"
          aria-label="Codesoftic Tech Private Limited - Home"
        >
          <div className="relative h-6 w-[190px] sm:w-[220px]">
            <Image
              src="/images/Logo.svg"
              alt="Codesoftic Logo"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-8 text-[0.95rem] font-medium text-gray-700"
          aria-label="Main Navigation"
        >
          {siteConfig.navLinks.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative py-1 transition-colors duration-200 hover:text-brand-blue focus:outline-none focus-visible:text-brand-blue ${
                  isActive ? "text-brand-blue font-semibold" : "text-gray-600"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-blue rounded-full animate-fadeIn" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Primary Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={siteConfig.contact.calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-sm py-2.5 px-5 shadow-sm"
          >
            <Calendar className="w-4 h-4 text-brand-sky" />
            <span>Book Consultation</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden p-2 text-gray-700 hover:text-brand-blue rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue"
          aria-label="Open mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm md:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <div className="relative h-5 w-36">
                  <Image
                    src="/images/Logo.svg"
                    alt="Codesoftic Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                  aria-label="Close mobile menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="mt-8 flex flex-col gap-4" aria-label="Mobile menu links">
                {siteConfig.navLinks.map((item) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-base font-medium transition-colors ${
                        isActive
                          ? "bg-blue-50 text-brand-blue font-semibold"
                          : "text-gray-700 hover:bg-gray-50 hover:text-brand-blue"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Bottom CTA */}
            <div className="pt-6 border-t border-gray-100">
              <a
                href={siteConfig.contact.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary w-full justify-center py-3 text-sm shadow-md"
              >
                <Calendar className="w-4 h-4 text-brand-neon" />
                <span>Book Free Consultation</span>
              </a>
              <p className="text-center text-xs text-gray-400 mt-3">
                Codesoftic Tech Private Limited
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
