"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Calendar,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Pin,
  ArrowRight
} from "lucide-react";
import { siteConfig } from "../data/siteData";

export default function Footer({ onOpenLegal }) {
  const getSocialIcon = (name) => {
    switch (name) {
      case "LinkedIn":
        return <Linkedin className="w-4 h-4" />;
      case "X (Twitter)":
        return <Twitter className="w-4 h-4" />;
      case "Instagram":
        return <Instagram className="w-4 h-4" />;
      case "Facebook":
        return <Facebook className="w-4 h-4" />;
      case "Pinterest":
        return <Pin className="w-4 h-4" />;
      default:
        return <ArrowRight className="w-4 h-4" />;
    }
  };

  return (
    <footer
      id="contact"
      className="bg-white border-t border-slate-200/80 pt-16 pb-12 relative overflow-hidden"
    >
      <div className="site-container">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-100">
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="#hero"
              className="inline-block"
              aria-label="Codesoftic Tech Private Limited - Home"
            >
              <div className="relative h-6 w-48">
                <Image
                  src="/images/Logo.svg"
                  alt="Codesoftic Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              {siteConfig.intro}
            </p>

            {/* Social Icons */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Connect With Us
              </p>
              <div className="flex items-center gap-2.5">
                {siteConfig.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200/80 text-slate-600 hover:text-brand-blue hover:border-brand-blue hover:bg-blue-50/50 flex items-center justify-center transition-all duration-200"
                    aria-label={s.name}
                  >
                    {getSocialIcon(s.name)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-brand-blue transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Core Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.services.map((serv) => (
                <li key={serv.id}>
                  <Link
                    href="#services"
                    className="text-slate-600 hover:text-brand-blue transition-colors line-clamp-1"
                  >
                    {serv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Corporate Office
            </h3>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{siteConfig.contact.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                  className="hover:text-brand-blue transition-colors"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-brand-blue transition-colors font-medium"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={siteConfig.contact.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white bg-slate-900 hover:bg-brand-blue py-2 px-4 rounded-full transition-colors shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5 text-brand-sky" />
                  <span>Book Free Consultation</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* GST & Corporate Information Bar */}
        <div className="py-6 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="flex flex-wrap items-center gap-4 sm:gap-8">
            <div>
              <span className="font-semibold text-slate-700">GST No:</span> {siteConfig.legal.gst}
            </div>
            <div>
              <span className="font-semibold text-slate-700">CIN:</span> {siteConfig.legal.cin}
            </div>
          </div>
          <div className="text-slate-400">
            Codesoftic Tech Private Limited
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal Modals */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {siteConfig.legal.copyrightYear} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenLegal("privacy")}
              className="text-slate-600 hover:text-brand-blue transition-colors underline-offset-4 hover:underline focus:outline-none"
            >
              Privacy Policy
            </button>
            <span className="text-slate-300">&bull;</span>
            <button
              type="button"
              onClick={() => onOpenLegal("disclaimer")}
              className="text-slate-600 hover:text-brand-blue transition-colors underline-offset-4 hover:underline focus:outline-none"
            >
              Disclaimer
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
