export interface ServiceItem {
  id: string;
  title: string;
  price: string;
  priceNum?: number;
  description: string;
  icon: string;
  badge?: string;
  whatsappMessage: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  popular?: boolean;
  features: string[];
  serviceType: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const BUSINESS_INFO = {
  name: "AC Services Dubai",
  tagline: "All Kind of AC Maintenance & Repair",
  phoneDisplay: "055-5269352",
  phoneInternational: "+971 55 526 9352",
  phoneTel: "tel:+971555269352",
  whatsappNumber: "971555269352",
  whatsappUrl: "https://wa.me/971555269352",
  heroWhatsappUrl: "https://wa.me/971555269352?text=Hi%20I%20found%20you%20on%20Google%20for%20AC%20repair%20Dubai%20-%20Need%20service%20in%20Dubai",
  emergencyWhatsappUrl: "https://wa.me/971555269352?text=EMERGENCY%20AC%20Repair%20Needed%20-%20Dubai%20-%20Location%3A%20",
  location: "Dubai, United Arab Emirates",
  coverage: "All Dubai Areas & Freezones",
  availability: "24/7 Emergency Service",
  responseTime: "60-minute arrival target",
  developerCredit: {
    text: "Preview website built by Peter Uzo.",
    url: "https://peteruzo.site",
    offer: "$500 website ownership + $49/month hosting, SEO and domain support."
  }
};

export const SUPPORTED_BRANDS = [
  "Daikin",
  "O General",
  "LG",
  "Samsung",
  "Gree",
  "Carrier",
  "Mitsubishi",
  "York",
  "Trane"
];

export const SERVICE_AREAS = [
  "Deira",
  "Bur Dubai",
  "Al Barsha",
  "Dubai Marina",
  "JLT",
  "Business Bay",
  "Dubai Silicon Oasis",
  "International City",
  "Dubai Sports City",
  "Discovery Gardens",
  "Palm Jumeirah",
  "Downtown Dubai",
  "All Dubai Areas"
];

export const SERVICES: ServiceItem[] = [
  {
    id: "ac-repair",
    title: "AC Repair Dubai",
    price: "AED 149 onwards",
    priceNum: 149,
    description: "Professional AC troubleshooting and repair for different AC brands. Diagnosing cooling failure, gas leaks, compressors, and faulty capacitors.",
    icon: "Wrench",
    whatsappMessage: "Hi AC Services - Need AC Repair in Dubai - Area: "
  },
  {
    id: "ac-maintenance",
    title: "AC Maintenance",
    price: "AED 199 onwards",
    priceNum: 199,
    description: "General AC maintenance to support reliable cooling performance. Comprehensive 18-point seasonal check, coil flush, and electrical inspection.",
    icon: "Sliders",
    whatsappMessage: "Hi AC Services - Need AC Maintenance in Dubai - Area: "
  },
  {
    id: "ac-cleaning",
    title: "AC Cleaning",
    price: "AED 99 onwards",
    priceNum: 99,
    badge: "Special Offer",
    description: "AC cleaning and servicing to help maintain indoor cooling systems. High-pressure coil cleaning, filter sanitization, and drain flush.",
    icon: "Sparkles",
    whatsappMessage: "Hi AC Services - Need AC Cleaning in Dubai - Area: "
  },
  {
    id: "ac-installation",
    title: "AC Installation",
    price: "Request Quote",
    description: "Professional installation assistance for residential and commercial AC systems. Precision split, ducted, and packaged unit setup.",
    icon: "Snowflake",
    whatsappMessage: "Hi AC Services - Need AC Installation in Dubai - Area: "
  },
  {
    id: "ac-duct-cleaning",
    title: "AC Duct Cleaning",
    price: "Request Quote",
    description: "AC duct cleaning and maintenance services. Negative-pressure vacuum duct sanitization, mold remediation, and indoor airflow balance.",
    icon: "Wind",
    whatsappMessage: "Hi AC Services - Need AC Duct Cleaning in Dubai - Area: "
  },
  {
    id: "emergency-ac-repair",
    title: "Emergency AC Repair",
    price: "Request Quote",
    badge: "Priority 60m",
    description: "Emergency AC repair assistance available 24/7. Rapid response dispatch for sudden cooling breakdown, water leakage, or electrical failure.",
    icon: "AlertTriangle",
    whatsappMessage: "EMERGENCY AC Repair Needed - Dubai - Location: "
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "cleaning",
    title: "AC Cleaning",
    subtitle: "Essential hygiene & cooling airflow",
    price: "AED 99",
    serviceType: "AC Cleaning",
    features: [
      "High-pressure filter deep wash",
      "Condenser & indoor coil rinse",
      "Anti-fungal disinfectant mist",
      "Drain pipe unclogging & flush",
      "Airflow output temperature check"
    ]
  },
  {
    id: "repair",
    title: "AC Repair",
    subtitle: "Complete diagnostics & breakdown fix",
    price: "AED 149",
    popular: true,
    serviceType: "AC Repair",
    features: [
      "Full electrical & wiring diagnostic",
      "Refrigerant gas leak pressure test",
      "Capacitor & fan motor inspection",
      "Fast on-site replacement for key parts",
      "Up to 1-Year warranty on eligible repairs"
    ]
  },
  {
    id: "maintenance",
    title: "AC Maintenance",
    subtitle: "Preventive seasonal tune-up",
    price: "AED 199",
    serviceType: "AC Maintenance",
    features: [
      "18-point comprehensive seasonal check",
      "Compressor running ampere calibration",
      "Complete chemical coil flush",
      "Thermostat calibration & sensor test",
      "Airflow optimization + Service warranty"
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Fast Response",
    subtitle: "60-minute arrival target where available.",
    icon: "Clock",
    stat: "60 Min Target"
  },
  {
    title: "Experienced Team",
    subtitle: "More than 500 AC units serviced, subject to verification.",
    icon: "ShieldCheck",
    stat: "500+ Units"
  },
  {
    title: "Service Warranty",
    subtitle: "1-year warranty on eligible services, subject to business terms.",
    icon: "Award",
    stat: "1-Year Warranty"
  },
  {
    title: "24/7 Emergency Assistance",
    subtitle: "Contact the team for emergency AC support.",
    icon: "Headphones",
    stat: "24/7 Standby"
  }
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "CONTACT US",
    description: "WhatsApp your name, location, and AC service requirements or symptoms for an immediate response."
  },
  {
    step: "02",
    title: "ARRANGE A VISIT",
    description: "Our dispatch team confirms technician availability and arranges an immediate or scheduled visit."
  },
  {
    step: "03",
    title: "GET YOUR AC SERVICED",
    description: "Approve the transparent upfront service quotation, receive expert repair, and pay easily after completion."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How much does AC repair cost in Dubai?",
    answer: "AC repair diagnostic checks start from AED 149 onwards. Deep cleaning starts from AED 99, while routine maintenance packages start from AED 199. Final costs depend on the AC type, capacity, and any replacement parts required, with clear upfront pricing provided before work begins."
  },
  {
    question: "Do you offer 24/7 emergency AC repair?",
    answer: "Yes, we operate 24 hours a day, 7 days a week, 365 days a year across Dubai. If your AC suddenly stops cooling, leaks water, or trips the breaker during extreme heat, our emergency mobile units are on standby."
  },
  {
    question: "Which areas of Dubai do you cover?",
    answer: "We provide comprehensive coverage across all Dubai areas including Dubai Marina, JLT, Al Barsha, Business Bay, Downtown Dubai, Deira, Bur Dubai, Palm Jumeirah, Dubai Silicon Oasis, International City, Dubai Sports City, and Discovery Gardens."
  },
  {
    question: "How quickly can a technician arrive?",
    answer: "Our target arrival time is within 60 minutes across all major Dubai communities, subject to prevailing traffic conditions, thanks to our mobile response vans stationed near key arterial highways."
  },
  {
    question: "Do you offer AC cleaning?",
    answer: "Yes, our AC cleaning service starts from AED 99 and includes high-pressure filter deep cleaning, indoor cooling coil flushing, anti-bacterial disinfectant misting, and condensation drain line unclogging."
  },
  {
    question: "Which AC brands do you service?",
    answer: "Our technicians service all leading residential and commercial HVAC brands including Daikin, O General, LG, Samsung, Gree, Carrier, Mitsubishi, York, and Trane."
  },
  {
    question: "Do your services include a warranty?",
    answer: "Yes, we provide up to a 1-year service warranty on eligible replacement parts and verified repairs, subject to business terms and conditions."
  },
  {
    question: "How can I book an AC technician?",
    answer: "You can book in seconds by messaging us directly on WhatsApp at +971 55 526 9352, filling out the quick booking form on this page, or calling our direct hotline at 055-5269352."
  }
];
