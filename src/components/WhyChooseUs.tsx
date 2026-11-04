import React from 'react';
import { Clock, ShieldCheck, Award, Headphones, CheckCircle } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/content';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Clock,
  ShieldCheck,
  Award,
  Headphones,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="w-full py-14 sm:py-20 bg-[#F8F9FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-[#00658D] font-heading font-bold text-xs sm:text-sm uppercase tracking-wider mb-2">
            <CheckCircle className="w-4 h-4 text-[#00AEEF]" />
            <span>The Dubai Standard</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#0A1931] tracking-tight">
            Why Dubai Residents Rely On Us
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#64748B] mt-2">
            Engineered for the intense UAE desert heat with rapid mobile response units and guaranteed craftsmanship.
          </p>
        </div>

        {/* 4 Benefits Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#00AEEF]/50 transition-all flex flex-col justify-between gap-4 group"
              >
                <div className="flex flex-col gap-3.5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#EFF4FF] group-hover:bg-[#00AEEF] text-[#00AEEF] group-hover:text-white transition-colors flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#E5EEFF] font-heading text-xs font-bold text-[#00658D]">
                      {item.stat}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#0A1931]">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E2E8F0]/70 flex items-center gap-1.5 text-[11px] font-semibold text-[#00658D]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]"></span>
                  <span>Verified Service Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

