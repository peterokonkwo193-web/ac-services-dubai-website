import React, { useState } from 'react';
import { Send, User, MapPin, Wrench, MessageSquare, AlertCircle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const BookingForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [area, setArea] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState('AC Repair');
  const [message, setMessage] = useState('');
  
  const [errors, setErrors] = useState<{ fullName?: string; area?: string; serviceNeeded?: string }>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const quickAreas = ['Dubai Marina', 'Al Barsha', 'Business Bay', 'JLT', 'Deira', 'Bur Dubai'];

  const validate = () => {
    const newErrors: { fullName?: string; area?: string; serviceNeeded?: string } = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    }

    if (!area.trim()) {
      newErrors.area = 'Please enter your Dubai area or building name.';
    }

    if (!serviceNeeded) {
      newErrors.serviceNeeded = 'Please select a service.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      setIsSuccess(false);
      return;
    }

    // Build the formatted message according to prompt specification:
    // Hello AC Services Dubai,
    //
    // I would like to book an AC service.
    //
    // Name: [Customer Name]
    // Area: [Dubai Area]
    // Service Needed: [Selected Service]
    // Message: [Customer Message]
    //
    // Please contact me regarding availability and pricing.

    const customerMessage = message.trim() ? message.trim() : 'N/A';
    
    const formattedText = 
`Hello AC Services Dubai,

I would like to book an AC service.

Name: ${fullName.trim()}
Area: ${area.trim()}
Service Needed: ${serviceNeeded}
Message: ${customerMessage}

Please contact me regarding availability and pricing.`;

    const encodedMessage = encodeURIComponent(formattedText);
    const whatsappDestinationUrl = `https://wa.me/971555269352?text=${encodedMessage}`;

    setIsSuccess(true);

    // Open WhatsApp in new tab / application
    window.open(whatsappDestinationUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="booking" className="w-full py-14 sm:py-20 bg-[#EFF4FF] border-y border-[#DCE9FF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-[#00658D] font-heading font-bold text-xs sm:text-sm uppercase tracking-wider mb-2">
            <Send className="w-4 h-4 text-[#00AEEF]" />
            <span>Fast Track Dispatch</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#0A1931] tracking-tight">
            Instant AC Booking &amp; WhatsApp Dispatch
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#64748B] mt-2">
            Fill in the details below to generate a pre-formatted WhatsApp booking and dispatch a technician.
          </p>
        </div>

        {/* Form Container */}
        <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white border border-[#E2E8F0] shadow-xl">
          
          <form onSubmit={handleSubmit} noValidate className="space-y-5 sm:space-y-6">
            
            {/* Field 1: Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs sm:text-sm font-bold text-[#0A1931] mb-1.5">
                Full Name <span className="text-[#FF6B00]">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B]">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                  }}
                  placeholder="e.g. Tariq Al Mansoori"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#F8F9FF] border text-sm text-[#0A1931] placeholder-[#94A3B8] transition-all focus:outline-none focus:bg-white ${
                    errors.fullName
                      ? 'border-[#BA1A1A] ring-2 ring-[#BA1A1A]/20'
                      : 'border-[#E2E8F0] focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/15'
                  }`}
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                />
              </div>
              {errors.fullName && (
                <p id="fullName-error" className="mt-1.5 text-xs text-[#BA1A1A] flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            {/* Field 2: Dubai Area / Community */}
            <div>
              <label htmlFor="area" className="block text-xs sm:text-sm font-bold text-[#0A1931] mb-1.5">
                Area in Dubai <span className="text-[#FF6B00]">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B]">
                  <MapPin className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="area"
                  name="area"
                  value={area}
                  onChange={(e) => {
                    setArea(e.target.value);
                    if (errors.area) setErrors({ ...errors, area: undefined });
                  }}
                  placeholder="e.g. Dubai Marina, Al Barsha, Downtown, Villa #12"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#F8F9FF] border text-sm text-[#0A1931] placeholder-[#94A3B8] transition-all focus:outline-none focus:bg-white ${
                    errors.area
                      ? 'border-[#BA1A1A] ring-2 ring-[#BA1A1A]/20'
                      : 'border-[#E2E8F0] focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/15'
                  }`}
                  aria-invalid={!!errors.area}
                  aria-describedby={errors.area ? "area-error" : undefined}
                />
              </div>
              {errors.area && (
                <p id="area-error" className="mt-1.5 text-xs text-[#BA1A1A] flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.area}</span>
                </p>
              )}

              {/* Quick Area Select Chips */}
              <div className="mt-2 flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] text-[#64748B] font-medium mr-1">Quick Select:</span>
                {quickAreas.map((qArea) => (
                  <button
                    key={qArea}
                    type="button"
                    onClick={() => {
                      setArea(qArea);
                      if (errors.area) setErrors({ ...errors, area: undefined });
                    }}
                    className="px-2.5 py-1 rounded-lg bg-[#EFF4FF] hover:bg-[#E5EEFF] text-[#00658D] text-[11px] font-semibold transition-colors"
                  >
                    {qArea}
                  </button>
                ))}
              </div>
            </div>

            {/* Field 3: Service Needed */}
            <div>
              <label htmlFor="serviceNeeded" className="block text-xs sm:text-sm font-bold text-[#0A1931] mb-1.5">
                Service Needed <span className="text-[#FF6B00]">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B]">
                  <Wrench className="w-4 h-4" />
                </div>
                <select
                  id="serviceNeeded"
                  name="serviceNeeded"
                  value={serviceNeeded}
                  onChange={(e) => {
                    setServiceNeeded(e.target.value);
                    if (errors.serviceNeeded) setErrors({ ...errors, serviceNeeded: undefined });
                  }}
                  className={`w-full pl-10 pr-10 py-3 rounded-xl bg-[#F8F9FF] border text-sm text-[#0A1931] appearance-none transition-all focus:outline-none focus:bg-white cursor-pointer ${
                    errors.serviceNeeded
                      ? 'border-[#BA1A1A] ring-2 ring-[#BA1A1A]/20'
                      : 'border-[#E2E8F0] focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/15'
                  }`}
                >
                  <option value="AC Repair">AC Repair (Starts AED 149)</option>
                  <option value="AC Maintenance">AC Maintenance (Starts AED 199)</option>
                  <option value="AC Cleaning">AC Cleaning (Starts AED 99)</option>
                  <option value="AC Installation">AC Installation</option>
                  <option value="Emergency AC Repair">Emergency AC Repair (24/7 Priority)</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#64748B]">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Field 4: Message / Symptoms (Optional) */}
            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-[#0A1931] mb-1.5">
                Message &amp; Symptoms <span className="text-[#64748B] font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3.5 pointer-events-none text-[#64748B]">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. AC blowing warm air, water leaking from indoor unit, strange noise..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F8F9FF] border border-[#E2E8F0] text-sm text-[#0A1931] placeholder-[#94A3B8] transition-all focus:outline-none focus:bg-white focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/15 resize-none"
                />
              </div>
            </div>

            {/* Success Notification Bar */}
            {isSuccess && (
              <div className="p-3.5 rounded-xl bg-[#E8F8EE] border border-[#A6E9B9] text-[#1E7E34] text-xs sm:text-sm flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>Opening WhatsApp with your booking details. We will respond right away!</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-13 rounded-xl bg-[#00AEEF] hover:bg-[#0096CE] text-white font-heading font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md shadow-[#00AEEF]/25 transition-all active:scale-[0.98] cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>SEND BOOKING TO WHATSAPP</span>
            </button>

            {/* Trust Assurances */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-center sm:text-left text-xs text-[#64748B]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00AEEF]" />
                No Pre-payment Required • Pay After Service
              </span>
              <span>Direct Hotline: <a href={BUSINESS_INFO.phoneTel} className="text-[#0A1931] font-bold underline">{BUSINESS_INFO.phoneDisplay}</a></span>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};

