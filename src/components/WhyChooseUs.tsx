import React from 'react';
import { WHY_CHOOSE_US_POINTS, LOCATION_HIGHLIGHTS } from '../data/properties';
import { Compass, Clock, MapPin, CheckCircle2 } from 'lucide-react';

interface WhyChooseUsProps {
  onScheduleVisit: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onScheduleVisit }) => {
  return (
    <section id="why-us" className="py-24 bg-[#F8F6F0] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8C6936] font-semibold mb-2">
            <Compass className="w-4 h-4 text-[#C5A880]" />
            <span>The Vastu Vihar Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-stone-900 tracking-tight [text-wrap:balance]">
            Built Upon Trust, Precision, and Enduring Quality
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-4 leading-relaxed">
            Every square foot is planned to maximize long-term family wellbeing and investment security.
            Here is why home buyers and investors choose Vastu Vihar.
          </p>
        </div>

        {/* 5 Core Pillars in Refined Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WHY_CHOOSE_US_POINTS.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white border border-stone-200/90 rounded-lg p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-stone-300"
            >
              <div>
                <span className="text-xs font-mono font-semibold text-[#8C6936] tracking-wider block mb-3">
                  {pillar.number}.
                </span>
                <h3 className="text-lg font-serif-luxury font-bold text-stone-900 mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs text-stone-500 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Strictly Assured</span>
              </div>
            </div>
          ))}

          {/* Callout Action Card within grid */}
          <div className="bg-[#181A1F] text-stone-200 border border-stone-800 rounded-lg p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-semibold text-[#C5A880] tracking-wider block mb-3">
                06.
              </span>
              <h3 className="text-lg font-serif-luxury font-bold text-white mb-2 leading-snug">
                Experience It In Person
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Take a complimentary, personalized guided tour of our residential villas, sample apartments, and demarcated plots on Munger Terminal Road.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-stone-800">
              <button
                onClick={onScheduleVisit}
                className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#121316] bg-[#C5A880] hover:bg-[#D4B991] rounded transition-colors text-center cursor-pointer"
              >
                Book Guided Site Visit
              </button>
            </div>
          </div>
        </div>

        {/* Location & Transit Corridor Breakdown */}
        <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-stone-200">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C6936] font-semibold mb-1">
                <MapPin className="w-4 h-4 text-[#C5A880]" />
                <span>Strategic Transit Advantage</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-stone-900">
                Connected to Everything That Matters
              </h3>
            </div>
            <p className="text-xs text-stone-500 max-w-md">
              Immediate access to the Air India Flyover ensures swift commutes, eliminating congestion while preserving residential peacefulness.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {LOCATION_HIGHLIGHTS.map((loc, idx) => (
              <div key={idx} className="p-3 bg-stone-50 rounded border border-stone-100 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-stone-900 block truncate" title={loc.label}>
                    {loc.label}
                  </span>
                  <span className="text-xs text-stone-600 block mt-1 font-mono">
                    {loc.distance}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#8C6936] mt-2 font-medium">
                  <Clock className="w-3 h-3" />
                  <span>{loc.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
