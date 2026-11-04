import React from 'react';
import { MessageSquare, CalendarClock, CheckCircle, Route } from 'lucide-react';
import { HOW_IT_WORKS } from '../data/content';

const stepIcons = [MessageSquare, CalendarClock, CheckCircle];

export const HowItWorks: React.FC = () => {
  return (
    <section className="w-full py-14 sm:py-20 bg-[#EFF4FF] border-y border-[#DCE9FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-[#00658D] font-heading font-bold text-xs sm:text-sm uppercase tracking-wider mb-2">
            <Route className="w-4 h-4 text-[#00AEEF]" />
            <span>Hassle-Free Flow</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#0A1931] tracking-tight">
            How It Works
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#64748B] mt-2">
            Simple 3-step process to restore perfect cooling in your home or office.
          </p>
        </div>

        {/* Steps Grid with Connecting Line on Desktop */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] -translate-y-8 h-0.5 bg-gradient-to-r from-[#00AEEF]/20 via-[#00AEEF] to-[#00AEEF]/20 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {HOW_IT_WORKS.map((step, index) => {
              const StepIcon = stepIcons[index] || CheckCircle;

              return (
                <div
                  key={step.step}
                  className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#00AEEF]/50 transition-all flex flex-col items-center text-center gap-4 group"
                >
                  {/* Step Number & Icon Container */}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-[#EFF4FF] group-hover:bg-[#00AEEF] text-[#00AEEF] group-hover:text-white transition-colors flex items-center justify-center shadow-xs">
                      <StepIcon className="w-8 h-8 stroke-[2]" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#0A1931] text-white font-heading font-bold text-xs flex items-center justify-center shadow-xs border-2 border-white">
                      {step.step}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-[#0A1931]">
                      STEP {index + 1} — {step.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-3 text-[11px] font-bold text-[#00658D] uppercase tracking-wider">
                    {index === 0 && '⚡ Instant WhatsApp Response'}
                    {index === 1 && '⏱️ 60-Minute Arrival Target'}
                    {index === 2 && '💳 Pay After Inspection'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

