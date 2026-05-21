import React, { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import FloatingCTA from '../../components/layout/FloatingCTA';
import { remedies } from '../../data/remedies';
import { Link } from 'react-router-dom';

export default function Remedies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedId, setExpandedId] = useState(null);

  const categories = ['All', 'Immunity', 'Skin Care', 'Hair Growth', 'Digestion', 'Mental Wellness', 'Kidney Health'];

  const filteredRemedies = remedies.filter((remedy) => {
    const matchesCategory = selectedCategory === 'All' || remedy.category === selectedCategory;
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = 
      remedy.title.toLowerCase().includes(searchLower) ||
      remedy.description.toLowerCase().includes(searchLower) ||
      remedy.category.toLowerCase().includes(searchLower) ||
      remedy.benefits.some(b => b.toLowerCase().includes(searchLower)) ||
      remedy.ingredients.some(i => i.name.toLowerCase().includes(searchLower));
    
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-32 pb-stack-lg">
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop mb-12">
          <span className="font-label-caps text-xs text-secondary tracking-[0.2em] block mb-3">Ancient Apothecary</span>
          <h1 className="font-display-lg text-display-lg text-primary mb-4 animate-fade-in">Ayurvedic Home Remedies</h1>
          <p className="font-label-accent text-body-lg text-on-surface-variant italic mb-8">
            Time-tested natural healing protocols and preparations derived from sacred Ayurvedic scriptures, curated for modern restorative life rituals.
          </p>

          {/* Search Box */}
          <div className="relative group max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-outline">search</span>
            </div>
            <input 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by condition or herbs (e.g. Stress, Turmeric, Hair...)"
              className="w-full pl-12 pr-10 py-4 bg-white border border-outline-variant/60 focus:border-secondary focus:ring-0 transition-all rounded-xl shadow-sm text-body-md font-body-md outline-none"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')} 
                className="absolute inset-y-0 right-4 flex items-center text-on-surface-variant hover:text-primary"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            )}
          </div>
        </section>

        {/* Category Pills Slider */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-10 overflow-x-auto hide-scrollbar">
          <div className="flex gap-3 pb-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setExpandedId(null);
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-on-surface-variant hover:bg-primary/5 border border-outline-variant/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Remedies Grid */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          {filteredRemedies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRemedies.map((remedy) => {
                const isExpanded = expandedId === remedy.id;
                return (
                  <div 
                    key={remedy.id} 
                    className="glass-card rounded-2xl border border-outline-variant/30 bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
                  >
                    <div className="p-6 md:p-8">
                      {/* Badge / Metadata Header */}
                      <div className="flex justify-between items-center mb-4">
                        <span className="px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-bold rounded-full tracking-wider">
                          {remedy.category}
                        </span>
                        <span className="text-xs text-on-surface-variant/80 flex items-center gap-1">
                          <span className="material-symbols-outlined text-xs text-secondary">schedule</span>
                          {remedy.prepTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-headline-sm text-lg text-primary font-bold mb-3">
                        {remedy.title}
                      </h3>

                      {/* Dosha tag */}
                      <span className="text-[11px] font-semibold text-secondary-fixed bg-secondary-fixed/10 px-2 py-0.5 rounded-md inline-block mb-4">
                        {remedy.dosha}
                      </span>

                      {/* Description */}
                      <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                        {remedy.description}
                      </p>

                      {/* Key Benefits */}
                      <div className="space-y-2 mb-6">
                        <span className="text-[10px] font-bold text-primary/70 tracking-widest block">Key Benefits</span>
                        <ul className="space-y-1 text-xs text-on-surface-variant">
                          {remedy.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="material-symbols-outlined text-secondary text-sm mt-0.5">spa</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Expandable Recipe Drawer */}
                      {isExpanded && (
                        <div className="pt-6 border-t border-outline-variant/30 space-y-6 animate-fade-in">
                          {/* Ingredients */}
                          <div>
                            <span className="text-[10px] font-bold text-primary/70 tracking-widest block mb-3">Ingredients Needed</span>
                            <div className="grid grid-cols-1 gap-2 bg-surface-container-low p-4 rounded-xl">
                              {remedy.ingredients.map((ing, i) => (
                                <div key={i} className="flex justify-between text-xs text-on-surface-variant border-b border-outline-variant/10 pb-1.5 last:border-b-0 last:pb-0">
                                  <span className="font-semibold text-primary">{ing.name}</span>
                                  <span className="text-secondary font-medium">{ing.amount}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Instructions */}
                          <div>
                            <span className="text-[10px] font-bold text-primary/70 tracking-widest block mb-3">Preparation Guide</span>
                            <ol className="space-y-3 text-xs text-on-surface-variant">
                              {remedy.steps.map((step, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                  <span className="flex-shrink-0 w-5 h-5 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center mt-0.5">
                                    {i + 1}
                                  </span>
                                  <span className="leading-relaxed">{step}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Action Toggle Button */}
                    <div className="p-6 pt-0 border-t border-outline-variant/10">
                      <button
                        onClick={() => toggleExpand(remedy.id)}
                        className="w-full flex items-center justify-center gap-2 bg-primary/5 hover:bg-primary/10 text-primary py-3 rounded-xl text-xs font-semibold transition-all duration-200 mt-4 active:scale-[0.98]"
                      >
                        {isExpanded ? 'Hide Recipe' : 'View Recipe'}
                        <span className="material-symbols-outlined text-sm">
                          {isExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                        </span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-outline-variant/20 shadow-sm max-w-xl mx-auto">
              <span className="material-symbols-outlined text-secondary text-5xl mb-4">healing</span>
              <h3 className="font-headline-sm text-lg text-primary font-bold mb-2">No Remedies Found</h3>
              <p className="text-sm text-on-surface-variant max-w-md mx-auto px-6">
                We couldn't find any remedies matching your criteria. Try adjusting your search query or selecting a different category.
              </p>
            </div>
          )}
        </section>

        {/* Personalized Healing CTA */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-16">
          <div className="relative p-8 md:p-12 bg-primary text-on-primary rounded-3xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-headline-md text-headline-md text-white mb-4">Need a Personalized Healing Plan?</h2>
              <p className="text-white/80 text-body-md leading-relaxed">
                Every individual body is unique. Our expert Ayurvedic Vaidyas can analyze your clinical Dosha balance (Prakriti & Vikriti) to compile a dedicated regimen tailored specifically to your wellness requirements.
              </p>
            </div>
            <div className="relative z-10 flex-shrink-0">
              <Link 
                to="/book-appointment"
                className="inline-block px-8 py-4 bg-secondary text-white font-semibold text-xs tracking-wider rounded-xl shadow-lg hover:bg-secondary/90 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
              >
                Start Assessment
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}