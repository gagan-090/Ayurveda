import React from 'react';

export default function TreatmentsSection() {
  return (
    <>
<section className="py-stack-lg overflow-hidden">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-md">
<h2 className="font-headline-md text-headline-md text-primary">Healing Rituals</h2>
<div className="w-20 h-1 bg-secondary mt-2 opacity-30"></div>
</div>
<div className="flex gap-gutter px-margin-mobile md:px-margin-desktop overflow-x-auto hide-scrollbar pb-10">

<div className="min-w-[320px] bg-white p-8 rounded-xl border border-outline-variant/30 hover:border-secondary transition-all group cursor-pointer shadow-sm">
<span className="material-symbols-outlined text-secondary text-4xl mb-4">spa</span>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2">Panchakarma</h3>
<p className="text-on-surface-variant font-body-md mb-6">Five-fold purification therapy to detoxify the body and restore cellular balance.</p>
<div className="flex items-center text-secondary font-label-caps gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore Details <span className="material-symbols-outlined">arrow_right_alt</span>
</div>
</div>

<div className="min-w-[320px] bg-white p-8 rounded-xl border border-outline-variant/30 hover:border-secondary transition-all group cursor-pointer shadow-sm">
<span className="material-symbols-outlined text-secondary text-4xl mb-4">psychology</span>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2">Shirodhara</h3>
<p className="text-on-surface-variant font-body-md mb-6">Gentle pouring of liquids over the forehead to soothe the nervous system.</p>
<div className="flex items-center text-secondary font-label-caps gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore Details <span className="material-symbols-outlined">arrow_right_alt</span>
</div>
</div>

<div className="min-w-[320px] bg-white p-8 rounded-xl border border-outline-variant/30 hover:border-secondary transition-all group cursor-pointer shadow-sm">
<span className="material-symbols-outlined text-secondary text-4xl mb-4">self_care</span>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2">Abhyanga</h3>
<p className="text-on-surface-variant font-body-md mb-6">Full body warm oil massage designed to increase circulation and vitality.</p>
<div className="flex items-center text-secondary font-label-caps gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore Details <span className="material-symbols-outlined">arrow_right_alt</span>
</div>
</div>

<div className="min-w-[320px] bg-white p-8 rounded-xl border border-outline-variant/30 hover:border-secondary transition-all group cursor-pointer shadow-sm">
<span className="material-symbols-outlined text-secondary text-4xl mb-4">nutrition</span>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2">Dietary Consultation</h3>
<p className="text-on-surface-variant font-body-md mb-6">Personalized Ayurvedic nutrition plans based on your unique Dosha profile.</p>
<div className="flex items-center text-secondary font-label-caps gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore Details <span className="material-symbols-outlined">arrow_right_alt</span>
</div>
</div>
</div>
</section>
    </>
  );
}
