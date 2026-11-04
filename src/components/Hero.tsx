import React from 'react';
import { Calendar, Phone, Star, Home, Clock, ShieldCheck, Wrench, Snowflake, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full pt-24 sm:pt-28 pb-12 lg:pb-16 overflow-hidden">
      {/* Cooling Atmospheric Background Elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-[#00AEEF]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-20 -right-20 w-[280px] h-[280px] bg-[#E5EEFF] rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Copy, Offers, Action CTAs, Trust Grid */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
            
            {/* Eyebrow Badge */}
            <div className="self-start inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5EEFF] border border-[#DCE9FF] shadow-xs">
              <Snowflake className="w-4 h-4 text-[#00AEEF] animate-spin" style={{ animationDuration: '10s' }} />
              <span className="text-xs sm:text-sm font-bold text-[#00658D] tracking-wider uppercase">
                Dubai&apos;s AC Repair &amp; Maintenance Experts
              </span>
            </div>

            {/* Main Headline */}
            <div className="flex flex-col gap-3">
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[#0A1931] tracking-tight leading-[1.15]">
                AC REPAIR DUBAI – <span className="text-[#00AEEF]">24/7 AC MAINTENANCE</span> &amp; REPAIR NEAR YOU
              </h1>
              <p className="font-sans text-base sm:text-lg text-[#3E4850] leading-relaxed max-w-2xl">
                Professional AC repair, maintenance, cleaning and installation services across Dubai. Fast response, experienced technicians and reliable service.
              </p>
            </div>

            {/* Price Pill Banner */}
            <div className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#EFF4FF] border border-[#DCE9FF] self-start shadow-xs">
              <span className="px-2.5 py-0.5 rounded-md bg-[#FF6B00] text-white text-xs font-bold uppercase tracking-wide">
                Special Offer
              </span>
              <span className="text-sm sm:text-base font-bold text-[#0A1931]">
                AC Services From <span className="text-[#00AEEF]">AED 99</span>
              </span>
              <span className="hidden sm:inline-block text-xs text-[#64748B] border-l border-[#DCE9FF] pl-2.5">
                Upfront Pricing • No Surprise Fees
              </span>
            </div>

            {/* Dual Hero CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href={BUSINESS_INFO.heroWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 sm:h-13 px-6 rounded-xl bg-[#00AEEF] hover:bg-[#0096CE] text-white font-heading font-bold text-base flex items-center justify-center gap-2.5 shadow-md shadow-[#00AEEF]/20 transition-all active:scale-[0.98]"
              >
                <Calendar className="w-5 h-5" />
                <span>Book AC Repair Now</span>
              </a>

              <a
                href={BUSINESS_INFO.phoneTel}
                className="h-12 sm:h-13 px-6 rounded-xl bg-[#0A1931] hover:bg-[#162947] text-white font-heading font-bold text-base flex items-center justify-center gap-2.5 shadow-sm transition-all active:scale-[0.98]"
              >
                <Phone className="w-5 h-5 text-[#00AEEF]" />
                <span>Call Now: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* 4 Trust Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
              <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-2.5 hover:border-[#00AEEF]/40 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#FFF0E6] flex items-center justify-center text-[#FF6B00] flex-shrink-0">
                  <Star className="w-4 h-4 fill-[#FF6B00]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs sm:text-sm font-bold text-[#0A1931] truncate">4.9/5 Rating</span>
                  <span className="text-[11px] text-[#64748B] truncate">Customer Rating</span>
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-2.5 hover:border-[#00AEEF]/40 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#EFF4FF] flex items-center justify-center text-[#00AEEF] flex-shrink-0">
                  <Home className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs sm:text-sm font-bold text-[#0A1931] truncate">500+ Homes</span>
                  <span className="text-[11px] text-[#64748B] truncate">Dubai Serviced</span>
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-2.5 hover:border-[#00AEEF]/40 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#EFF4FF] flex items-center justify-center text-[#00AEEF] flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs sm:text-sm font-bold text-[#0A1931] truncate">24/7 Service</span>
                  <span className="text-[11px] text-[#64748B] truncate">Emergency Ready</span>
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-2.5 hover:border-[#00AEEF]/40 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#EFF4FF] flex items-center justify-center text-[#00AEEF] flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs sm:text-sm font-bold text-[#0A1931] truncate">1-Year Warranty</span>
                  <span className="text-[11px] text-[#64748B] truncate">Eligible Repairs</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Image with Floating Badges */}
          <div className="lg:col-span-5 relative w-full mt-2 lg:mt-0">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-[#E2E8F0] bg-[#EFF4FF] aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] group">
              <img
                src="./images/hero-tech.jpg"
                alt="AC Services Dubai Certified HVAC Technician servicing air conditioner in Dubai"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                loading="eager"
              />

              {/* Gradient overlay for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge 1 - Top Left: 60 Min Rapid Arrival */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-white/40 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6B00]"></span>
                </span>
                <span className="font-heading font-bold text-xs sm:text-sm text-[#0A1931]">
                  60 Min Rapid Arrival
                </span>
              </div>

              {/* Floating Badge 2 - Bottom Right: Certified Technicians */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 px-3.5 py-2 rounded-xl bg-[#0A1931]/95 text-white backdrop-blur-md shadow-md border border-white/10 flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#00AEEF]" />
                <span className="font-heading font-semibold text-xs sm:text-sm">
                  Certified Technicians
                </span>
              </div>

              {/* Floating Badge 3 - Bottom Left: Dubai All Areas */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 text-white backdrop-blur-sm text-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#00AEEF]" />
                <span>All Dubai Communities</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

