import React, { useState, useRef } from 'react';
import ProductModal from './ProductModal';

export default function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({ transform: 'scale(1)', transformOrigin: 'center center' });
  const [lensStyle, setLensStyle] = useState({ display: 'none' });
  const imgContainerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!imgContainerRef.current) return;
    const { left, top, width, height } = imgContainerRef.current.getBoundingClientRect();
    
    // Position of cursor relative to image container
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Constrain inside container boundaries
    const boundedX = Math.max(0, Math.min(x, width));
    const boundedY = Math.max(0, Math.min(y, height));

    // Calculate percent for transformOrigin
    const xPercent = (boundedX / width) * 100;
    const yPercent = (boundedY / height) * 100;

    // Zoom style: scale up and follow cursor coordinates
    setZoomStyle({
      transform: 'scale(2.5)',
      transformOrigin: `${xPercent}% ${yPercent}%`,
    });

    // Custom "+" magnifier lens following mouse
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

  return (
    <>
      <div className="glass-card p-6 rounded-2xl flex flex-col justify-between hover:shadow-2xl transition-all duration-500 hover:border-secondary/40 border border-outline-variant/30 relative overflow-hidden group bg-white">
        <div>
          {/* Image Container with Zoom effect */}
          <div 
            ref={imgContainerRef}
            className="relative w-full aspect-[2/3] rounded-xl overflow-hidden mb-6 bg-surface-container shadow-inner select-none cursor-none"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setLensStyle({ display: 'flex' })}
          >
            {/* Category Badge */}
            <div 
              className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-[10px] text-white shadow-sm font-semibold tracking-wider" 
              style={{ backgroundColor: product.badgeColor }}
            >
              {product.badge}
            </div>

            {/* Product Image */}
            <img 
              className="w-full h-full object-cover transition-transform duration-150 ease-out" 
              src={product.image} 
              alt={product.name} 
              style={zoomStyle}
            />

            {/* Rating badge */}
            <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-bold text-primary shadow-sm flex items-center gap-1 z-10 pointer-events-none">
              <span className="material-symbols-outlined text-secondary text-xs">star</span> {product.rating} ({product.reviewCount})
            </div>

            {/* custom "+" zoom lens cursor */}
            <div 
              className="absolute pointer-events-none w-12 h-12 rounded-full border-2 border-white bg-black/40 backdrop-blur-[1px] flex items-center justify-center text-white font-bold text-xl shadow-lg z-20"
              style={lensStyle}
            >
              <span className="material-symbols-outlined text-white text-[24px]">add</span>
            </div>
          </div>

          {/* Product Info */}
          <span className="text-[10px] text-secondary tracking-wider font-semibold mb-1.5 block uppercase">{product.tagline}</span>
          <h2 className="font-headline-sm text-xl text-primary mb-3 font-semibold group-hover:text-secondary transition-colors duration-200">{product.name}</h2>
          
          {/* Price */}
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-2xl font-bold text-primary">₹{product.price}</span>
            <span className="text-sm text-on-surface-variant line-through opacity-70">₹{product.mrp}</span>
            <span className="text-xs text-error font-bold">Save {product.discount}%</span>
          </div>

          {/* Description */}
          <p className="text-sm text-on-surface-variant mb-5 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Key Herbs */}
          <div className="mb-6">
            <span className="text-[10px] font-bold text-primary/80 tracking-wider block mb-2 uppercase">Key Herbs / Ingredients</span>
            <div className="flex flex-wrap gap-1.5">
              {product.ingredients.slice(0, 3).map((ing, i) => (
                <span key={i} className="text-[10px] bg-primary/5 text-primary border border-primary/10 px-2.5 py-0.5 rounded-full font-medium">
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
          <button 
            onClick={() => setIsModalOpen(true)}
            className="border border-primary text-primary text-xs py-3 rounded-lg font-semibold tracking-wider hover:bg-primary/5 transition-all flex-1 active:scale-[0.98]"
          >
            Details
          </button>
        </div>
      </div>

      {isModalOpen && (
        <ProductModal product={product} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}