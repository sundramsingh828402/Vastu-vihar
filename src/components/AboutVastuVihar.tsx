import React from 'react';
import { Compass, ShieldCheck, Award } from 'lucide-react';
import { VASTU_VIHAR_CONTACT } from '../data/properties';
import { VastuViharLogo } from './VastuViharLogo';

export const AboutVastuVihar: React.FC = () => {
  return (
    <section id="about-vastu-vihar" className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200 township-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Logo Badge Presentation */}
            <div className="bg-white inline-block p-3 rounded-lg border border-slate-200 shadow-xs mb-2">
              <VastuViharLogo variant="color" size="md" showTagline={true} />
            </div>

            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#E52424] font-bold">
              <Compass className="w-4 h-4 text-[#29A8E0]" />
              <span>Brand Heritage & Foundation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#0E2B63] leading-[1.15] [text-wrap:balance]">
              Built on Trust. Inspired by Harmony.
            </h2>

            <p className="text-base text-slate-700 leading-relaxed">
              <strong className="text-[#0E2B63] font-bold">वास्तु विहार (Vastu Vihar)</strong> is an iconic real estate brand dedicated to building world-class townships across eastern India and serving homeowners, families, and property investors in Munger, Bihar.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Our vision unites the ancient Indian science of Vastu Shastra—optimizing positive solar alignment, cross-ventilation, and spatial tranquility—with resilient modern RCC construction, paved township roads, and unequivocal legal title transparency.
            </p>

            {/* Three Essential Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
              <div className="space-y-1.5 p-3 bg-white rounded border border-slate-200/80">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0E2B63]">
                  <ShieldCheck className="w-4 h-4 text-[#E52424]" />
                  <span>100% Freehold Title</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Verified chain-of-title and clear registry documentation.
                </p>
              </div>

              <div className="space-y-1.5 p-3 bg-white rounded border border-slate-200/80">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0E2B63]">
                  <Compass className="w-4 h-4 text-[#29A8E0]" />
                  <span>Vastu Compliance</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Carefully proportioned entrances and layout orientations.
                </p>
              </div>

              <div className="space-y-1.5 p-3 bg-white rounded border border-slate-200/80">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0E2B63]">
                  <Award className="w-4 h-4 text-[#E52424]" />
                  <span>Township Quality</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Tested construction materials and earthquake-resistant designs.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Showcase Card: Deep Navy with Brand Accents */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#0C2356] text-slate-200 rounded-lg p-8 border border-[#29A8E0]/40 shadow-2xl overflow-hidden">
              {/* Ribbon Header Accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 flex">
                <div className="w-1/3 bg-[#E52424]" />
                <div className="w-2/3 bg-[#29A8E0]" />
              </div>

              <div className="relative z-10 space-y-5 pt-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-widest text-[#29A8E0] font-bold block">
                    Township Presence
                  </span>
                  <span className="text-xs text-[#E52424] font-bold bg-white/10 px-2 py-0.5 rounded">
                    Munger, Bihar
                  </span>
                </div>

                <h3 className="text-2xl font-serif-luxury font-bold text-white">
                  Munger Terminal Corridor
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Strategically located along Munger Terminal Road near the Air India Flyover, connecting residential peace with major regional economic avenues.
                </p>

                <div className="space-y-3 pt-3 border-t border-white/10 text-xs">
                  <div className="flex justify-between py-1 border-b border-white/10">
                    <span className="text-slate-300">Head Office Location:</span>
                    <span className="text-white text-right font-medium">Munger, Bihar, India</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/10">
                    <span className="text-slate-300">Primary Landmark:</span>
                    <span className="text-white text-right font-medium">Near Air India Flyover</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-300">Support Hours:</span>
                    <span className="text-white text-right font-medium">Mon – Sat (9:30 AM – 7:00 PM)</span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-[11px] text-slate-300 block mb-1">Direct Desk:</span>
                  <a
                    href={`tel:${VASTU_VIHAR_CONTACT.phoneClean}`}
                    className="text-sm font-bold text-[#29A8E0] hover:text-white transition-colors font-mono"
                  >
                    {VASTU_VIHAR_CONTACT.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
