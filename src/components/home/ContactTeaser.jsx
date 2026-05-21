import React from 'react';

export default function ContactTeaser() {
  return (
    <>
<section className="py-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
<div className="space-y-stack-md">
<h2 className="font-headline-md text-headline-md text-primary">Visit Our Clinic</h2>
<p className="text-on-surface-variant">Step into a space where time slows down and healing begins.</p>
<form className="space-y-4">
<input className="w-full bg-transparent border-b border-outline-variant focus:border-secondary focus:ring-0 py-3 transition-all" placeholder="Full Name" type="text" />
<input className="w-full bg-transparent border-b border-outline-variant focus:border-secondary focus:ring-0 py-3 transition-all" placeholder="Email Address" type="email" />
<textarea className="w-full bg-transparent border-b border-outline-variant focus:border-secondary focus:ring-0 py-3 transition-all" placeholder="How can we help you heal?" rows="4"></textarea>
<button className="bg-secondary text-on-secondary-fixed px-10 py-4 rounded-lg font-label-caps text-label-caps hover:bg-primary transition-all">Send Inquiry</button>
</form>
</div>
<div className="rounded-xl overflow-hidden h-[400px] md:h-auto shadow-lg grayscale hover:grayscale-0 transition-all duration-700">
<div className="w-full h-full bg-surface-container flex items-center justify-center">

<div className="text-center">
<span className="material-symbols-outlined text-4xl text-secondary mb-4">location_on</span>
<p className="font-label-caps text-primary">Rishikesh, Uttarakhand, India</p>
<p className="text-xs text-on-surface-variant mt-1">Ganga View Corporate Estate, Suite 108</p>
</div>
</div>
</div>
</section>
    </>
  );
}
