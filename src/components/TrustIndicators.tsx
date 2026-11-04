import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Sparkles, Cpu } from 'lucide-react';
import { SUPPORTED_BRANDS } from '../data/content';

export const TrustIndicators: React.FC = () => {
  const trustPillars = [
    { label: "No Fix, No Fee Guarantee", icon: ShieldCheck },
    { label: "100% Genuine Spare Parts", icon: Award },
    { label: "Transparent Upfront Pricing", icon: CheckCircle2 },
    { label: "All Major Brands Supported", icon: Cpu },
    { label: "Licensed HVAC Technicians", icon: Sparkles },
  ];

  return (
    <section className="w-full bg-[#EFF4FF] border-y border-[#DCE9FF] py-4 sm:py-5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Guarantees Row (Horizontally scrollable on mobile, flex on desktop) */}
        <div className="flex items-center justify-start lg:justify-between gap-3 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
          {trustPillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs whitespace-nowrap flex-shrink-0 hover:border-[#00AEEF] transition-colors"
              >
                <div className="w-6 h-6 rounded-lg bg-[#E5EEFF] flex items-center justify-center text-[#00AEEF]">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#0A1931]">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Supported Brands Bar */}
        <div className="mt-4 pt-3.5 border-t border-[#DCE9FF]/70 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">
              Supported Brands:
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-[#3E4850]">
            {SUPPORTED_BRANDS.map((brand) => (
              <span key={brand} className="hover:text-[#00AEEF] transition-colors">
                {brand}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

