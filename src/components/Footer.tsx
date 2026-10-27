import React from 'react';
import { VASTU_VIHAR_CONTACT } from '../data/properties';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { PropertyCategory } from '../types/property';
import { VastuViharLogo } from './VastuViharLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectCategory: (category: PropertyCategory) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectCategory }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#081738] text-slate-300 border-t border-slate-800 pt-16 pb-12 relative overflow-hidden">
      {/* Top ribbon accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 flex">
        <div className="w-1/4 bg-[#E52424]" />
        <div className="w-3/4 bg-[#29A8E0]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Column with Official Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-block bg-white/95 p-3 rounded-md shadow-sm">
              <VastuViharLogo variant="color" size="sm" showTagline={true} />
            </div>

            <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
              एक विश्वस्तरीय टाउनशिप. Leading real estate development brand building modern living sanctuaries harmonized with Vedic Vastu Shastra principles. Serving homeowners, families, and property investors in Munger, Bihar.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#29A8E0] pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#E52424] shrink-0" />
              <span>Munger Terminal Road, Near Air India Flyover</span>
            </div>

            {/* Social & Direct Links */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={`https://wa.me/${VASTU_VIHAR_CONTACT.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 hover:border-[#29A8E0] flex items-center justify-center text-slate-300 hover:text-[#29A8E0] transition-colors"
                aria-label="WhatsApp Channel"
              >
                <Phone className="w-3.5 h-3.5 text-[#25D366]" />
              </a>
              <a
                href={`mailto:${VASTU_VIHAR_CONTACT.email}`}
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 hover:border-[#29A8E0] flex items-center justify-center text-slate-300 hover:text-[#29A8E0] transition-colors"
                aria-label="Email Inquiry"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(VASTU_VIHAR_CONTACT.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 hover:border-[#29A8E0] flex items-center justify-center text-slate-300 hover:text-[#29A8E0] transition-colors"
                aria-label="Google Maps Location Pin"
              >
                <MapPin className="w-3.5 h-3.5 text-[#E52424]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#29A8E0]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('featured-properties')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Featured Properties
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('categories')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Explore Categories
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('why-vastu-vihar')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Why Vastu Vihar
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about-vastu-vihar')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Vastu Vihar
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('find-us')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Find Us (Terminal Rd & Flyover)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Enquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Property Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#29A8E0]">
              Township Offerings
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('residential');
                    onNavigate('categories');
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Residential Duplexes & Villas
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('residential');
                    onNavigate('categories');
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  2 & 3 BHK Family Apartments
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('commercial');
                    onNavigate('categories');
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Commercial Retail & Offices
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('plots');
                    onNavigate('categories');
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Gated Plots & Highway Land
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#29A8E0]">
              Get In Touch
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <a
                href={`tel:${VASTU_VIHAR_CONTACT.phoneClean}`}
                className="flex items-center gap-2 hover:text-[#29A8E0] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#E52424]" />
                <span className="font-mono font-bold">{VASTU_VIHAR_CONTACT.phone}</span>
              </a>
              <a
                href={`mailto:${VASTU_VIHAR_CONTACT.email}`}
                className="flex items-center gap-2 hover:text-[#29A8E0] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#29A8E0]" />
                <span className="truncate">{VASTU_VIHAR_CONTACT.email}</span>
              </a>
              <div className="pt-2 text-[11px] text-slate-400 leading-relaxed">
                Mon - Sat: 9:30 AM – 7:00 PM <br />
                Sun: 10:00 AM – 5:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p className="leading-relaxed max-w-3xl">
            Disclaimer: Vastu Vihar is a registered trademark (®). All architectural renders, elevations, floor plans, and dimensions are artistic impressions and subject to refinement. Indicative prices shown are base market rates; final quotation, registration charges, and stamp duties are computed at the site office upon formal application.
          </p>

          <div className="flex items-center gap-4 shrink-0">
            <span>© {new Date().getFullYear()} Vastu Vihar. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-900 hover:bg-[#E52424] text-slate-300 hover:text-white rounded transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
