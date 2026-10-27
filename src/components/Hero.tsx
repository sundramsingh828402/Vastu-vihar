import React from 'react';
import { ArrowRight, MessageSquare, MapPin, CheckCircle } from 'lucide-react';

interface HeroProps {
  onExploreProperties: () => void;
  onTalkToTeam: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProperties,
  onTalkToTeam,
}) => {
  return (
    <section id="home" className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#0A162B] pt-28 pb-16">
      {/* Full-width High-resolution Photograph of Contemporary Indian Residential Architecture */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
          alt="Contemporary luxury residential villa architecture"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000"
        />

        {/* Subtle dark navy overlay only where necessary for text readability matching logo navy */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C2356]/90 via-[#0C2356]/65 to-[#0C2356]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081738]/85 via-transparent to-[#081738]/40" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-3xl">
          {/* Location trust marker with Logo Sky Blue and Red accents */}
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#29A8E0] mb-5 font-semibold bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#29A8E0]/30">
            <span className="w-2 h-2 rounded-full bg-[#E52424]" />
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>Munger, Bihar · Near Air India Flyover</span>
          </div>

          {/* Main Headline (Exact copy requested) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-luxury font-medium text-[#FBFBF9] leading-[1.14] tracking-tight mb-6 [text-wrap:balance]">
            Find a Place That Feels Like Home.
          </h1>

          {/* Supporting Text (Exact copy requested) */}
          <p className="text-base sm:text-lg text-slate-100 font-normal leading-relaxed max-w-2xl mb-10 text-pretty">
            Explore property opportunities with Vastu Vihar. Discover residential, commercial, and land options with a more confident property-search experience.
          </p>

          {/* Action CTAs: Primary (Crimson Red from logo) & Secondary (Navy glass) */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreProperties}
              className="px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-white bg-[#E52424] hover:bg-[#C62828] active:bg-[#B71C1C] rounded-md transition-all duration-200 shadow-lg shadow-red-950/30 flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Properties</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onTalkToTeam}
              className="px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-white hover:text-white border border-[#29A8E0]/60 hover:border-[#29A8E0] bg-[#0C2356]/60 hover:bg-[#0C2356]/80 backdrop-blur-sm rounded-md transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#29A8E0]" />
              <span>Talk to Our Team</span>
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-8 mt-8 border-t border-white/15">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#29A8E0]" />
              <span>100% Freehold Title</span>
            </div>
            <span className="text-slate-500" aria-hidden="true">·</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#29A8E0]" />
              <span>Vastu Compliant Planning</span>
            </div>
            <span className="text-slate-500" aria-hidden="true">·</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#29A8E0]" />
              <span>Nationalized Bank Approved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
