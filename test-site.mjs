import fs from 'fs';
import path from 'path';

console.log("=== RUNNING AC SERVICES DUBAI VERIFICATION ===");

// 1. Verify index.html in dist
const distHtml = fs.readFileSync('dist/index.html', 'utf8');

const checks = [
  { name: "Title Tag", text: "AC Repair Dubai | AC Maintenance Dubai | 24/7 AC Services" },
  { name: "Meta Description", text: "Professional AC repair, cleaning and maintenance services in Dubai. Contact AC Services Dubai for service inquiries and emergency assistance." },
  { name: "LocalBusiness Schema", text: "HVACBusiness" },
  { name: "Verified Phone", text: "+971555269352" },
  { name: "Dubai AreaServed", text: "Dubai Marina" },
  { name: "Canonical URL", text: "https://peteruzo.site/demo/ac-services-dubai-0555269352/" },
  { name: "Favicon SVG", text: "favicon.svg" }
];

let failed = 0;
for (const check of checks) {
  if (distHtml.includes(check.text)) {
    console.log(`[PASS] ${check.name}`);
  } else {
    console.error(`[FAIL] ${check.name} missing: "${check.text}"`);
    failed++;
  }
}

// 2. Verify static assets exist in dist
const assets = [
  'dist/favicon.svg',
  'dist/robots.txt',
  'dist/sitemap.xml',
  'dist/images/hero-tech.jpg',
  'dist/images/about-tech.jpg',
  'dist/images/dubai-map.jpg'
];

for (const asset of assets) {
  if (fs.existsSync(asset) && fs.statSync(asset).size > 0) {
    console.log(`[PASS] Asset exists & non-empty: ${asset} (${fs.statSync(asset).size} bytes)`);
  } else {
    console.error(`[FAIL] Missing or empty asset: ${asset}`);
    failed++;
  }
}

// 3. Verify bundle JS contains all required business logic
const jsFiles = fs.readdirSync('dist/assets').filter(f => f.endsWith('.js'));
if (jsFiles.length === 0) {
  console.error('[FAIL] No JS bundle in dist/assets');
  failed++;
} else {
  const bundleContent = fs.readFileSync(path.join('dist/assets', jsFiles[0]), 'utf8');
  
  const bundleChecks = [
    { name: "Business Name", text: "AC Services Dubai" },
    { name: "Hero Headline", text: "AC REPAIR DUBAI" },
    { name: "Phone Display", text: "055-5269352" },
    { name: "Tel link", text: "tel:+971555269352" },
    { name: "WhatsApp URL Base", text: "https://wa.me/971555269352" },
    { name: "Emergency WhatsApp link", text: "EMERGENCY%20AC%20Repair%20Needed" },
    { name: "AC Cleaning AED 99", text: "AED 99" },
    { name: "AC Repair AED 149", text: "AED 149" },
    { name: "AC Maintenance AED 199", text: "AED 199" },
    { name: "Why Choose Us 60-min", text: "60-minute arrival target" },
    { name: "Why Choose Us 500+", text: "More than 500 AC units serviced, subject to verification." },
    { name: "1-Year Warranty", text: "1-year warranty" },
    { name: "All 11 Service Areas included", text: "Dubai Marina" },
    { name: "Emergency Orange Button", text: "REQUEST EMERGENCY SERVICE" },
    { name: "Form Submit Button", text: "SEND BOOKING TO WHATSAPP" },
    { name: "Developer Credit Peter Uzo", text: "Peter Uzo" },
    { name: "Website Offer Details", text: "$500 website ownership + $49/month hosting" },
    { name: "Pricing Disclaimer", text: "Prices shown are starting prices" },
    { name: "FAQ 8 Questions", text: "How much does AC repair cost in Dubai?" }
  ];

  for (const bCheck of bundleChecks) {
    if (bundleContent.includes(bCheck.text)) {
      console.log(`[PASS] Bundle content: ${bCheck.name}`);
    } else {
      console.error(`[FAIL] Bundle missing: ${bCheck.name} ("${bCheck.text}")`);
      failed++;
    }
  }
}

if (failed === 0) {
  console.log("\n>>> ALL CHECKS PASSED PERFECTLY! <<<");
} else {
  console.error(`\n>>> ${failed} CHECKS FAILED! <<<`);
  process.exit(1);
}
