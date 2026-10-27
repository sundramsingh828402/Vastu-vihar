import React, { useState, useEffect } from 'react';
import { Property } from '../types/property';
import { ImageWithFallback } from './ImageWithFallback';
import { EmiCalculator } from './EmiCalculator';
import { 
  X, 
  MapPin, 
  Compass, 
  ShieldCheck, 
  FileText, 
  MessageCircle, 
  Calendar, 
  Download,
  CheckCircle2,
  Share2
} from 'lucide-react';
import { VASTU_VIHAR_CONTACT } from '../data/properties';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
  onBookSiteVisit: (property: Property) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  onBookSiteVisit,
}) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [downloadingBrochure, setDownloadingBrochure] = useState(false);
  const [brochureSuccess, setBrochureSuccess] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  useEffect(() => {
    setActiveImageIdx(0);
    setBrochureSuccess(false);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [property, onClose]);

  if (!property) return null;

  const whatsappUrl = `https://wa.me/${VASTU_VIHAR_CONTACT.whatsappNumber}?text=${encodeURIComponent(
    `Hello Vastu Vihar sales desk, I am reviewing the details of "${property.title}" (${property.type}) priced at ${property.price} on Munger Terminal Road. Please share more floor plans and site visit slots.`
  )}`;

  const handleDownloadBrochure = () => {
    setDownloadingBrochure(true);
    setTimeout(() => {
      setDownloadingBrochure(false);
      setBrochureSuccess(true);
      // Create a dummy download blob with summary details
      const blob = new Blob(
        [
          `VASTU VIHAR — OFFICIAL PROPERTY SPECIFICATION\n` +
          `Project: ${property.title}\n` +
          `Category: ${property.type}\n` +
          `Price: ${property.price}\n` +
          `Location: ${property.location}, ${property.landmark}\n` +
          `Built-up Area: ${property.area}\n` +
          `Vastu Orientation: ${property.facing}\n` +
          `Possession: ${property.possession}\n` +
          `Registry Status: 100% Freehold Clear Title\n\n` +
          `Contact: ${VASTU_VIHAR_CONTACT.phone} | ${VASTU_VIHAR_CONTACT.email}\n` +
          `Address: ${VASTU_VIHAR_CONTACT.address}\n`
        ],
        { type: 'text/plain;charset=utf-8' }
      );
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = property.brochureName.replace('.pdf', '.txt');
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 800);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${property.title} | Vastu Vihar`,
        text: `Check out ${property.title} on Munger Terminal Road, Near Air India Flyover.`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#FFFFFF] w-full max-w-5xl rounded-lg shadow-2xl overflow-hidden border border-stone-300 max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-property-title"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="font-brand-cinzel font-bold text-sm tracking-widest text-[#0E2B63] uppercase">
              Vastu Vihar Portfolio
            </span>
            <span className="text-slate-300" aria-hidden="true">·</span>
            <span className="text-xs text-slate-600 font-medium">Ref: {property.id}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 text-slate-500 hover:text-slate-900 rounded hover:bg-slate-200/60 transition-colors cursor-pointer"
              title="Share property"
              aria-label="Share property link"
            >
              <Share2 className="w-4 h-4 text-[#29A8E0]" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-900 rounded hover:bg-slate-200/60 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 space-y-8">
          {/* Title & Key Highlights Grid */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E52424]" />
                <span>{property.location} · {property.landmark}</span>
              </div>
              <h2 id="modal-property-title" className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#0E2B63]">
                {property.title}
              </h2>
              <p className="text-sm text-slate-600 mt-1">{property.subtitle}</p>
            </div>

            <div className="text-left md:text-right shrink-0 bg-slate-50 md:bg-transparent p-4 md:p-0 rounded border md:border-0 border-slate-200">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">Indicative Price</span>
              <span className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#0E2B63] tabular-nums">
                {property.price}
              </span>
              <span className="text-xs text-emerald-700 block mt-0.5 font-bold">
                {property.status}
              </span>
            </div>
          </div>

          {/* Gallery Showcase */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-lg overflow-hidden bg-slate-900">
              <ImageWithFallback
                src={property.images[activeImageIdx] || property.images[0]}
                alt={`${property.title} view ${activeImageIdx + 1}`}
                fallbackTitle={property.title}
                category={property.type}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail switcher if multiple images exist */}
            {property.images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {property.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`relative w-20 h-14 rounded overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activeImageIdx === idx ? 'border-[#E52424] ring-2 ring-[#E52424]/40' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <ImageWithFallback
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fallbackTitle="Thumb"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Specifications Strip (Zero-Pill, unboxed tabular layout) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-stone-50 border border-stone-200 rounded-lg">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-stone-400 block font-medium">Super Built-up</span>
              <span className="text-sm font-semibold text-stone-900">{property.area}</span>
            </div>
            {property.carpetArea && (
              <div>
                <span className="text-[11px] uppercase tracking-wider text-stone-400 block font-medium">Carpet Area</span>
                <span className="text-sm font-semibold text-stone-900">{property.carpetArea}</span>
              </div>
            )}
            <div>
              <span className="text-[11px] uppercase tracking-wider text-stone-400 block font-medium">Vastu Orientation</span>
              <span className="text-sm font-semibold text-stone-900">{property.facing}</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-stone-400 block font-medium">Possession</span>
              <span className="text-sm font-semibold text-stone-900">{property.possession}</span>
            </div>
          </div>

          {/* Overview & Vastu Harmony */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif-luxury font-semibold text-stone-900">
              Architectural Overview & Design Ethos
            </h3>
            <p className="text-sm text-stone-700 leading-relaxed">
              {property.description}
            </p>

            {/* Core Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {property.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floor Plan Breakdown */}
          {property.floorPlanDetails && (
            <div className="space-y-3 border-t border-slate-200 pt-6">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#E52424]" />
                <h3 className="text-lg font-serif-luxury font-bold text-[#0E2B63]">
                  Floor Plan & Spatial Breakdown
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {property.floorPlanDetails.groundFloor && (
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#0E2B63] block mb-1">Ground Floor</span>
                    <p className="text-xs text-slate-600 leading-relaxed">{property.floorPlanDetails.groundFloor}</p>
                  </div>
                )}
                {property.floorPlanDetails.firstFloor && (
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#0E2B63] block mb-1">First Floor</span>
                    <p className="text-xs text-slate-600 leading-relaxed">{property.floorPlanDetails.firstFloor}</p>
                  </div>
                )}
                {property.floorPlanDetails.terrace && (
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#0E2B63] block mb-1">Terrace / Roof</span>
                    <p className="text-xs text-slate-600 leading-relaxed">{property.floorPlanDetails.terrace}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Amenities Grid */}
          <div className="space-y-3 border-t border-slate-200 pt-6">
            <h3 className="text-lg font-serif-luxury font-bold text-[#0E2B63]">
              Community Features & Infrastructure
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {property.amenities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 p-2.5 bg-slate-50/80 rounded border border-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#29A8E0]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Property Specific EMI Estimator */}
          <div className="border-t border-stone-200 pt-6">
            <EmiCalculator initialPrice={property.priceRaw} />
          </div>
        </div>

        {/* Footer Action Bar */}
        <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadBrochure}
              disabled={downloadingBrochure}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-700 hover:text-stone-900 border border-stone-300 hover:border-stone-400 bg-white rounded flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloadingBrochure ? 'Generating...' : brochureSuccess ? 'Brochure Downloaded' : 'Brochure'}</span>
            </button>
            {copiedShare && (
              <span className="text-xs text-emerald-700 font-medium">Link copied!</span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20BE5A] rounded-md flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white text-transparent" />
              <span>Inquire via WhatsApp</span>
            </a>
            <button
              onClick={() => {
                onClose();
                onBookSiteVisit(property);
              }}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#E52424] hover:bg-[#C62828] active:bg-[#B71C1C] rounded-md flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Schedule Site Visit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
