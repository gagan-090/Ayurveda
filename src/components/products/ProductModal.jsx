import React, { useState, useRef } from 'react';

export default function ProductModal({ product, onClose }) {
  const [zoomStyle, setZoomStyle] = useState({ transform: 'scale(1)', transformOrigin: 'center center' });
  const [lensStyle, setLensStyle] = useState({ display: 'none' });
  const modalImgRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!modalImgRef.current) return;
    const { left, top, width, height } = modalImgRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const boundedX = Math.max(0, Math.min(x, width));
    const boundedY = Math.max(0, Math.min(y, height));
    const xPercent = (boundedX / width) * 100;
    const yPercent = (boundedY / height) * 100;

    setZoomStyle({
      transform: 'scale(2.2)',
      transformOrigin: `${xPercent}% ${yPercent}%`,
    });

    setLensStyle({
      display: 'flex',
      left: `${boundedX}px`,
      top: `${boundedY}px`,
      transform: 'translate(-50%, -50%)',
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ transform: 'scale(1)', transformOrigin: 'center center' });
    setLensStyle({ display: 'none' });
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="bg-background text-on-background rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row relative border border-outline-variant/30 animate-fade-in">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-primary border border-outline-variant/30 flex items-center justify-center shadow transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Left: Image Box with Lens Zoom */}
        <div className="w-full md:w-1/2 p-6 md:p-8 bg-surface-container-low flex items-center justify-center relative border-b md:border-b-0 md:border-r border-outline-variant/20">
          <div 
            ref={modalImgRef}
            className="w-full aspect-[2/3] relative rounded-2xl overflow-hidden bg-white shadow-inner select-none cursor-none"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setLensStyle({ display: 'flex' })}
          >
            {/* Badge */}
            <div 
              className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[10px] text-white shadow-sm font-semibold tracking-wider" 
              style={{ backgroundColor: product.badgeColor }}
            >
              {product.badge}
            </div>

            <img 
              className="w-full h-full object-cover transition-transform duration-150 ease-out" 
              src={product.image} 
              alt={product.name} 
              style={zoomStyle}
            />

            {/* Rating */}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-[12px] font-bold text-primary shadow-sm flex items-center gap-1 z-10 pointer-events-none">
              <span className="material-symbols-outlined text-secondary text-sm">star</span> {product.rating} ({product.reviewCount} Reviews)
            </div>

            {/* custom "+" lens cursor */}
            <div 
              className="absolute pointer-events-none w-12 h-12 rounded-full border-2 border-white bg-black/40 backdrop-blur-[1px] flex items-center justify-center text-white font-bold text-xl shadow-lg z-20"
              style={lensStyle}
            >
              <span className="material-symbols-outlined text-white text-[24px]">add</span>
            </div>
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto max-h-[50vh] md:max-h-[90vh]">
          <span className="text-[11px] text-secondary tracking-widest font-semibold mb-1 block uppercase">{product.tagline}</span>
          <h2 className="font-headline-md text-2xl md:text-3xl text-primary font-semibold mb-3 leading-tight">{product.name}</h2>
          
          {/* Price & Quantity */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-outline-variant/20">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-primary">₹{product.price}</span>
              <span className="text-base text-on-surface-variant line-through opacity-70">₹{product.mrp}</span>
              <span className="text-xs text-error font-bold bg-error/10 px-2 py-0.5 rounded-full">Save {product.discount}%</span>
            </div>
            <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">{product.capsules} Capsules</span>
          </div>

          <p className="text-on-surface-variant text-body-md leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Benefits Checklist */}
          <div className="mb-6">
            <h4 className="font-semibold text-primary text-xs tracking-wider mb-3 uppercase font-semibold">Key Benefits</h4>
            <ul className="space-y-2">
              {product.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-lg mt-0.5">check_circle</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ingredients list */}
          <div className="mb-6">
            <h4 className="font-semibold text-primary text-xs tracking-wider mb-3 uppercase font-semibold">Ingredients &amp; Composition</h4>
            <div className="bg-surface-container-low rounded-xl p-4 space-y-2">
              {product.ingredients.map((ing, i) => (
                <div key={i} className="flex justify-between items-start text-sm border-b border-outline-variant/10 pb-2 last:border-0 last:pb-0">
                  <div>
                    <span className="font-semibold text-primary">{ing.name}</span>
                    <span className="text-xs text-on-surface-variant block opacity-80">{ing.benefit}</span>
                  </div>
                  <span className="bg-primary/5 text-primary text-xs px-2.5 py-0.5 rounded-md font-bold">{ing.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Usage Instructions */}
          <div className="mb-6">
            <h4 className="font-semibold text-primary text-xs tracking-wider mb-2 uppercase font-semibold">Suggested Usage</h4>
            <p className="text-sm text-on-surface-variant bg-secondary/5 border border-secondary/15 rounded-xl p-4 leading-relaxed">
              {product.usage}
            </p>
          </div>

          {/* Certifications */}
          <div className="mb-8">
            <h4 className="font-semibold text-primary text-xs tracking-wider mb-2.5 uppercase font-semibold">Certified Safe</h4>
            <div className="flex flex-wrap gap-2">
              {product.certifications.map((cert, i) => (
                <span key={i} className="bg-primary text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Add to Cart */}
          <button className="w-full bg-primary hover:bg-primary-container text-white py-4 rounded-xl font-semibold tracking-wider shadow-lg transition-all text-sm active:scale-[0.98]">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}