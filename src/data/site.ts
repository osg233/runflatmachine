export const site = {
  name: "Run Flat Machine",
  legalName: "GM Defensive",
  domain: "https://runflatmachine.com",
  external: "https://gmdefensive.com/",
  description:
    "Run-flat tire changer machines for military, police, gendarmerie, and armored vehicle fleets.",
  nav: [
    { label: "Home", href: "/" },
    {
      label: "Products",
      href: "/products/",
      children: [
        {
          label: "GMR-023 Workshop",
          href: "/run-flat-machine-workshop-model/",
        },
        {
          label: "GMH-098 Container",
          href: "/gmh-098-run-flat-machine-container-model/",
        },
        {
          label: "GMT-099 Trailer",
          href: "/gmt-099-run-flat-machine-trailer-model/",
        },
      ],
    },
    { label: "FAQ", href: "/frequenty-asked-questions/" },
    { label: "Blog", href: "/blog/" },
    { label: "Contact Us", href: "/contact-us/" },
  ],
  metrics: [
    { value: "2", label: "Years warranty" },
    { value: "15", label: "Years spare parts availability" },
    { value: "34+", label: "Country references" },
    { value: "16-27 in", label: "Supported rim range" },
  ],
};

export const assets = {
  logo: "/assets/logo.png",
  logoMark: "/assets/logo-mark.png",
  hero: "/assets/operation.webp",
  training: "/assets/training.webp",
  operation: "/assets/operation.webp",
  runflatRemoval: "/assets/runflat-removal.webp",
  runflatTires: "/assets/military-run-flat-tires.webp",
  runflatMachine: "/assets/runflat-tire-machine.webp",
  inserts: "/assets/runflat-inserts.webp",
};

export type Product = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  model: string;
  href: string;
  summary: string;
  description: string;
  image: string;
  photo: string;
  bestFor: string;
  environment: string;
  availability: string;
  highlights: string[];
  capabilities: string[];
  specs: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    slug: "run-flat-machine-workshop-model",
    title: "GMR-023 Run Flat Machine Workshop Model",
    shortTitle: "GMR-023 Workshop",
    eyebrow: "Fixed workshop model",
    model: "GMR-023",
    href: "/run-flat-machine-workshop-model/",
    summary:
      "A fixed indoor run-flat changer for depot and workshop teams maintaining armored vehicles and military trucks.",
    description:
      "The GMR-023 is built for controlled workshop environments where maintenance teams need repeatable run-flat disassembly, split-rim handling, insert installation, and heavy wheel movement with less manual strain.",
    image: "/assets/gmr-023-products.webp",
    photo: "/assets/gmr-023-photo.webp",
    bestFor: "Permanent maintenance workshops",
    environment: "Indoor fixed installation",
    availability: "Workshop deployment",
    highlights: [
      "Hydraulic run-flat removal for heavy-duty tubeless tires",
      "Split-rim wheel replacement support",
      "Remote-controlled tire lifting system",
      "Joystick and radio remote controls with emergency stop logic",
    ],
    capabilities: [
      "Run-flat insert removal and installation",
      "Locking rim removal and reassembly",
      "Controlled lifting for complete wheel assemblies",
      "Operator-safe handling for high-force tire work",
    ],
    specs: [
      { label: "Configuration", value: "Workshop machine" },
      { label: "Use case", value: "Depot and indoor maintenance" },
      { label: "Rim range", value: "16-27 in" },
      { label: "Controls", value: "Joystick and radio remote" },
    ],
  },
  {
    slug: "gmh-098-run-flat-machine-container-model",
    title: "GMH-098 Run Flat Machine Container Model",
    shortTitle: "GMH-098 Container",
    eyebrow: "Containerized mobile workshop",
    model: "GMH-098",
    href: "/gmh-098-run-flat-machine-container-model/",
    summary:
      "A 20-foot container model designed for deployable tire maintenance in outdoor, remote, and semi-permanent operating zones.",
    description:
      "The GMH-098 packages the core run-flat changer workflow inside a containerized operating environment, helping defense teams establish a protected tire service point closer to the fleet.",
    image: "/assets/gmh-098-container.webp",
    photo: "/assets/gmh-098-photo.webp",
    bestFor: "Forward maintenance areas",
    environment: "20-foot container with climate-control potential",
    availability: "Portable site deployment",
    highlights: [
      "Containerized run-flat disassembly and reassembly workflow",
      "Integrated lifting and handling for heavy wheel assemblies",
      "Protected workspace for outdoor operating conditions",
      "Dual controls for safe, precise tire management",
    ],
    capabilities: [
      "Run-flat removal from heavy-duty tubeless tires",
      "Secure run-flat insert installation",
      "Split-rim wheel replacement support",
      "Container-based operation and storage",
    ],
    specs: [
      { label: "Configuration", value: "20-foot container" },
      { label: "Use case", value: "Outdoor and field workshops" },
      { label: "Rim range", value: "16-27 in" },
      { label: "Controls", value: "Joystick and radio remote" },
    ],
  },
  {
    slug: "gmt-099-run-flat-machine-trailer-model",
    title: "GMT-099 Run Flat Machine Trailer Model",
    shortTitle: "GMT-099 Trailer",
    eyebrow: "Tactical mobile model",
    model: "GMT-099",
    href: "/gmt-099-run-flat-machine-trailer-model/",
    summary:
      "A trailer-mounted run-flat changer for large units that need mobility, onboard support equipment, and field readiness.",
    description:
      "The GMT-099 is configured for field operations, pairing a mobile trailer platform with run-flat tire changing capability, onboard utility equipment, and a layout suited to large military maintenance units.",
    image: "/assets/gmt-099-trailer.webp",
    photo: "/assets/gmt-099-photo.webp",
    bestFor: "Mobile field maintenance",
    environment: "Trailer-mounted operating unit",
    availability: "Road-mobile deployment",
    highlights: [
      "Trailer-mounted mobile run-flat service capability",
      "Useful for dispersed units and large fleet operations",
      "Designed to support generator, air compressor, and tool workflows",
      "Emergency stop controls on joystick and remote systems",
    ],
    capabilities: [
      "Run-flat insert disassembly and replacement",
      "Armored vehicle and military truck tire handling",
      "Field maintenance support with onboard utilities",
      "Mobile readiness for multiple operating locations",
    ],
    specs: [
      { label: "Configuration", value: "Trailer model" },
      { label: "Use case", value: "Mobile field operations" },
      { label: "Rim range", value: "16-27 in" },
      { label: "Controls", value: "Joystick and radio remote" },
    ],
  },
];

export const capabilities = [
  {
    title: "Lift System",
    body: "Moves heavy wheel assemblies into position with less manual handling and better operator control.",
  },
  {
    title: "Ring Remover System",
    body: "Supports controlled split-rim and locking-ring workflows common in military wheel assemblies.",
  },
  {
    title: "Hydraulic System Unit",
    body: "Applies the force required for practical run-flat insert disassembly and reassembly.",
  },
  {
    title: "Controller Unit",
    body: "Uses joystick and radio remote control logic so operators can keep safer working distances.",
  },
  {
    title: "Safety Architecture",
    body: "Emergency-stop controls and stable handling routines reduce exposure during high-force tire work.",
  },
  {
    title: "Training and Support",
    body: "Worldwide delivery, setup support, operator training, warranty coverage, and spare parts planning.",
  },
];

export const faqs = [
  {
    q: "What is a run-flat tire?",
    a: "A run-flat tire system allows military and armored vehicles to continue moving for a limited distance after puncture or damage, helping preserve mobility in difficult terrain and higher-risk operating conditions.",
  },
  {
    q: "How does a run-flat tire changer machine work?",
    a: "The machine helps separate the wheel assembly, remove the run-flat insert, handle split-rim components, and support reinstallation into a new or serviced tire with hydraulic force and controlled lifting.",
  },
  {
    q: "Why are run-flat tires important for military vehicles?",
    a: "They help tactical, police, gendarmerie, and armored fleets remain mobile after tire damage, which can directly affect personnel safety, mission continuity, and recovery options.",
  },
  {
    q: "Which models does GM Defensive offer?",
    a: "GM Defensive offers three configurations: the GMR-023 Workshop Model, the GMH-098 Container Model, and the GMT-099 Trailer Model.",
  },
  {
    q: "Can the machines be used on all vehicle types?",
    a: "The machines are intended for military trucks, armored vehicles, and wheels equipped with run-flat systems in the 16-27 inch rim range.",
  },
  {
    q: "What support is available after purchase?",
    a: "The existing business message states worldwide delivery, setup, comprehensive on-site training, two-year parts warranty coverage, and long-term spare parts availability.",
  },
  {
    q: "How should a buyer choose the right model?",
    a: "Choose GMR-023 for fixed workshops, GMH-098 for protected field or outdoor maintenance points, and GMT-099 when the unit needs a road-mobile tire service capability.",
  },
  {
    q: "What is the purpose of a run-flat changer machine?",
    a: "It reduces downtime, manual strain, and safety risk while helping teams disassemble and reassemble military wheel assemblies with repeatable process control.",
  },
];

export type Post = {
  slug: string;
  title: string;
  href: string;
  date: string;
  author: "hazel" | "admin";
  image: string;
  excerpt: string;
  category: string;
  tags: string[];
  sections: { heading: string; body: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "military-tire-disassembly",
    title: "Military Tire Disassembly & Runflat Machine",
    href: "/military-tire-disassembly/",
    date: "2025-11-24",
    author: "hazel",
    image: "/assets/runflat-removal.webp",
    excerpt:
      "A practical overview of why dedicated run-flat disassembly equipment matters for armored and tactical fleet maintenance.",
    category: "run-flat-machine",
    tags: ["military-tires", "run-flat-machine", "run-flat-changer-machine"],
    sections: [
      {
        heading: "Why Dedicated Tooling Matters",
        body: [
          "Armored fleets are only as mobile as their tires. Heavy beadlocked wheel assemblies and internal run-flat inserts are engineered for survivability, but they are demanding to service with generic shop tools.",
          "A dedicated run-flat machine gives maintenance teams a controlled method for bead separation, insert removal, reassembly, and inspection.",
        ],
      },
      {
        heading: "Safer Disassembly Workflow",
        body: [
          "A proper workflow starts with deflation, secure positioning, controlled hardware removal, bead separation, and machine-assisted run-flat extraction.",
          "The goal is to protect technicians, preserve usable rims and inserts, and reduce the time vehicles spend out of service.",
        ],
      },
      {
        heading: "Procurement Value",
        body: [
          "For defense buyers, the case is not only speed. It is process repeatability, reduced manual exposure, training standardization, and readiness across field and depot maintenance teams.",
        ],
      },
    ],
  },
  {
    slug: "military-tire-disassemble-tool",
    title: "Military Tire Disassemble Tool & Run-Flat Disassembly Guide",
    href: "/military-tire-disassemble-tool/",
    date: "2025-11-24",
    author: "hazel",
    image: "/assets/military-run-flat-tires.webp",
    excerpt:
      "A procurement-ready guide for evaluating machine-assisted run-flat disassembly and installation systems.",
    category: "run-flat-machine",
    tags: ["military-tires", "run-flat-tire", "run-flat-tire-changer"],
    sections: [
      {
        heading: "From Manual Force to Controlled Process",
        body: [
          "Run-flat systems increase survivability but add maintenance complexity. Manual methods are slow, physically demanding, and difficult to standardize across teams.",
          "Machine-assisted tooling gives maintenance teams a safer, repeatable path for rim separation, run-flat extraction, lubrication, shield positioning, and reassembly.",
        ],
      },
      {
        heading: "Fleet Applications",
        body: [
          "The workflow applies to tactical and armored fleets such as HMMWV, JLTV, MRAP, APC, and LAV families where heavy tire assemblies can quickly become a maintenance bottleneck.",
        ],
      },
      {
        heading: "Selection Criteria",
        body: [
          "Buyers should evaluate rim compatibility, lifting and hydraulic capacity, operator controls, emergency-stop logic, training requirements, spare parts availability, and model fit for workshop, container, or trailer deployment.",
        ],
      },
    ],
  },
  {
    slug: "comparing-gm-run-flat-machine-with-others",
    title: "Comparing GM Run-Flat Machine with Others",
    href: "/comparing-gm-run-flat-machine-with-others/",
    date: "2024-07-11",
    author: "admin",
    image: "/assets/runflat-tire-machine.webp",
    excerpt:
      "A buyer-focused comparison of run-flat tire changer criteria for military and armored vehicle maintenance.",
    category: "run-flat-machine",
    tags: ["run-flat-machine", "run-flat-tire-changer"],
    sections: [
      {
        heading: "What Comparison Should Focus On",
        body: [
          "The most useful comparison is not cosmetic. It should focus on rim compatibility, controlled force, operator safety, maintainability, support, and deployment model.",
          "A run-flat changer needs to fit the way a force actually maintains its fleet, whether inside a workshop, near a forward operating zone, or from a mobile trailer.",
        ],
      },
      {
        heading: "GM Defensive Positioning",
        body: [
          "GM Defensive presents three model configurations around one core maintenance problem: reducing downtime and manual strain when servicing military run-flat tire assemblies.",
        ],
      },
      {
        heading: "Buyer Confidence",
        body: [
          "International buyers should look for training, spare parts planning, warranty clarity, and the ability to support different operating environments without changing the underlying process.",
        ],
      },
    ],
  },
  {
    slug: "5-keys-of-run-flat-changer-machines-for-armored-vehicles",
    title: "5 Keys of Run-Flat Changer Machines for Armored Vehicles",
    href: "/5-keys-of-run-flat-changer-machines-for-armored-vehicles/",
    date: "2024-07-11",
    author: "admin",
    image: "/assets/training.webp",
    excerpt:
      "Five practical benefits of using run-flat tire changer machines for armored vehicle maintenance teams.",
    category: "run-flat-machine",
    tags: ["armored-vehicle", "military-tires-s", "run-flat-tire", "run-flat-tire-changer"],
    sections: [
      {
        heading: "Speed With Control",
        body: [
          "Run-flat tire work is heavy, high-force work. A dedicated machine helps teams move faster without relying on improvised handling.",
        ],
      },
      {
        heading: "Operator Safety",
        body: [
          "Controlled lifting, hydraulic force, remote controls, and emergency-stop logic reduce avoidable exposure during tire disassembly and installation.",
        ],
      },
      {
        heading: "Readiness and Cost Discipline",
        body: [
          "Better tire handling can reduce avoidable damage to rims and inserts, shorten maintenance cycles, and help fleets return vehicles to duty with more predictable timing.",
        ],
      },
    ],
  },
  {
    slug: "run-flat-changer-guide-for-military-success",
    title: "Run-Flat Changer Guide for Military Success",
    href: "/run-flat-changer-guide-for-military-success/",
    date: "2024-02-23",
    author: "admin",
    image: "/assets/operation.webp",
    excerpt:
      "A guide for selecting run-flat changer machines for military and security force maintenance programs.",
    category: "run-flat-machine",
    tags: ["military-tires", "run-flat-machine", "run-flat-changer-machine"],
    sections: [
      {
        heading: "Understand the Mission Profile",
        body: [
          "Before choosing a machine, define where the tires will be serviced: a fixed workshop, a deployable containerized point, or a mobile trailer operation.",
        ],
      },
      {
        heading: "Confirm Compatibility",
        body: [
          "The selected machine should support the rim sizes, tire types, and run-flat insert workflows used across the fleet. GM Defensive positions its machines for 16-27 inch rims.",
        ],
      },
      {
        heading: "Plan the Full Lifecycle",
        body: [
          "A serious acquisition should include training, installation, spare parts planning, operator documentation, and long-term support expectations.",
        ],
      },
    ],
  },
];

export const taxonomyPages = {
  categories: [{ slug: "run-flat-machine", label: "Run Flat Machine" }],
  tags: [
    { slug: "armored-vehicle", label: "Armored Vehicle" },
    { slug: "military-tires", label: "Military Tires" },
    { slug: "military-tires-s", label: "Military Tires" },
    { slug: "run-flat-changer-machine", label: "Run Flat Changer Machine" },
    { slug: "run-flat-machine", label: "Run Flat Machine" },
    { slug: "run-flat-tire", label: "Run Flat Tire" },
    { slug: "run-flat-tire-changer", label: "Run Flat Tire Changer" },
  ],
  authors: [
    { slug: "hazel", label: "Hazel" },
    { slug: "admin", label: "Admin" },
  ],
  fusion: [
    { slug: "content", label: "Content" },
    { slug: "footer", label: "Footer" },
    { slug: "header", label: "Header" },
    { slug: "page_title_bar", label: "Page Title Bar" },
  ],
  elements: [{ slug: "post_cards", label: "Post Cards" }],
};

export const utilityPages = [
  { slug: "products", href: "/products/", title: "Products", lastmod: "2025-11-21" },
  {
    slug: "frequenty-asked-questions",
    href: "/frequenty-asked-questions/",
    title: "Frequenty Asked Questions",
    lastmod: "2024-03-09",
  },
  { slug: "blog", href: "/blog/", title: "Blog", lastmod: "2024-02-24" },
  { slug: "contact-us", href: "/contact-us/", title: "Contact Us", lastmod: "2025-11-21" },
];

export const lastmods: Record<string, string> = {
  "/": "2025-12-16",
  "/blog/": "2024-02-24",
  "/frequenty-asked-questions/": "2024-03-09",
  "/products/": "2025-11-21",
  "/gmt-099-run-flat-machine-trailer-model/": "2025-11-21",
  "/gmh-098-run-flat-machine-container-model/": "2025-11-21",
  "/run-flat-machine-workshop-model/": "2025-11-21",
  "/contact-us/": "2025-11-21",
  "/run-flat-changer-guide-for-military-success/": "2024-02-23",
  "/5-keys-of-run-flat-changer-machines-for-armored-vehicles/": "2024-07-11",
  "/comparing-gm-run-flat-machine-with-others/": "2024-07-11",
  "/military-tire-disassembly/": "2025-11-24",
  "/military-tire-disassemble-tool/": "2025-11-24",
};

export const sitemapGroups = {
  pages: [
    "/",
    "/blog/",
    "/frequenty-asked-questions/",
    "/products/",
    "/contact-us/",
  ],
  products: products.map((product) => product.href),
  posts: posts.map((post) => post.href),
  categories: taxonomyPages.categories.map((item) => `/category/${item.slug}/`),
  tags: taxonomyPages.tags.map((item) => `/tag/${item.slug}/`),
  fusion: taxonomyPages.fusion.map((item) => `/fusion_tb_category/${item.slug}/`),
  elements: taxonomyPages.elements.map((item) => `/element_category/${item.slug}/`),
  authors: taxonomyPages.authors.map((item) => `/author/${item.slug}/`),
};

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getPostsForTag(slug: string) {
  return posts.filter((post) => post.tags.includes(slug));
}

export function getPostsForCategory(slug: string) {
  return posts.filter((post) => post.category === slug);
}

export function getPostsForAuthor(slug: string) {
  return posts.filter((post) => post.author === slug);
}
