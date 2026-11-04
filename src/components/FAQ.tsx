import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/content';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-14 sm:py-20 bg-[#F8F9FF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-[#00658D] font-heading font-bold text-xs sm:text-sm uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4 text-[#00AEEF]" />
            <span>Common Questions</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#0A1931] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#64748B] mt-2">
            Everything you need to know about our air conditioning services and technicians across Dubai.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3" role="region" aria-label="Frequently Asked Questions">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-[#E2E8F0] shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 font-heading font-bold text-sm sm:text-base text-[#0A1931] hover:text-[#00AEEF] transition-colors focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-[#00AEEF] text-white rotate-180' : 'bg-[#EFF4FF] text-[#00658D]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#3E4850] font-sans leading-relaxed border-t border-[#E2E8F0]/40"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Question Assistance */}
        <div className="mt-8 text-center p-5 rounded-2xl bg-[#EFF4FF] border border-[#DCE9FF]">
          <p className="text-xs sm:text-sm text-[#0A1931] font-semibold">
            Have a question that is not listed here?
          </p>
          <div className="mt-3 flex items-center justify-center gap-3">
            <a
              href={`https://wa.me/971555269352?text=${encodeURIComponent(
                'Hello AC Services Dubai, I have a question regarding your HVAC services.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#00AEEF] text-white text-xs font-bold shadow-xs hover:bg-[#0096CE] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href={BUSINESS_INFO.phoneTel}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#0A1931] border border-[#E2E8F0] text-xs font-bold hover:bg-white/80 transition-all"
            >
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

