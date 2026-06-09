import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className="bg-surface-container border-t border-secondary/30 w-full mt-stack-lg">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/main-logo.png" 
                alt="Life Root Ayurveda Logo" 
                className="h-20 w-auto object-contain" 
              />
            </div>
            <p className="text-on-surface-variant text-body-md opacity-80 italic">Consciously crafted wellness for the modern soul.</p>
          </div>
          <div>
            <h4 className="font-semibold text-primary text-xs tracking-wider mb-6">Explore</h4>
            <ul className="space-y-3">
              <li><Link className="text-on-surface-variant hover:text-secondary transition-colors" to="/testimonials">Testimonials</Link></li>
              <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Clinical Research</a></li>
              <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Dosha Guide</a></li>
              <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Prakriti Quiz</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-primary text-xs tracking-wider mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Panchakarma</a></li>
              <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Detox Retreats</a></li>
              <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Yoga Therapy</a></li>
              <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Ayurvedic Pharmacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-primary text-xs tracking-wider mb-6">Contact Us</h4>
            <div className="text-on-surface-variant text-body-md space-y-3">
              <p className="leading-relaxed text-sm">
                <strong>Marketed by:</strong><br />
                Life Root Ayurveda<br />
                B-81, Sector-63 Noida<br />
                Uttar Pradesh 201301
              </p>
              <p className="text-sm">
                <strong>Phone:</strong> <a href="tel:+916387742417" className="hover:text-secondary transition-colors font-semibold text-secondary">+91 63877 42417</a>
              </p>
              <p className="text-sm break-all">
                <strong>Email:</strong> <a href="mailto:liferootayurveda1@gmail.com" className="hover:text-secondary transition-colors">liferootayurveda1@gmail.com</a>
              </p>
              <div className="flex gap-4 pt-2">
                <a className="text-sm text-on-surface-variant opacity-60 hover:opacity-100 hover:text-secondary transition-colors" href="#">Instagram</a>
                <a className="text-sm text-on-surface-variant opacity-60 hover:opacity-100 hover:text-secondary transition-colors" href="#">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4 w-full">
          <p className="text-sm text-on-surface-variant opacity-60">© 2026 Life Root Ayurveda. Consciously crafted wellness.</p>
          <div className="flex gap-6">
            <a className="text-sm text-on-surface-variant opacity-60 hover:opacity-100" href="#">Terms of Service</a>
            <a className="text-sm text-on-surface-variant opacity-60 hover:opacity-100" href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
}
