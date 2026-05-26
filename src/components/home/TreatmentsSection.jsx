import React from 'react';

export default function TreatmentsSection() {
  return (
    <>
      <section className="py-stack-lg overflow-hidden bg-background">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-md">
          <span className="font-semibold text-xs text-secondary tracking-widest block mb-2 uppercase">Clinical Services</span>
          <h2 className="font-headline-md text-headline-md text-primary font-semibold">Specialized Therapies</h2>
          <div className="w-16 h-[3px] bg-secondary mt-3 rounded-full"></div>
        </div>
        
        <div className="flex gap-gutter px-margin-mobile md:px-margin-desktop overflow-x-auto hide-scrollbar pb-10">
          {/* Service 1 */}
          <div className="min-w-[300px] md:min-w-[320px] bg-white p-8 rounded-2xl border border-outline-variant/30 hover:border-secondary hover:shadow-xl transition-all duration-300 group cursor-pointer shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-secondary mb-4 bg-secondary/5 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[32px]">healing</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2 font-semibold">Vajikarana Therapy</h3>
              <p className="text-on-surface-variant font-body-md leading-relaxed mb-6">
                Specialized Ayurvedic branch focusing on revitalizing reproductive tissues, boosting stamina, and enhancing sexual drive.
              </p>
            </div>
            <div className="flex items-center text-secondary font-label-caps text-[11px] gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase font-semibold">
              Explore Details <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
            </div>
          </div>

          {/* Service 2 */}
          <div className="min-w-[300px] md:min-w-[320px] bg-white p-8 rounded-2xl border border-outline-variant/30 hover:border-secondary hover:shadow-xl transition-all duration-300 group cursor-pointer shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-secondary mb-4 bg-secondary/5 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[32px]">psychology</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2 font-semibold">Intimacy Counseling</h3>
              <p className="text-on-surface-variant font-body-md leading-relaxed mb-6">
                Expert therapeutic sessions designed to reduce performance stress, address relationship anxiety, and build mutual trust.
              </p>
            </div>
            <div className="flex items-center text-secondary font-label-caps text-[11px] gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase font-semibold">
              Explore Details <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
            </div>
          </div>

          {/* Service 3 */}
          <div className="min-w-[300px] md:min-w-[320px] bg-white p-8 rounded-2xl border border-outline-variant/30 hover:border-secondary hover:shadow-xl transition-all duration-300 group cursor-pointer shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-secondary mb-4 bg-secondary/5 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[32px]">bolt</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2 font-semibold">Ojas Revitalization</h3>
              <p className="text-on-surface-variant font-body-md leading-relaxed mb-6">
                Targeted herbal oil infusions and clinical Panchakarma to recharge physical strength, nervous endurance, and cellular energy.
              </p>
            </div>
            <div className="flex items-center text-secondary font-label-caps text-[11px] gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase font-semibold">
              Explore Details <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
            </div>
          </div>

          {/* Service 4 */}
          <div className="min-w-[300px] md:min-w-[320px] bg-white p-8 rounded-2xl border border-outline-variant/30 hover:border-secondary hover:shadow-xl transition-all duration-300 group cursor-pointer shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-secondary mb-4 bg-secondary/5 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[32px]">water_drop</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2 font-semibold">Hormonal Balance</h3>
              <p className="text-on-surface-variant font-body-md leading-relaxed mb-6">
                Evidence-based dietary regimens and botanical balance therapies targeting reproductive metabolic health and cortisol regulation.
              </p>
            </div>
            <div className="flex items-center text-secondary font-label-caps text-[11px] gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase font-semibold">
              Explore Details <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
