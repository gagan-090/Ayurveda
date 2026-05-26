import React from 'react';

export default function WhyChooseUs() {
  return (
    <>
      <section className="py-stack-lg bg-surface-container-low border-y border-outline-variant/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/30 aspect-[4/3] bg-white p-2">
              <img 
                className="w-full h-full object-cover rounded-xl" 
                alt="A premium glass dropper bottle with natural ingredients like saffron and roots, representing Ayurvedic sexual wellness" 
                src="/assets/images/clinical_wellness.png" 
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl max-w-xs shadow-xl border border-secondary/20">
              <p className="italic text-primary font-label-accent text-sm leading-relaxed">
                "Bridging ancient Vajikarana wisdom with modern clinical standards for private, restorative care."
              </p>
            </div>
          </div>
          
          <div className="space-y-stack-md mt-8 lg:mt-0">
            <h2 className="font-headline-md text-headline-md text-primary font-semibold">Specialized Clinical Standards</h2>
            <p className="text-on-surface-variant text-body-lg leading-relaxed">
              Every therapeutic plan is a curated path, designed in total discretion and custom-formulated to target stress, fatigue, and physical vitality.
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">verified_user</span>
                <div>
                  <span className="font-bold text-primary block text-base">Expert Sexologist Panel</span>
                  <span className="text-on-surface-variant text-body-md leading-relaxed block mt-1">
                    Direct consultations led by BAMS and MD physicians specializing in classic Vajikarana and reproductive health.
                  </span>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">lock</span>
                <div>
                  <span className="font-bold text-primary block text-base">100% Confidential Care</span>
                  <span className="text-on-surface-variant text-body-md leading-relaxed block mt-1">
                    Discreet consultations, secure digital health records, and unbranded, tamper-proof packaging for all home deliveries.
                  </span>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">science</span>
                <div>
                  <span className="font-bold text-primary block text-base">Clinically Sourced Ingredients</span>
                  <span className="text-on-surface-variant text-body-md leading-relaxed block mt-1">
                    Pure, high-potency organic extractions (like Kida Jadi, Shilajit, and Maca Root) certified under GMP and AYUSH licensing.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
