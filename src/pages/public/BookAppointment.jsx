import React, { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import FloatingCTA from '../../components/layout/FloatingCTA';

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Consultation',
    date: '',
    time: 'Morning (9:00 AM - 12:00 PM)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.date) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col justify-between">
      <Navbar />

      <section className="pt-32 pb-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex-grow w-full">
        <div className="text-center mb-10">
          <span className="font-label-caps text-xs text-secondary tracking-[0.2em] block mb-3">Begin Your Healing Journey</span>
          <h1 className="font-display-lg text-display-lg text-primary mb-4">Book a Consultation</h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Schedule a personalized session with our expert Ayurvedic Vaidyas to discover your Dosha profile and customize your wellness rituals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Side */}
          <div className="lg:col-span-7 glass-card p-6 md:p-10 rounded-2xl bg-white shadow-xl border border-outline-variant/30">
            {submitted ? (
              <div className="text-center py-10 animate-fade-in">
                <span className="material-symbols-outlined text-secondary text-6xl mb-6">check_circle</span>
                <h2 className="font-headline-md text-2xl text-primary font-bold mb-4">Appointment Requested!</h2>
                <p className="text-on-surface-variant mb-8 max-w-md mx-auto">
                  Thank you, <strong className="text-primary">{formData.name}</strong>. Your consultation request for <strong className="text-primary">{formData.service}</strong> on <strong className="text-primary">{formData.date}</strong> ({formData.time}) has been received. Our clinical assistant will contact you within 2 hours to confirm your final slot.
                </p>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      service: 'Consultation',
                      date: '',
                      time: 'Morning (9:00 AM - 12:00 PM)',
                      message: ''
                    });
                  }} 
                  className="bg-primary text-on-primary px-8 py-3.5 rounded-lg font-label-caps text-xs tracking-widest hover:bg-primary-container transition-all"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-primary tracking-wider mb-2" htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-secondary focus:ring-0 bg-surface-container-lowest text-on-background outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-primary tracking-wider mb-2" htmlFor="phone">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-secondary focus:ring-0 bg-surface-container-lowest text-on-background outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-primary tracking-wider mb-2" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="e.g. name@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-secondary focus:ring-0 bg-surface-container-lowest text-on-background outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-primary tracking-wider mb-2" htmlFor="service">
                      Consultation / Treatment
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-secondary focus:ring-0 bg-surface-container-lowest text-on-background outline-none transition-all"
                    >
                      <option value="Consultation">General Doctor Consultation</option>
                      <option value="Panchakarma">Panchakarma Detox</option>
                      <option value="Shirodhara">Shirodhara (Nerve Therapy)</option>
                      <option value="Abhyanga">Abhyanga Oil Massage</option>
                      <option value="Dietary Consultation">Ayurvedic Diet Plan</option>
                      <option value="Mens Health Special">Men's Health Special</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-primary tracking-wider mb-2" htmlFor="date">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-secondary focus:ring-0 bg-surface-container-lowest text-on-background outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-primary tracking-wider mb-2" htmlFor="time">
                    Preferred Time Slot
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {['Morning (9:00 AM - 12:00 PM)', 'Afternoon (12:00 PM - 4:00 PM)', 'Evening (4:00 PM - 8:00 PM)'].map((slot) => (
                      <label 
                        key={slot} 
                        className={`border rounded-lg p-3 text-center cursor-pointer transition-all flex flex-col justify-center items-center text-xs ${
                          formData.time === slot 
                            ? 'border-secondary bg-primary/5 font-semibold text-secondary' 
                            : 'border-outline-variant hover:bg-surface-container-low text-on-surface-variant'
                        }`}
                      >
                        <input
                          type="radio"
                          name="time"
                          value={slot}
                          checked={formData.time === slot}
                          onChange={(e) => setFormData({...formData, time: e.target.value})}
                          className="sr-only"
                        />
                        {slot.split(' ')[0]}
                        <span className="text-[10px] opacity-60 mt-1">{slot.substring(slot.indexOf('('))}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-primary tracking-wider mb-2" htmlFor="message">
                    Health Symptoms or Notes (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Briefly describe your symptoms or what you'd like to consult for..."
                    className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-secondary focus:ring-0 bg-surface-container-lowest text-on-background outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-on-primary py-4 rounded-lg font-label-caps text-xs tracking-widest hover:bg-primary-container transition-all shadow-lg active:scale-[0.98]"
                >
                  Request Appointment
                </button>
              </form>
            )}
          </div>

          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 rounded-2xl border border-outline-variant/30 bg-white">
              <h3 className="font-headline-sm text-lg text-primary font-bold mb-6">Our Clinic Location</h3>
              <div className="space-y-4 text-sm text-on-surface-variant">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary mt-0.5">location_on</span>
                  <p className="leading-relaxed">
                    <strong>Life Root Ayurveda Clinic</strong><br />
                    12, Green Meadow Residency, Near Lotus Pond,<br />
                    Jayanagar 4th Block, Bengaluru, KA - 560011
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary mt-0.5">call</span>
                  <p>+91 80 4567 8901 / +91 98765 43210</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary mt-0.5">mail</span>
                  <p>consult@liferootayurveda.in</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-outline-variant/30 bg-white">
              <h3 className="font-headline-sm text-lg text-primary font-bold mb-4">Clinic Consulting Hours</h3>
              <div className="space-y-3 text-sm text-on-surface-variant">
                <div className="flex justify-between border-b border-outline-variant/30 pb-2">
                  <span>Monday - Saturday</span>
                  <span className="font-semibold text-primary">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/30 pb-2">
                  <span>Sunday</span>
                  <span className="font-semibold text-primary">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span>Emergency Vaidya Call</span>
                  <span className="font-semibold text-secondary">24 / 7 Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
