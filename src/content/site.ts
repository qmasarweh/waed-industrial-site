/** Source of truth: WAED_Website_Intake_Form_Final_Revised.docx */

export const site = {
  legalName: "WAED Industrial Innovation Company W.L.L",
  displayName: "WAED Industrial",
  shortName: "WAED",
  email: "info@waediic.com",
  phoneDisplay: "+973 7793 0999",
  phoneHref: "+97377930999",
  address: {
    line1: "Unit 9, Building 2094, Road 1529, Block 115",
    locality: "Hidd",
    region: "Kingdom of Bahrain",
    street:
      "Unit 9, Building 2094, Road 1529, Block 115, Hidd, Kingdom of Bahrain",
  },
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "Unit 9, Building 2094, Road 1529, Block 115, Hidd, Bahrain",
    ),
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export type NavDropdown = {
  label: string;
  children: NavLink[];
};

export type NavItem = NavLink | NavDropdown;

export function isNavDropdown(item: NavItem): item is NavDropdown {
  return "children" in item;
}

export const nav: NavItem[] = [
  { href: "#about", label: "About" },
  { href: "#factory", label: "Factory" },
  {
    label: "Our Brands",
    children: [
      { href: "#brands", label: "Enaya" },
      // Add future brand items here, e.g.:
      // { href: "#brand-name", label: "Brand Name" },
    ],
  },
  { href: "#private-label", label: "Private Label" },
  { href: "#quality", label: "Quality" },
  { href: "#contact", label: "Contact" },
];

export const home = {
  headline: "Reliable Cleaning Solutions. Made in Bahrain.",
  support: "Local manufacturing for retail, institutional, and private-label partners.",
  ctaPrimary: "Request a Quote",
  ctaSecondary: "Explore Factory",
  highlights: [
    "Bahrain-based manufacturing",
    "Household and professional cleaning products",
    "Private-label and contract manufacturing",
    "Flexible production and packaging",
    "Quality-focused product development and testing",
  ],
} as const;

export const company = {
  elevatorPitch:
    "WAED Industrial is a Bahrain-based manufacturer of soap, detergents, cleaning and polishing preparations. We combine local manufacturing, quality-controlled formulation and testing, flexible production and packaging capabilities, and responsive commercial support for retail, institutional, professional, and private-label customers.",
  advantages: [
    "Bahrain-based manufacturing",
    "Quality-controlled formulations and batch testing",
    "Flexible production and packaging options",
    "Private-label and contract manufacturing",
    "Bulk supply solutions",
    "Responsive customer support",
  ],
} as const;

export const about = {
  eyebrow: "About WAED",
  title: "Built to manufacture locally. Ready to supply regionally.",
  origin:
    "WAED Industrial was established to build dependable local manufacturing capabilities for high-quality cleaning products.",
  mission: "Consistent cleaning products from our own facility in Bahrain — with support that stays with you from sample to shipment.",
  vision:
    "To become a trusted Bahrain-based manufacturer and private-label partner for cleaning products, with a strong presence in Bahrain and growing reach across GCC and selected regional export markets.",
  values: [
    { name: "Quality", note: "Controlled formulations, documented batches, tested release." },
    { name: "Innovation", note: "Ongoing product and formulation development." },
    { name: "Safety", note: "Safety-conscious practice across production and handling." },
    { name: "Customer Focus", note: "Responsive commercial and technical support." },
    { name: "Reliability", note: "Consistent output, flexible formats, dependable supply." },
  ],
  pillars: [
    {
      index: "01",
      title: "Local manufacturing",
      body: "Production, formulation and packaging happen at our own registered facility in Hidd, Bahrain — short lead times, predictable supply.",
    },
    {
      index: "02",
      title: "Formulation under control",
      body: "Standardised formulations, approved raw materials and in-process checks give every batch a consistent, repeatable specification.",
    },
    {
      index: "03",
      title: "Flexible by design",
      body: "Mixing, filling and packaging across retail and bulk sizes for household lines, institutional packs or private-label briefs.",
    },
    {
      index: "04",
      title: "Support that follows through",
      body: "From first enquiry to repeat orders — documentation, sampling, batch records and shipment coordination.",
    },
  ],
} as const;

export const factory = {
  eyebrow: "Our Factory",
  title: "A registered manufacturing facility in Hidd, Bahrain",
  lead: "Soap, detergents, cleaning and polishing preparations — mixed, filled and packed on site.",
  location: "Unit 9, Building 2094, Road 1529, Block 115, Hidd, Kingdom of Bahrain",
  capabilities: [
    { title: "Mixing", body: "Liquid products to approved formulations." },
    { title: "Filling", body: "Retail and bulk container sizes." },
    { title: "Packaging", body: "Flexible pack sizes and label coordination." },
    { title: "Development", body: "Private-label briefs, fragrance and colour." },
  ],
} as const;

export const lineup = {
  eyebrow: "What We Offer",
  title: "Our Product Lineup",
  lead: "Core cleaning products for households, retailers, distributors, institutions, hospitality, and professional cleaning services — manufactured in Hidd.",
  productsNote:
    "Pack sizes, concentrations, fragrance variants and technical data sheets are supplied on request.",
} as const;

export const brands = {
  title: "Our Brands",
  lead: "We build and manufacture brands from our facility in Bahrain — starting with Enaya.",
  name: "ENAYA",
  tagline: "Household and professional cleaning from Bahrain.",
  purpose:
    "Enaya is our first brand: eight core products made for everyday homes and professional use.",
  growingNote:
    "Right now Enaya is our only brand. More brands will be added here as we grow.",
  products: [
    {
      name: "Dishwashing Liquid",
      category: "Kitchen",
      body: "Concentrated dishwashing liquid for household kitchens and professional food-service environments.",
    },
    {
      name: "Hand Wash",
      category: "Hygiene",
      body: "Liquid hand wash for everyday personal hygiene in home and workplace settings.",
    },
    {
      name: "Laundry Liquid",
      category: "Laundry",
      body: "Laundry detergent liquid for domestic and institutional laundry loads.",
    },
    {
      name: "Fabric Softener",
      category: "Laundry",
      body: "Fabric softener for improved fabric feel after laundering.",
    },
    {
      name: "Multipurpose Cleaner",
      category: "Surface",
      body: "General-purpose cleaner for routine cleaning of hard surfaces across the facility.",
    },
    {
      name: "Glass Cleaner",
      category: "Surface",
      body: "Glass cleaner for streak-free cleaning of windows and glass surfaces.",
    },
    {
      name: "Disinfectant",
      category: "Hygiene",
      body: "Disinfectant for hygiene-focused cleaning protocols in commercial settings.",
    },
    {
      name: "Hand Sanitizer",
      category: "Hygiene",
      body: "Hand sanitizer for entrances, workplaces and public-facing counters.",
    },
  ],
} as const;

export const privateLabel = {
  eyebrow: "Contract Manufacturing",
  title: "Your brand, manufactured in Bahrain",
  lead:
    "Contract manufacturing, private-label production, custom formulation, fragrance and colour selection, packaging-size selection, label coordination, product sampling, batch production, and bulk supply.",
  partners: "For brand owners, retailers, distributors, and hospitality groups who need a regional manufacturing partner.",
  services: [
    "Private-label production",
    "Custom formulation",
    "Fragrance & colour",
    "Pack & label coordination",
    "Sampling & bulk supply",
  ],
} as const;

export const quality = {
  eyebrow: "Quality & Certifications",
  title: "Quality control is built into the process",
  lead: "Approved materials, in-process checks, and tested release — with full batch traceability.",
  certifications: [
    { code: "ISO 9001:2015", title: "Quality Management" },
    { code: "ISO 22716:2007", title: "GMP" },
    { code: "ISO 14001:2015", title: "Environmental" },
    { code: "ISO 45001:2018", title: "Health & Safety" },
  ],
} as const;

export const markets = {
  eyebrow: "Markets & Export",
  title: "Based in Bahrain, reaching the GCC",
  active: "Bahrain",
  targets: ["Saudi Arabia", "Kuwait", "Qatar", "UAE", "Oman", "Selected Middle East markets"],
  support: [
    "Export packaging",
    "Commercial documentation",
    "Batch records",
    "Certificates of analysis where applicable",
    "Logistics coordination",
  ],
} as const;

export const contact = {
  eyebrow: "Contact",
  title: "Talk to the people who make the product",
  lead: "Share your product, pack size, and volume — we’ll come back with a quote or sample.",
  subjects: [
    "General Inquiry",
    "Product Quote",
    "Private Label & Contract Manufacturing",
    "Distributor Inquiry",
    "Export Sales",
    "Careers",
    "Supplier Inquiry",
    "Quality Feedback",
  ],
} as const;
