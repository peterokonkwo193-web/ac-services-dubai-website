import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Snowflake, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0A1931] text-[#EAF1FF] pt-14 pb-28 sm:pb-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Overview (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#00AEEF] flex items-center justify-center text-white">
                <Snowflake className="w-5 h-5" />
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                {BUSINESS_INFO.name}
              </span>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#CBDBF5] leading-relaxed max-w-sm">
              {BUSINESS_INFO.tagline}. Professional HVAC diagnostics, air conditioning cleaning, seasonal servicing, compressor repairs, and rapid emergency cooling dispatch across Dubai.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#00AEEF] font-semibold pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Complies with Dubai Municipality HVAC guidelines</span>
            </div>
          </div>

          {/* Column 2: Quick Links (Col 3) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#CBDBF5]">
              <li>
                <a href="#home" className="hover:text-[#00AEEF] transition-colors">Home Overview</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00AEEF] transition-colors">AC Services &amp; Repairs</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#00AEEF] transition-colors">Transparent Pricing</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#00AEEF] transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#00AEEF] transition-colors">About Our Team</a>
              </li>
              <li>
                <a href="#areas" className="hover:text-[#00AEEF] transition-colors">Dubai Service Areas</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#00AEEF] transition-colors">Service FAQs</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#00AEEF] transition-colors">Instant Booking Form</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Operating Hours (Col 4) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Contact &amp; Dispatch
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-[#CBDBF5]">
              {/* Phone */}
              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-[#00AEEF]/20 flex items-center justify-center text-[#00AEEF] flex-shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[11px] text-[#A0AEC0] block">24/7 Phone Hotline:</span>
                  <span className="font-bold text-white text-sm">{BUSINESS_INFO.phoneDisplay}</span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-[#25D366]/20 flex items-center justify-center text-[#25D366] flex-shrink-0">
                  <MessageCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[11px] text-[#A0AEC0] block">WhatsApp Service Desk:</span>
                  <span className="font-bold text-white text-sm">{BUSINESS_INFO.phoneInternational}</span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5">
                <div className="w-7 h-7 rounded-lg bg-[#00AEEF]/20 flex items-center justify-center text-[#00AEEF] flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[11px] text-[#A0AEC0] block">Service Coverage:</span>
                  <span className="font-semibold text-white">{BUSINESS_INFO.coverage}</span>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5">
                <div className="w-7 h-7 rounded-lg bg-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] flex-shrink-0">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[11px] text-[#A0AEC0] block">Operating Availability:</span>
                  <span className="font-semibold text-white">{BUSINESS_INFO.availability}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-6 pb-6 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left text-xs text-[#64748B]">
          <p className="max-w-2xl leading-relaxed">
            Disclaimer: All air conditioning maintenance and repair services are performed in accordance with UAE safety and electrical standards. 60-minute target response is subject to prevailing road traffic conditions.
          </p>
          <p className="whitespace-nowrap">
            &copy; {CURRENT_YEAR} {BUSINESS_INFO.name}. All rights reserved.
          </p>
        </div>

        {/* Discreet Developer Credit (Visually Separate) */}
        <div className="pt-4 border-t border-white/5 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-[11px] text-[#64748B]">
            <span>
              Preview website built by{' '}
              <a
                href={BUSINESS_INFO.developerCredit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94A3B8] hover:text-[#00AEEF] font-semibold underline inline-flex items-center gap-0.5"
              >
                Peter Uzo
                <ArrowUpRight className="w-3 h-3 inline" />
              </a>
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="text-[#64748B]">
              Website offer: {BUSINESS_INFO.developerCredit.offer}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
