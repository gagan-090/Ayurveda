import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeRemediesPreview() {
  return (
    <>
      <section className="py-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex justify-between items-end mb-stack-md">
          <div>
            <span className="font-semibold text-xs text-secondary tracking-widest block mb-2 uppercase">Self Care Guide</span>
            <h2 className="font-headline-md text-headline-md text-primary font-semibold">Natural Restoratives</h2>
            <p className="text-on-surface-variant text-body-md mt-1">Discreet, botanical formulations to support vigor and systemic balance.</p>
          </div>
          <Link className="text-secondary font-label-caps border-b border-secondary hover:text-primary hover:border-primary transition-colors text-[11px] uppercase font-bold" to="/remedies">View All Guide</Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {/* Remedy 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-surface-container border border-outline-variant/30">
              <img 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                alt="Turmeric roots and bright orange powder on a rustic stone surface" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2xU8qoppTzA0bTzsKgZw_AlUg-xCEDIUItSHp7xASCgaE06rZZzPIutX5C_dekFy2Y4FrVBSMUQdDSHiXFD0Q7tvJSa-cgEVQzso7cQgwxQcxsOH0bbzkEwl-7QUCbhDJrvLvoTj6D2aFFJrIH24ukx_J7zL0TsQCaaxQVRDsJ5QeeGX9qDnAo-ppKzaRJ8dPKYGHhwwkOsIF14Sy1XauvlIqPgdpE_QHIYtTiWGFRb2Egxdkw4x8VAHuOaU_ijv0-oobF2dowpTo" 
              />
            </div>
            <h4 className="font-bold text-primary font-body-lg text-base">Ojas Protection</h4>
            <p className="text-on-surface-variant text-sm mt-1">Turmeric &amp; saffron elixirs.</p>
          </div>

          {/* Remedy 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-surface-container border border-outline-variant/30">
              <img 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                alt="Dried chamomile flowers and peppermint leaves in ceramic bowls" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ75XqYgF_ZBBpE_Dx_aFSRxA4BwfwDIO8gKHCiX_Y61MlyVx8nlR_VDNIfo5Y5SWNKM6Pv0pXxmzuqL_FjGPc54QlQD1LO8e5EFTCIUMVp3WQkt9l_14TjmmWOSCvuQnvUDjvlCzQLwTOgHnhmFkCgNYmathcirAMNpCpAfYs_7R1JUqOyoMuGZMhut-XJH2-JOsEJeP3scjwl_W668DjAgQexc2Sf58HgYWGnn9pA-fZTytwpcoav6Y6UjuG---6i4aLKH3mHq-5" 
              />
            </div>
            <h4 className="font-bold text-primary font-body-lg text-base">Restorative Sleep</h4>
            <p className="text-on-surface-variant text-sm mt-1">Ashwagandha &amp; Nutmeg teas.</p>
          </div>

          {/* Remedy 3 */}
          <div className="group cursor-pointer">
            <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-surface-container border border-outline-variant/30">
              <img 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                alt="Fresh green amla in a wooden bowl with water droplets" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo0nRJpolv9dMoYI71sRu4YtciYuBIIEgzlkAFGyrgeXU5zxqRCwFEwkFGszFLwt1KF3UMogVJ14gnpgiUzAHfjsjQrLLwx4kzPRhahEIQtYLo46QiIsbnXABLCj3l5fl5VhwT4AAJ2ibo0haJsV_VuOxlXiVgCmTGz8uOJrTZ1KIrrxPndovL2bLXXT843VNJzLh7QLS0HMLqxxxl93uxBlVJXfZ_4kkBd0tokBNf2G5knAN4R6KgJpDGcKGZrKokeyc0SZvaQTpY" 
              />
            </div>
            <h4 className="font-bold text-primary font-body-lg text-base">Vigor &amp; Stamina</h4>
            <p className="text-on-surface-variant text-sm mt-1">Safed Musli &amp; Shilajit infusions.</p>
          </div>

          {/* Remedy 4 */}
          <div className="group cursor-pointer">
            <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-surface-container border border-outline-variant/30">
              <img 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                alt="Essential oils in dark glass droppers next to sandalwood pieces" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGPBQWHPJ5etGeeH0rpP3l-zAZaufjLqRZ35vQZu6qsBWw29-854Mwn4i1gkAMSD7VGEMC076YBI7iuplEtUHqKzepXY2j7lpZW0-hvM1oLoydI4bYpzgDkj6Yf8MYVG2CZp2jOHnvYRXZZvM4DrRJsHY2WlaEzMRs2K_WKWdBMplb_5PEELR_2OwkPO_YaI9OctbgBqvORza_X6gXPoxiHfDO700erI2hEjfGKorgx9XT-qWk5pbEbI4ysfpU1pFWWkfiHQX4qnW9" 
              />
            </div>
            <h4 className="font-bold text-primary font-body-lg text-base">Nerve Calm</h4>
            <p className="text-on-surface-variant text-sm mt-1">Brahmi &amp; Sandalwood oil rituals.</p>
          </div>
        </div>
      </section>
    </>
  );
}
