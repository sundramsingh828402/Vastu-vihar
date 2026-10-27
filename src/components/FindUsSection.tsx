import React from 'react';
import { MapPin, Navigation, Clock, Car, ExternalLink, Phone } from 'lucide-react';
import { VASTU_VIHAR_CONTACT, LOCATION_HIGHLIGHTS } from '../data/properties';

export const FindUsSection: React.FC = () => {
  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(
    'Munger Terminal Road Near Air India Flyover Munger Bihar'
  )}`;

  return (
    <section id="find-us" className="py-20 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#E52424] font-bold mb-2">
            <MapPin className="w-4 h-4 text-[#29A8E0]" />
            <span>Prime Accessibility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#0E2B63] tracking-tight">
            Find Us
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Munger Terminal Road, Near Air India Flyover, Munger, Bihar, India.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Location Details & Landmarks */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-slate-50 border border-slate-200 rounded-lg p-6 sm:p-8 space-y-6 township-texture">
            <div>
              <div className="border-b border-slate-200 pb-4 mb-5">
                <span className="text-[11px] uppercase tracking-wider text-[#E52424] font-bold block">
                  Office & Site Experience Center
                </span>
                <h3 className="text-xl font-serif-luxury font-bold text-[#0E2B63] mt-1">
                  Munger Terminal Corridor
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Located directly along Munger Terminal Road, with quick approach from the Air India Flyover exit ramp.
                </p>
              </div>

              {/* Address details */}
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#E52424] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0E2B63] block">Complete Address</span>
                    <span className="text-slate-600 leading-relaxed">
                      {VASTU_VIHAR_CONTACT.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0E2B63] block">Visiting Hours</span>
                    <span className="text-slate-600 leading-relaxed">
                      {VASTU_VIHAR_CONTACT.officeHours}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0E2B63] block">Vehicle Accessibility</span>
                    <span className="text-slate-600 leading-relaxed">
                      Dedicated visitor parking available on site. Direct blacktop road frontage for 4-wheelers and commercial vehicles.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 bg-[#E52424] hover:bg-[#C62828] active:bg-[#B71C1C] text-white text-xs font-bold uppercase tracking-wider rounded-md flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Driving Directions</span>
              </a>
              <a
                href={`tel:${VASTU_VIHAR_CONTACT.phoneClean}`}
                className="py-2.5 px-4 bg-white border border-slate-300 hover:border-[#0E2B63] text-[#0E2B63] text-xs font-bold uppercase tracking-wider rounded-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-[#E52424]" />
                <span>Call Desk</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map Card & Transit Times */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white border border-slate-200 rounded-lg p-6 sm:p-8 space-y-6 shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-base font-serif-luxury font-bold text-[#0E2B63]">
                  Key Transit Proximity
                </h4>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#E52424] hover:text-[#B71C1C] flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-[#29A8E0]" />
                </a>
              </div>

              {/* Transit list */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {LOCATION_HIGHLIGHTS.map((item, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-md border border-slate-200">
                    <span className="text-xs font-bold text-[#0E2B63] block truncate" title={item.label}>
                      {item.label}
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono block mt-0.5">
                      {item.distance}
                    </span>
                    <span className="text-[11px] text-[#E52424] font-semibold block mt-1">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stylized Map View Box */}
            <div className="relative aspect-[16/8] w-full rounded-lg overflow-hidden border border-slate-200 bg-slate-50 flex flex-col items-center justify-center text-center p-6 township-texture">
              <div className="space-y-2 max-w-sm">
                <div className="w-11 h-11 rounded-full bg-[#E52424]/10 text-[#E52424] flex items-center justify-center mx-auto border border-[#E52424]/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <h5 className="text-sm font-bold text-[#0E2B63]">
                  Vastu Vihar Site & Experience Center
                </h5>
                <p className="text-xs text-slate-500">
                  Munger Terminal Road, Near Air India Flyover, Munger, Bihar
                </p>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 mt-2 bg-white text-[#0E2B63] border border-slate-300 hover:border-[#0E2B63] text-xs font-bold rounded shadow-xs transition-colors"
                >
                  <span>View Exact Location Pin</span>
                  <ExternalLink className="w-3 h-3 text-[#29A8E0]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
