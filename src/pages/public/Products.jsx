import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import FloatingCTA from '../../components/layout/FloatingCTA';
import { PRODUCTS } from '../../data/products';

export default function Products() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col justify-between">
      <Navbar />
      
      <section className="pt-32 pb-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex-grow w-full">
        <div className="text-center mb-12">
          <h1 className="font-display-lg text-display-lg text-primary mb-4 animate-fade-in">Premium Ayurvedic Formulations</h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">Rooted in ancient wisdom, formulated for modern life. Experience the transformative power of authentic Ayurvedic wellness.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="glass-card p-6 rounded-xl flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:border-secondary/40 border border-outline-variant/30 relative overflow-hidden group bg-white">
              <div>
                {/* Image container */}
                <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-6 bg-surface-container shadow-inner">
                  <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-[10px] text-white shadow-sm font-semibold tracking-wider" style={{ backgroundColor: product.badgeColor }}>
                    {product.badge}
                  </div>
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={product.image} alt={product.name} />
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-bold text-primary shadow-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-secondary text-xs">star</span> {product.rating} ({product.reviewCount})
                  </div>
                </div>

                {/* Product text info */}
                <span className="text-[10px] text-secondary tracking-wider font-semibold mb-1.5 block">{product.tagline}</span>
                <h2 className="font-headline-sm text-xl text-primary mb-3 font-semibold group-hover:text-secondary transition-colors duration-200">{product.name}</h2>
                
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                  <span className="text-sm text-on-surface-variant line-through opacity-70">₹{product.mrp}</span>
                  <span className="text-xs text-error font-bold">Save {product.discount}%</span>
                </div>

                <p className="text-sm text-on-surface-variant mb-5 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                {/* Key Herbs */}
                <div className="mb-6">
                  <span className="text-[10px] font-bold text-primary/80 tracking-wider block mb-2">Key Herbs</span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.ingredients.slice(0, 3).map((ing, i) => (
                      <span key={i} className="text-[10px] bg-primary/5 text-primary border border-primary/10 px-2.5 py-0.5 rounded-full">
                        {ing.name} <span className="opacity-60 text-[9px] ml-0.5">{ing.amount}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-auto">
                <button className="bg-primary text-on-primary text-xs py-3 rounded-lg font-semibold tracking-wider hover:bg-primary-container transition-all flex-1 shadow-md active:scale-[0.98]">
                  Add to Cart
                </button>
                <button className="border border-primary text-primary text-xs py-3 rounded-lg font-semibold tracking-wider hover:bg-primary/5 transition-all flex-1 active:scale-[0.98]">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}