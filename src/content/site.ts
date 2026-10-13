/** Source of truth: Circle Team approved content revisions (Oct 2026). */

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
  { href: "/#company-profile", label: "Company Profile" },
  { href: "/#factory", label: "Factory" },
  { href: "/brands", label: "Our Brands" },
  { href: "/#private-label", label: "Private Label" },
  { href: "/#our-services", label: "Our Services" },
  { href: "/#quality", label: "Quality" },
  { href: "/#contact", label: "Contact" },
];

export const home = {
  headline: "Innovating the Future of Cleaning Manufacturing.",
  support: "Manufactured in Bahrain. Ready to Supply Regionally.",
  ctaPrimary: "Request a Quote",
  ctaSecondary: "Explore Factory",
  highlights: [
    "Bahrain-based manufacturing",
    "Innovative cleaning and hygiene solutions",
    "Private-label and contract manufacturing",
    "Flexible production and packaging",
    "Quality-focused product development",
  ],
} as const;

export const about = {
  eyebrow: "About WAED Industrial",
  title: "Innovative cleaning and hygiene solutions.",
  shortIntro: [
    "WAED Industrial is a Bahrain-based manufacturing company specializing in the development and production of innovative cleaning and hygiene solutions.",
    "Combining modern manufacturing capabilities, technical expertise, and a commitment to quality, we develop our own brands and provide private-label manufacturing solutions for consumer, commercial, and industrial markets.",
  ],
  profileEyebrow: "Company Profile",
  profileTitle: "Innovation in Manufacturing. Excellence in Every Product.",
  fullProfile: [
    "WAED Industrial is a Bahrain-based manufacturing company dedicated to developing and producing high-quality cleaning and hygiene solutions for consumer, commercial, and industrial applications.",
    "Driven by innovation, technical expertise, and a commitment to continuous improvement, we combine modern manufacturing capabilities with a quality-focused approach to create products that meet evolving market needs.",
    "Our operations bring together product formulation, manufacturing, filling, packaging, and quality control, providing an integrated platform for our own brands and private-label manufacturing partnerships.",
    "At WAED Industrial, we believe manufacturing goes beyond production. It is about creating value, building trust, and establishing lasting partnerships through consistency, flexibility, and a commitment to excellence.",
  ],
  closing: "Rooted in Bahrain. Driven by Innovation. Built for the Future.",
  values: [
    { name: "Quality", note: "Consistent quality across every stage of manufacturing." },
    { name: "Innovation", note: "Formulation development and continuous improvement." },
    { name: "Safety", note: "Safety-conscious practice across production and handling." },
    { name: "Customer Focus", note: "Partnerships built on responsiveness and trust." },
    { name: "Reliability", note: "Flexible manufacturing and dependable supply." },
  ],
} as const;

export const factory = {
  eyebrow: "Our Factory",
  title: "Advanced Manufacturing. Flexible Solutions.",
  lead:
    "WAED Industrial combines modern manufacturing equipment, versatile production systems, and technical expertise to deliver a wide range of cleaning and hygiene solutions.",
  body: [
    "Our manufacturing facility in Bahrain is equipped with industrial mixing systems, water treatment technology, automatic and semi-automatic filling equipment, labeling and packaging solutions, and laboratory facilities for quality control.",
    "Our integrated capabilities support product development, flexible production volumes, multiple packaging formats, and private-label manufacturing to meet the diverse needs of our business partners.",
  ],
  location: "Unit 9, Building 2094, Road 1529, Block 115, Hidd, Kingdom of Bahrain",
  journey: {
    kicker: "From Concept to Shipment",
    title: "The WAED Manufacturing Journey",
    phases: [
      {
        id: "development",
        label: "Phase 01",
        title: "Product Development & Preparation",
        steps: [
          "Product Requirements & Technical Brief",
          "Formulation Development & Laboratory Sampling",
          "Sample Evaluation & Approval",
          "Production Planning & Material Sourcing",
          "Incoming Material Inspection",
        ],
      },
      {
        id: "manufacturing",
        label: "Phase 02",
        title: "Manufacturing & Quality Control",
        steps: [
          "Water Treatment & Batch Preparation",
          "Precision Dosing & Controlled Mixing",
          "In-Process Quality Control",
          "Bulk Product Verification & Approval",
        ],
      },
      {
        id: "packaging",
        label: "Phase 03",
        title: "Packaging, Release & Delivery",
        steps: [
          "Filling & Capping",
          "Labeling, Batch Coding & Packaging",
          "Final Quality Inspection & Batch Release",
          "Finished Goods Storage & Dispatch",
        ],
      },
    ],
  },
} as const;

export type BrandProduct = {
  name: string;
  category: string;
  body: string;
  image?: string;
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
  lead:
    "WAED Industrial develops and manufactures brands with controlled formulation, consistent quality, and a clear commercial presence.",
  page: {
    eyebrow: "Brand House",
    title: "Our Brands",
    heroLine: "Crafted in Bahrain. Built for the region.",
    intro:
      "WAED Industrial is the parent manufacturing company behind our brand house. Explore each brand to discover its identity and product range.",
  },
  /**
   * Brand house catalog. Add entries here as new brands launch (designed for 3–5+).
   */
  catalog: [
    {
      id: "enaya",
      name: "ENAYA",
      tagline: "Household and professional cleaning from Bahrain.",
      story:
        "Enaya brings dependable household and professional cleaning products from our manufacturing facility in Bahrain. Clear formulations. Flexible packs. Supply you can plan around.",
      focus: ["Household", "Hospitality", "Institutional", "Professional cleaning"],
      logo: "/img/enaya/logo.jpg",
      titleClass: "enaya-title",
      gallery: [
        {
          src: "/img/enaya/dishwashing.jpg",
          alt: "Enaya dishwashing liquid bottle",
          caption: "Dishwashing Liquid",
        },
        {
          src: "/img/enaya/hand-wash.jpg",
          alt: "Enaya hand wash bottle",
          caption: "Hand Wash",
        },
        {
          src: "/img/enaya/laundry.jpg",
          alt: "Enaya laundry liquid jug",
          caption: "Laundry Liquid",
        },
        {
          src: "/img/enaya/fabric-softener.jpg",
          alt: "Enaya fabric softener bottle",
          caption: "Fabric Softener",
        },
        {
          src: "/img/enaya/hand-sanitizer.jpg",
          alt: "Enaya hand sanitizer gel 500ml",
          caption: "Hand Sanitizer · 500ml",
        },
      ],
      products: [
        {
          name: "Dishwashing Liquid",
          category: "Kitchen",
          body: "Concentrated dishwashing liquid for household kitchens and professional food-service environments.",
          image: "/img/enaya/dishwashing.jpg",
        },
        {
          name: "Hand Wash",
          category: "Hygiene",
          body: "Liquid hand wash for everyday personal hygiene in home and workplace settings.",
          image: "/img/enaya/hand-wash.jpg",
        },
        {
          name: "Laundry Liquid",
          category: "Laundry",
          body: "Laundry detergent liquid for domestic and institutional laundry loads.",
          image: "/img/enaya/laundry.jpg",
        },
        {
          name: "Fabric Softener",
          category: "Laundry",
          body: "Fabric softener for improved fabric feel after laundering.",
          image: "/img/enaya/fabric-softener.jpg",
        },
        {
          name: "Multipurpose Cleaner",
          category: "Surface",
          body: "General-purpose cleaner for routine cleaning of hard surfaces.",
          image: "/img/enaya/multipurpose.jpg",
        },
        {
          name: "Glass Cleaner",
          category: "Surface",
          body: "Glass cleaner for streak-free cleaning of windows and glass surfaces.",
          image: "/img/enaya/glass.jpg",
        },
        {
          name: "Disinfectant",
          category: "Hygiene",
          body: "Disinfectant for hygiene-focused cleaning protocols in commercial settings.",
          image: "/img/enaya/disinfectant.jpg",
        },
        {
          name: "Hand Sanitizer",
          category: "Hygiene",
          body: "Hand sanitizer for entrances, workplaces and public-facing counters.",
          image: "/img/enaya/hand-sanitizer.jpg",
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
          image: "/img/clean/product.jpg",
        },
        {
          name: "Floor Cleaner",
          category: "Floor",
          body: "Floor cleaner for tiled and hard floors in homes and light commercial spaces.",
          image: "/img/clean/floor.jpg",
        },
        {
          name: "Bathroom Cleaner",
          category: "Bathroom",
          body: "Bathroom cleaner for sinks, tiles, and washroom surfaces that need a fresh finish.",
          image: "/img/clean/bathroom.jpg",
        },
        {
          name: "Kitchen Degreaser",
          category: "Kitchen",
          body: "Kitchen degreaser for cooktops, splashbacks, and grease-prone work areas.",
          image: "/img/clean/kitchen.jpg",
        },
        {
          name: "Glass & Window",
          category: "Surface",
          body: "Glass and window cleaner for streak-free shine on glass, mirrors, and panels.",
          image: "/img/clean/glass.jpg",
        },
      ],
    },
    // Add brand 3–5 here as the house grows.
  ] satisfies BrandEntry[],
} as const;

export function getBrand(id: string) {
  return brands.catalog.find((b) => b.id === id);
}

export const privateLabel = {
  eyebrow: "Private Label & Contract Manufacturing",
  title: "Your Vision. Our Formulation and Manufacturing Expertise.",
  lead:
    "At WAED Industrial, we provide comprehensive private-label and contract manufacturing solutions, with a strong focus on product formulation, innovation, and customization.",
  body: [
    "From developing new cleaning formulations to enhancing existing products, we work with our partners to create solutions tailored to their performance requirements, market preferences, and brand identity.",
    "Our integrated services cover the journey from formulation development and laboratory sampling to manufacturing, filling, labeling, and packaging.",
  ],
  servicesTitle: "Our Services",
  services: [
    "Custom Formulation Development & Innovation",
    "Product Research, Sampling & Evaluation",
    "Existing Formulation Enhancement",
    "Private Label & Contract Manufacturing",
    "Filling, Labeling & Packaging",
  ],
  cta: "Request a Manufacturing Consultation",
} as const;

export const quality = {
  eyebrow: "Quality & Certifications",
  title: "Quality at Every Stage. Excellence in Every Product.",
  lead:
    "At WAED Industrial, quality is at the core of our manufacturing philosophy.",
  body: [
    "From raw material selection and formulation development to production, testing, and final packaging, we focus on maintaining consistent quality, product reliability, and continuous improvement.",
    "Our commitment to quality is supported by structured manufacturing processes, laboratory testing, and applicable industry standards.",
  ],
  certifications: [
    {
      code: "ISO 9001",
      title: "Quality Management System",
      mark: "9001",
    },
    {
      code: "ISO 14001",
      title: "Environmental Management System",
      mark: "14001",
    },
    {
      code: "ISO 45001",
      title: "Occupational Health & Safety Management System",
      mark: "45001",
    },
    {
      code: "ISO 22716",
      title: "Cosmetics Good Manufacturing Practices",
      mark: "22716",
    },
  ],
  note: "Certification marks shown for reference to the standards held by WAED Industrial.",
} as const;

export const markets = {
  eyebrow: "Markets & Export",
  title: "Manufactured in Bahrain. Connecting to Regional and Global Markets.",
  lead:
    "Strategically based in the Kingdom of Bahrain, WAED Industrial is positioned to serve the growing demand for innovative cleaning and hygiene solutions across the GCC and international markets.",
  body: "We aim to build strong, long-term partnerships with distributors, retailers, and private-label businesses, supported by flexible manufacturing capabilities and a commitment to quality and reliable supply.",
  targets: ["GCC", "Regional markets", "International partners"],
} as const;

export const contact = {
  eyebrow: "Contact Us",
  title: "Let’s Build Something Great Together.",
  lead:
    "Whether you’re looking for innovative cleaning solutions, private-label manufacturing, custom formulation development, or distribution partnerships, our team is ready to explore opportunities with you.",
  support: "Get in touch with WAED Industrial to discuss your business requirements.",
  enquiryTypes: [
    "General Enquiry",
    "Product Enquiry",
    "Private Label & Contract Manufacturing",
    "Custom Formulation Development",
    "Request a Quotation",
    "Distribution & Business Partnerships",
  ],
  submitLabel: "Submit Enquiry",
  successMessage:
    "Thank you. Your enquiry is ready to send — your email client should open with the details for our team at WAED Industrial.",
} as const;
