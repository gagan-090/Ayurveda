import React, { useState } from 'react';
import { TESTIMONIALS } from '../../data/testimonials';

export default function TestimonialsCarousel() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIdx];

  return (
    <section className="py-stack-lg bg-primary text-on-primary">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center mb-8">
        <span className="text-[10px] font-bold text-secondary tracking-widest block mb-3">Healing Stories</span>
        <h2 className="font-headline-md text-headline-md text-white font-semibold">Voices of Healing</h2>
        <div className="w-12 h-0.5 bg-secondary mx-auto mt-4 opacity-55"></div>
      </div>

      <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop relative">
        {/* Carousel Card */}
        <div className="glass-card p-8 md:p-14 rounded-2xl relative overflow-hidden bg-white/5 border border-white/10 shadow-2xl min-h-[340px] flex flex-col justify-between">
          <div className="absolute top-6 left-6 opacity-10">
            <span className="material-symbols-outlined text-7xl text-secondary select-none">format_quote</span>
          </div>

          <div className="relative z-10 text-center flex-grow flex flex-col justify-center">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-secondary text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="text-base md:text-lg font-label-accent italic mb-6 leading-relaxed max-w-2xl mx-auto">
              "{current.detailText}"
            </p>

            {/* User Info */}
            <div>
              <div className="font-bold text-secondary tracking-wider text-sm md:text-base">{current.name}</div>
              <div className="text-[11px] font-medium opacity-70 mt-1">
                {current.location} • <span className="text-secondary/90">{current.condition} ({current.treatment})</span>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8 relative z-10">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIdx === idx ? 'bg-secondary w-6' : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Carousel controls */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-12 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/10 transition-all active:scale-90"
          aria-label="Previous testimonial"
        >
          <span className="material-symbols-outlined select-none">chevron_left</span>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-12 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/10 transition-all active:scale-90"
          aria-label="Next testimonial"
        >
          <span className="material-symbols-outlined select-none">chevron_right</span>
        </button>
      </div>
    </section>
  );
}
