import React from 'react';
import { AlertCircle, Phone, MessageSquare, Zap, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const EmergencyCTA: React.FC = () => {
  return (
    <section className="w-full py-12 sm:py-16 bg-[#F8F9FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#0A1931] text-white p-7 sm:p-10 lg:p-12 overflow-hidden shadow-2xl border border-white/10">
          
          {/* Frost Ambient Glow Accent */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#00AEEF]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#FF6B00]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl flex flex-col gap-5 sm:gap-6">
            
            {/* Emergency Pill */}
            <div className="self-start inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/20 border border-[#FF6B00]/40 text-[#FF6B00]">
              <Zap className="w-4 h-4 fill-[#FF6B00] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Emergency Dispatch Active
              </span>
            </div>

            {/* Heading & Copy */}
            <div className="flex flex-col gap-3">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight uppercase leading-tight">
                AC NOT COOLING? WE&apos;RE READY TO HELP!
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#CBDBF5] leading-relaxed max-w-2xl">
                Need urgent AC repair in Dubai? Contact our team for 24/7 emergency service assistance. Rapid response units on standby for immediate cooling recovery.
              </p>
            </div>

            {/* Key Micro Indicators */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#CBDBF5]">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#00AEEF]" />
                60-Min Arrival Target
              </span>
              <span className="flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-[#FF6B00]" />
                No Overtime Surcharges
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={BUSINESS_INFO.emergencyWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-13 px-6 rounded-xl bg-[#FF6B00] hover:bg-[#E65A00] text-white font-heading font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-[#FF6B00]/25 transition-all active:scale-[0.98]"
              >
                <MessageSquare className="w-5 h-5" />
                <span>REQUEST EMERGENCY SERVICE</span>
              </a>

              <a
                href={BUSINESS_INFO.phoneTel}
                className="h-13 px-6 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-heading font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all active:scale-[0.98]"
              >
                <Phone className="w-5 h-5 text-[#00AEEF]" />
                <span>Call Hotline: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

