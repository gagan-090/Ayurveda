import React from 'react';

export default function AmenitiesGrid() {
  return (
    <>
      <section className="py-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 className="font-headline-md text-headline-md text-primary mb-stack-lg text-center">Comprehensive Care Ecosystem</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-gutter h-auto md:h-[600px]">
          {/* Diagnostic Lab */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl h-64 md:h-full">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A modern, high-tech medical laboratory with white surfaces and clean lines. A scientist in a lab coat is inspecting a glass vial containing herbal extracts. The background shows advanced digital screens and medical equipment, styled in a minimalist and expensive aesthetic with cool white and soft green tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaAYZ_sZoto-pLBotEEaNp1c5ubFAXu6MkVHv9m2pawYVUhvejr6bVxbKttVw9m31SP1vByncKwIB3S-UaFtVZr9G1EQP8HWO5TYJKIku8uRP-Pasiy4vkwXD3ThUfZzGY2DtjWpuQOX0EoXsgiwdzcHP2dtg0SNw_tmfskr7vzryr9JweFPjJN4p0sWcVO311VpffZPnoBub9DvxbemLMUkPUqosXo2AbPg6DB6U50cdVUnmGKt05rpxXc1WjIsqWuNHgq7hLbASE" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6 md:p-8 text-on-primary">
              <h3 className="font-headline-sm text-headline-sm mb-2">Modern Diagnostic Lab</h3>
              <p className="opacity-80 text-sm md:text-base">Precision blood work and physiological mapping to complement traditional diagnosis.</p>
            </div>
          </div>

          {/* Kitchen */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-xl h-48 md:h-full">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A beautifully presented bowl of Satvik food on a light wood table. The meal includes fresh vegetables, grains, and microgreens arranged with artistic precision. The lighting is bright and airy, reflecting a premium health-conscious restaurant aesthetic with soft ivory and warm wood tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCihlz1jj-vfKxsl55mJsnuB9s015UogcKn75YLkr8FUeoGMzfRw8mgttDrKBkMIoL_5HO0UYu-0l_Wnqq7V6b2mBNg3lqPEt8A3pslxdnb1PlYKgXWJDm46a92D6qD5b1P1tA0CuwCcr_QXR8zXtwPMtmIQ2XZLhjmcKyrmBg9WOeHTtWMB9OqstkMcHG7R7qx-8myo3FUvniI_YRi5pjjHm8QDJ7ZJFSGnIOz6lhFulF4ztmbZzltdAb3x4wq4ixN2NgAOeEDsBjL" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6 md:p-8 text-on-primary">
              <h3 className="font-headline-sm text-headline-sm mb-1">Satvik Aahaar Kitchen</h3>
              <p className="opacity-80 text-sm md:text-base">Gourmet healing meals prepared under medical supervision.</p>
            </div>
          </div>

          {/* Pharmacy */}
          <div className="relative group overflow-hidden rounded-xl h-48 md:h-full">
            <div className="bg-primary-container w-full h-full p-6 md:p-8 flex flex-col justify-center text-on-primary">
              <span className="material-symbols-outlined text-4xl text-secondary mb-4">medication</span>
              <h3 className="font-headline-sm text-headline-sm mb-1">In-house Pharmacy</h3>
              <p className="opacity-80 text-sm">Freshly prepared herbal formulations.</p>
            </div>
          </div>

          {/* Multispeciality */}
          <div className="relative group overflow-hidden rounded-xl h-48 md:h-full">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A clean and professional hospital corridor with soft warm lighting and botanical wall art. The flooring is polished stone, and the overall atmosphere feels like a luxury hotel rather than a typical medical facility. The design uses muted forest greens and ivory white for a calming effect." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhc2Sll_rQ9lAlGrbcgHZSSIXSLpVrEjwtvVxJUC21XvrbR3sSWprc8TXydVClefCpF-rpQUEILa2xVfS7B_83g_Jpek6t9qVa0j7IYQmnNHqVmOp-kECB2OAP8JUwplkGgct_qLRAbpxxIQJpTFyX4Ydli8CYDjS6b-U_jRkPgqcD_6I0P61DK8DLvYnHPrIYJjddGH5G1QEnzTcZgzLoS17SzxIPkwi7mZMpY5mzzpb08Iz2QFUPOYRzXDz4pAeh_k87Eoxbzix4" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6 text-on-primary">
              <h3 className="text-lg font-bold">Multispeciality Clinic</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
