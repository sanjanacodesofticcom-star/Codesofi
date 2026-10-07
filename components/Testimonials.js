"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, LayoutGrid, SlidersHorizontal, CheckCircle2 } from "lucide-react";
import { siteConfig } from "../data/siteData";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState("carousel"); // 'carousel' | 'grid'
  const testimonials = siteConfig.testimonials;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide every 6 seconds when in carousel mode
  useEffect(() => {
    if (viewMode !== "carousel") return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [viewMode, currentIndex]);

  return (
    <section id="testimonials" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
              <span>CLIENT STORIES & TESTIMONIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Trusted by Ambitious Brands Across{" "}
              <span className="gradient-text">Global Industries</span>
            </h2>
          </div>

          {/* View Mode Toggle & Carousel Controls */}
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center p-1 bg-white border border-slate-200 rounded-lg shadow-sm">
              <button
                type="button"
                onClick={() => setViewMode("carousel")}
                className={`p-2 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  viewMode === "carousel"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                aria-label="Carousel View"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Carousel</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  viewMode === "grid"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                aria-label="Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>All Quotes</span>
              </button>
            </div>

            {viewMode === "carousel" && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:text-brand-blue hover:border-brand-blue transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:text-brand-blue hover:border-brand-blue transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Carousel Mode with Animated Slider Track */}
        {viewMode === "carousel" ? (
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((item, idx) => (
                  <div
                    key={item.id}
                    className="w-full flex-shrink-0 px-1"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`Testimonial ${idx + 1} of ${testimonials.length}`}
                  >
                    <div className="brand-card bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 md:p-14 shadow-lg min-h-[340px] flex flex-col justify-between relative overflow-hidden">
                      <Quote className="absolute right-8 top-8 w-24 h-24 text-slate-100 -z-0 pointer-events-none" />

                      <div className="relative z-10">
                        {/* 5-Star Rating */}
                        <div className="flex items-center gap-1.5 mb-6">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-amber-400 text-amber-400"
                            />
                          ))}
                          <span className="ml-2 text-xs font-mono font-bold text-slate-400">
                            5.0 / 5.0 Rating
                          </span>
                        </div>

                        {/* Quote Text */}
                        <blockquote className="text-xl sm:text-2xl md:text-3xl text-slate-800 font-medium leading-snug tracking-tight mb-8">
                          &ldquo;{item.quote}&rdquo;
                        </blockquote>
                      </div>

                      {/* Author & Solution Badge */}
                      <div className="relative z-10 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-bold flex items-center justify-center text-base shadow-sm">
                            {item.avatarInitials}
                          </div>
                          <div>
                            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                              {item.client}
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-500 font-medium">
                              {item.role} &bull; {item.industry}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-xs font-semibold text-brand-blue">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{item.highlight}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Indicators */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-8 bg-brand-blue"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Grid View Mode */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="brand-card bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="text-xs font-mono font-semibold text-brand-blue bg-blue-50 px-2 py-0.5 rounded">
                      {item.highlight}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-bold flex items-center justify-center text-xs shadow-sm flex-shrink-0">
                    {item.avatarInitials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">
                      {item.client}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
