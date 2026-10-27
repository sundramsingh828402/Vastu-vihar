import React from 'react';
import { Property } from '../types/property';
import { ImageWithFallback } from './ImageWithFallback';
import { MapPin, Maximize2, MessageCircle, ArrowUpRight } from 'lucide-react';
import { VASTU_VIHAR_CONTACT } from '../data/properties';

interface PropertyCardProps {
  property: Property;
  onSelect: (property: Property) => void;
  onScheduleVisit: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onSelect,
  onScheduleVisit,
}) => {
  const whatsappUrl = `https://wa.me/${VASTU_VIHAR_CONTACT.whatsappNumber}?text=${encodeURIComponent(
    `Hello Vastu Vihar sales team, I am interested in inquiring about "${property.title}" (${property.type}) priced at ${property.price}. Please share official details and visit availability.`
  )}`;

  return (
    <div className="group flex flex-col bg-white border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#29A8E0]/60">
      {/* Media frame with 4:3 aspect ratio */}
      <div 
        onClick={() => onSelect(property)}
        className="relative aspect-[4/3] overflow-hidden cursor-pointer bg-slate-900"
      >
        <ImageWithFallback
          src={property.images[0]}
          alt={property.title}
          fallbackTitle={property.title}
          category={property.type}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Quiet status and category overlay strip (unboxed text) */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] uppercase tracking-wider text-white font-semibold drop-shadow-md">
          <span className="bg-[#0E2B63]/90 backdrop-blur-sm px-2.5 py-1 rounded">
            {property.type}
          </span>
          <span className="bg-[#E52424]/90 backdrop-blur-sm px-2.5 py-1 rounded text-white">
            {property.status}
          </span>
        </div>

        {/* Quick view button overlay */}
        <div className="absolute inset-0 bg-[#0E2B63]/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="px-4 py-2 bg-white text-[#0E2B63] text-xs font-bold uppercase tracking-wider rounded shadow-md flex items-center gap-1.5 border border-slate-200">
            <Maximize2 className="w-3.5 h-3.5 text-[#E52424]" />
            <span>Explore Overview</span>
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Location kicker */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#E52424] shrink-0" />
            <span className="truncate">{property.location} · {property.landmark}</span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onSelect(property)}
            className="text-lg sm:text-xl font-serif-luxury font-bold text-[#0E2B63] leading-snug hover:text-[#E52424] transition-colors cursor-pointer mb-2"
          >
            {property.title}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
            {property.description}
          </p>

          {/* Clean unboxed metadata with typographic separators */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-600 border-t border-b border-slate-100 py-3 mb-4">
            <span className="font-bold text-[#0E2B63]">{property.area}</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            {property.bhk && (
              <>
                <span className="text-slate-700 font-medium">{property.bhk}</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
              </>
            )}
            <span className="text-slate-600 truncate">{property.facing}</span>
          </div>
        </div>

        {/* Price & Action Row */}
        <div>
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">Indicative Price</span>
              <span className="text-lg sm:text-xl font-serif-luxury font-bold text-[#0E2B63] tabular-nums">
                {property.price}
              </span>
            </div>
            <button
              onClick={() => onSelect(property)}
              className="text-xs font-bold text-[#E52424] hover:text-[#B71C1C] flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>Full Details</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-100">
            <button
              onClick={() => onScheduleVisit(property)}
              className="w-full py-2 px-3 text-xs font-bold uppercase tracking-wider text-[#0E2B63] bg-slate-100 hover:bg-[#0E2B63] hover:text-white rounded transition-colors text-center cursor-pointer border border-slate-200"
            >
              Book Visit
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20BE5A] rounded transition-colors flex items-center justify-center gap-1.5 shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white text-transparent" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
