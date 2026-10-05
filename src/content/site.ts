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

export type NavItem = NavLink;

export const nav: NavItem[] = [
  { href: "/#about", label: "About" },
  { href: "/#factory", label: "Factory" },
  { href: "/brands", label: "Our Brands" },
  { href: "/#private-label", label: "Private Label" },
  { href: "/#quality", label: "Quality" },
  { href: "/#contact", label: "Contact" },
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

export type BrandProduct = {
  name: string;
  category: string;
  body: string;
};

export type BrandGalleryShot = {
  src: string;
  alt: string;
  caption: string;
};

export type BrandEntry = {
  id: string;
  name: string;
  tagline: string;
  story: string;
  focus: string[];
  logo: string;
  titleClass?: string;
  products: BrandProduct[];
  gallery: BrandGalleryShot[];
};

export const brands = {
  title: "Our Brands",
  lead: "We build and manufacture brands from our facility in Bahrain — starting with Enaya and Clean.",
  page: {
    eyebrow: "Brand House",
    title: "Our Brands",
    heroLine: "Crafted in Bahrain. Built for the region.",
    intro:
      "WAED Industrial develops and manufactures brands with controlled formulation, consistent quality, and a clear commercial presence — beginning with Enaya and Clean.",
  },
  /**
   * Brand house catalog. Add entries here as new brands launch (designed for 3–5+).
   * Each entry renders its own section on /brands.
   */
  catalog: [
    {
      id: "enaya",
      name: "ENAYA",
      tagline: "Household and professional cleaning from Bahrain.",
      story:
        "Enaya brings dependable household and professional cleaning products from our registered facility in Hidd. Clear formulations. Flexible packs. Supply you can plan around.",
      focus: ["Household", "Hospitality", "Institutional", "Professional cleaning"],
      logo: "/img/enaya/logo.jpg",
      titleClass: "enaya-title",
      gallery: [
        {
          src: "/img/enaya/hand-sanitizer.jpg",
          alt: "Enaya hand sanitizer gel 500ml",
          caption: "Hand Sanitizer · 500ml",
        },
        {
          src: "/img/enaya/protective-set.jpg",
          alt: "Enaya portable personal protection set with sanitizer, wipes, mask and gloves",
          caption: "Protection Set",
        },
        {
          src: "/img/enaya/disinfectant-kit.jpg",
          alt: "Enaya hand sanitizer lifestyle photography",
          caption: "Everyday Care",
        },
      ],
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
    },
    {
      id: "clean",
      name: "CLEAN",
      tagline: "Everyday surfaces. Clear results.",
      story:
        "Clean is built for fast, reliable surface care across homes, offices, and shared spaces. Practical formulas. Fresh finish. Easy to stock and easy to use.",
      focus: ["Household", "Offices", "Retail", "Facilities"],
      logo: "/img/clean/logo.jpg",
      gallery: [
        {
          src: "/img/clean/product.jpg",
          alt: "Clean multipurpose cleaner bottle",
          caption: "Multipurpose Cleaner",
        },
        {
          src: "/img/clean/bathroom.jpg",
          alt: "Clean bathroom cleaner spray bottle",
          caption: "Bathroom Cleaner",
        },
        {
          src: "/img/clean/floor.jpg",
          alt: "Clean floor cleaner bottle",
          caption: "Floor Cleaner",
        },
        {
          src: "/img/clean/kitchen.jpg",
          alt: "Clean kitchen degreaser spray bottle",
          caption: "Kitchen Degreaser",
        },
        {
          src: "/img/clean/glass.jpg",
          alt: "Clean glass and window spray bottle",
          caption: "Glass & Window",
        },
      ],
      products: [
        {
          name: "Multipurpose Cleaner",
          category: "Surface",
          body: "Everyday multipurpose cleaner for counters, fixtures, and high-touch hard surfaces.",
        },
        {
          name: "Floor Cleaner",
          category: "Floor",
          body: "Floor cleaner for tiled and hard floors in homes and light commercial spaces.",
        },
        {
          name: "Bathroom Cleaner",
          category: "Bathroom",
          body: "Bathroom cleaner for sinks, tiles, and washroom surfaces that need a fresh finish.",
        },
        {
          name: "Kitchen Degreaser",
          category: "Kitchen",
          body: "Kitchen degreaser for cooktops, splashbacks, and grease-prone work areas.",
        },
        {
          name: "Glass & Window",
          category: "Surface",
          body: "Glass and window cleaner for streak-free shine on glass, mirrors, and panels.",
        },
      ],
    },
    // Add brand 3–5 here, e.g.:
    // { id: "brand-id", name: "NAME", tagline: "...", story: "...", focus: [], logo: "/img/.../logo.jpg", gallery: [], products: [] },
  ] satisfies BrandEntry[],
} as const;

/** Enaya lineup used on the homepage products grid. */
export const products = brands.catalog.find((b) => b.id === "enaya")!.products;

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
