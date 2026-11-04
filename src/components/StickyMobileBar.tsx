import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const StickyMobileBar: React.FC = () => {
  return (
    <aside aria-label="Mobile Contact Bar" className="fixed bottom-0 inset-x-0 z-40 lg:hidden pb-safe bg-white/95 backdrop-blur-md border-t border-[#E2E8F0] shadow-[0_-4px_16px_rgba(10,25,49,0.1)] px-4 py-2.5">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        
        {/* WhatsApp Book Service Button */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="h-11 px-3 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-heading font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-transform active:scale-95"
          aria-label="WhatsApp - Book Service"
        >
          <MessageCircle className="w-4 h-4 fill-white/20" />
          <span className="whitespace-nowrap">WhatsApp Book</span>
        </a>

        {/* Call Now Button */}
        <a
          href={BUSINESS_INFO.phoneTel}
          className="h-11 px-3 rounded-xl bg-[#00AEEF] hover:bg-[#0096CE] text-white font-heading font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-transform active:scale-95"
          aria-label={`Call Now ${BUSINESS_INFO.phoneDisplay}`}
        >
          <Phone className="w-4 h-4" />
          <span className="whitespace-nowrap">Call Now</span>
        </a>

      </div>
    </aside>
  );
};

