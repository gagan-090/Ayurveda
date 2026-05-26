import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSlider() {
  return (
    <>
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover object-[center_35%] opacity-40 scale-105 transition-transform duration-[10000ms] ease-out hover:scale-100" 
            alt="A romantic couple in a warm, intimate, tasteful embrace" 
            src="/assets/images/intimacy_hero.png" 
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        {/* Floating background graphics */}
        <div className="absolute top-1/4 right-20 opacity-10 leaf-float pointer-events-none hidden lg:block">
          <span className="material-symbols-outlined text-secondary text-[140px]">favorite</span>
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-on-primary w-full">
          <div className="flex items-center gap-2 mb-4 text-primary-fixed/80 font-label-caps tracking-[0.2em] text-[12px] uppercase">
            <span>Life Root Ayurveda</span>
            <span className="material-symbols-outlined text-[14px]">circle</span>
            <span className="text-secondary-fixed">Intimacy &amp; Vitality Clinic</span>
          </div>
          <h1 className="font-headline-md text-[40px] md:text-display-lg text-white mb-stack-sm leading-tight font-bold">
            Reclaim Vitality, <br />
            <span className="italic font-label-accent font-normal text-secondary-fixed">Reignite Intimacy</span>
          </h1>
          <p className="font-body-lg text-body-lg max-w-2xl mb-stack-md opacity-90 leading-relaxed font-light">
            A premier clinical sanctuary for sexual wellness. We blend ancient Vajikarana wisdom with modern medical science to restore natural vigor, stamina, and marital harmony.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/book-appointment" 
              className="bg-secondary text-white px-8 py-4 rounded-lg font-label-caps text-[12px] tracking-wider uppercase font-bold hover:bg-secondary/90 transition-all shadow-lg hover:-translate-y-0.5"
            >
              Book Consultation
            </Link>
            <Link 
              to="/products" 
              className="border border-white/30 text-white px-8 py-4 rounded-lg font-label-caps text-[12px] tracking-wider uppercase font-bold hover:bg-white/10 transition-all hover:-translate-y-0.5"
            >
              Explore Medicines
            </Link>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center">
          <span className="material-symbols-outlined text-on-primary">expand_more</span>
        </div>
      </section>
    </>
  );
}
