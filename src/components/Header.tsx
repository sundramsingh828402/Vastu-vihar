import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { VASTU_VIHAR_CONTACT } from '../data/properties';
import { VastuViharLogo } from './VastuViharLogo';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenScheduleVisit: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenScheduleVisit,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'categories', label: 'Categories' },
    { id: 'properties', label: 'Properties' },
    { id: 'why-vastu-vihar', label: 'Why Us' },
    { id: 'about-vastu-vihar', label: 'About Us' },
    { id: 'find-us', label: 'Location' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-stone-200/90 shadow-md py-2.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-stone-200/60 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Zone 1: Official Brand Logo Lockup */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="group flex items-center gap-2 whitespace-nowrap shrink-0 transition-opacity hover:opacity-95"
            aria-label="Vastu Vihar Home"
          >
            <VastuViharLogo variant="color" size="sm" showTagline={true} />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#0E2B63]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#E52424] font-bold'
                      : 'hover:text-[#E52424]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E52424] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action (Crimson Red button matching logo chevron) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenScheduleVisit}
              className="px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-white bg-[#E52424] hover:bg-[#C62828] active:bg-[#B71C1C] rounded-md transition-all duration-200 shadow-sm whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
            >
              <span>Schedule Visit</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0E2B63] hover:text-[#E52424] rounded focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-6 pt-4 pb-6 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2 text-base font-semibold transition-colors ${
                  activeSection === item.id
                    ? 'text-[#E52424]'
                    : 'text-[#0E2B63] hover:text-[#E52424]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-100 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenScheduleVisit();
              }}
              className="w-full py-3 text-center text-xs font-bold tracking-wider uppercase bg-[#E52424] text-white rounded font-sans shadow-xs"
            >
              Schedule Site Visit
            </button>

            <div className="flex items-center justify-between text-xs text-stone-600 pt-1">
              <a
                href={`tel:${VASTU_VIHAR_CONTACT.phoneClean}`}
                className="flex items-center gap-1.5 hover:text-[#E52424] font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#E52424]" />
                <span>{VASTU_VIHAR_CONTACT.phone}</span>
              </a>
              <a
                href={`https://wa.me/${VASTU_VIHAR_CONTACT.whatsappNumber}?text=Hello%20Vastu%20Vihar%20team,%20I%20would%20like%20to%20know%20more%20about%20your%20properties.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-emerald-600 hover:underline font-medium"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
