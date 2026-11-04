import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Snowflake, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'About', href: '#about' },
    { name: 'Service Areas', href: '#areas' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#booking' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 pt-safe ${
        isScrolled
          ? 'bg-[#F8F9FF]/95 backdrop-blur-md shadow-[0_2px_12px_rgba(10,25,49,0.08)] py-2.5'
          : 'bg-[#F8F9FF]/90 backdrop-blur-sm py-3.5 border-b border-[#E2E8F0]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Brand Identity */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="AC Services Dubai - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0A1931] flex items-center justify-center text-[#00AEEF] shadow-sm group-hover:scale-105 transition-transform flex-shrink-0">
              <Snowflake className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-heading font-bold text-lg sm:text-xl text-[#0A1931] tracking-tight leading-none truncate">
                AC Dubai
              </span>
              <span className="text-[11px] font-medium text-[#64748B] tracking-wide uppercase truncate mt-0.5">
                Maintenance &amp; Repair
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#0A1931] hover:text-[#00AEEF] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#00AEEF] after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Direct Call Button */}
            <a
              href={BUSINESS_INFO.phoneTel}
              className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl bg-white border border-[#E2E8F0] text-[#0A1931] text-xs sm:text-sm font-semibold hover:border-[#00AEEF] hover:text-[#00AEEF] shadow-xs transition-all active:scale-95"
              aria-label={`Call Hotline: ${BUSINESS_INFO.phoneDisplay}`}
            >
              <Phone className="w-4 h-4 text-[#00AEEF]" />
              <span className="hidden sm:inline">{BUSINESS_INFO.phoneDisplay}</span>
              <span className="sm:hidden">Call Now</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white border border-[#E2E8F0] text-[#0A1931] hover:bg-[#EFF4FF] transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden border-b border-[#E2E8F0] bg-[#FFFFFF] ${
          mobileMenuOpen ? 'max-h-[460px] opacity-100 shadow-lg' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-3 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-[#0A1931] hover:bg-[#EFF4FF] hover:text-[#00AEEF] transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-3 border-t border-[#E2E8F0] grid grid-cols-2 gap-2">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-[#EFF4FF] text-[#0A1931] text-xs font-bold transition-colors"
            >
              <Phone className="w-4 h-4 text-[#00AEEF]" />
              <span>Call Hotline</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-[#00AEEF] text-white text-xs font-bold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="mt-2 pt-2 text-center">
            <span className="inline-flex items-center gap-1.5 text-[11px] text-[#64748B] font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00AEEF]" />
              24/7 Verified Technicians Across Dubai
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

