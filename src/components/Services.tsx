import React from 'react';
import { Wrench, Sliders, Sparkles, Snowflake, Wind, AlertTriangle, MessageCircle, ArrowRight } from 'lucide-react';
import { SERVICES, type ServiceItem } from '../data/content';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Wrench,
  Sliders,
  Sparkles,
  Snowflake,
  Wind,
  AlertTriangle,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="w-full py-14 sm:py-20 bg-[#F8F9FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#00658D] font-heading font-bold text-xs sm:text-sm uppercase tracking-wider">
              <Snowflake className="w-4 h-4 text-[#00AEEF]" />
              <span>Tailored Solutions</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#0A1931] tracking-tight">
              Our AC Repair &amp; Maintenance Services
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#64748B]">
              Engineered diagnostics and repair for residential apartments, luxury villas, and commercial spaces across Dubai.
            </p>
          </div>

          <a
            href="#booking"
            className="self-start md:self-end inline-flex items-center gap-2 text-sm font-bold text-[#00AEEF] hover:text-[#0087BA] transition-colors"
          >
            <span>Need Custom Assistance?</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 6 Reusable Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES.map((service: ServiceItem) => {
            const Icon = iconMap[service.icon] || Wrench;
            const isEmergency = service.id === 'emergency-ac-repair';

            return (
              <div
                key={service.id}
                className={`p-5 sm:p-6 rounded-2xl bg-white border transition-all duration-200 flex flex-col justify-between gap-4 shadow-sm hover:shadow-md ${
                  isEmergency
                    ? 'border-[#FF6B00]/40 hover:border-[#FF6B00]'
                    : 'border-[#E2E8F0] hover:border-[#00AEEF]/50'
                }`}
              >
                <div className="flex flex-col gap-3.5">
                  {/* Top Bar: Icon & Price Pill */}
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        isEmergency
                          ? 'bg-[#FFF0E6] text-[#FF6B00]'
                          : 'bg-[#EFF4FF] text-[#00AEEF]'
                      }`}
                    >
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>

                    <div className="flex items-center gap-1.5">
                      {service.badge && (
                        <span
                          className={`px-2 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider ${
                            isEmergency
                              ? 'bg-[#FF6B00] text-white'
                              : 'bg-[#E5EEFF] text-[#00658D]'
                          }`}
                        >
                          {service.badge}
                        </span>
                      )}
                      <span className="px-2.5 py-1 rounded-full bg-[#EFF4FF] font-heading text-xs font-bold text-[#0A1931]">
                        {service.price}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#0A1931]">
                      {service.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#3E4850] mt-1.5 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Brand Compatibility Note */}
                  <div className="p-2 rounded-lg bg-[#F8F9FF] border border-[#E2E8F0]/70 text-[11px] text-[#64748B]">
                    Compatible with Daikin, O General, LG, Samsung, Gree, Carrier &amp; Mitsubishi.
                  </div>
                </div>

                {/* WhatsApp Booking CTA */}
                <a
                  href={`https://wa.me/971555269352?text=${encodeURIComponent(service.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full h-11 rounded-xl font-heading font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
                    isEmergency
                      ? 'bg-[#FF6B00] hover:bg-[#E65A00] text-white shadow-sm'
                      : 'bg-[#EFF4FF] hover:bg-[#00AEEF] text-[#00658D] hover:text-white'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>
                    {isEmergency ? 'WhatsApp Emergency Team' : `WhatsApp for ${service.title.replace(' Dubai', '')}`}
                  </span>
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
