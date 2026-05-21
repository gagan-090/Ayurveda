import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeRemediesPreview() {
  return (
    <>
<section className="py-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="flex justify-between items-end mb-stack-md">
<div>
<h2 className="font-headline-md text-headline-md text-primary">Kitchen Pharmacy</h2>
<p className="text-on-surface-variant">Ancient remedies for common modern ailments.</p>
</div>
<Link className="text-secondary font-label-caps border-b border-secondary" to="/remedies">View All Remedies</Link>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">

<div className="group cursor-pointer">
<div className="aspect-square rounded-xl overflow-hidden mb-4">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A close-up artistic photograph of fresh turmeric roots and bright orange powder on a rustic stone surface. The lighting is dramatic and warm, highlighting the texture of the roots. The style is moody and high-end, focusing on the vibrant colors and natural origins of the medicinal plant." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2xU8qoppTzA0bTzsKgZw_AlUg-xCEDIUItSHp7xASCgaE06rZZzPIutX5C_dekFy2Y4FrVBSMUQdDSHiXFD0Q7tvJSa-cgEVQzso7cQgwxQcxsOH0bbzkEwl-7QUCbhDJrvLvoTj6D2aFFJrIH24ukx_J7zL0TsQCaaxQVRDsJ5QeeGX9qDnAo-ppKzaRJ8dPKYGHhwwkOsIF14Sy1XauvlIqPgdpE_QHIYtTiWGFRb2Egxdkw4x8VAHuOaU_ijv0-oobF2dowpTo" />
</div>
<h4 className="font-bold text-primary">Immunity Boosters</h4>
<p className="text-on-surface-variant text-sm">Turmeric &amp; Ginger elixirs.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-square rounded-xl overflow-hidden mb-4">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A clean, minimalist arrangement of dried chamomile flowers and peppermint leaves in ceramic bowls. Soft morning light creates gentle shadows on an off-white linen cloth. The aesthetic is serene, light, and clinical-luxury, emphasizing natural calm." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ75XqYgF_ZBBpE_Dx_aFSRxA4BwfwDIO8gKHCiX_Y61MlyVx8nlR_VDNIfo5Y5SWNKM6Pv0pXxmzuqL_FjGPc54QlQD1LO8e5EFTCIUMVp3WQkt9l_14TjmmWOSCvuQnvUDjvlCzQLwTOgHnhmFkCgNYmathcirAMNpCpAfYs_7R1JUqOyoMuGZMhut-XJH2-JOsEJeP3scjwl_W668DjAgQexc2Sf58HgYWGnn9pA-fZTytwpcoav6Y6UjuG---6i4aLKH3mHq-5" />
</div>
<h4 className="font-bold text-primary">Sleep Rituals</h4>
<p className="text-on-surface-variant text-sm">Ashwagandha &amp; Nutmeg teas.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-square rounded-xl overflow-hidden mb-4">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Close up of fresh green amla (Indian gooseberries) in a rustic wooden bowl with water droplets. The lighting is crisp and bright, highlighting the freshness and vitality of the fruit. High-discerning wellness aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo0nRJpolv9dMoYI71sRu4YtciYuBIIEgzlkAFGyrgeXU5zxqRCwFEwkFGszFLwt1KF3UMogVJ14gnpgiUzAHfjsjQrLLwx4kzPRhahEIQtYLo46QiIsbnXABLCj3l5fl5VhwT4AAJ2ibo0haJsV_VuOxlXiVgCmTGz8uOJrTZ1KIrrxPndovL2bLXXT843VNJzLh7QLS0HMLqxxxl93uxBlVJXfZ_4kkBd0tokBNf2G5knAN4R6KgJpDGcKGZrKokeyc0SZvaQTpY" />
</div>
<h4 className="font-bold text-primary">Digestion Aids</h4>
<p className="text-on-surface-variant text-sm">Amla &amp; Triphala formulations.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-square rounded-xl overflow-hidden mb-4">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A high-end shot of essential oils in dark glass droppers next to fresh sandalwood pieces and jasmine flowers. The setting is a luxurious spa bathroom with marble surfaces and gold hardware. The mood is expensive, aromatic, and deeply restorative." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGPBQWHPJ5etGeeH0rpP3l-zAZaufjLqRZ35vQZu6qsBWw29-854Mwn4i1gkAMSD7VGEMC076YBI7iuplEtUHqKzepXY2j7lpZW0-hvM1oLoydI4bYpzgDkj6Yf8MYVG2CZp2jOHnvYRXZZvM4DrRJsHY2WlaEzMRs2K_WKWdBMplb_5PEELR_2OwkPO_YaI9OctbgBqvORza_X6gXPoxiHfDO700erI2hEjfGKorgx9XT-qWk5pbEbI4ysfpU1pFWWkfiHQX4qnW9" />
</div>
<h4 className="font-bold text-primary">Stress Relief</h4>
<p className="text-on-surface-variant text-sm">Brahmi &amp; Sandalwood oils.</p>
</div>
</div>
</section>
    </>
  );
}
