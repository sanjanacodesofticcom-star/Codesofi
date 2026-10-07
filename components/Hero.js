"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Calendar, Zap, Shield, Rocket, CheckCircle2 } from "lucide-react";
import { siteConfig } from "../data/siteData";

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const words = siteConfig.hero.rotatingWords;
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      eyebrow: "E-COMMERCE & WEB PLATFORMS",
      title: "High-Converting Online Stores & Sub-Second Platforms",
      desc: "We engineer custom Shopify Plus stores, headless commerce, and ultra-fast Next.js web applications built to turn visitors into repeat customers.",
      cta: "Explore Solutions",
      href: "#services",
      metric: "<800ms Average Load Speed",
      tag: "Next.js & Shopify Plus"
    },
    {
      eyebrow: "AGENTIC WORKFLOWS & RPA",
      title: "Intelligent AI Automations That Save 10x Daily Hours",
      desc: "Deploy autonomous voice agents, custom LLM pipelines, and event-driven robotic automations that eliminate repetitive overhead.",
      cta: "Explore AI Automation",
      href: "#services",
      metric: "-52% Operating Expense",
      tag: "Autonomous Agentic Stacks"
    },
    {
      eyebrow: "TECHNICAL SEO & AEO",
      title: "Search Dominance Engineered at the Code Level",
      desc: "Entity-based topical graphs, automated JSON-LD schemas, and programmatic landing pages that capture top Google & AI Overviews rankings.",
      cta: "Explore SEO Stacks",
      href: "#services",
      metric: "+180% Organic Traffic in 90 Days",
      tag: "Google SERP & AI Search"
    },
    {
      eyebrow: "AI AUDITS & COMPLIANCE",
      title: "Enterprise AI Readiness & Security Governance",
      desc: "Rigorous technical audits, data privacy frameworks, and algorithmic roadmaps ensuring safe, scalable enterprise AI adoption.",
      cta: "Explore Readiness Audits",
      href: "#services",
      metric: "100% Governance Compliance",
      tag: "Enterprise Architecture"
    }
  ];

  // Rotate tagline keywords
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [words.length]);

  // Rotate hero slider
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(slideInterval);
  }, [heroSlides.length]);

  return (
    <section
      id="hero"
      className="relative pt-[120px] pb-16 md:pt-[140px] md:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white"
    >
      {/* Background ambient glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="site-container">
        {/* Top Header Block */}
        <div className="max-w-4xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-brand-blue text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-sky animate-pulse" />
            <span>{siteConfig.hero.badge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6">
            <span className="block text-slate-950">
              {siteConfig.hero.headingLine1}
            </span>
            <span className="inline-flex flex-wrap items-baseline gap-x-3">
              <span className="text-slate-950">
                {siteConfig.hero.headingLine2Prefix}
              </span>
              <span className="relative inline-block overflow-hidden h-[1.25em] align-baseline">
                <span
                  key={words[wordIndex]}
                  className="inline-block gradient-text-hero font-extrabold word-enter"
                >
                  {words[wordIndex]}
                </span>
              </span>
            </span>
          </h1>

          {/* Subtext description */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
            {siteConfig.intro}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href={siteConfig.hero.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-base py-3.5 px-7 shadow-md group"
            >
              <Calendar className="w-4 h-4 text-brand-neon" />
              <span>{siteConfig.hero.primaryCta.text}</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </a>

            <Link
              href={siteConfig.hero.secondaryCta.href}
              className="btn btn-secondary text-base py-3.5 px-7"
            >
              <span>{siteConfig.hero.secondaryCta.text}</span>
            </Link>
          </div>
        </div>

        {/* Hero Interactive Showcase Slider Box */}
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl mt-4">
          {/* Subtle mesh background */}
          <div className="absolute inset-0 bg-dot-dark opacity-30 pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-neon/15 rounded-full blur-3xl pointer-events-none" />

          {/* Slider Content Area */}
          <div className="relative z-10 p-6 sm:p-10 md:p-14 min-h-[340px] md:min-h-[380px] flex flex-col justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-900/40 border border-blue-500/30 text-brand-neon text-xs font-mono font-semibold tracking-wider mb-4">
                <Zap className="w-3.5 h-3.5 text-brand-neon" />
                <span>{heroSlides[activeSlide].eyebrow}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 transition-all duration-300">
                {heroSlides[activeSlide].title}
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
                {heroSlides[activeSlide].desc}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={heroSlides[activeSlide].href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <span>{heroSlides[activeSlide].cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-xs text-slate-300 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{heroSlides[activeSlide].metric}</span>
                </div>
              </div>
            </div>

            {/* Slider Progress Navigation Segments */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mt-8 pt-6 border-t border-slate-800/80">
              {heroSlides.map((slide, idx) => (
                <button
                  key={slide.eyebrow}
                  type="button"
                  onClick={() => setActiveSlide(idx)}
                  className={`text-left p-2.5 sm:p-3 rounded-lg transition-all ${
                    activeSlide === idx
                      ? "bg-slate-900/90 border border-blue-500/50 shadow-sm"
                      : "bg-slate-950/40 hover:bg-slate-900/40 border border-transparent"
                  }`}
                  aria-label={`Switch to slide ${idx + 1}: ${slide.eyebrow}`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono font-bold text-slate-400">
                      0{idx + 1}
                    </span>
                    {activeSlide === idx && (
                      <span className="w-2 h-2 rounded-full bg-brand-neon animate-ping" />
                    )}
                  </div>
                  <p
                    className={`text-xs font-semibold truncate ${
                      activeSlide === idx ? "text-brand-sky" : "text-slate-400"
                    }`}
                  >
                    {slide.eyebrow}
                  </p>
                  {/* Visual progress bar */}
                  <div className="w-full bg-slate-800 h-1 rounded-full mt-2 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-300 ${
                        activeSlide === idx ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Highlight Stats Bar underneath Hero */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 pt-4">
          {siteConfig.hero.highlights.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-50/80 border border-slate-200/70 shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-100/70 border border-blue-200 flex items-center justify-center text-brand-blue font-bold text-sm">
                <Rocket className="w-5 h-5 text-brand-blue" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
