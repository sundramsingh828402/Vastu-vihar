import React, { useState } from 'react';
import { X, Calendar, Phone, CheckCircle2, MessageCircle } from 'lucide-react';
import { Property } from '../types/property';
import { VASTU_VIHAR_CONTACT } from '../data/properties';

interface ScheduleVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProperty?: Property | null;
}

export const ScheduleVisitModal: React.FC<ScheduleVisitModalProps> = ({
  isOpen,
  onClose,
  preselectedProperty,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (10:00 AM - 1:00 PM)');
  const [needPickup, setNeedPickup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError('Please enter your full name');
      return;
    }
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setError('Please provide a valid 10-digit mobile number');
      return;
    }
    setError('');
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const propertyName = preselectedProperty ? preselectedProperty.title : 'Vastu Vihar Developments';
  const whatsappUrl = `https://wa.me/${VASTU_VIHAR_CONTACT.whatsappNumber}?text=${encodeURIComponent(
    `Hello Vastu Vihar sales team, I have scheduled a site visit for: ${propertyName}. Name: ${fullName || 'Buyer'}. Please coordinate with me.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white w-full max-w-lg rounded-lg shadow-2xl border border-stone-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#E52424]" />
            <h3 className="font-serif-luxury font-bold text-base text-[#0E2B63]">
              Schedule Private Site Visit
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-900 rounded cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto border border-emerald-200">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-serif-luxury font-bold text-[#0E2B63]">
                Site Visit Confirmed
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-[#0E2B63]">{fullName}</strong>. Our senior executive will call you at <strong className="text-[#0E2B63]">{phone}</strong> to confirm the exact schedule and meeting point near Air India Flyover.
              </p>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20BE5A] text-white text-xs font-bold uppercase tracking-wider rounded flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                  <span>Notify Relationship Manager via WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full py-2 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs text-slate-700">
                <span className="text-[#E52424] uppercase tracking-wider text-[10px] block font-bold">Selected Property:</span>
                <span className="font-bold text-[#0E2B63]">{propertyName}</span>
                <span className="text-slate-500 block text-[11px] mt-0.5">Location: Munger Terminal Road, Near Air India Flyover</span>
              </div>

              {error && (
                <div className="p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">
                  Full Name <span className="text-[#E52424]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Anand Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-white border border-slate-300 rounded text-slate-900 focus:outline-none focus:border-[#29A8E0]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">
                  Mobile Number <span className="text-[#E52424]">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-white border border-slate-300 rounded text-slate-900 focus:outline-none focus:border-[#29A8E0]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Preferred Visit Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs bg-white border border-slate-300 rounded text-slate-900 focus:outline-none focus:border-[#29A8E0] cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">
                    Preferred Time Window
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs bg-white border border-slate-300 rounded text-slate-900 focus:outline-none focus:border-[#29A8E0] cursor-pointer"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM – 4:00 PM)</option>
                    <option value="Evening (4:00 PM - 6:30 PM)">Evening (4:00 PM – 6:30 PM)</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="pickupCheck"
                  checked={needPickup}
                  onChange={(e) => setNeedPickup(e.target.checked)}
                  className="rounded border-slate-300 text-[#E52424] focus:ring-[#E52424] cursor-pointer"
                />
                <label htmlFor="pickupCheck" className="text-xs text-slate-600 cursor-pointer">
                  Request complimentary pickup from Munger Railway Station or Flyover Junction
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#E52424] hover:bg-[#C62828] active:bg-[#B71C1C] rounded transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Scheduling Visit...' : 'Confirm Visit Appointment'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
