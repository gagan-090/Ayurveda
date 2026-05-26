import React from 'react';

export default function AmenitiesGrid() {
  return (
    <>
      <section className="py-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop bg-background">
        <span className="font-semibold text-xs text-secondary tracking-widest block mb-2 text-center uppercase">Intimacy Solutions</span>
        <h2 className="font-headline-md text-headline-md text-primary mb-stack-lg text-center font-semibold animate-fade-in">Comprehensive Care Ecosystem</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-gutter h-auto md:h-[600px]">
          {/* Item 1: Confidential Diagnostics & Tele-consult */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl h-64 md:h-full border border-outline-variant/20 shadow-sm">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              alt="Confidential Telehealth and Modern Diagnostics for Intimacy Care" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaAYZ_sZoto-pLBotEEaNp1c5ubFAXu6MkVHv9m2pawYVUhvejr6bVxbKttVw9m31SP1vByncKwIB3S-UaFtVZr9G1EQP8HWO5TYJKIku8uRP-Pasiy4vkwXD3ThUfZzGY2DtjWpuQOX0EoXsgiwdzcHP2dtg0SNw_tmfskr7vzryr9JweFPjJN4p0sWcVO311VpffZPnoBub9DvxbemLMUkPUqosXo2AbPg6DB6U50cdVUnmGKt05rpxXc1WjIsqWuNHgq7hLbASE" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent flex flex-col justify-end p-6 md:p-8 text-on-primary">
              <span className="font-label-caps text-secondary-fixed text-[11px] tracking-wider uppercase mb-1 font-semibold">Discreet Telehealth</span>
              <h3 className="font-headline-sm text-headline-sm mb-2 font-semibold text-white">Confidential Consultations</h3>
              <p className="opacity-90 text-sm md:text-base font-light leading-relaxed">
                Precision diagnostics combined with private, secure video consultations with BAMS sexologist doctors to restore vitality and vigor.
              </p>
            </div>
          </div>

          {/* Item 2: Couples Intimacy Counseling */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-2xl h-48 md:h-full border border-outline-variant/20 shadow-sm">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              alt="Couples Intimacy Counseling and Relationship Therapy" 
              src="/assets/images/relationship_counseling.png" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent flex flex-col justify-end p-6 md:p-8 text-on-primary">
              <span className="font-label-caps text-secondary-fixed text-[11px] tracking-wider uppercase mb-1 font-semibold">Relationship Harmony</span>
              <h3 className="font-headline-sm text-headline-sm mb-1 font-semibold text-white">Couples Intimacy Support</h3>
              <p className="opacity-90 text-sm md:text-base font-light leading-relaxed">
                Empathetic guidance to soothe performance anxiety, resolve marital stress, and build long-term trust.
              </p>
            </div>
          </div>

          {/* Item 3: Discreet Pharmacy */}
          <div className="relative group overflow-hidden rounded-2xl h-48 md:h-full border border-outline-variant/20 shadow-sm">
            <div className="bg-primary-container w-full h-full p-6 md:p-8 flex flex-col justify-center text-on-primary relative">
              <div className="absolute top-4 right-4 opacity-10">
                <span className="material-symbols-outlined text-[64px]">lock</span>
              </div>
              <span className="material-symbols-outlined text-4xl text-secondary mb-4">medication</span>
              <h3 className="font-headline-sm text-headline-sm mb-1 font-semibold text-white">Discreet Pharmacy</h3>
              <p className="opacity-80 text-xs leading-relaxed font-light">
                Vajikarana medicines prepared freshly and shipped in unbranded, tamper-proof, double-sealed boxes.
              </p>
            </div>
          </div>

          {/* Item 4: Ojas & Vitality Retreat */}
          <div className="relative group overflow-hidden rounded-2xl h-48 md:h-full border border-outline-variant/20 shadow-sm">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              alt="Ojas and Vitality Rejuvenation Retreat" 
              src="/assets/images/vitality_therapy.png" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent flex flex-col justify-end p-6 text-on-primary">
              <h3 className="text-base font-bold text-white leading-tight">Ojas Vitality Suites</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
