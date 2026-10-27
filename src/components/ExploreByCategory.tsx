import React from 'react';
import { PropertyCategory } from '../types/property';
import { ArrowUpRight, Home, Store, Map } from 'lucide-react';

interface ExploreByCategoryProps {
  onSelectCategory: (category: PropertyCategory) => void;
}

export const ExploreByCategory: React.FC<ExploreByCategoryProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: 'residential' as PropertyCategory,
      title: 'Residential Properties',
      subtitle: 'Duplex Villas & Modern Family Suites',
      description: 'Independent Vastu-aligned duplexes and spacious 2 & 3 BHK flats engineered for family peace, security, and daylight.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      icon: Home,
      features: ['Independent Freehold Villas', '2 & 3 BHK High-rise Suites', '100% Vastu Orientations'],
    },
    {
      id: 'commercial' as PropertyCategory,
      title: 'Commercial Properties',
      subtitle: 'Retail Plazas & Corporate Office Hubs',
      description: 'Prominent road frontage commercial showrooms and air-conditioned executive office spaces on Munger Terminal Road.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      icon: Store,
      features: ['Main Road Frontage', 'High Vehicle Footfall', 'Ample Customer Parking'],
    },
    {
      id: 'plots' as PropertyCategory,
      title: 'Land and Plots',
      subtitle: 'Demarcated Gated Plots & Highway Land',
      description: 'Clear-chain title registered residential plots and commercial land ready for immediate registry and mutation in Munger.',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      icon: Map,
      features: ['Immediate Registry & Mutation', '30-ft Wide Concrete Roads', 'Drainage & Streetlights'],
    },
  ];

  return (
    <section id="categories" className="py-20 bg-slate-50 border-t border-slate-200 township-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#E52424] font-bold mb-2">
            <span className="w-2.5 h-1 bg-[#29A8E0] rounded-full" />
            <span>Property Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#0E2B63] tracking-tight">
            Explore by Category
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Whether you are purchasing your first family home, expanding your business, or investing in high-appreciation land in Munger.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="group flex flex-col bg-white border border-slate-200 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-[#29A8E0]"
              >
                {/* Image Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C2356]/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-[#E52424] flex items-center justify-center text-white shadow-md">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold tracking-wide uppercase">
                        {cat.title}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-serif-luxury font-bold text-[#0E2B63] group-hover:text-[#E52424] transition-colors mb-2">
                      {cat.subtitle}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {cat.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      {cat.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#29A8E0]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0E2B63] group-hover:text-[#E52424] transition-colors">
                      Explore Listings
                    </span>
                    <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#E52424] group-hover:text-white flex items-center justify-center text-[#0E2B63] transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
