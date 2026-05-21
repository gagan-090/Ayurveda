import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSlider() {
  return (
    <>
<section className="relative h-[70vh] flex items-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover" data-alt="A serene Ayurvedic treatment room with warm ambient lighting filtering through bamboo blinds. A copper vessel pours medicinal oil in a steady stream onto a stone surface, surrounded by fresh herbs like ginger and basil. The atmosphere is quiet, luxurious, and meditative, with deep forest greens and golden accents reflecting clinical luxury." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2PTu-sm1X-p7oqq-RBUSr1PjG9oVzyFd-kreaCjtQVgl_8YSAcBjeJzOQ5S1ykt4lhm-7MRGFs1SR8exxHyRFgQZib6TLWeeE-pc3ojibRphaa0UV2GaaJ1DWEL1SA8Nhs5FXwCDdoNqQo4yFG9_df-haByd_VaMRmEBcVfZIFigN-WMAnAkKfcVSZ5-wi3i6qZieLj_kD-3gO5U44U_CLj7o7yYrmhcaHbRbKXFhvC-mmVmCEvge1EFNLC4g6w_EJfffHkYMx8fM" />
<div className="absolute inset-0 hero-gradient"></div>
</div>
<div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-on-primary">
<h1 className="font-display-lg text-display-lg mb-stack-sm animate-fade-in max-w-2xl">
                Ancient Wisdom, <br />
<span className="italic font-label-accent font-normal">Modern Care</span>
</h1>
<p className="font-body-lg text-body-lg max-w-xl mb-stack-md opacity-90">
                A high-discerning sanctuary for holistic wellness, blending millennial wisdom with scientific precision for restorative life rituals.
            </p>
<div className="flex gap-stack-sm">
<Link to="/book-appointment" className="bg-primary-container text-on-primary px-8 py-4 rounded-lg font-label-caps text-label-caps hover:bg-on-primary-fixed-variant transition-all text-center flex items-center justify-center">Book Now</Link>
<Link to="/about" className="border border-on-primary/50 text-on-primary px-8 py-4 rounded-lg font-label-caps text-label-caps hover:bg-on-primary/10 transition-all text-center flex items-center justify-center">Learn More</Link>
</div>
</div>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center">
<span className="material-symbols-outlined text-on-primary">expand_more</span>
</div>
</section>
    </>
  );
}
