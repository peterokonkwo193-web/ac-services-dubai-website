import React from 'react';
import { Gauge, Leaf, Shield, MessageCircle, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const About: React.FC = () => {
  return (
    <section id="about" className="w-full py-14 sm:py-20 bg-[#EFF4FF] border-y border-[#DCE9FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Image with overlay */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#DCE9FF] bg-white aspect-[4/3] group">
              <img
                src="./images/about-tech.jpg"
                alt="AC Services Dubai Technician testing air flow in modern Dubai villa"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#EFF4FF] flex items-center justify-center text-[#00AEEF]">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#0A1931]">Precision Diagnostics</span>
                    <span className="text-[11px] text-[#64748B]">Factory-spec airflow testing</span>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-[#00658D] px-2 py-0.5 rounded-full bg-[#E5EEFF]">
                  Verified
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy and Features */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 text-[#00658D] font-heading font-bold text-xs sm:text-sm uppercase tracking-wider">
              <span>Engineering Precision</span>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#0A1931] tracking-tight">
              Your Trusted AC Maintenance &amp; Repair Team in Dubai.
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#3E4850] leading-relaxed">
              AC Services Dubai provides air conditioning repair, maintenance, cleaning and installation services across Dubai. From routine maintenance to urgent AC problems, customers can contact the team through WhatsApp to arrange assistance.
            </p>

            <p className="font-sans text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Whether you reside in a private villa, manage a commercial floor, or live in a high-rise apartment, our mobile technicians bring genuine spare parts and calibrated diagnostic tools right to your doorstep.
            </p>

            {/* Diagnostic & Eco Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#EFF4FF] flex items-center justify-center text-[#00AEEF] flex-shrink-0">
                  <Gauge className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-[#0A1931]">Digital Diagnostics</h3>
                  <p className="font-sans text-xs text-[#64748B] mt-0.5">
                    High-precision digital manifold gauges and thermal airflow inspection.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#EFF4FF] flex items-center justify-center text-[#00AEEF] flex-shrink-0">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-[#0A1931]">Eco Refrigerants</h3>
                  <p className="font-sans text-xs text-[#64748B] mt-0.5">
                    DEWA compliant R410A &amp; R32 environmental cooling fluids.
                  </p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-5 rounded-xl bg-[#00AEEF] hover:bg-[#0096CE] text-white font-heading font-bold text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-transform active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact via WhatsApp</span>
              </a>

              <a
                href="#booking"
                className="h-11 px-5 rounded-xl bg-white hover:bg-[#EFF4FF] border border-[#E2E8F0] text-[#0A1931] font-heading font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors"
              >
                <span>Book Service Online</span>
                <ArrowRight className="w-4 h-4 text-[#00AEEF]" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

