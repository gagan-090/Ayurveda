import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import ProductCard from '../products/ProductCard';

export default function FeaturedProducts() {
  // Show first 3 products for the featured home grid
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <section className="py-stack-lg bg-surface-container-low/40">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-12">
          <span className="font-semibold text-xs text-secondary tracking-widest block mb-3 uppercase">Our Clinic Store</span>
          <h2 className="font-headline-md text-headline-md text-primary mb-4 font-bold">Signature Formulations</h2>
          <p className="text-body-md text-on-surface-variant max-w-xl mx-auto">
            Scientifically balanced Ayurvedic solutions prepared under GMP compliance for strength, vitality, and systemic balance.
          </p>
          <div className="w-20 h-0.5 bg-secondary mx-auto mt-6 opacity-30"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/products" className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-lg font-semibold text-xs tracking-wider hover:bg-secondary/90 transition-all shadow-md">
            View All Products <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
