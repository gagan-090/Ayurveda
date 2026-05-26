import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const getLinkClass = ({ isActive }) => {
    return isActive
      ? "text-secondary font-semibold border-b-2 border-secondary pb-1 font-body-md text-body-md transition-all"
      : "text-on-surface-variant hover:text-secondary transition-colors duration-300 font-body-md text-body-md";
  };

  const getMobileLinkClass = ({ isActive }) => {
    return isActive
      ? "text-secondary font-semibold border-l-4 border-secondary pl-3 font-body-md text-body-md transition-all"
      : "text-on-surface-variant hover:text-secondary transition-colors duration-300 font-body-md text-body-md pl-3";
  };

  return (
    <>
      <header className="fixed w-full top-0 left-0 bg-[#faf9f5]/95 backdrop-blur-xl border-b border-secondary/30 shadow-md z-50">
        <nav className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/main-logo.png" 
              alt="Life Root Ayurveda Logo" 
              className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink className={getLinkClass} to="/" end>Home</NavLink>
            <NavLink className={getLinkClass} to="/products">Our Products</NavLink>
            <NavLink className={getLinkClass} to="/about">Our Story</NavLink>
            <NavLink className={getLinkClass} to="/remedies">Remedies</NavLink>
            <NavLink className={getLinkClass} to="/testimonials">Testimonials</NavLink>
          </div>

          {/* Desktop Book CTA */}
          <div className="hidden md:block">
            <Link 
              to="/book-appointment" 
              className="bg-secondary text-white px-6 py-2.5 rounded-full font-semibold text-xs tracking-wider hover:bg-secondary/90 transition-all active:scale-95 block text-center shadow-md"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Hamburger Icon */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="flex md:hidden text-primary hover:text-secondary transition-colors focus:outline-none p-1.5 rounded-md hover:bg-primary/5"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-3xl select-none">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </nav>

        {/* Mobile Dropdown Menu Drawer */}
        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-[#faf9f5] border-b border-secondary/20 shadow-lg z-40 py-6 px-margin-mobile flex flex-col gap-5 md:hidden animate-fade-in">
            <NavLink onClick={() => setIsOpen(false)} className={getMobileLinkClass} to="/" end>Home</NavLink>
            <NavLink onClick={() => setIsOpen(false)} className={getMobileLinkClass} to="/products">Our Products</NavLink>
            <NavLink onClick={() => setIsOpen(false)} className={getMobileLinkClass} to="/about">Our Story</NavLink>
            <NavLink onClick={() => setIsOpen(false)} className={getMobileLinkClass} to="/remedies">Remedies</NavLink>
            <NavLink onClick={() => setIsOpen(false)} className={getMobileLinkClass} to="/testimonials">Testimonials</NavLink>
            <Link 
              onClick={() => setIsOpen(false)} 
              to="/book-appointment" 
              className="mt-2 bg-secondary text-white text-center py-3.5 rounded-lg font-semibold text-xs tracking-wider hover:bg-secondary/90 transition-all active:scale-95 shadow-md"
            >
              Book Appointment
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
