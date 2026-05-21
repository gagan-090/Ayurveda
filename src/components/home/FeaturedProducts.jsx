import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';

export default function FeaturedProducts() {
  // Show first 3 products for the featured home grid
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <section className="py-stack-lg bg-surface-container-low/40">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-12">
          <span className="font-semibold text-xs text-secondary tracking-widest block mb-3">Our Clinic Store</span>
          <h2 className="font-headline-md text-headline-md text-primary mb-4">Signature Formulations</h2>
          <p className="text-body-md text-on-surface-variant max-w-xl mx-auto">
            Scientifically balanced Ayurvedic solutions prepared under GMP compliance for strength, vitality, and systemic balance.
          </p>
          <div className="w-20 h-0.5 bg-secondary mx-auto mt-6 opacity-30"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <div key={product.id} className="glass-card p-6 rounded-xl flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:border-secondary/40 border border-outline-variant/30 relative overflow-hidden group bg-white">
              <div>
                {/* Image Container */}
                <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-6 bg-surface-container shadow-inner">
                  <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full font-semibold text-[10px] text-white shadow-sm tracking-wider" style={{ backgroundColor: product.badgeColor }}>
                    {product.badge}
                  </div>
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={product.image} alt={product.name} />
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-bold text-primary shadow-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-secondary text-xs">star</span> {product.rating}
                  </div>
                </div>

                {/* Info */}
                <span className="text-[10px] text-secondary tracking-wider font-semibold mb-1.5 block">{product.tagline}</span>
                <h3 className="font-headline-sm text-lg text-primary font-bold mb-2 group-hover:text-secondary transition-colors duration-200">{product.name}</h3>
                
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-xl font-bold text-primary">₹{product.price}</span>
                  <span className="text-sm text-on-surface-variant line-through opacity-70">₹{product.mrp}</span>
                  <span className="text-xs text-error font-semibold">Save {product.discount}%</span>
                </div>

                <p className="text-sm text-on-surface-variant mb-6 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="bg-primary text-on-primary text-[11px] py-3 rounded-lg font-semibold tracking-wider hover:bg-primary-container transition-all flex-1 shadow-md active:scale-[0.98]">
                  Add to Cart
                </button>
                <Link to="/products" className="border border-primary text-primary text-[11px] py-3 rounded-lg font-semibold tracking-wider hover:bg-primary/5 transition-all flex-1 text-center flex items-center justify-center active:scale-[0.98]">
                  Details
                </Link>
              </div>
            </div>
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
