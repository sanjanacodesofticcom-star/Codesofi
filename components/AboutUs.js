import { TrendingUp, Bot, Globe, ShieldCheck, Sparkles, CheckCircle, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../data/siteData";

export default function AboutUs() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-brand-blue" />;
      case "Bot":
        return <Bot className="w-6 h-6 text-brand-sky" />;
      case "Globe":
        return <Globe className="w-6 h-6 text-cyan-600" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-brand-blue" />;
    }
  };

  return (
    <section id="about" className="section-padding bg-white relative">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
            <span>{siteConfig.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Engineering Digital Excellence for{" "}
            <span className="gradient-text">High-Growth Enterprises</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
            {siteConfig.about.story}
          </p>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {siteConfig.about.mission}
          </p>
        </div>

        {/* Proof Points Header */}
        <div className="flex items-center gap-2.5 mb-6 text-sm font-bold uppercase tracking-wider text-slate-500">
          <CheckCircle className="w-4 h-4 text-brand-blue" />
          <span>{siteConfig.about.note}</span>
        </div>

        {/* 4 Highlight Proof Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.about.stats.map((stat) => (
            <div
              key={stat.metric}
              className="brand-card group p-6 flex flex-col justify-between hover:border-brand-blue/40 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {getIcon(stat.icon)}
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-600">
                    {stat.category.split(" ")[0]}
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-1 group-hover:text-brand-blue transition-colors">
                  {stat.value}
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {stat.metric}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {stat.subtext}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-blue">
                <span>Delivered Engagement</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
