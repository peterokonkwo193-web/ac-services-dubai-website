import React from 'react';
import { MapPin, Navigation, Compass, CheckCircle2 } from 'lucide-react';
import { SERVICE_AREAS } from '../data/content';

export const ServiceAreas: React.FC = () => {
  return (
    <section id="areas" className="w-full py-14 sm:py-20 bg-[#F8F9FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#00658D] font-heading font-bold text-xs sm:text-sm uppercase tracking-wider">
              <Compass className="w-4 h-4 text-[#00AEEF]" />
              <span>Coverage Map</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#0A1931] tracking-tight">
              Dubai Service Areas
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#64748B]">
              Rapid dispatch units stationed across prime neighborhoods and freezones throughout the emirate.
            </p>
          </div>

          <div className="self-start md:self-end">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E5EEFF] text-[#00658D] text-xs font-bold">
              <CheckCircle2 className="w-4 h-4 text-[#00AEEF]" />
              City-Wide 60m Arrival Target
            </span>
          </div>
        </div>

        {/* Live Status Banner */}
        <div className="mb-6 p-4 rounded-xl bg-[#EFF4FF] border border-[#DCE9FF] text-[#0A1931] flex items-center gap-3 shadow-2xs">
          <span className="relative flex h-3 w-3 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00AEEF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00AEEF]"></span>
          </span>
          <p className="text-xs sm:text-sm font-semibold text-[#00658D] leading-snug">
            Mobile vans currently stationed in Marina, Barsha, JLT &amp; Business Bay ready for rapid dispatch across Dubai.
          </p>
        </div>

        {/* Dubai Visual Container */}
        <div className="relative w-full h-52 sm:h-64 md:h-72 rounded-2xl overflow-hidden shadow-md border border-[#E2E8F0] mb-6 group">
          <img
            src="./images/dubai-map.jpg"
            alt="Dubai Service Area Coverage Map for AC Services Dubai"
            className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/80 via-[#0A1931]/30 to-transparent flex items-end p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-3">
              <div className="flex items-center gap-2.5 text-white">
                <div className="w-8 h-8 rounded-lg bg-[#00AEEF] flex items-center justify-center text-white">
                  <Navigation className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm sm:text-base">Comprehensive Coverage Across Greater Dubai</h3>
                  <p className="text-xs text-white/80">Residential, Commercial &amp; Industrial AC Services</p>
                </div>
              </div>

              <a
                href={`https://wa.me/971555269352?text=${encodeURIComponent(
                  'Hi AC Services Dubai, are technicians currently available in my area?'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start sm:self-auto px-4 py-2 rounded-xl bg-white text-[#0A1931] hover:bg-[#EFF4FF] text-xs font-bold transition-colors shadow-xs"
              >
                Check My Area Now
              </a>
            </div>
          </div>
        </div>

        {/* Location Chips Grid */}
        <div className="flex flex-wrap gap-2 sm:gap-2.5">
          {SERVICE_AREAS.map((area, index) => {
            const isAll = area === 'All Dubai Areas';
            return (
              <a
                key={index}
                href={`https://wa.me/971555269352?text=${encodeURIComponent(
                  `Hi AC Services Dubai, I need AC technician service in ${area}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 active:scale-95 ${
                  isAll
                    ? 'bg-[#00AEEF] text-white shadow-xs hover:bg-[#0096CE]'
                    : 'bg-white border border-[#E2E8F0] text-[#0A1931] hover:border-[#00AEEF] hover:bg-[#EFF4FF]'
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${isAll ? 'text-white' : 'text-[#00AEEF]'}`} />
                <span>{area}</span>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
