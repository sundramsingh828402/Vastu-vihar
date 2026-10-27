import React from 'react';
import { Property } from '../types/property';
import { PropertyCard } from './PropertyCard';
import { ShieldCheck, ArrowRight } from 'lucide-react';

interface FeaturedPropertiesProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
  onScheduleVisit: (property: Property) => void;
  onViewAllProperties: () => void;
  isFiltered?: boolean;
  onResetSearch?: () => void;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  properties,
  onSelectProperty,
  onScheduleVisit,
  onViewAllProperties,
  isFiltered = false,
  onResetSearch,
}) => {
  const displayedProperties = isFiltered
    ? properties
    : properties.filter((p) => p.isFeatured || true).slice(0, 4);

  return (
    <section id="featured-properties" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#E52424] font-bold mb-2">
              <ShieldCheck className="w-4 h-4 text-[#29A8E0]" />
              <span>{isFiltered ? 'Matching Search Results' : 'Signature Developments'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#0E2B63] tracking-tight">
              {isFiltered ? 'Available Properties' : 'Featured Properties'}
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-xl">
              Carefully planned residential duplexes, contemporary suites, prime commercial showrooms, and verified plots in Munger.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {isFiltered && onResetSearch && (
              <button
                onClick={onResetSearch}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 hover:bg-slate-200 rounded transition-colors cursor-pointer border border-slate-200"
              >
                Clear Search
              </button>
            )}
            <button
              onClick={onViewAllProperties}
              className="text-xs font-bold text-[#0E2B63] hover:text-[#E52424] flex items-center gap-1.5 cursor-pointer uppercase tracking-wider transition-colors"
            >
              <span>{isFiltered ? 'Browse Full Catalog' : 'View All Properties'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E52424]" />
            </button>
          </div>
        </div>

        {/* Properties Grid */}
        {displayedProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onSelect={onSelectProperty}
                onScheduleVisit={onScheduleVisit}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-50 border border-slate-200 rounded-lg p-8">
            <h3 className="text-base font-serif-luxury font-bold text-[#0E2B63]">
              No properties matched your exact filter parameters
            </h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Try adjusting your property type, budget, or location filters.
            </p>
            {onResetSearch && (
              <button
                onClick={onResetSearch}
                className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#E52424] hover:bg-[#C62828] rounded transition-colors cursor-pointer"
              >
                Reset Search
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
