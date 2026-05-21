import React from 'react';

export default function StatsBar() {
  return (
    <>
<section className="relative -mt-20 z-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter bg-primary-container p-stack-md rounded-xl shadow-xl">
<div className="glass-card p-stack-sm rounded-lg text-center">
<div className="text-secondary font-headline-md text-headline-md">25+</div>
<div className="text-primary font-label-caps text-label-caps mt-1">Years Experience</div>
</div>
<div className="glass-card p-stack-sm rounded-lg text-center">
<div className="text-secondary font-headline-md text-headline-md">10k+</div>
<div className="text-primary font-label-caps text-label-caps mt-1">Happy Patients</div>
</div>
<div className="glass-card p-stack-sm rounded-lg text-center">
<div className="text-secondary font-headline-md text-headline-md">12</div>
<div className="text-primary font-label-caps text-label-caps mt-1">Wellness Centers</div>
</div>
<div className="glass-card p-stack-sm rounded-lg text-center">
<div className="text-secondary font-headline-md text-headline-md">50+</div>
<div className="text-primary font-label-caps text-label-caps mt-1">Specialized Treatments</div>
</div>
</div>
</section>
    </>
  );
}
