import React from 'react';
import { Compass, CheckCircle2, Award, Landmark, MapPin } from 'lucide-react';
import { VASTU_VIHAR_CONTACT } from '../data/properties';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#FFFFFF] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8C6936] font-semibold">
              <Compass className="w-4 h-4 text-[#C5A880]" />
              <span>Heritage & Foundation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-stone-900 leading-[1.15] [text-wrap:balance]">
              Where Ancient Harmony Meets Modern Living.
            </h2>

            <p className="text-base text-stone-700 font-normal leading-relaxed">
              At <strong className="font-semibold text-stone-900">Vastu Vihar</strong>, we believe a home is more than physical shelter—it is the foundational space where families prosper, celebrate milestones, and build generational security.
            </p>

            <p className="text-sm text-stone-600 leading-relaxed">
              Situated in the rapidly evolving Munger corridor along Terminal Road, our developments combine timeless principles of Indian Vastu Shastra—optimizing natural daylight, positive cosmic orientations, and thermal comfort—with world-class RCC engineering and verified freehold legal ownership.
            </p>

            {/* Three Foundational Commitments */}
            <div className="space-y-4 pt-4 border-t border-stone-100">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded bg-[#C5A880]/15 flex items-center justify-center text-[#8C6936] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-stone-900">100% Clear-Deed Legal Transparency</h4>
                  <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                    Zero ambiguities. Every duplex, apartment unit, and plot carries verified chain-of-title documentation, prompt municipal clearances, and seamless bank mortgage facilitation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded bg-[#C5A880]/15 flex items-center justify-center text-[#8C6936] shrink-0 mt-0.5">
                  <Landmark className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-stone-900">Vedic Vastu-Aligned Architectures</h4>
                  <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                    Thoughtfully drafted floor plans adhering to Ishan (North-East) entrance orientation, Agni (South-East) kitchen placement, and optimal cross-breeze corridors.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded bg-[#C5A880]/15 flex items-center justify-center text-[#8C6936] shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-stone-900">Quality Assured Construction</h4>
                  <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                    Premium structural materials, tested FE-500 grade TMT reinforcement, superior vitrified finishes, and underground water drainage infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Architecture Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#14161A] text-stone-200 rounded-lg p-8 border border-stone-800 shadow-xl overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A880] font-medium">
                  <MapPin className="w-4 h-4" />
                  <span>Strategic Location</span>
                </div>

                <h3 className="text-2xl font-serif-luxury font-bold text-white">
                  Munger Terminal Road Corridor
                </h3>

                <p className="text-xs text-stone-300 leading-relaxed">
                  Located directly near the landmark Air India Flyover, providing seamless access to the city center, railway transit, and regional commerce.
                </p>

                {/* Key Metric Facts (Tabular Numerals - Zero Pill) */}
                <div className="grid grid-cols-2 gap-4 border-t border-stone-800 pt-6">
                  <div>
                    <span className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#C5A880] tabular-nums">
                      100%
                    </span>
                    <span className="text-xs text-stone-400 block mt-1">
                      Freehold Title Guarantee
                    </span>
                  </div>

                  <div>
                    <span className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#C5A880] tabular-nums">
                      300m
                    </span>
                    <span className="text-xs text-stone-400 block mt-1">
                      Proximity to Flyover
                    </span>
                  </div>

                  <div>
                    <span className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#C5A880] tabular-nums">
                      30+ Ft
                    </span>
                    <span className="text-xs text-stone-400 block mt-1">
                      Internal Paved Roads
                    </span>
                  </div>

                  <div>
                    <span className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#C5A880] tabular-nums">
                      24/7
                    </span>
                    <span className="text-xs text-stone-400 block mt-1">
                      Gated Security & Water
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-800/80">
                  <span className="text-[11px] text-stone-400 block mb-2 font-medium">
                    Corporate Office & Site Reception:
                  </span>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {VASTU_VIHAR_CONTACT.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
