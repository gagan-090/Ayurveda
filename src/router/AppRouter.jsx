import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/public/Home';
import Products from '../pages/public/Products';
import About from '../pages/public/About';
import Remedies from '../pages/public/Remedies';
import BookAppointment from '../pages/public/BookAppointment';
import Testimonials from '../pages/public/Testimonials';
import ScrollToTop from '../components/layout/ScrollToTop';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/remedies" element={<Remedies />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
      </Routes>
    </BrowserRouter>
  );
}