import { Calendar, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { siteConfig } from "../data/siteData";

export default function CtaBanner() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="site-container">
        {/* Deep electric dark container */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#04044a] via-[#081033] to-[#0f172a] border border-blue-900/60 p-8 sm:p-12 md:p-16 text-center text-white shadow-2xl">
          {/* Ambient Glows */}
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-brand-blue/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-brand-neon/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-dot-dark opacity-20 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-brand-neon text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-brand-neon animate-pulse" />
              <span>START YOUR TRANSFORMATION</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              {siteConfig.ctaBanner.headline}
            </h2>

            {/* Supporting Line */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              {siteConfig.ctaBanner.subtext}
            </p>

            {/* Primary Action Button */}
            <div className="mb-10">
              <a
                href={siteConfig.ctaBanner.buttonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white text-base py-4 px-8 shadow-xl group font-extrabold"
              >
                <Calendar className="w-5 h-5 text-brand-blue" />
                <span>{siteConfig.ctaBanner.buttonText}</span>
                <ArrowRight className="w-4 h-4 text-slate-900 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-6 border-t border-white/10 text-xs sm:text-sm text-slate-300">
              {siteConfig.ctaBanner.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-neon flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
