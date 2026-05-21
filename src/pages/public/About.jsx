import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import FloatingCTA from '../../components/layout/FloatingCTA';

export default function About() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="h-[450px] relative overflow-hidden flex items-center bg-primary">
        <div className="absolute inset-0 opacity-30 scale-105 transition-transform duration-[10000ms] ease-out hover:scale-100">
          <img 
            className="w-full h-full object-cover object-center" 
            alt="Serene Ayurvedic treatment room with soft sunlight filtering through bamboo blinds" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnqjd0JjbTY1vAlRucOWzfuypMqOxOLH9Rd9euQsJQztJgLqLyeSczhrTEMRoNmGHB_G3h3pN-tzbJ992ao38ETYCZkC0RqDB1fy1NokLqeq_lRrqkIwh3fiLn1m4QSt6uPYq0OptzBkckHTrZv8jS46uIJ8k-HeU6V0J-P87IfaLZpJrscFLZf1HGvoOLZPjTby-OzLwaz9DKtUwy29frrtchku3L6VFWzi5XsjmjglhSAWqcr-A5XFrAKJrJ7IZKHY6LiggOT3Js" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-transparent"></div>
        
        {/* Organic Floating Leaf overlay */}
        <div className="absolute top-1/4 right-10 opacity-15 leaf-float pointer-events-none hidden lg:block">
          <span className="material-symbols-outlined text-secondary text-[120px]">eco</span>
        </div>
        
        <div className="relative px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full z-10">
          <div className="flex items-center gap-2 mb-4 text-primary-fixed/80 font-label-caps tracking-[0.2em] text-[12px] uppercase">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-secondary-fixed">Our Story</span>
          </div>
          <h1 className="font-headline-md text-display-lg-mobile md:text-display-lg text-white max-w-2xl font-bold leading-tight">
            Ancient Wisdom <br/>
            <span className="font-label-accent italic text-secondary-fixed font-normal">for</span> Modern Healing
          </h1>
          <p className="text-primary-fixed/80 text-body-lg max-w-lg mt-4 font-light leading-relaxed">
            Discover how Life Root Ayurveda blends classical Vedic principles with scientific precision to restore your body's natural intelligence.
          </p>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden green-shadow group relative">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt="Modern, high-end Ayurvedic clinical interior" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB95A6rWDpUJ7qP5LjPnFoILuDeCwWJAPOOSN95nBWgv3-ETkwC3J5Yk6TGatPkt8qIOkGazulYBG_eGty0uiYYKz_2n_a8G_NTXI8c5mp7eaX0MltEG8w1JDaVnfpm6urXeAVfQVQWcRR6_fv0vtoJBviH-a0tN_PV0JVUndTalJJ1s09PwAZZZYE_Qj6t9u27vQa7dopb2QesO1QqcOprde1c83He2NtEuDzfv5lG7ESDyXJSspVHSREDLX211UsK5SB-P-EUfxaG" 
              />
            </div>
            
            {/* Elegant clinical badge */}
            <div className="absolute -bottom-6 -right-6 bg-secondary text-white w-32 h-32 rounded-full flex flex-col items-center justify-center p-4 text-center border-4 border-background shadow-xl hover:scale-105 transition-transform duration-300">
              <span className="material-symbols-outlined text-white text-[24px] mb-1">verified</span>
              <span className="font-label-caps text-[10px] leading-tight tracking-wider uppercase font-bold">India's No. 1 Clinical Ayurveda</span>
            </div>
          </div>
          
          <div>
            <h2 className="font-headline-md text-headline-md text-primary mb-6 font-semibold">Our Legacy of Healing</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed first-letter:text-5xl first-letter:font-headline-md first-letter:text-secondary first-letter:mr-3 first-letter:float-left first-letter:font-semibold">
              Life Root Ayurveda was founded on the belief that true wellness requires a specialized, clinical approach—one that combines the precision of modern medical science with the holistic depth of classical Vedic medicine. We don't just treat symptoms; we restore the foundational balance of your life.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-white border border-outline-variant/30 rounded-2xl shadow-sm hover:shadow-md hover:border-secondary/20 transition-all duration-300 group">
                <div className="text-secondary mb-4 bg-secondary/5 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[28px]">visibility</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2 font-semibold">Our Vision</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  To be the global gold standard in restorative Ayurveda, redefining holistic healthcare through natural clinical excellence.
                </p>
              </div>
              <div className="p-8 bg-white border border-outline-variant/30 rounded-2xl shadow-sm hover:shadow-md hover:border-secondary/20 transition-all duration-300 group">
                <div className="text-secondary mb-4 bg-secondary/5 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[28px]">rocket_launch</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2 font-semibold">Our Mission</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Providing evidence-based, premium Ayurvedic treatments that fit seamlessly into the modern lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-surface-container-lowest border-y border-outline-variant/20">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center mb-20">
          <h2 className="font-headline-md text-headline-md text-primary font-semibold">A Journey of Excellence</h2>
          <div className="w-16 h-[3px] bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-margin-mobile">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-secondary/40 via-primary/30 to-secondary/40"></div>
          
          <div className="space-y-16">
            {/* Timeline Item 1 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between">
              {/* Desktop Left Side */}
              <div className="w-[45%] text-right hidden md:block">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2 font-semibold">The Genesis</h3>
                <p className="text-on-surface-variant text-body-md">Inception of our flagship research clinic in Haridwar.</p>
              </div>
              
              {/* Timeline Year Badge */}
              <div className="z-10 bg-secondary text-white w-12 h-12 rounded-full border-4 border-background flex items-center justify-center font-bold text-[14px] shadow-md absolute left-0 md:left-1/2 transform md:-translate-x-1/2">
                2017
              </div>
              
              {/* Desktop Right Side / Mobile Content */}
              <div className="w-full md:w-[45%] pl-16 md:pl-8">
                <div className="md:hidden mb-3">
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-1 font-semibold">The Genesis</h3>
                  <p className="text-on-surface-variant text-body-md">Inception of our flagship research clinic in Haridwar.</p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-secondary/20 transition-all border border-outline-variant/30 bg-white p-2">
                  <img 
                    className="h-40 w-full object-cover rounded-lg hover:scale-105 transition-transform duration-700" 
                    alt="Traditional copper mortars and pestles grinding fresh green Ayurvedic herbs" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHlGNl-FtygIw3X55eT4SVEuqbHAeiZ0s6QCUBHGtGPrxzSlm6NhdcUR_cFGuK9KbhCei90WCn0x-6VSyMIf1bGih_agsEFuxD1bIliJAOLKPFMbuDb-lExy8ri6d0kBX0Fb19x7BgJziTthYjyAVa1eRCn-RgqsQd7N5PmEgTQlddb9TfpLSC7LFkHIjaNGvgLbPuqS0pUhreFx_bMnbKvBeJuILgVQfA3P5XrFeP1pA4jL_14CiCyzrlmNHvBp3SZ_clCIbVQpa-" 
                  />
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative flex flex-col md:flex-row-reverse items-start md:items-center justify-between">
              {/* Desktop Left Side */}
              <div className="w-[45%] text-left hidden md:block">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2 font-semibold">Clinical Integration</h3>
                <p className="text-on-surface-variant text-body-md">Developed proprietary formulations for lifestyle metabolic disorders.</p>
              </div>
              
              {/* Timeline Year Badge */}
              <div className="z-10 bg-secondary text-white w-12 h-12 rounded-full border-4 border-background flex items-center justify-center font-bold text-[14px] shadow-md absolute left-0 md:left-1/2 transform md:-translate-x-1/2">
                2020
              </div>
              
              {/* Desktop Right Side / Mobile Content */}
              <div className="w-full md:w-[45%] pl-16 md:pr-8 text-left md:text-right">
                <div className="md:hidden mb-3">
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-1 font-semibold">Clinical Integration</h3>
                  <p className="text-on-surface-variant text-body-md">Developed proprietary formulations for lifestyle metabolic disorders.</p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-secondary/20 transition-all border border-outline-variant/30 bg-white p-2">
                  <img 
                    className="h-40 w-full object-cover rounded-lg hover:scale-105 transition-transform duration-700" 
                    alt="Microscopic view of medicinal herb extracts showing crystal-clear purity" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1p5sOr8qikPEPjYh_E2AoEmb0g1oKJFeIdgatYXvjCUycJMm6Nsd64kXLWSIdy6YEUyzmYISdae-_e7F_784pvLhZySSrI3oQh0RMRBUwd0OHsRlwpP5CB55gYYmz9b1PRWNnda20uQAxUb1u0_jSj3w2NkO2UDg0OtyNQi0Q8KWP11ZWSDRDoIR7drej-5HCdDw1iWriie8C8FIxiH09XquazmgtPU0tMcKSQMVZzQQdP1SyBu1VtoPLJ5AZ4YX3PJQTS4H6jQEa" 
                  />
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between">
              {/* Desktop Left Side */}
              <div className="w-[45%] text-right hidden md:block">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2 font-semibold">Modern Apothecary</h3>
                <p className="text-on-surface-variant text-body-md">Launched our premium product line across 12 major metro cities.</p>
              </div>
              
              {/* Timeline Year Badge */}
              <div className="z-10 bg-secondary text-white w-12 h-12 rounded-full border-4 border-background flex items-center justify-center font-bold text-[14px] shadow-md absolute left-0 md:left-1/2 transform md:-translate-x-1/2">
                2024
              </div>
              
              {/* Desktop Right Side / Mobile Content */}
              <div className="w-full md:w-[45%] pl-16 md:pl-8">
                <div className="md:hidden mb-3">
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-1 font-semibold">Modern Apothecary</h3>
                  <p className="text-on-surface-variant text-body-md">Launched our premium product line across 12 major metro cities.</p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-secondary/20 transition-all border border-outline-variant/30 bg-white p-2">
                  <img 
                    className="h-40 w-full object-cover rounded-lg hover:scale-105 transition-transform duration-700" 
                    alt="Sophisticated packaging of Ayurvedic health products displayed on shelves" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnDs5c04_3vgdeaDJRj8FhojZSWXHe3EicgJfFU7SwKibknBqjNqxQ9jzREgG8Ok4kqIbHaeMNToasThJ-1diySzByEDR7UKDZGEwf0_QeCDT94ZQQcMItBzqvanaUP1Dke965mUaBiwz5v9xynnc1FY9t-BcQDI46bwecNNAnh3fX8RnH2o2uASJ3ScKOuVwtSWDV2M6zVFpgA1is0oIzL408dfoy31QQgQd6cjHmH01y3o0Wdv7kpBiFEfYnVRkhD5VkrKop29Tp" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Panel Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-md text-headline-md text-primary font-semibold">Our Panel of Experts</h2>
          <p className="font-label-accent text-label-accent italic text-secondary mt-2">Led by 4th Generation Ayurvedic Physicians</p>
          <div className="w-16 h-[3px] bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Expert 1 */}
          <div className="group bg-white border border-outline-variant/30 rounded-2xl overflow-hidden hover:shadow-xl hover:border-secondary/20 transition-all duration-500">
            <div className="aspect-square relative overflow-hidden bg-surface-container">
              <img 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                alt="Portrait of Dr. Rajesh Sharma, Chief Medical Officer" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM4GElQw2thg0gByX0QJY1xc8hndL3Zo8_o3YmvMQyBaMmFQFborbFr9YzDnj6xJ3fWp20S5yHOfFARdFj4-2vEqSiWr5MaL4MiC9USBYXOHhJ8gOAdKSlpWGjTxoTNwUAfpXpPvjcrxUEefoK1KfUZdAM8fLbBoYNlMglCeu68cuNLYA5ktjORQp0y9uWCSneIa8xuICi0rtlKTP6eu_0yfBl2FREgvsiWdxxhgMjO1pq9akOWKbmsl56Wkp0Zxrmmfa41RqyRCSo" 
              />
            </div>
            <div className="p-8">
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-2 block font-semibold">Chief Medical Officer</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2 font-semibold">Dr. Rajesh Sharma</h3>
              <p className="text-on-surface-variant text-body-md mb-6 leading-relaxed">25+ Years Experience in Kayachikitsa &amp; Panchakarma specialist.</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-primary/5 border border-primary/10 rounded-full text-[12px] font-bold text-primary">BAMS</span>
                <span className="px-3 py-1 bg-primary/5 border border-primary/10 rounded-full text-[12px] font-bold text-primary">MD (Ayurveda)</span>
              </div>
            </div>
          </div>

          {/* Expert 2 */}
          <div className="group bg-white border border-outline-variant/30 rounded-2xl overflow-hidden hover:shadow-xl hover:border-secondary/20 transition-all duration-500">
            <div className="aspect-square relative overflow-hidden bg-surface-container">
              <img 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                alt="Professional portrait of Dr. Priya Mishra, Wellness Consultant" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA196MKQbpzsKNs7VtOrwoFluc0vAY5T4WgThkyXXd-PmIHrJGd-7x96IDDx9QvMYAHmvjX87piK0aEu_w36K7i6ysHvCSk5CSYvM8hHOzt10c2sh6ECnvMIqg60UHMZk0Y1M4B4aoGTZdyvDp4JreBsHtkH0nnnp2fqQ709IJsPoJVTZN6sPFPjpqPYHZNCB507zKsqk2bspj0hpC0Krvc-Oz8UJUUt1yoJWwCKahrhzN5lf7WGTzSqSLxWLAVNpMtMyAwcLQhRb0D" 
              />
            </div>
            <div className="p-8">
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-2 block font-semibold">Wellness Consultant</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2 font-semibold">Dr. Priya Mishra</h3>
              <p className="text-on-surface-variant text-body-md mb-6 leading-relaxed">Specialist in Ayurvedic Gynaecology and Hormonal Health management.</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-primary/5 border border-primary/10 rounded-full text-[12px] font-bold text-primary">BAMS</span>
                <span className="px-3 py-1 bg-primary/5 border border-primary/10 rounded-full text-[12px] font-bold text-primary">PhD (Herbalism)</span>
              </div>
            </div>
          </div>

          {/* Expert 3 */}
          <div className="group bg-white border border-outline-variant/30 rounded-2xl overflow-hidden hover:shadow-xl hover:border-secondary/20 transition-all duration-500">
            <div className="aspect-square relative overflow-hidden bg-surface-container">
              <img 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                alt="Portrait of Dr. Amit Tiwari, Sports Ayurveda Expert" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaLH0scL9lJ7xjlZTUYcRJ557-zgORW3qReKS4jKnwcQt7EPPmHITdaciykgFU9j2MQ0NXfoBRI_ZvzRCLoTw4tPhRfAGQvpIe9DDgmYSbVhiHIwxSnUbekZfimThDKMsG7m58hpuxLPkIHV_RmkU8ccitcGXbrvk46A8hURw9Q8xhXkcnWgakkq5G7ipSgD7Gev0TVvUcFDeAlGBxNKLZuYjPegA4C31b63yr8lBQE1Sl03jAipoiE0Cgk8n80m-5VPTEwBQAdnqY" 
              />
            </div>
            <div className="p-8">
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-2 block font-semibold">Sports Ayurveda Expert</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2 font-semibold">Dr. Amit Tiwari</h3>
              <p className="text-on-surface-variant text-body-md mb-6 leading-relaxed">Expert in Marma Therapy and Musculoskeletal restorative health.</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-primary/5 border border-primary/10 rounded-full text-[12px] font-bold text-primary">BAMS</span>
                <span className="px-3 py-1 bg-primary/5 border border-primary/10 rounded-full text-[12px] font-bold text-primary">YOGA MS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Strip Section */}
      <section className="py-20 bg-primary text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 opacity-[0.03] transform translate-x-20 -translate-y-20 pointer-events-none">
          <span className="material-symbols-outlined text-[300px]">verified</span>
        </div>
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
          <h3 className="font-label-caps text-[12px] tracking-[0.25em] text-secondary-fixed text-center mb-12 uppercase font-semibold">Quality &amp; Authenticity Guaranteed</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-8 border border-white/10 rounded-2xl hover:border-secondary-fixed/30 hover:bg-white/5 transition-all duration-300 group">
              <span className="material-symbols-outlined text-secondary-fixed text-[48px] mb-4 group-hover:scale-110 transition-transform duration-300">clinical_notes</span>
              <span className="font-label-caps text-[12px] tracking-wider uppercase font-medium text-white/90">GMP Certified</span>
            </div>
            <div className="flex flex-col items-center p-8 border border-white/10 rounded-2xl hover:border-secondary-fixed/30 hover:bg-white/5 transition-all duration-300 group">
              <span className="material-symbols-outlined text-secondary-fixed text-[48px] mb-4 group-hover:scale-110 transition-transform duration-300">restaurant</span>
              <span className="font-label-caps text-[12px] tracking-wider uppercase font-medium text-white/90">FSSAI Approved</span>
            </div>
            <div className="flex flex-col items-center p-8 border border-white/10 rounded-2xl hover:border-secondary-fixed/30 hover:bg-white/5 transition-all duration-300 group">
              <span className="material-symbols-outlined text-secondary-fixed text-[48px] mb-4 group-hover:scale-110 transition-transform duration-300">eco</span>
              <span className="font-label-caps text-[12px] tracking-wider uppercase font-medium text-white/90">100% Organic</span>
            </div>
            <div className="flex flex-col items-center p-8 border border-white/10 rounded-2xl hover:border-secondary-fixed/30 hover:bg-white/5 transition-all duration-300 group">
              <span className="material-symbols-outlined text-secondary-fixed text-[48px] mb-4 group-hover:scale-110 transition-transform duration-300">history_edu</span>
              <span className="font-label-caps text-[12px] tracking-wider uppercase font-medium text-white/90">AYUSH Licensed</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-primary p-12 md:p-20 text-center shadow-2xl border border-secondary/20">
          {/* Subtle gold gradient radial blur background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-container opacity-95"></div>
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary-fixed/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
            <h2 className="font-headline-md text-display-lg-mobile md:text-headline-md text-white mb-6 font-bold leading-tight">
              Ready to Start Your <br/>
              <span className="font-label-accent italic text-secondary-fixed font-normal">Healing Journey?</span>
            </h2>
            <p className="font-label-accent text-body-lg text-primary-fixed/80 mb-10 italic">
              "The greatest wealth is health. Take your first step toward true vitality today."
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/book-appointment" 
                className="bg-secondary hover:bg-secondary-container hover:text-on-secondary-container text-white px-8 py-4 rounded-lg font-label-caps tracking-widest uppercase text-[12px] font-bold shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Book Free Consultation
              </Link>
              <Link 
                to="/products" 
                className="border border-white/20 hover:border-secondary hover:bg-secondary/10 text-white px-8 py-4 rounded-lg font-label-caps tracking-widest uppercase text-[12px] font-bold transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}