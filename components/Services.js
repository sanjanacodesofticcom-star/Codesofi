import { PanelsTopLeft, Bot, Cpu, Search, Check, Sparkles, ArrowRight } from "lucide-react";
import { siteConfig } from "../data/siteData";

export default function Services() {
  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case "PanelsTopLeft":
        return <PanelsTopLeft className="w-6 h-6 text-brand-blue" />;
      case "Bot":
        return <Bot className="w-6 h-6 text-brand-sky" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-indigo-600" />;
      case "Search":
        return <Search className="w-6 h-6 text-cyan-600" />;
      default:
        return <PanelsTopLeft className="w-6 h-6 text-brand-blue" />;
    }
  };

  return (
    <section id="services" className="section-padding bg-slate-50 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
            <span>CORE CAPABILITIES & SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Transformative Services Built for{" "}
            <span className="gradient-text">Modern Scale</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From high-conversion web platforms to autonomous AI agent pipelines, we deliver end-to-end digital engineering.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.services.map((service, index) => (
            <div
              key={service.id}
              className="brand-card group bg-white border border-slate-200/80 rounded-2xl p-8 hover:border-brand-blue/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="text-sm font-mono font-bold text-slate-300 group-hover:text-brand-blue transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Bullet List */}
                <div className="space-y-3 pt-4 border-t border-slate-100 mb-6">
                  {service.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-blue-300">
                        <Check className="w-3 h-3 text-brand-blue" />
                      </div>
                      <span className="text-sm text-slate-700 font-medium">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="pt-4 flex items-center justify-between">
                <a
                  href={siteConfig.contact.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-blueHover transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Discuss This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
