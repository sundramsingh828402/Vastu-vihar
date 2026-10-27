import React, { useState } from 'react';
import { Search, MapPin, Building, IndianRupee } from 'lucide-react';

export interface PropertySearchParams {
  propertyType: string;
  intent: 'buy' | 'rent';
  location: string;
  minBudget: number;
  maxBudget: number;
}

interface PropertySearchPanelProps {
  onSearch: (params: PropertySearchParams) => void;
}

export const PropertySearchPanel: React.FC<PropertySearchPanelProps> = ({ onSearch }) => {
  const [intent, setIntent] = useState<'buy' | 'rent'>('buy');
  const [propertyType, setPropertyType] = useState<string>('all');
  const [location, setLocation] = useState<string>('all');
  const [minBudget, setMinBudget] = useState<string>('0');
  const [maxBudget, setMaxBudget] = useState<string>('15000000');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      propertyType,
      intent,
      location,
      minBudget: Number(minBudget),
      maxBudget: Number(maxBudget),
    });
  };

  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10 mb-12">
      <div className="bg-white border-2 border-stone-200/90 rounded-lg shadow-xl p-5 sm:p-7 relative overflow-hidden township-texture">
        {/* Subtle top brand color accent line (Red & Sky Blue ribbon) */}
        <div className="absolute top-0 left-0 right-0 h-1.5 flex">
          <div className="w-1/3 bg-[#E52424]" />
          <div className="w-2/3 bg-[#29A8E0]" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 pt-1">
          {/* Header Row: Buy vs Rent Segmented Toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-md w-fit border border-slate-200/60">
              <button
                type="button"
                onClick={() => setIntent('buy')}
                className={`px-5 py-1.5 text-xs font-bold rounded transition-colors cursor-pointer ${
                  intent === 'buy'
                    ? 'bg-[#0E2B63] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0E2B63]'
                }`}
              >
                Buy Property
              </button>
              <button
                type="button"
                onClick={() => setIntent('rent')}
                className={`px-5 py-1.5 text-xs font-bold rounded transition-colors cursor-pointer ${
                  intent === 'rent'
                    ? 'bg-[#0E2B63] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0E2B63]'
                }`}
              >
                Rent / Lease
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#0E2B63]">
              <span className="w-2 h-2 rounded-full bg-[#E52424]" />
              <span>विश्वस्तरीय टाउनशिप · Verified Properties in Munger, Bihar</span>
            </div>
          </div>

          {/* 5 Field Grid: Property Type, Location, Min Budget, Max Budget, Search Button */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 pt-1 items-end">
            {/* 1. Property Type */}
            <div>
              <label className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#0E2B63] font-bold mb-1.5">
                <Building className="w-3.5 h-3.5 text-[#29A8E0]" />
                <span>Property Type</span>
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded text-slate-900 focus:outline-none focus:border-[#29A8E0] focus:bg-white cursor-pointer font-medium"
              >
                <option value="all">All Property Types</option>
                <option value="Duplex Bungalow">Duplex Bungalow / Villa</option>
                <option value="Luxury 3BHK">3 BHK Apartment Suite</option>
                <option value="Premium 2BHK">2 BHK Family Residence</option>
                <option value="Commercial Retail">Commercial Retail / Plaza</option>
                <option value="Office Suite">Executive Office Suite</option>
                <option value="Gated Residential Plot">Gated Residential Plot</option>
                <option value="Commercial Plot">Commercial Highway Land</option>
              </select>
            </div>

            {/* 2. Preferred Location */}
            <div>
              <label className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#0E2B63] font-bold mb-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E52424]" />
                <span>Preferred Location</span>
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded text-slate-900 focus:outline-none focus:border-[#29A8E0] focus:bg-white cursor-pointer font-medium"
              >
                <option value="all">All Locations (Munger)</option>
                <option value="Munger Terminal Road">Munger Terminal Road</option>
                <option value="Air India Flyover">Near Air India Flyover</option>
                <option value="Terminal Highway">Terminal Highway Frontage</option>
              </select>
            </div>

            {/* 3. Minimum Budget */}
            <div>
              <label className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#0E2B63] font-bold mb-1.5">
                <IndianRupee className="w-3.5 h-3.5 text-[#29A8E0]" />
                <span>Minimum Budget</span>
              </label>
              <select
                value={minBudget}
                onChange={(e) => setMinBudget(e.target.value)}
                className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded text-slate-900 focus:outline-none focus:border-[#29A8E0] focus:bg-white cursor-pointer font-semibold font-mono"
              >
                <option value="0">Min: Any</option>
                <option value="2500000">₹25 Lakh</option>
                <option value="3500000">₹35 Lakh</option>
                <option value="5000000">₹50 Lakh</option>
                <option value="7500000">₹75 Lakh</option>
                <option value="10000000">₹1.00 Crore</option>
              </select>
            </div>

            {/* 4. Maximum Budget */}
            <div>
              <label className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#0E2B63] font-bold mb-1.5">
                <IndianRupee className="w-3.5 h-3.5 text-[#29A8E0]" />
                <span>Maximum Budget</span>
              </label>
              <select
                value={maxBudget}
                onChange={(e) => setMaxBudget(e.target.value)}
                className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded text-slate-900 focus:outline-none focus:border-[#29A8E0] focus:bg-white cursor-pointer font-semibold font-mono"
              >
                <option value="15000000">Max: Any Budget</option>
                <option value="4000000">₹40 Lakh</option>
                <option value="6000000">₹60 Lakh</option>
                <option value="8500000">₹85 Lakh</option>
                <option value="12500000">₹1.25 Crore</option>
                <option value="15000000">₹1.50+ Crore</option>
              </select>
            </div>

            {/* 5. Search Button (Crimson Red matching logo chevron) */}
            <div>
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-[#E52424] hover:bg-[#C62828] active:bg-[#B71C1C] text-white text-xs font-bold uppercase tracking-wider rounded-md flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
