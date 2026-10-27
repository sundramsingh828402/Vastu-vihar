import React, { useState } from 'react';
import { UserCheck, MessageCircle, MapPin, HeartHandshake, Calculator } from 'lucide-react';
import { EmiCalculator } from './EmiCalculator';

interface WhyVastuViharProps {
  onScheduleVisit: () => void;
}

export const WhyVastuVihar: React.FC<WhyVastuViharProps> = ({ onScheduleVisit }) => {
  const [showEmi, setShowEmi] = useState(false);
  const pillars = [
    {
      icon: UserCheck,
      title: 'Personalized Assistance',
      description:
        'Every family and investor has unique space and financial requirements. Our advisors offer one-on-one guidance, from selecting the right Vastu orientation to scheduling private site inspections.',
    },
    {
      icon: MessageCircle,
      title: 'Clear Communication',
      description:
        'Absolute transparency with zero hidden charges. We provide complete clarity on property dimensions, registry timelines, statutory approvals, and documented payment milestones.',
    },
    {
      icon: MapPin,
      title: 'Local Property Guidance',
      description:
        'Unrivaled local expertise in the Munger corridor. We help you capitalize on the rapid infrastructural growth around Munger Terminal Road and the landmark Air India Flyover.',
    },
    {
      icon: HeartHandshake,
      title: 'Customer-Focused Approach',
      description:
        'We prioritize long-term customer relationships over one-time transactions. Our team assists you across documentation, title deed searches, bank mortgage approvals, and smooth possession.',
    },
  ];

  return (
    <section id="why-vastu-vihar" className="py-20 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#E52424] font-bold mb-2">
            <span className="w-2 h-2 rounded-full bg-[#29A8E0]" />
            <span>The Trust Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#0E2B63] tracking-tight [text-wrap:balance]">
            Why Choose Vastu Vihar
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto">
            A real estate experience built on credibility, professional ethics, and authentic property solutions tailored for homebuyers and investors in Munger.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 border border-slate-200 rounded-lg p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#29A8E0] hover:shadow-md township-texture"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg bg-[#0E2B63] text-white flex items-center justify-center mb-5 shadow-sm">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-serif-luxury font-bold text-[#0E2B63] mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200 flex items-center gap-1.5 text-[11px] font-bold text-[#E52424] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#29A8E0]" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Home Loan EMI Estimator Drawer / Panel */}
        <div className="mb-12 bg-slate-50 border border-slate-200 rounded-lg p-6 sm:p-8 township-texture">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#E52424] text-white flex items-center justify-center shadow-sm">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#E52424] font-bold block">
                  Mortgage Support & Planning
                </span>
                <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-[#0E2B63]">
                  Nationalized Bank Loan & EMI Estimator
                </h3>
              </div>
            </div>
            <button
              onClick={() => setShowEmi(!showEmi)}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0E2B63] bg-white hover:bg-slate-100 rounded border border-slate-300 transition-colors cursor-pointer self-start sm:self-auto"
            >
              {showEmi ? 'Hide Calculator' : 'Open EMI Calculator'}
            </button>
          </div>

          <p className="text-xs text-slate-600 mb-6 max-w-2xl leading-relaxed">
            All Vastu Vihar projects in Munger are pre-approved by leading financial institutions including SBI, PNB, HDFC, and ICICI. Estimate your monthly installments with our transparent calculation tool below:
          </p>

          {showEmi && (
            <div className="pt-2 animate-in fade-in duration-300">
              <EmiCalculator initialPrice={5000000} />
            </div>
          )}
        </div>

        {/* Call to Action Strip: Deep Navy & Crimson Red */}
        <div className="bg-[#0C2356] text-white rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#29A8E0]/15 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#29A8E0] block mb-1">
              एक विश्वस्तरीय टाउनशिप का अनुभव
            </span>
            <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-white mb-1">
              Ready to tour properties in person?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200">
              Schedule a complimentary guided site tour on Munger Terminal Road with our senior relationship managers.
            </p>
          </div>
          <button
            onClick={onScheduleVisit}
            className="relative z-10 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#E52424] hover:bg-[#C62828] active:bg-[#B71C1C] rounded-md transition-colors whitespace-nowrap cursor-pointer shrink-0 shadow-lg"
          >
            Schedule a Site Tour
          </button>
        </div>
      </div>
    </section>
  );
};
