import React, { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import FloatingCTA from '../../components/layout/FloatingCTA';
import { TESTIMONIALS } from '../../data/testimonials';

export default function Testimonials() {
  const [filter, setFilter] = useState('All');
  const [list, setList] = useState(TESTIMONIALS);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    condition: '',
    treatment: '',
    rating: 5,
    quote: '',
    detailText: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Categories based on condition / treatment keywords
  const categories = ['All', 'Panchakarma', 'Vigor Rasayana', 'Digestion', 'Skin Care', 'Mind & Sleep'];

  const filteredTestimonials = list.filter((item) => {
    if (filter === 'All') return true;
    if (filter === 'Panchakarma') return item.treatment.toLowerCase().includes('panchakarma') || item.treatment.toLowerCase().includes('shirodhara');
    if (filter === 'Vigor Rasayana') return item.treatment.toLowerCase().includes('vigor') || item.treatment.toLowerCase().includes('booster');
    if (filter === 'Digestion') return item.condition.toLowerCase().includes('ibs') || item.condition.toLowerCase().includes('bloating') || item.treatment.toLowerCase().includes('ccf');
    if (filter === 'Skin Care') return item.condition.toLowerCase().includes('skin') || item.condition.toLowerCase().includes('acne') || item.treatment.toLowerCase().includes('neem');
    if (filter === 'Mind & Sleep') return item.condition.toLowerCase().includes('anxiety') || item.condition.toLowerCase().includes('sleep') || item.treatment.toLowerCase().includes('ashwagandha');
    return true;
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.detailText) {
      const newReview = {
        id: Date.now(),
        name: formData.name,
        age: 30, // Default age
        location: formData.location || 'India',
        condition: formData.condition || 'General Wellness',
        treatment: formData.treatment || 'Consultation',
        rating: Number(formData.rating),
        date: 'Today',
        quote: formData.quote || formData.detailText.substring(0, 50) + '...',
        detailText: formData.detailText,
        avatarInitials: formData.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'U',
        avatarBg: '#012d1d'
      };

      setList([newReview, ...list]);
      setFormSubmitted(true);
      setFormData({
        name: '',
        location: '',
        condition: '',
        treatment: '',
        rating: 5,
        quote: '',
        detailText: ''
      });
    }
  };

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col justify-between">
      <Navbar />

      <section className="pt-32 pb-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex-grow w-full">
        {/* Header Block */}
        <div className="text-center mb-12">
          <span className="font-semibold text-xs text-secondary tracking-widest block mb-3">Healing Journeys</span>
          <h1 className="font-display-lg text-display-lg text-primary mb-4">Patient Stories &amp; Testimonials</h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Discover how classical Ayurvedic treatments and customized formulations at Life Root Ayurveda have guided our patients back to vitality, balance, and health.
          </p>
        </div>

        {/* Clinical Metrics Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-outline-variant/30 text-center shadow-md flex flex-col justify-center">
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-secondary text-2xl" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
              ))}
            </div>
            <div className="text-3xl font-extrabold text-primary mb-1">4.9 / 5.0</div>
            <div className="text-xs text-on-surface-variant font-medium tracking-wide">Overall Patient Rating (180+ Records)</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-outline-variant/30 text-center shadow-md flex flex-col justify-center">
            <span className="material-symbols-outlined text-secondary text-4xl mb-2 select-none">verified_user</span>
            <div className="text-3xl font-extrabold text-primary mb-1">98%</div>
            <div className="text-xs text-on-surface-variant font-medium tracking-wide">Clinical Consultation Success Rate</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-outline-variant/30 text-center shadow-md flex flex-col justify-center">
            <span className="material-symbols-outlined text-secondary text-4xl mb-2 select-none">spa</span>
            <div className="text-3xl font-extrabold text-primary mb-1">1,500+</div>
            <div className="text-xs text-on-surface-variant font-medium tracking-wide">Doses &amp; Formulations Disbursed</div>
          </div>
        </div>

        {/* Dynamic Filters Slider / Pill Row */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none border-b border-outline-variant/20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                filter === cat
                  ? 'bg-primary text-on-primary shadow-md'
                  : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high border border-outline-variant/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* List of Testimonials */}
          <div className="lg:col-span-2 space-y-6">
            {filteredTestimonials.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-outline-variant/20 shadow-sm">
                <span className="material-symbols-outlined text-secondary text-5xl mb-4 select-none">sentiment_dissatisfied</span>
                <p className="text-on-surface-variant">No testimonials found matching this filter.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTestimonials.map((item) => (
                  <div key={item.id} className="glass-card p-6 rounded-xl border border-outline-variant/30 bg-white shadow-lg flex flex-col justify-between hover:shadow-xl transition-all duration-300 animate-fade-in">
                    <div>
                      {/* Rating & Verified badge */}
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex gap-0.5">
                          {[...Array(item.rating)].map((_, i) => (
                            <span key={i} className="material-symbols-outlined text-secondary text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
                          ))}
                        </div>
                        <span className="text-[10px] bg-secondary/10 text-secondary px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[10px]" style={{"fontVariationSettings":"'FILL' 1"}}>verified</span> Verified Patient
                        </span>
                      </div>

                      {/* Title / Quote */}
                      <h3 className="font-semibold text-primary text-sm mb-3 italic">"{item.quote}"</h3>

                      {/* Detail Text */}
                      <p className="text-xs text-on-surface-variant leading-relaxed mb-6">
                        {item.detailText}
                      </p>
                    </div>

                    {/* Footer Info */}
                    <div className="flex items-center gap-3 border-t border-outline-variant/20 pt-4 mt-auto">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-inner"
                        style={{ backgroundColor: item.avatarBg || '#012d1d' }}
                      >
                        {item.avatarInitials}
                      </div>
                      <div>
                        <div className="font-bold text-primary text-xs">{item.name} <span className="font-normal text-on-surface-variant opacity-60">({item.age} yrs, {item.location})</span></div>
                        <div className="text-[10px] text-secondary font-medium mt-0.5">
                          {item.condition} • <span className="opacity-85">{item.treatment}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Form Side Column */}
          <div className="lg:col-span-1 glass-card p-6 md:p-8 rounded-2xl bg-white border border-outline-variant/30 shadow-xl">
            <h2 className="font-headline-sm text-lg text-primary font-bold mb-2">Share Your Healing Journey</h2>
            <p className="text-xs text-on-surface-variant mb-6 leading-relaxed">
              Have you experienced a transformation with Life Root Ayurveda? Share your story to guide and inspire others on their path to recovery.
            </p>

            {formSubmitted ? (
              <div className="text-center py-8 animate-fade-in">
                <span className="material-symbols-outlined text-secondary text-5xl mb-4 select-none">check_circle</span>
                <h3 className="font-bold text-primary text-sm mb-2">Thank You for Sharing!</h3>
                <p className="text-xs text-on-surface-variant mb-6 leading-relaxed">
                  Your success story has been submitted and is displayed on our page to motivate others.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="bg-primary text-on-primary px-6 py-3 rounded-lg text-xs font-semibold tracking-wider hover:bg-primary-container transition-all active:scale-95 shadow-md"
                >
                  Share Another Story
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold text-primary tracking-wide mb-1.5" htmlFor="form-name">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your name"
                    className="w-full px-3 py-2.5 rounded-lg border border-outline-variant focus:border-secondary focus:ring-0 bg-surface-container-lowest text-xs text-on-background outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-primary tracking-wide mb-1.5" htmlFor="form-location">
                      Location
                    </label>
                    <input
                      type="text"
                      id="form-location"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      placeholder="e.g. Pune, MH"
                      className="w-full px-3 py-2.5 rounded-lg border border-outline-variant focus:border-secondary focus:ring-0 bg-surface-container-lowest text-xs text-on-background outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-primary tracking-wide mb-1.5" htmlFor="form-rating">
                      Rating *
                    </label>
                    <select
                      id="form-rating"
                      value={formData.rating}
                      onChange={(e) => setFormData({...formData, rating: e.target.value})}
                      className="w-full px-3 py-2.5 rounded-lg border border-outline-variant focus:border-secondary focus:ring-0 bg-surface-container-lowest text-xs text-on-background outline-none transition-all"
                    >
                      <option value={5}>5 Stars (Excellent)</option>
                      <option value={4}>4 Stars (Good)</option>
                      <option value={3}>3 Stars (Average)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-primary tracking-wide mb-1.5" htmlFor="form-condition">
                    Health Symptoms / Concern
                  </label>
                  <input
                    type="text"
                    id="form-condition"
                    value={formData.condition}
                    onChange={(e) => setFormData({...formData, condition: e.target.value})}
                    placeholder="e.g. Acid Reflux, Back Stiffness"
                    className="w-full px-3 py-2.5 rounded-lg border border-outline-variant focus:border-secondary focus:ring-0 bg-surface-container-lowest text-xs text-on-background outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-primary tracking-wide mb-1.5" htmlFor="form-treatment">
                    Treatment Received
                  </label>
                  <input
                    type="text"
                    id="form-treatment"
                    value={formData.treatment}
                    onChange={(e) => setFormData({...formData, treatment: e.target.value})}
                    placeholder="e.g. Panchakarma, CCF Digestive Tea"
                    className="w-full px-3 py-2.5 rounded-lg border border-outline-variant focus:border-secondary focus:ring-0 bg-surface-container-lowest text-xs text-on-background outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-primary tracking-wide mb-1.5" htmlFor="form-quote">
                    Summary Quote
                  </label>
                  <input
                    type="text"
                    id="form-quote"
                    value={formData.quote}
                    onChange={(e) => setFormData({...formData, quote: e.target.value})}
                    placeholder="e.g. Finally found gut relief naturally!"
                    className="w-full px-3 py-2.5 rounded-lg border border-outline-variant focus:border-secondary focus:ring-0 bg-surface-container-lowest text-xs text-on-background outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-primary tracking-wide mb-1.5" htmlFor="form-detailText">
                    Your Story *
                  </label>
                  <textarea
                    id="form-detailText"
                    required
                    rows="4"
                    value={formData.detailText}
                    onChange={(e) => setFormData({...formData, detailText: e.target.value})}
                    placeholder="Describe your health condition before, your journey during treatment, and how you feel now..."
                    className="w-full px-3 py-2.5 rounded-lg border border-outline-variant focus:border-secondary focus:ring-0 bg-surface-container-lowest text-xs text-on-background outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-on-primary py-3 rounded-lg font-semibold text-xs tracking-wider hover:bg-primary-container transition-all shadow-lg active:scale-[0.98]"
                >
                  Submit My Review
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}