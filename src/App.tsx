import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustIndicators } from './components/TrustIndicators';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { WhyChooseUs } from './components/WhyChooseUs';
import { About } from './components/About';
import { ServiceAreas } from './components/ServiceAreas';
import { HowItWorks } from './components/HowItWorks';
import { EmergencyCTA } from './components/EmergencyCTA';
import { BookingForm } from './components/BookingForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FF] text-[#0A1931] font-sans selection:bg-[#00AEEF] selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full pb-16 lg:pb-0">
        <Hero />
        <TrustIndicators />
        <Services />
        <Pricing />
        <WhyChooseUs />
        <About />
        <ServiceAreas />
        <HowItWorks />
        <EmergencyCTA />
        <BookingForm />
        <FAQ />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Sticky Mobile WhatsApp & Call Bar */}
      <StickyMobileBar />
    </div>
  );
};

export default App;
