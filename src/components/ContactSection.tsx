import React, { useState } from 'react';
import { VASTU_VIHAR_CONTACT } from '../data/properties';
import { InquiryFormData } from '../types/property';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  ExternalLink
} from 'lucide-react';

interface ContactSectionProps {
  prefilledProperty?: string;
  onClearPrefill?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledProperty = '',
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    propertyInterest: prefilledProperty || 'Vastu Vihar Imperial Duplex Villa',
    message: '',
    visitDate: '',
    visitTime: 'Morning (10:00 AM - 1:00 PM)',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  React.useEffect(() => {
    if (prefilledProperty) {
      setFormData((prev) => ({ ...prev, propertyInterest: prefilledProperty }));
    }
  }, [prefilledProperty]);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const whatsappDirectUrl = `https://wa.me/${VASTU_VIHAR_CONTACT.whatsappNumber}?text=${encodeURIComponent(
    `Hello Vastu Vihar sales desk, I would like to schedule a site visit and receive details for: ${formData.propertyInterest || 'properties'}. Name: ${formData.fullName || 'Visitor'}.`
  )}`;

  return (
    <section id="contact" className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200 township-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#E52424] font-bold mb-2">
            <MapPin className="w-4 h-4 text-[#29A8E0]" />
            <span>Connect & Visit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#0E2B63] tracking-tight">
            Schedule a Private Consultation or Site Tour
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Our relationship advisors are ready to walk you through floor plans, legal deed verifications, 
            and site accessibility near the Air India Flyover.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form or Confirmation */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-5 animate-in fade-in duration-300">
                <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif-luxury font-bold text-[#0E2B63]">
                  Site Visit Request Received
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#0E2B63]">{formData.fullName}</strong>. Our senior property advisor will reach out to <strong className="text-[#0E2B63] font-mono">{formData.phone}</strong> shortly to confirm your visit slot for <span className="font-bold text-[#0E2B63]">{formData.propertyInterest}</span>.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 bg-[#25D366] hover:bg-[#20BE5A] text-white text-xs font-bold uppercase tracking-wider rounded-md flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                    <span>Instant Confirmation on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        propertyInterest: 'Vastu Vihar Imperial Duplex Villa',
                        message: '',
                        visitDate: '',
                        visitTime: 'Morning (10:00 AM - 1:00 PM)',
                      });
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer"
                  >
                    Send Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#0E2B63] mb-1">
                      Full Name <span className="text-[#E52424]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs bg-slate-50 border ${
                        errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                      } rounded text-slate-900 focus:outline-none focus:border-[#29A8E0] focus:bg-white transition-colors`}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-red-600 mt-1 block font-medium">
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Mobile Phone */}
                  <div>
                    <label className="block text-xs font-bold text-[#0E2B63] mb-1">
                      Mobile Number <span className="text-[#E52424]">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs bg-slate-50 border ${
                        errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                      } rounded text-slate-900 focus:outline-none focus:border-[#29A8E0] focus:bg-white transition-colors font-mono`}
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-600 mt-1 block font-medium">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-[#0E2B63] mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. rajesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs bg-slate-50 border ${
                        errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                      } rounded text-slate-900 focus:outline-none focus:border-[#29A8E0] focus:bg-white transition-colors`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-600 mt-1 block font-medium">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Property Interest */}
                  <div>
                    <label className="block text-xs font-bold text-[#0E2B63] mb-1">
                      Property Category of Interest
                    </label>
                    <select
                      value={formData.propertyInterest}
                      onChange={(e) => setFormData({ ...formData, propertyInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded text-slate-900 focus:outline-none focus:border-[#29A8E0] focus:bg-white transition-colors cursor-pointer font-medium"
                    >
                      <option value="Vastu Vihar Imperial Duplex Villa">Vastu Vihar Imperial Duplex Villa</option>
                      <option value="Vastu Vihar Panorama Suites (3 BHK)">Vastu Vihar Panorama Suites (3 BHK)</option>
                      <option value="Vastu Vihar Classic Homes (2 BHK)">Vastu Vihar Classic Homes (2 BHK)</option>
                      <option value="Vastu Vihar Capital Commercial Plaza">Vastu Vihar Capital Commercial Plaza</option>
                      <option value="Vastu Vihar Corporate Hub Office Suites">Vastu Vihar Corporate Hub Office Suites</option>
                      <option value="Vastu Vihar Emerald Gated Plots (2.5 Katha)">Vastu Vihar Emerald Gated Plots (2.5 Katha)</option>
                      <option value="Vastu Vihar Highway Commercial Land">Vastu Vihar Highway Commercial Land</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-bold text-[#0E2B63] mb-1">
                      Preferred Date for Site Visit
                    </label>
                    <input
                      type="date"
                      value={formData.visitDate}
                      onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded text-slate-900 focus:outline-none focus:border-[#29A8E0] focus:bg-white transition-colors cursor-pointer"
                    />
                  </div>

                  {/* Preferred Time Window */}
                  <div>
                    <label className="block text-xs font-bold text-[#0E2B63] mb-1">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.visitTime}
                      onChange={(e) => setFormData({ ...formData, visitTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded text-slate-900 focus:outline-none focus:border-[#29A8E0] focus:bg-white transition-colors cursor-pointer font-medium"
                    >
                      <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM – 4:00 PM)</option>
                      <option value="Evening (4:00 PM - 6:30 PM)">Evening (4:00 PM – 6:30 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Additional Note */}
                <div>
                  <label className="block text-xs font-bold text-[#0E2B63] mb-1">
                    Specific Requirements or Questions (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your family size, budget preferences, or specific Vastu requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded text-slate-900 focus:outline-none focus:border-[#29A8E0] focus:bg-white transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-xs font-bold tracking-wider uppercase text-white bg-[#E52424] hover:bg-[#C62828] active:bg-[#B71C1C] rounded-md transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Submitting Details...' : 'Confirm Site Visit Request'}</span>
                  </button>
                  <p className="text-[11px] text-slate-500 text-center mt-2">
                    *Your privacy is respected. No spam, unsolicited calls, or third-party sharing.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details, WhatsApp Link */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card: Deep Navy with Sky Blue & Red */}
            <div className="bg-[#0C2356] text-white rounded-lg p-6 sm:p-7 border border-[#29A8E0]/30 shadow-xl space-y-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 flex">
                <div className="w-1/3 bg-[#E52424]" />
                <div className="w-2/3 bg-[#29A8E0]" />
              </div>

              <div className="border-b border-white/10 pb-4">
                <span className="font-devanagari font-bold text-xl text-white block">
                  वास्तु विहार (Vastu Vihar)
                </span>
                <span className="text-xs text-[#29A8E0] font-bold tracking-wider uppercase">
                  Sales & Marketing Office · Munger
                </span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#E52424] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-300 block font-bold">Head Site Office</span>
                    <span className="text-white leading-relaxed font-normal">
                      {VASTU_VIHAR_CONTACT.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-300 block font-bold">Direct Telephone</span>
                    <a
                      href={`tel:${VASTU_VIHAR_CONTACT.phoneClean}`}
                      className="text-white hover:text-[#29A8E0] transition-colors font-mono font-bold"
                    >
                      {VASTU_VIHAR_CONTACT.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-300 block font-bold">Inquiry Desk</span>
                    <a
                      href={`mailto:${VASTU_VIHAR_CONTACT.email}`}
                      className="text-white hover:text-[#29A8E0] transition-colors"
                    >
                      {VASTU_VIHAR_CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-300 block font-bold">Working Hours</span>
                    <span className="text-slate-200 leading-relaxed">
                      {VASTU_VIHAR_CONTACT.officeHours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${VASTU_VIHAR_CONTACT.whatsappNumber}?text=Hello%20Vastu%20Vihar,%20I%20am%20interested%20in%20visiting%20your%20site%20on%20Munger%20Terminal%20Road.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20BE5A] text-white text-xs font-bold uppercase tracking-wider rounded-md flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Quick Map preview */}
            <div className="bg-white border border-slate-200 rounded-lg p-4 text-center">
              <span className="text-xs font-bold text-[#0E2B63] block mb-1">
                Near Air India Flyover Exit
              </span>
              <p className="text-[11px] text-slate-500 mb-2">
                Easy approach, wide township access road, and on-site parking
              </p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(VASTU_VIHAR_CONTACT.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#E52424] hover:text-[#B71C1C]"
              >
                <span>Navigate via Google Maps</span>
                <ExternalLink className="w-3 h-3 text-[#29A8E0]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
