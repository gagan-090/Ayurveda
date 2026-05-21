import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import FloatingCTA from '../../components/layout/FloatingCTA';
import HeroSlider from '../../components/home/HeroSlider';
import StatsBar from '../../components/home/StatsBar';
import TreatmentsSection from '../../components/home/TreatmentsSection';
import FeaturedProducts from '../../components/home/FeaturedProducts';
import WhyChooseUs from '../../components/home/WhyChooseUs';
import AmenitiesGrid from '../../components/home/AmenitiesGrid';
import CertificationsStrip from '../../components/home/CertificationsStrip';
import HomeRemediesPreview from '../../components/home/HomeRemediesPreview';
import TestimonialsCarousel from '../../components/home/TestimonialsCarousel';
import ContactTeaser from '../../components/home/ContactTeaser';

export default function Home() {
  return (
    <div className="bg-background text-on-background font-body-md">
      <Navbar />
      <HeroSlider />
      <StatsBar />
      <TreatmentsSection />
      <FeaturedProducts />
      <WhyChooseUs />
      <AmenitiesGrid />
      <CertificationsStrip />
      <HomeRemediesPreview />
      <TestimonialsCarousel />
      <ContactTeaser />
      <Footer />
      <FloatingCTA />
    </div>
  );
}