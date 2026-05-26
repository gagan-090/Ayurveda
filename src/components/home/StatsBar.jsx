import React from 'react';

export default function StatsBar() {
  return (
    <>
      <section className="relative -mt-20 z-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-gutter bg-primary-container p-stack-md rounded-2xl shadow-xl border border-secondary/20">
          <div className="glass-card p-6 rounded-xl text-center backdrop-blur-md">
            <div className="text-secondary font-headline-md text-headline-md font-bold">25+</div>
            <div className="text-primary font-label-caps text-label-caps mt-1 uppercase tracking-wider text-[11px]">Years Expertise</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center backdrop-blur-md">
            <div className="text-secondary font-headline-md text-headline-md font-bold">15k+</div>
            <div className="text-primary font-label-caps text-label-caps mt-1 uppercase tracking-wider text-[11px]">Recovered Cases</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center backdrop-blur-md">
            <div className="text-secondary font-headline-md text-headline-md font-bold">100%</div>
            <div className="text-primary font-label-caps text-label-caps mt-1 uppercase tracking-wider text-[11px]">Confidential Care</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center backdrop-blur-md">
            <div className="text-secondary font-headline-md text-headline-md font-bold">18+</div>
            <div className="text-primary font-label-caps text-label-caps mt-1 uppercase tracking-wider text-[11px]">Core Formulations</div>
          </div>
        </div>
      </section>
    </>
  );
}
