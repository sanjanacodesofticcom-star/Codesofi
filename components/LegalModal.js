"use client";

import { useEffect } from "react";
import { X, ShieldCheck, FileText, Calendar } from "lucide-react";
import { siteConfig } from "../data/siteData";

export default function LegalModal({ isOpen, type, onClose }) {
  // ESC key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !type) return null;

  const doc =
    type === "privacy"
      ? siteConfig.legalDocs.privacyPolicy
      : siteConfig.legalDocs.disclaimer;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 modal-backdrop transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col modal-content-animated"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100/70 border border-blue-200 flex items-center justify-center text-brand-blue">
              {type === "privacy" ? (
                <ShieldCheck className="w-5 h-5" />
              ) : (
                <FileText className="w-5 h-5" />
              )}
            </div>
            <div>
              <h2 id="legal-modal-title" className="text-xl font-bold text-slate-900 leading-tight">
                {doc.title}
              </h2>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>Last updated: {doc.lastUpdated}</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body with scrollable content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
          {/* Summary Callout */}
          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-slate-800 text-sm font-medium">
            {doc.summary}
          </div>

          {/* Structured Sections */}
          {doc.sections.map((sec, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {sec.heading}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                {sec.content}
              </p>
            </div>
          ))}

          {/* Company Details Tag */}
          <div className="pt-6 border-t border-slate-100 text-xs text-slate-500 space-y-1">
            <p className="font-semibold text-slate-700">
              Codesoftic Tech Private Limited
            </p>
            <p>CIN: {siteConfig.legal.cin} | GST: {siteConfig.legal.gst}</p>
            <p>{siteConfig.contact.address}</p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="btn btn-primary text-sm py-2 px-6"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
}
