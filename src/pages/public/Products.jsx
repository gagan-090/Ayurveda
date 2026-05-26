import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import FloatingCTA from '../../components/layout/FloatingCTA';
import { PRODUCTS } from '../../data/products';
import ProductCard from '../../components/products/ProductCard';

export default function Products() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col justify-between">
      <Navbar />
      
      <section className="pt-32 pb-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex-grow w-full">
        <div className="text-center mb-12">
          <h1 className="font-display-lg text-display-lg text-primary mb-4 animate-fade-in font-bold">Premium Ayurvedic Formulations</h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">Rooted in ancient wisdom, formulated for modern life. Experience the transformative power of authentic Ayurvedic wellness.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}