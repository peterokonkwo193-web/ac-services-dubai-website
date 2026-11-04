import React from 'react';
import { Check, Info, Receipt, MessageCircle, Star } from 'lucide-react';
import { PRICING_PLANS, type PricingPlan } from '../data/content';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="w-full py-14 sm:py-20 bg-[#EFF4FF] border-y border-[#DCE9FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-[#00658D] font-heading font-bold text-xs sm:text-sm uppercase tracking-wider mb-2">
            <Receipt className="w-4 h-4 text-[#00AEEF]" />
            <span>Transparent Rates</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#0A1931] tracking-tight">
            Simple, Honest Pricing
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#64748B] mt-2">
            No hidden charges. Clear diagnostics provided before any repair work starts.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PRICING_PLANS.map((plan: PricingPlan) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative p-6 sm:p-7 rounded-2xl bg-white border flex flex-col justify-between transition-all duration-200 ${
                  isPopular
                    ? 'border-[#00AEEF] shadow-lg ring-1 ring-[#00AEEF]/20 md:-translate-y-2'
                    : 'border-[#E2E8F0] shadow-sm hover:border-[#00AEEF]/40'
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#00AEEF] text-white font-heading font-bold text-xs tracking-wider uppercase shadow-xs flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-white" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  {/* Card Title & Subtitle */}
                  <div className="border-b border-[#E2E8F0] pb-5 mb-5">
                    <h3 className="font-heading font-bold text-xl text-[#0A1931]">
                      {plan.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#64748B] mt-1">
                      {plan.subtitle}
                    </p>

                    {/* Price Display */}
                    <div className="mt-4 flex items-baseline gap-1.5">
                      <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0A1931]">
                        {plan.price}
                      </span>
                      <span className="font-sans text-xs font-semibold text-[#64748B]">
                        onwards
                      </span>
                    </div>
                  </div>

                  {/* Features Checklist */}
                  <div className="space-y-3 mb-6">
                    <span className="text-xs font-bold text-[#0A1931] uppercase tracking-wider block">
                      Service Inclusions:
                    </span>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3E4850]">
                          <div className="w-4 h-4 rounded-full bg-[#E5EEFF] flex items-center justify-center text-[#00AEEF] flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* WhatsApp Booking Action */}
                <a
                  href={`https://wa.me/971555269352?text=${encodeURIComponent(
                    `Hello AC Services Dubai, I would like to book ${plan.title} (Starting ${plan.price}). Please share availability.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full h-12 rounded-xl font-heading font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
                    isPopular
                      ? 'bg-[#00AEEF] hover:bg-[#0096CE] text-white shadow-md shadow-[#00AEEF]/20'
                      : 'bg-[#EFF4FF] hover:bg-[#00AEEF] text-[#00658D] hover:text-white'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Select {plan.title}</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Pricing Disclaimer Note */}
        <div className="mt-8 p-4 rounded-2xl bg-white border border-[#DCE9FF] flex items-start gap-3 max-w-3xl mx-auto shadow-2xs">
          <Info className="w-5 h-5 text-[#00AEEF] flex-shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            <strong className="text-[#0A1931] font-semibold">Pricing Disclaimer: </strong>
            Prices shown are starting prices. Final service costs depend on AC type, condition and work required. Contact us for a quotation.
          </p>
        </div>

      </div>
    </section>
  );
};
