import React from 'react';

export default function ContactTeaser() {
  return (
    <>
      <section className="py-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-stack-md">
          <span className="font-semibold text-xs text-secondary tracking-widest block mb-2 uppercase">Inquire Privately</span>
          <h2 className="font-headline-md text-headline-md text-primary font-semibold">Start Your Healing Journey</h2>
          <p className="text-on-surface-variant text-body-lg leading-relaxed">
            Step into a discrete clinical space where healing begins. Submit a confidential inquiry to request a call-back from our medical counselors.
          </p>
          
          <form className="space-y-6 pt-4">
            <div>
              <input 
                className="w-full bg-transparent border-b border-outline-variant focus:border-secondary focus:ring-0 py-3 transition-all placeholder:text-on-surface-variant/60 text-primary text-body-md" 
                placeholder="Your Name (Confidential)" 
                type="text" 
                required 
              />
            </div>
            <div>
              <input 
                className="w-full bg-transparent border-b border-outline-variant focus:border-secondary focus:ring-0 py-3 transition-all placeholder:text-on-surface-variant/60 text-primary text-body-md" 
                placeholder="Secure Contact Number / WhatsApp" 
                type="tel" 
                required 
              />
            </div>
            <div>
              <textarea 
                className="w-full bg-transparent border-b border-outline-variant focus:border-secondary focus:ring-0 py-3 transition-all placeholder:text-on-surface-variant/60 text-primary text-body-md" 
                placeholder="Share your concerns briefly (optional & strictly private)" 
                rows="3"
              ></textarea>
            </div>
            <div>
              <button className="bg-secondary hover:bg-secondary-container hover:text-on-secondary-container text-white px-10 py-4 rounded-lg font-label-caps text-[12px] tracking-widest uppercase font-bold shadow-md transition-all duration-300 hover:-translate-y-0.5">
                Request Private Call
              </button>
            </div>
          </form>
        </div>
        
        {/* Clinic Location card showing lobby image */}
        <div className="rounded-2xl overflow-hidden h-[400px] md:h-[450px] shadow-xl relative group border border-outline-variant/30">
          <img 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[8000ms] ease-out" 
            alt="Life Root Ayurveda Clinic consult lobby" 
            src="/assets/images/clinic_lobby.png" 
          />
          <div className="absolute inset-0 bg-primary/80 backdrop-blur-[1px] flex flex-col items-center justify-center text-center p-8 text-on-primary">
            <span className="material-symbols-outlined text-5xl text-secondary mb-4">location_on</span>
            <p className="font-headline-sm text-headline-sm text-white font-semibold mb-2">Our Haridwar HQ Clinic</p>
            <p className="text-sm text-primary-fixed/80 leading-relaxed font-light">
              Ganga View Clinical Plaza, Suite 108<br />
              Haridwar, Uttarakhand, India
            </p>
            <p className="text-xs text-secondary-fixed mt-4 tracking-wider font-semibold uppercase">In-person &amp; Tele-medicine consultations</p>
          </div>
        </div>
      </section>
    </>
  );
}
