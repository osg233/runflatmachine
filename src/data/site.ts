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
  hero: "/assets/hero-workshop-concept.jpg",
  training: "/assets/maintenance-workshop.png",
  operation: "/assets/operation.webp",
  runflatRemoval: "/assets/runflat-removal.webp",
  runflatTires: "/assets/military-run-flat-tires.webp",
  runflatMachine: "/assets/runflat-tire-machine.webp",
  inserts: "/assets/runflat-inserts.webp",
  faqHero: "/assets/faq-hero-team.png",
  contactHero: "/assets/contact-hero-ops.png",
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
  heroImage: string;
  bestFor: string;
  environment: string;
  availability: string;
  highlights: string[];
  capabilities: string[];
  specs: { label: string; value: string }[];
  /** Extended product data for comprehensive detail pages */
  technicalOverview: string;
  workflow: { step: string; title: string; detail: string }[];
  engineeringSystems: { title: string; description: string; icon: string }[];
  compatibleVehicles: string[];
  logistics: { title: string; body: string }[];
  dimensions: { label: string; value: string }[];
  certifications: string[];
  warrantyInfo: string;
  trainingInfo: string;
  sparePartsInfo: string;
  deliveryInfo: string;
  gallery?: { src: string; alt: string }[];
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
    image: "/assets/gmr-023-workshop-full.png",
    photo: "/assets/gmr-023-showcase.png",
    heroImage: "/assets/hero-workshop-depot.png",
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
    technicalOverview: "The GMR-023 Workshop Model is the fixed-installation configuration of the GM Defensive run-flat changer family. Engineered for controlled depot environments, it delivers the highest throughput and most comfortable operating conditions for maintenance teams servicing military and armored vehicle tire assemblies. The machine's hydraulic architecture is calibrated for sustained, high-volume operations where predictability, repeatability, and operator safety are paramount. Every subsystem — from the integrated lift to the hydraulic extraction cylinders — is designed to reduce manual strain while maintaining precise control over forces that can exceed several tons during run-flat insert operations.",
    workflow: [
      { step: "01", title: "Wheel Positioning", detail: "Heavy wheel assemblies are guided onto the machine platform using the integrated remote-controlled lifting system, eliminating dangerous manual handling of assemblies weighing up to 250 kg." },
      { step: "02", title: "Secure Mounting", detail: "The wheel is locked into the machine's centering mechanism with adjustable clamps that accommodate rim diameters from 16 to 27 inches, ensuring stable positioning throughout the service cycle." },
      { step: "03", title: "Controlled Deflation & Hardware Removal", detail: "Full tire deflation is verified before locking-ring or beadlock hardware is systematically removed using integrated tooling, following a safety-first sequence to prevent uncontrolled energy release." },
      { step: "04", title: "Hydraulic Bead Separation", detail: "Calibrated hydraulic cylinders apply controlled, progressive force to break the tire bead from the rim. This eliminates the dangerous impact-based methods used in manual operations." },
      { step: "05", title: "Run-Flat Insert Extraction", detail: "The hydraulic extraction system removes the run-flat insert from the tire cavity with metered force, protecting both the insert for potential reuse and the rim from deformation damage." },
      { step: "06", title: "Reassembly & Verification", detail: "New or refurbished inserts are lubricated, aligned, and hydraulically pressed into position. The complete assembly undergoes bead seating, hardware installation, and inflation to operating specifications." },
    ],
    engineeringSystems: [
      { title: "Hydraulic Power Unit", description: "High-pressure hydraulic system with calibrated cylinders delivering controlled, progressive force for bead breaking and insert extraction. Designed for sustained duty cycles in workshop environments.", icon: "hydraulic" },
      { title: "Integrated Lift System", description: "Remote-controlled wheel lifting mechanism capable of handling complete military wheel assemblies. Reduces manual handling requirements and associated injury risks.", icon: "lift" },
      { title: "Ring Remover Assembly", description: "Purpose-built tooling for controlled split-rim and locking-ring removal workflows common across NATO-standard military wheel assemblies.", icon: "ring" },
      { title: "Dual Control Interface", description: "Joystick station for precision operations combined with radio remote control for safe-distance operation. Both systems feature integrated emergency-stop logic.", icon: "control" },
      { title: "Safety Architecture", description: "Multi-layer safety system including emergency-stop circuits on all control interfaces, stable handling routines, and operator-safe working envelopes for high-force operations.", icon: "safety" },
      { title: "Centering & Clamping", description: "Adjustable centering mechanism with heavy-duty clamps designed to accommodate the full 16–27 inch rim range, providing secure, repeatable wheel positioning.", icon: "clamp" },
    ],
    compatibleVehicles: ["HMMWV / Humvee", "JLTV (Joint Light Tactical Vehicle)", "MRAP (Cougar, MaxxPro, Buffalo, Caiman)", "Stryker (M1126, M1128)", "HEMTT (M977, M978, M984)", "FMTV family", "Boxer 8×8", "BTR series", "LAV / ASLAV", "Patria AMV", "VBCI", "Pandur II", "Piranha / LAV III"],
    logistics: [
      { title: "Installation & Commissioning", body: "GM Defensive provides complete installation support including site assessment, foundation planning, utility connections, machine assembly, hydraulic system commissioning, and operational verification before handover." },
      { title: "Operator Training Program", body: "Comprehensive on-site training covers machine operation, safety protocols, maintenance procedures, troubleshooting, and hands-on practice with actual wheel assemblies from the customer's fleet inventory." },
      { title: "Spare Parts Program", body: "15-year spare parts availability guarantee ensures long-term operational continuity. Critical spares kits can be configured based on expected service volumes and operating tempo." },
      { title: "Warranty Coverage", body: "2-year manufacturer warranty covering all mechanical, hydraulic, and electronic components under normal operating conditions. Extended warranty programs available for long-term procurement contracts." },
    ],
    dimensions: [
      { label: "Rim Compatibility", value: "16–27 inches" },
      { label: "Control Systems", value: "Joystick + Radio Remote" },
      { label: "Safety Systems", value: "Emergency Stop (all interfaces)" },
      { label: "Power Supply", value: "380V / 50Hz (configurable)" },
      { label: "Hydraulic Pressure", value: "Calibrated for heavy-duty inserts" },
      { label: "Lifting Capacity", value: "Full military wheel assemblies" },
    ],
    certifications: ["CE Marking", "ISO 9001 Quality Management", "NATO STANAG Compatible", "MIL-STD Compliant Design"],
    warrantyInfo: "2-year comprehensive warranty covering all mechanical, hydraulic, and electronic components. Extended warranty options available for multi-unit procurement programs.",
    trainingInfo: "GM Defensive delivers worldwide on-site operator training including machine operation, safety procedures, maintenance protocols, troubleshooting guides, and hands-on practice sessions with actual fleet wheel assemblies.",
    sparePartsInfo: "15-year spare parts availability guarantee with pre-configured critical spares kits. Replacement components shipped worldwide with priority logistics support for operational continuity.",
    deliveryInfo: "Worldwide delivery with complete installation, commissioning, operator training, and technical documentation. Typical deployment timeline: 8–12 weeks from contract signature to operational readiness.",
    gallery: [
      { src: "/assets/gmr-023-workshop-full.png", alt: "GMR-023 Workshop Model — full machine side view with integrated crane and hydraulic system" },
      { src: "/assets/gmr-023-workshop-front.png", alt: "GMR-023 Workshop Model — front view showing tire mounting and chain lift operation" },
      { src: "/assets/gmr-023-workshop-operation.png", alt: "GMR-023 Workshop Model — live operation with operators handling military tire assembly" },
      { src: "/assets/gmr-023-workshop-factory.png", alt: "GMR-023 Workshop Model — factory production line with multiple units under assembly" },
      { src: "/assets/gmr-023-workshop-military.png", alt: "GMR-023 Workshop Model — military depot deployment with soldiers operating the system" },
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
    image: "/assets/gmh-098-container-field.png",
    photo: "/assets/gmh-098-showcase.png",
    heroImage: "/assets/hero-container-fob.png",
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
    technicalOverview: "The GMH-098 Container Model packages the full run-flat changer capability inside a standard 20-foot ISO shipping container. This configuration transforms the container into a self-contained, deployable workshop that can be transported by truck, rail, sea, or air to wherever fleet maintenance demand exists. The containerized design provides a protected, weather-resistant workspace while maintaining the same hydraulic force, lifting capacity, and operator control systems found in the fixed workshop model. Climate-control provisions allow operations in extreme temperature environments, from desert heat to arctic cold.",
    workflow: [
      { step: "01", title: "Container Deployment", detail: "The 20-foot ISO container is transported to the operating site using standard military logistics assets (flatbed truck, rail, or sealift) and positioned on level ground with basic utility connections." },
      { step: "02", title: "Workshop Activation", detail: "Container doors open to reveal the integrated workspace. Power, lighting, and climate-control systems are activated. The machine platform is prepared for wheel assembly intake." },
      { step: "03", title: "Wheel Intake & Mounting", detail: "Heavy wheel assemblies are loaded into the container using the integrated lifting system. Adjustable clamps secure the wheel for the full range of rim sizes from 16 to 27 inches." },
      { step: "04", title: "Hydraulic Disassembly Cycle", detail: "Inside the protected workspace, the full disassembly sequence proceeds: deflation, hardware removal, hydraulic bead separation, and controlled run-flat insert extraction — identical to the workshop model workflow." },
      { step: "05", title: "Inspection & Reassembly", detail: "Components are inspected within the container's controlled environment. New or refurbished inserts are installed with proper lubrication and hydraulic press-fitting for consistent seating pressure." },
      { step: "06", title: "Quality Verification & Release", detail: "Reassembled wheel undergoes bead seating verification, hardware torque checks, and inflation to operating specs before release back to the vehicle." },
    ],
    engineeringSystems: [
      { title: "Containerized Architecture", description: "Standard 20-foot ISO container modified with integrated workspace layout, machine mounting points, utility pass-throughs, and environmental sealing for all-weather operations.", icon: "container" },
      { title: "Hydraulic Power Unit", description: "Same high-pressure hydraulic system as the workshop model, configured for container-mounted operation with vibration isolation and compact plumbing layout.", icon: "hydraulic" },
      { title: "Climate-Control Provisions", description: "Container insulation and HVAC mounting provisions allow temperature-controlled operations in extreme environments, protecting both operators and hydraulic system performance.", icon: "climate" },
      { title: "Integrated Lift System", description: "Container-optimized lifting mechanism for loading and positioning heavy wheel assemblies within the confined but efficiently organized workspace.", icon: "lift" },
      { title: "Dual Control Interface", description: "Joystick and radio remote control systems with emergency-stop logic, configured for the container workspace ergonomics.", icon: "control" },
      { title: "Deployable Utility Systems", description: "Pre-wired electrical connections, compressed air provisions, and lighting systems designed for rapid site activation without permanent infrastructure.", icon: "utility" },
    ],
    compatibleVehicles: ["HMMWV / Humvee", "JLTV (Joint Light Tactical Vehicle)", "MRAP (Cougar, MaxxPro, Buffalo, Caiman)", "Stryker (M1126, M1128)", "HEMTT (M977, M978, M984)", "FMTV family", "Boxer 8×8", "BTR series", "LAV / ASLAV", "Patria AMV", "VBCI", "Pandur II", "Piranha / LAV III"],
    logistics: [
      { title: "Worldwide Deployability", body: "Standard ISO container dimensions ensure compatibility with global logistics networks including military sealift, commercial shipping, rail transport, and flatbed truck delivery to any operating location." },
      { title: "Rapid Site Activation", body: "Container workshop can be operationally ready within hours of arrival. No permanent foundations required — level ground and basic power connection are the primary site requirements." },
      { title: "Operator Training Program", body: "Same comprehensive training program as workshop model, with additional modules covering container deployment procedures, climate-control operation, and field maintenance protocols." },
      { title: "15-Year Spare Parts Guarantee", body: "Long-term spare parts availability ensures the container workshop remains operational across extended deployment cycles and multiple operating locations." },
    ],
    dimensions: [
      { label: "Container Format", value: "20-foot ISO standard" },
      { label: "Rim Compatibility", value: "16–27 inches" },
      { label: "Control Systems", value: "Joystick + Radio Remote" },
      { label: "Safety Systems", value: "Emergency Stop (all interfaces)" },
      { label: "Climate Control", value: "HVAC-ready provisions" },
      { label: "Transport Modes", value: "Truck, rail, sea, or air" },
    ],
    certifications: ["CE Marking", "ISO 9001 Quality Management", "NATO STANAG Compatible", "ISO 668 Container Standards"],
    warrantyInfo: "2-year comprehensive warranty covering all mechanical, hydraulic, electronic, and container structural components. Extended warranty options available for multi-unit programs.",
    trainingInfo: "Worldwide on-site training including container deployment procedures, machine operation, safety protocols, climate-control systems, and hands-on practice with fleet wheel assemblies.",
    sparePartsInfo: "15-year spare parts availability with pre-positioned critical spares kits. Logistics support designed for forward-deployed operating environments with priority shipping.",
    deliveryInfo: "Worldwide delivery via standard military or commercial logistics. Container workshop arrives ready for immediate site activation. Typical timeline: 10–14 weeks from contract to operational deployment.",
    gallery: [
      { src: "/assets/container-interior-operation.png", alt: "GMH-098 Container Model — interior view showing the run-flat changer machine installed and operational inside the 20-foot ISO container" },
      { src: "/assets/container-exterior-view.png", alt: "GMH-098 Container Model — exterior view of the containerized run-flat workshop ready for deployment" },
      { src: "/assets/container-multiple-units.png", alt: "GMH-098 Container Model — multiple container units prepared for shipment to international defense customers" },
      { src: "/assets/container-machine-detail.png", alt: "GMH-098 Container Model — detailed view of the hydraulic run-flat changer system inside the container workspace" },
      { src: "/assets/container-installation-setup.png", alt: "GMH-098 Container Model — on-site installation and commissioning with technicians setting up the containerized workshop" },
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
    image: "/assets/gmt-099-trailer-convoy.png",
    photo: "/assets/gmt-099-trailer-field-ops.png",
    heroImage: "/assets/hero-trailer-field.png",
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
    technicalOverview: "The GMT-099 Trailer Model is the fully mobile configuration of the GM Defensive run-flat changer family. Mounted on a purpose-built trailer platform, it brings complete run-flat tire service capability to wherever military vehicles are operating — from forward staging areas to dispersed field maintenance points across multiple locations. The trailer configuration includes provisions for onboard generator, air compressor, and tool storage, creating a self-sufficient mobile maintenance unit that requires no permanent infrastructure. This is the configuration of choice for forces that need to support large, geographically dispersed fleets without concentrating vehicles at fixed depot locations.",
    workflow: [
      { step: "01", title: "Tactical Deployment", detail: "The trailer is towed to the operating location by a standard military or utility vehicle. Stabilizer legs are deployed and the workspace is configured for immediate tire service operations." },
      { step: "02", title: "Utility Activation", detail: "Onboard generator provides independent power. Air compressor and tool systems are activated. The machine platform is prepared for wheel assembly intake in the field environment." },
      { step: "03", title: "Field Wheel Handling", detail: "Heavy wheel assemblies are loaded onto the trailer-mounted machine using the integrated lifting system. The platform accommodates the full 16–27 inch rim range used across military fleets." },
      { step: "04", title: "Complete Disassembly Cycle", detail: "Full hydraulic disassembly sequence in the field: deflation, hardware removal, bead separation, run-flat insert extraction — with the same controlled force and operator safety as fixed installations." },
      { step: "05", title: "Insert Service & Reassembly", detail: "Run-flat inserts are inspected, new or refurbished inserts are lubricated and hydraulically installed. Complete reassembly with hardware torque and inflation verification." },
      { step: "06", title: "Rapid Relocation", detail: "After service completion, the trailer is secured and relocated to the next operating point. The mobile platform allows one maintenance asset to support multiple dispersed unit locations." },
    ],
    engineeringSystems: [
      { title: "Trailer Platform", description: "Purpose-built trailer chassis with stabilizer systems, road-mobile configuration, and integrated workspace layout designed for rapid deployment and relocation cycles.", icon: "trailer" },
      { title: "Hydraulic Power Unit", description: "Same high-pressure hydraulic capability as fixed models, ruggedized for mobile operations with vibration dampening and field-serviceable components.", icon: "hydraulic" },
      { title: "Onboard Power Generation", description: "Generator mounting and integration provisions for independent power supply. No external utility connection required for full operational capability.", icon: "power" },
      { title: "Integrated Lift System", description: "Field-optimized lifting mechanism for loading and positioning heavy wheel assemblies on the trailer-mounted platform.", icon: "lift" },
      { title: "Compressed Air System", description: "Onboard air compressor provisions for tire inflation, pneumatic tool operation, and cleaning tasks during field maintenance operations.", icon: "air" },
      { title: "Dual Control Interface", description: "Joystick and radio remote control with emergency-stop logic, configured for outdoor operating environments with extended communication range.", icon: "control" },
    ],
    compatibleVehicles: ["HMMWV / Humvee", "JLTV (Joint Light Tactical Vehicle)", "MRAP (Cougar, MaxxPro, Buffalo, Caiman)", "Stryker (M1126, M1128)", "HEMTT (M977, M978, M984)", "FMTV family", "Boxer 8×8", "BTR series", "LAV / ASLAV", "Patria AMV", "VBCI", "Pandur II", "Piranha / LAV III"],
    logistics: [
      { title: "Maximum Mobility", body: "Road-mobile trailer platform can be towed to any location accessible by military vehicles. Supports dispersed fleet operations across multiple staging areas without fixed infrastructure." },
      { title: "Self-Sufficient Operations", body: "Onboard generator, compressor, and tool storage provisions create a fully self-contained maintenance unit that operates independently from base utility connections." },
      { title: "Operator Training Program", body: "Field-specific training program covers trailer deployment, mobile operations, generator/compressor management, safety procedures, and hands-on practice in realistic field conditions." },
      { title: "15-Year Spare Parts Guarantee", body: "Long-term spare parts availability with logistics support designed for mobile operating units. Critical spares kits pre-configured for field maintenance tempo." },
    ],
    dimensions: [
      { label: "Platform Type", value: "Towable trailer chassis" },
      { label: "Rim Compatibility", value: "16–27 inches" },
      { label: "Control Systems", value: "Joystick + Radio Remote" },
      { label: "Safety Systems", value: "Emergency Stop (all interfaces)" },
      { label: "Power Supply", value: "Onboard generator provisions" },
      { label: "Auxiliary Systems", value: "Air compressor + tool storage" },
    ],
    certifications: ["CE Marking", "ISO 9001 Quality Management", "NATO STANAG Compatible", "Road-Mobile Certification"],
    warrantyInfo: "2-year comprehensive warranty covering machine systems, trailer platform, and all integrated components. Extended warranty programs available for fleet procurement contracts.",
    trainingInfo: "Field-focused training program covering trailer deployment, machine operation, generator and compressor management, safety protocols, and hands-on practice with actual fleet wheel assemblies in field conditions.",
    sparePartsInfo: "15-year spare parts availability with mobile-optimized critical spares kits. Priority logistics support for forward-deployed and dispersed operating units.",
    deliveryInfo: "Worldwide delivery of complete trailer-mounted system including machine, trailer platform, generator provisions, and compressed air systems. Typical timeline: 12–16 weeks from contract to field-ready deployment.",
    gallery: [
      { src: "/assets/gmt-099-trailer-convoy.png", alt: "GMT-099 trailer model convoy deployment with military trucks in desert operations" },
      { src: "/assets/gmt-099-trailer-closeup.png", alt: "GMT-099 trailer hitch and base detail with military personnel inspection" },
      { src: "/assets/gmt-099-trailer-airlift.png", alt: "GMT-099 trailer model strategic airlift loading onto C-17 transport aircraft" },
      { src: "/assets/gmt-099-trailer-field-ops.png", alt: "GMT-099 trailer deployed in forward operating area with JLTV tactical vehicles" },
      { src: "/assets/gmt-099-showcase.png", alt: "GMT-099 Run Flat Machine Trailer Model complete system overview" },
    ],
  },
];

export const capabilities = [
  {
    title: "Lift System",
    body: "Moves heavy wheel assemblies into position with less manual handling and better operator control.",
    image: "/assets/cap-lift-system-gen.png",
  },
  {
    title: "Ring Remover System",
    body: "Supports controlled split-rim and locking-ring workflows common in military wheel assemblies.",
    image: "/assets/cap-ring-remover-gen.png",
  },
  {
    title: "Hydraulic System Unit",
    body: "Applies the force required for practical run-flat insert disassembly and reassembly.",
    image: "/assets/cap-hydraulic-unit-gen.png",
  },
  {
    title: "Controller Unit",
    body: "Uses joystick and radio remote control logic so operators can keep safer working distances.",
    image: "/assets/cap-controller-unit-gen.png",
  },
  {
    title: "Safety Architecture",
    body: "Emergency-stop controls and stable handling routines reduce exposure during high-force tire work.",
    image: "/assets/cap-safety-arch-gen.png",
  },
  {
    title: "Training and Support",
    body: "Worldwide delivery, setup support, operator training, warranty coverage, and spare parts planning.",
    image: "/assets/cap-training-support-gen.png",
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
      "Explore military tire disassembly with GM Defensive's NATO-certified runflat machines — safe, fast, and proven for tactical vehicle fleets.",
    category: "run-flat-machine",
    tags: ["military-tires", "run-flat-machine", "run-flat-changer-machine"],
    sections: [
      {
        heading: "Military Tire Disassembly & Runflat Machine",
        body: [
          "Armored fleets are only as mobile as their tires. Modern tactical vehicles — HMMWV, JLTV, MRAP, APC, LAV — run on heavy, beadlocked wheels with internal runflats. These assemblies are designed to survive contact, but they are not designed to be easy to work on with generic shop equipment.",
          "This guide explains why a dedicated military tire disassemble tool and runflat machine is now standard equipment for serious defense maintenance units. It provides a step-by-step overview of run flat disassembly, compares manual versus machine workflows, quantifies MTTR gains, and outlines a pragmatic ROI and procurement justification.",
          "The tone and structure are aligned with field-level and depot-level maintenance practices, so maintenance chiefs and procurement officers can use this as a reference when specifying tooling for new programs or upgrades.",
        ],
      },
      {
        heading: "Step-by-Step Runflat Disassembly Process",
        body: [
          "A typical tactical wheel assembly includes: <a href='https://gmdefensive.com/run-flat-tire-changer/how-it-works/'>rim, tire, beadlock hardware, and an internal runflat insert</a>. The goal of run flat disassemble operations is to separate these components without damaging the rim or insert and without exposing technicians to uncontrolled forces.",
          "<h3>1. Preparation & Safety</h3><ul><li>Confirm the wheel assembly is removed from the vehicle.</li><li>Place it in a designated work area or machine cradle.</li><li>Verify the assembly is fully deflated per TM guidance.</li></ul>",
          "<h3>2. Initial Bolt & Hardware Removal</h3><ul><li>Loosen and remove outer beadlock or rim clamp bolts in a controlled sequence.</li><li>Retain hardware for inspection or replacement.</li></ul>",
          "<h3>3. Bead Separation</h3><ul><li>Separate the tire bead from the rim seat.</li><li>In a manual workflow, this involves heavy pry bars and bead breakers; in a machine workflow, hydraulic arms perform this bead-breaking step.</li></ul>",
          "<h3>4. Runflat Exposure</h3><ul><li>Once the beads are broken and the rim halves start to separate, the internal run flat inserter interface or ring becomes visible.</li><li>Carefully separate rim halves to access the runflat insert.</li></ul>",
          "<h3>5. Runflat Extraction</h3><ul><li>Support the weight of the insert and remove it from the tire cavity.</li><li>Inspect for cracks, cuts, or deformation; tag for reuse or disposal.</li></ul>",
          "<h3>6. Tire Removal</h3><ul><li>Fully remove the tire from the rim.</li><li>Clean mating surfaces and inspect for corrosion.</li></ul>",
          "<h3>7. Documentation & Disposition</h3><ul><li>Record findings, condition codes, and maintenance actions in the appropriate maintenance information system.</li><li>Prepare components for reassembly or replacement.</li></ul>",
          "A dedicated machine provides fixtures and hydraulic assistance to make each of these steps repeatable and safe, especially when handling large, heavy assemblies.",
        ],
      },
      {
        heading: "Manual vs. Machine-Based Workflow",
        body: [
          "<h3>Manual Workflow</h3><p>Where no dedicated machine is available, technicians typically rely on:</p><ul><li>Floor-mounted bead breakers</li><li>Long pry bars and hammers</li><li>Improvised stands or wooden supports</li><li>Multiple personnel to restrain, rotate, and lift assemblies</li></ul>",
          "<p><strong>Challenges:</strong></p><ul><li>High physical strain and injury risk</li><li>Significant variation in technique and quality between teams</li><li>Risk of rim damage if force is misapplied</li><li>Slow cycle times, especially on large 20\"+ MRAP/APC wheels</li></ul><p>Manual methods can be made safe with training and discipline, but they do not scale well in high-tempo operations with large fleets.</p>",
          "<h3>Machine-Based Workflow</h3><p>A dedicated <a href='https://gmdefensive.com/military-tire-changer/'>military tire disassemble tool</a> combined with a powered runflat machine changes the process:</p><ul><li><strong>Controlled clamping:</strong> The wheel is locked in a cradle that supports the weight.</li><li><strong>Hydraulic bead-breaking:</strong> Beads are depressed by actuators, not pry bars.</li><li><strong>Integrated run flat disassembly:</strong> The machine's arms and tooling heads are designed to push, pull, and rotate the tire relative to the runflat insert.</li><li><strong>Run flat inserter mode:</strong> The same machine is used as a run flat inserter when reassembling, aligning the insert and tire with repeatable force and position.</li></ul>",
          "<p><strong>Benefits:</strong></p><ul><li>Consistent process across all shifts and locations</li><li>Dramatically reduced risk of crushed fingers, back injuries, and rim warping</li><li>Clean integration with platform-specific tooling — e.g., JLTV/MRAP adapters and hmmwv tire tool fixtures</li></ul>",
        ],
      },
      {
        heading: "MTTR Reduction Metrics",
        body: [
          "Mean Time To Repair (MTTR) is a critical maintenance KPI. For wheel-related tasks, MTTR includes:",
          "<ul><li>Removal and transport of the wheel</li><li>Runflat removal and assembly work</li><li>Reinstallation and verification</li></ul>",
          "<p><strong>Indicative example for one heavy runflat wheel:</strong></p><p>If a maintenance company processes 10 runflat wheels per day:</p><ul><li>Manual: 10 × 105 min ≈ 1,050 minutes (17.5 labor hours)</li><li>Machine: 10 × 37.5 min ≈ 375 minutes (6.25 labor hours)</li></ul>",
          "<strong>Result:</strong> ~11 labor hours freed per day. Over 220 working days, that's ~2,420 labor hours — more than one full-time technician's annual workload.",
          "These MTTR gains translate directly into: <ul><li>Increased vehicle availability</li><li>Reduced backlog in maintenance queues</li><li>More time to focus on higher-value tasks (diagnostics, inspections, upgrades)</li></ul>",
        ],
      },
      {
        heading: "Safety Improvements for Maintenance Teams",
        body: [
          "Runflat wheel assemblies are heavy, awkward, and often contaminated with mud, sand, or road debris. Manual handling exposes technicians to:",
          "<ul><li>Musculoskeletal injuries (lifting, twisting, pulling)</li><li>Pinch/crush injuries from slipping pry bars</li><li>Flying debris if stored energy is released unexpectedly</li><li>Rim spring-back if bolts are loosened unevenly</li></ul>",
          "A properly designed military tire disassemble tool with integrated guards and remote controls mitigates these hazards:",
          "<h3>Mechanical Load-Bearing</h3><ul><li>The machine cradle supports the full weight of the wheel.</li><li>Technicians manipulate controls, not the entire assembly.</li></ul>",
          "<h3>Controlled Force Application</h3><ul><li>Bead-breaking and run flat disassembly are done via actuators with defined force limits.</li><li>Movement is predictable and repeatable.</li></ul>",
          "<h3>Standoff Distance</h3><ul><li>Operators can stand clear of pinch points while the machine separates components.</li></ul>",
          "<h3>Integrated Training and SOPs</h3><ul><li>Standardized procedures reduce variance between crews and sites.</li><li>Safety interlocks and emergency stops further reduce risk.</li></ul>",
          "For commanders and safety officers, this reduces recordable incidents and supports a more sustainable maintenance tempo.",
        ],
      },
      {
        heading: "Compatibility Matrix: Humvee, JLTV, MRAP, APC, LAV",
        body: [
          "A key requirement for any high-investment machine is <a href='https://gmdefensive.com/armoured-vehicles-common-maintenance-insights/'>multi-platform compatibility</a>. A high-end system is configured so one military tire disassemble tool and machine platform can be:",
          "<ul><li>Set up quickly for HMMWV</li><li>Reconfigured for JLTV or MRAP wheels with a change of adapters</li><li>Used both for run flat disassembly and as a run flat inserter for reassembly</li></ul>",
          "This multi-platform approach protects the investment and simplifies procurement: one core machine, plus platform-specific fixtures.",
        ],
      },
      {
        heading: "Procurement Justification for a Runflat Machine",
        body: [
          "Procurement officers and program managers need to justify why a specialized machine is better than more manpower and conventional tools. Key justification pillars:",
          "<h3>1. Operational Availability</h3><ul><li>Faster turnaround on wheels → more vehicles ready for tasking.</li><li>Reduced risk of tire-related downtime during intense operations.</li></ul>",
          "<h3>2. Lifecycle Cost Reduction</h3><ul><li>Less damage to rims and inserts from improvised techniques.</li><li>Better consistency leads to fewer repeat repairs.</li></ul>",
          "<h3>3. Personnel Safety & Retention</h3><ul><li>Reduced injuries, fewer lost workdays, lower compensation risk.</li><li>Better working conditions support retention of skilled maintainers.</li></ul>",
          "<h3>4. Standardization & Compliance</h3><ul><li>A dedicated military tire disassemble tool supports compliance with OEM/DoD maintenance guidance.</li><li>Easier to pass audits and inspections when procedures are documented and repeatable.</li></ul>",
          "<h3>5. Scalability</h3><ul><li>Single machine can support multiple platforms (HMMWV, JLTV, MRAP, APC, LAV).</li><li>Additional machines can be deployed to high-volume depots or theater hubs.</li></ul>",
          "For formal justifications, it's effective to frame the acquisition against metrics: MTTR, vehicle availability rate, incident reports, and cost per wheel serviced.",
        ],
      },
      {
        heading: "ROI Model for Fleet Maintainers",
        body: [
          "A simple ROI model for a runflat machine can be expressed in three components:",
          "<h3>1. Labor Savings</h3><p>ΔMTTR (manual vs machine) × number of wheels per year × labor cost per hour.</p>",
          "<h3>2. Asset Protection</h3><p>Reduction in damaged rims/runflats per year × replacement cost.</p>",
          "<h3>3. Availability Value</h3><p>Additional vehicle-available days × value per day (mission, training, readiness).</p>",
          "<p><strong>Example:</strong></p><ul><li>Wheels processed per year: 1,000</li><li>Manual labor per wheel: 1.5 hrs</li><li>Machine labor per wheel: 0.6 hrs</li><li>Labor rate (fully burdened): 50 USD/hr</li></ul>",
          "<p><strong>Labor savings:</strong></p><ul><li>Manual = 1,000 × 1.5 × 50 = 75,000 USD</li><li>Machine = 1,000 × 0.6 × 50 = 30,000 USD</li><li>Annual labor saving = 45,000 USD</li></ul>",
          "If the machine and all fixtures cost 120,000 USD, simple payback from labor alone is under 3 years. Adding avoided rim/runflat damage and safety benefits typically shortens the payback further.",
          "For a procurement file, you can document: <ul><li>Baseline data from current manual operations</li><li>Pilot/early deployment results</li><li>Projected ROI over 5–10 years, with conservative assumptions</li></ul>",
        ],
      },
      {
        heading: "FAQs",
        body: [
          "<strong>Why can't we rely on standard automotive tire machines?</strong> Standard machines are not designed for heavy beadlocked wheels with internal runflats. Clamping ranges, force levels, and safety systems are insufficient. A specialized military tire disassemble tool and machine is engineered for these loads and geometries.",
          "<strong>What makes a proper run flat disassembly machine different?</strong> It combines high-capacity bead-breaking, controlled rim separation, and fixtures for handling the runflat ring. It is designed from the ground up for run flat disassembly and reassembly, not just passenger car wheels.",
          "<strong>Do we need a separate machine to reinstall inserts?</strong> No. Many modern systems operate as both a disassembly tool and a run flat inserter, allowing technicians to safely mount the runflat back into the tire cavity using the same base machine and fixtures.",
          "<strong>Is there tooling specific to Humvees?</strong> Yes. A dedicated hmmwv tire tool interface or adapter kit ensures correct clamping and support for 16.5\" HMMWV beadlock wheels, preventing rim damage and improving ergonomics.",
          "<strong>How does this help with JLTV, MRAP, APC, and LAV fleets?</strong> By using modular adapters, a single machine can be configured for multiple platforms. Maintenance teams can run flat disassemble and reassemble wheels from JLTV, MRAP, APC, and LAV with the same machine, only changing the fixtures.",
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
      "Discover GM Defensive's NATO-certified military tire disassemble tool — a safe, fast solution for run-flat removal and installation.",
    category: "run-flat-machine",
    tags: ["military-tires", "run-flat-tire", "run-flat-tire-changer"],
    sections: [
      {
        heading: "Military Tire Disassemble Tool & Run-Flat Disassembly Guide",
        body: [
          "Maintaining mission-critical mobility for armored and tactical vehicles requires precision equipment, trained personnel, and standardized procedures. Modern fleets — from <a href='https://gmdefensive.com/military-run-flat-tires/'>HMMWV to JLTV, MRAP, APC, and LAV families</a> — depend on run-flat systems to sustain movement after deflation or ballistic damage. These systems dramatically increase survivability but introduce significant maintenance complexity.",
          "Traditional manual techniques are slow, unsafe, and manpower-intensive. This guide explains the operational difference between manual and machine-based methods and clarifies why professional buyers search for terms like <em>military tire disassemble tool</em>, <em>run flat disassembly</em>, <em>run flat inserter</em>, and <em>hmmwv tire tool</em> when preparing acquisition documentation.",
          "This page also serves as a procurement-ready brief for defense organizations evaluating the adoption of machine-assisted run-flat disassembly and installation systems.",
        ],
      },
      {
        heading: "Step-by-Step Runflat Removal Summary",
        body: [
          "The following procedure synthesizes <a href='https://gmdefensive.com/military-vehicles-run-flat-insert-maintenance-guide/'>standard military maintenance doctrine</a> and OEM-aligned steps referenced in internal runflat change documentation.",
          "<h3>1. Wheel Removal</h3><ol><li>Remove rim bolt nuts.</li><li>Attach lifting chains to a crane hoist.</li><li>Lift and position the tire on a secure piston or work platform.</li><li>Use a spider tool or rim-separation fixture to apply downward pressure.</li><li>Separate the two-piece rim from the tire.</li><li>Flip and reposition the tire to access the opposite rim half.</li><li>Repeat the controlled press-and-lift sequence to fully remove the rim.</li></ol>",
          "<h3>2. Runflat Removal</h3><ol><li>Generously lubricate visible runflat surfaces to prevent friction damage.</li><li>Close runflat shield plates (if using a machine system).</li><li>Lift tire onto shields; secure with hooks or straps.</li><li>Insert a central strap at the top dead center of the tire interior.</li><li>Lubricate both the tire interior and runflat.</li><li>Connect strap to a press piston.</li><li>Incrementally apply force until the runflat safely slides out.</li></ol>",
          "<h3>3. Runflat Installation</h3><ol><li>Retract press piston.</li><li>Lubricate the runflat and align its center post/notch.</li><li>Close runflat shields evenly to maintain alignment.</li><li>Lift and lower tire over the runflat system.</li><li>Insert security shield; fasten chain.</li><li>Press forward until runflat fully seats inside the tire.</li><li>Open shields and lift tire for rim reassembly.</li></ol>",
          "These steps illustrate why buyers with fleet-level responsibility seek purpose-built equipment instead of relying on improvised tooling.",
        ],
      },
      {
        heading: "Manual vs. Machine-Assisted Approach",
        body: [
          "<h3>Manual Approach</h3><ul><li><strong>Manpower:</strong> Requires 3–5 technicians.</li><li><strong>Tools:</strong> Pry bars, sledgehammers, bead-breakers.</li><li><strong>Common Issues:</strong> Irregular force damaging bead seats, high back/hand injuries, 2–4 hours per wheel depending on rim type, difficult or impossible on MRAP/JLTV heavy runflats.</li><li><strong>Risk Level:</strong> High. Two-piece rims under tension can separate explosively.</li></ul>",
          "<h3><a href='https://gmdefensive.com/run-flat-tire-changer/how-it-works/'>Machine-Assisted Approach</a></h3><p>Referencing capabilities described in GM Defensive systems such as <a href='https://gmdefensive.com/run-flat-tire-changer/workshop-model/'>workshop</a>, <a href='https://gmdefensive.com/run-flat-tire-changer/container-model/'>container</a>, and <a href='https://gmdefensive.com/run-flat-tire-changer/trailer-model/'>trailer</a> models.</p><ul><li><strong>Manpower:</strong> 1–2 technicians.</li><li><strong>Tools:</strong> Integrated hydraulic pressing system, runflat shields, remote control.</li><li><strong>Performance:</strong> 10–20 minutes per wheel. Controlled press force eliminates safety hazards. Works on 16–27 inch rims including 395/85R20, 16.00R20, 37×12.50R16.5 tires.</li><li><strong>Additional Benefits:</strong> NATO NSN-registered configurations. Compatible with multi-theater deployment (workshop, trailer, container units).</li><li><strong>Risk Level:</strong> Minimal; protective shields isolate operators.</li></ul>",
          "<h3>Outcome</h3><p>Machine-based methods reduce:</p><ul><li>MTTR by 85–92%</li><li>Injury risk by 80–95%</li><li>Manpower demand by 50–70%</li></ul><p>Reduced MTTR translates directly into higher operational readiness and fewer maintenance bottlenecks — critical to PMs under readiness KPIs and contracting officers defending lifecycle cost.</p>",
        ],
      },
      {
        heading: "Procurement Justification for Acquiring a Runflat Machine",
        body: [
          "Procurement and contracting officers require FAR/DFARS-aligned justification. Key drivers include:",
          "<h3>1. Cost Avoidance</h3><ul><li>Reduced labor-hours per task</li><li>Fewer injuries → fewer lost days</li><li>Extended rim/tire lifespan due to controlled force application</li></ul>",
          "<h3>2. Performance</h3><ul><li>Supports modern fleet tires (larger, heavier, stiffer)</li><li>Compliant with NATO standards, CE, ISO certifications</li><li>NSN-assigned models streamline acquisition</li></ul>",
          "<h3>3. Operational Readiness</h3><ul><li>Direct MTTR reduction</li><li>Supports distributed operations and mobile maintenance doctrine (container/trailer units)</li><li>Enhances mission sustainability in forward environments</li></ul>",
          "<h3>4. Risk Mitigation</h3><ul><li>Addresses GAO 'high-risk' findings related to contractor oversight and maintenance delays</li><li>Provides traceability and standardization across platforms</li></ul>",
        ],
      },
      {
        heading: "Sample ROI Calculation (Illustrative)",
        body: [
          "For a 200-vehicle MRAP/JLTV fleet:",
          "<ul><li>Avg manual time per wheel: 4 hours</li><li>Avg machine time: 25 minutes</li><li>Yearly wheel/tire service: 600 changes</li><li><strong>Labor savings at $45/hr:</strong><br/>Manual: 2,400 hours ($108,000)<br/>Machine: 250 hours ($11,250)<br/>Annual labor savings: ~$96,750</li><li><strong>Injury claim avoidance:</strong> Estimated reduction of one $40k–$80k injury per year</li></ul>",
          "<strong>Payback period typically &lt;12 months.</strong>",
        ],
      },
      {
        heading: "Procurement-Ready Documentation",
        body: [
          "We provide full compliance packages for contracting officers:",
          "<ul><li>NSN list</li><li>Technical manuals</li><li>Training syllabi</li><li>Safety certifications</li></ul>",
          "Equip your depot or field unit with <a href='https://gmdefensive.com/run-flat-tire-changer/'>a NATO-certified, ISO/CE-approved military tire disassemble tool</a> designed for modern armored vehicles.",
        ],
      },
      {
        heading: "FAQ",
        body: [
          "<strong>Does this system support HMMWV tires?</strong> Yes. It is fully compatible with 37×12.50R16.5 tires and functions as a true hmmwv tire tool.",
          "<strong>Can the machine handle heavy MRAP/JLTV runflat disassembly?</strong> Yes. It performs reliable run flat disassembly on 395/85R20 and 16.00R20 assemblies.",
          "<strong>Is the runflat installation tool included?</strong> Yes. All systems include an integrated run flat inserter module supporting safe installation.",
          "<strong>Do these machines have NATO Stock Numbers?</strong> Yes. All workshop, container, and trailer models have assigned NSNs for streamlined procurement.",
          "<strong>How long does it take to train operators?</strong> Most operators reach competency within several hours with train-the-trainer materials included.",
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
      "Discover the innovations in GM Defensive's run-flat tire changers and how they stack up against competitors in military vehicle maintenance.",
    category: "run-flat-machine",
    tags: ["run-flat-machine", "run-flat-tire-changer"],
    sections: [
      {
        heading: "Introduction",
        body: [
          "In the tough world of military vehicle maintenance, having the right equipment matters. Military run-flat tire changers, including GM Defensive's run-flat changer machine, keep vehicles running even in tough conditions. This article looks at GM Defensive's innovations in their military tire changers and compares them with other brands.",
          "Military operations need reliable and efficient vehicles. Keeping these vehicles, especially those with run-flat tires, in good shape requires the right tire changer. GM Defensive's <a href='/5-keys-of-run-flat-changer-machines-for-armored-vehicles/'>run-flat changer machine</a> stands out in the market, and here we compare it with other brands.",
        ],
      },
      {
        heading: "What Are Run-Flat Tire Changers?",
        body: [
          "Run-flat tire changers meet the unique needs of military vehicles. These machines, including GM Defensive's run-flat machine, ensure quick, safe tire changes, reducing downtime and keeping the vehicles ready.",
          "<h3>The Role of Run-Flat Tire Changers in Military Operations</h3><p>The ability to keep moving despite tire damage is crucial for military missions. Run-flat tire changers enable vehicles to stay operational even after tire damage, which is vital for mission success and the safety of personnel.</p>",
          "<h3>The Necessity of Run-Flat Tire Changers for the Military</h3><p>For military operations, vehicle reliability and efficiency are critical. Run-flat tire changers ensure that vehicles can continue to operate even after sustaining tire damage, essential for mission success and safety.</p>",
        ],
      },
      {
        heading: "GM Defensive Safety Features",
        body: [
          "GM Defensive is known for its innovations in military run-flat tire changers. Their machines are efficient and focus on keeping operators safe with advanced features and technology.",
          "<h3>Safety Shield</h3><p>The safety shield in GM Defensive's run-flat changer machine is made from durable materials to handle heavy-duty tire changing. It protects operators from potential hazards and keeps the tire in place, preventing accidental dislodging.</p>",
          "<h3>Secure Chain Mechanism</h3><p>This strong mechanism secures the tire during mounting and dismounting, reducing the risk of injury by keeping the tire firmly in place.</p>",
          "<h3>Expanded Run-Flat Shields</h3><p>GM Defensive's run-flat shields open up to 1 meter, larger than the typical 80 cm offered by other brands. This allows for safe and secure handling of larger run-flat tires.</p>",
        ],
      },
      {
        heading: "Efficiency and Control Features",
        body: [
          "GM Defensive's run-flat tire changers are designed for maximum efficiency, cutting down the time needed to change a tire and ensuring smooth military operations.",
          "<h3>Security Table Design</h3><p>Positioned under the hydraulic piston, the security table catches the tire if it slips, preventing injury or damage. This feature is key for split rim wheel replacement, catching the tire if it slips and preventing it from falling.</p>",
          "<h3>Grease Pump and Grease Gun Integration</h3><p>Responding to customer needs, GM Defensive offers a grease pump or grease gun for safe application of grease oil, reducing the risk of injury and ensuring efficient operation.</p>",
        ],
      },
      {
        heading: "Emergency Stop and Remote Control Systems",
        body: [
          "GM Defensive's machines include many emergency stop features to improve operator safety and control.",
          "<h3>Radio Remote Control</h3><p>Equipped with two radio remote controls, operators can manage all machine functions from up to 50 meters away, each with an emergency stop button.</p>",
          "<h3>Handheld Controllers with Emergency Buttons</h3><p>These controllers, each with an emergency button, operate the winch and hydraulic piston, enhancing safety.</p>",
          "<h3>Comprehensive Electrical Panel Emergency Button</h3><p>An extra emergency button on the electrical panel ensures quick machine stoppage in emergencies.</p>",
          "<h3>Joystick Control with Multiple Stop Features</h3><p>The joystick control manages hydraulic pistons and includes many emergency stop buttons, ensuring comprehensive safety.</p>",
        ],
      },
      {
        heading: "Comparing GM Defensive with Other Brands",
        body: [
          "Comparing GM Defensive's run-flat changer machine with other brands shows several advantages:",
          "<ul><li><strong>Superior Tire Size Capacity:</strong> GM Defensive's run-flat shields open up to 100 cm, accommodating larger run-flat tires than the typical 80 cm capacity of other brands.</li><li><strong>2 Year Warranty and Assurance:</strong> GM Defensive offers a two-year warranty, ensuring their machines meet high standards of productivity, safety, and quality assurance.</li><li><strong>Availability of Spare Parts:</strong> GM Defensive maintains a stocked inventory system, ensuring timely availability of spare parts for maintenance and repairs.</li><li><strong>Immediate Stock Availability:</strong> With a stocked inventory system, GM Defensive ensures their machines are readily available for immediate deployment.</li><li><strong>Extensive On-Site Training Programs:</strong> GM Defensive provides comprehensive on-site training, ensuring operators are fully equipped to use the machines safely and efficiently.</li><li><strong>24/7 Customer Support:</strong> GM Defensive offers 24/7 customer service to address any issues quickly, minimizing downtime and keeping the vehicles ready.</li></ul>",
          "The high repeat purchase rate shows strong customer satisfaction and confidence in GM Defensive's products.",
        ],
      },
      {
        heading: "Final Thoughts",
        body: [
          "GM Defensive's commitment to innovation and operator safety sets their run-flat tire changers apart. Their machines meet the tough requirements of military vehicle maintenance, ensuring the highest standards of safety and performance.",
          "GM Defensive continuously improves their run-flat changer machines with the latest safety features and technological advancements, ensuring their products stay at the top of the industry.",
        ],
      },
      {
        heading: "FAQs",
        body: [
          "<strong>Q1: What safety features does GM Defensive's run-flat tire changer have?</strong> GM Defensive's run-flat tire changers include safety shields, segmented run-flat shields, a security table for split rim replacement, grease oil application systems, and multiple emergency stop buttons.",
          "<strong>Q2: How do emergency stop buttons enhance safety?</strong> The emergency stop buttons allow operators to quickly halt the machine in case of an emergency, preventing accidents and ensuring operator safety.",
          "<strong>Q3: What is the purpose of the segmented run-flat shields?</strong> The segmented design prevents the run-flat tire from slipping or bursting out, ensuring a controlled and safe tire change process.",
          "<strong>Q4: How does the grease pump enhance safety?</strong> The grease pump or grease gun allows for safe application of grease oil, reducing the risk of injury by enabling operators to grease the shield without placing their hands inside, ensuring smooth machine operation.",
          "<strong>Q5: What makes GM Defensive's run-flat tire changers efficient?</strong> GM Defensive's tire changers reduce tire change time, improve military vehicle maintenance efficiency, and ensure smooth operations.",
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
        heading: "Top 5 Benefits of Using a Run-Flat Tire Changer Machine for Armored Vehicles",
        body: [
          "In the world of armored military vehicles, efficiency and reliability are not just buzzwords — they're necessities. The introduction of run-flat tire changer machines has revolutionized how maintenance teams approach tire changes, especially under demanding conditions.",
          "Here's a deep dive into the top five benefits of using these innovative machines, making your armored vehicle's upkeep not just easier but smarter.",
        ],
      },
      {
        heading: "Quick and Safe Tire Changes",
        body: [
          "The first and foremost advantage of using a run-flat changer <a href='https://gmdefensive.com/run-flat-tire-changer/'>machine</a> is the incredible speed and safety it offers. Unlike traditional methods, which can be time-consuming and hazardous, these machines allow for quick and secure tire changes.",
          "This means less time vulnerable in the field and more time in action. For armored military vehicles, where time and safety are of the essence, this is a game-changer.",
        ],
      },
      {
        heading: "Enhanced Durability for Tough Conditions",
        body: [
          "Armored vehicles are designed to withstand extreme conditions, and the tires are no exception. Run-flat changer machines are made for armored vehicle tires. They help make tire changes quick and precise, reducing the chance of damage.",
          "This precision extends the life of your tires, ensuring they're battle-ready at all times.",
        ],
      },
      {
        heading: "Cost-Effective Maintenance",
        body: [
          "Over time, the efficiency of a run-flat changer machine translates into significant cost savings. By minimizing tire damage during changes and extending tire life, these machines reduce the need for frequent replacements.",
          "Armored military vehicle fleets can save money by using a run-flat changer machine for maintenance. This can make a big financial impact due to <a href='https://gmdefensive.com/gm-run-flat-changer-effortless-and-cost-effective-solution-for-your-vehicles/'>cost-effectiveness</a>.",
        ],
      },
      {
        heading: "Minimal Training Required",
        body: [
          "Another significant benefit is the ease of use associated with run-flat changer machines. These machines are easy to use with simple designs, so maintenance teams can quickly learn how to use them effectively.",
          "This makes it easy for your team to use the technology without needing a lot of time to learn or train.",
        ],
      },
      {
        heading: "Reliability in the Field",
        body: [
          "Lastly, we cannot overstate the reliability of run-flat changer machines. These machines are designed for military use. They are built to perform well under pressure. This ensures that your armored vehicles are always prepared for action.",
          "Whether in a maintenance facility or deployed in the field, you can count on these machines to perform flawlessly, providing peace of mind when it matters most.",
        ],
      },
      {
        heading: "Run-Flat Changer Machines: Essential Allies for Armored Fleet Readiness",
        body: [
          "The adoption of run-flat changer machines for armored vehicles offers a suite of benefits that enhance operational efficiency, safety, and cost-effectiveness.",
          "Military and security teams rely on these machines as crucial allies for maintaining and preparing armored fleets, not just as tools. As we continue to push the boundaries of technology and innovation, the role of such machines in maintaining the peak performance of armored military vehicles will only grow more critical.",
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
  {
    slug: "hmmwv-humvee-run-flat-tire-changer-guide",
    title: "HMMWV & Humvee Run-Flat Tire Changer: Complete Field Maintenance Guide",
    href: "/hmmwv-humvee-run-flat-tire-changer-guide/",
    date: "2025-12-10",
    author: "hazel",
    image: "/assets/blog-hmmwv-runflat-tire.png",
    excerpt:
      "Everything defense maintenance teams need to know about HMMWV run-flat tire replacement, Humvee tire sizes, run-flat insert removal, and choosing the right military run-flat changer machine for field and depot operations.",
    category: "run-flat-machine",
    tags: ["military-tires", "run-flat-tire-changer", "run-flat-machine"],
    sections: [
      {
        heading: "Why HMMWV Tire Maintenance Demands Specialized Equipment",
        body: [
          "The High Mobility Multipurpose Wheeled Vehicle (HMMWV), commonly known as the Humvee, remains one of the most widely fielded tactical platforms across NATO and allied forces. With over 280,000 units produced, HMMWV fleets represent a massive logistics footprint — and tire maintenance is one of the most frequent and physically demanding service tasks these fleets face.",
          "HMMWV tires are engineered with <strong>run-flat inserts</strong> that allow the vehicle to continue operating at reduced speed after a puncture or ballistic damage. These Hutchinson-type run-flat systems are critical for survivability in contested environments, but they also introduce significant maintenance complexity. The inserts fit tightly inside the tire cavity and require substantial hydraulic force for removal and reinstallation — far beyond what standard commercial tire changers can deliver.",
          "Without a dedicated <a href='/products/'>military run-flat changer machine</a>, maintenance crews are forced to rely on improvised pry-bar methods that damage rims, destroy inserts, and expose technicians to serious injury risks from high-energy bead separation.",
        ],
      },
      {
        heading: "What Size Tires Do Military Humvees Use?",
        body: [
          "Standard HMMWV configurations typically use <strong>37×12.50R16.5</strong> tires mounted on 16.5-inch split-rim wheels. Uparmored variants and expanded-capacity models may use larger assemblies depending on the mission profile and gross vehicle weight rating. All variants use beadlock rims designed to retain the tire and run-flat insert under deflated conditions.",
          "The 16.5-inch rim falls within the <strong>16–27 inch rim range</strong> supported by <a href='https://gmdefensive.com/run-flat-tire-changer/' target='_blank' rel='noopener'>GM Defensive run-flat tire changer machines</a>, making the GMR-023, GMH-098, and GMT-099 models fully compatible with standard HMMWV wheel assemblies.",
        ],
      },
      {
        heading: "HMMWV Run-Flat Insert Removal: Step-by-Step Process",
        body: [
          "A controlled run-flat disassembly workflow for HMMWV wheels follows a specific sequence: full tire deflation, secure mounting on the machine platform, locking-ring removal, controlled bead separation using calibrated hydraulic pressure, and machine-assisted extraction of the run-flat insert from the tire cavity.",
          "Modern <strong>military run-flat tire machines</strong> like the <a href='/run-flat-machine-workshop-model/'>GMR-023 Workshop Model</a> automate the highest-risk steps — bead breaking and insert extraction — using hydraulic cylinders with controlled stroke and pressure. This eliminates the uncontrolled energy release that makes manual methods dangerous.",
          "After insert removal, the tire can be inspected, the rim cleaned and checked for damage, and a new or refurbished run-flat insert installed with proper lubrication and alignment before reassembly.",
        ],
      },
      {
        heading: "Choosing the Right Run-Flat Changer for HMMWV Fleets",
        body: [
          "For garrison and depot-level maintenance where HMMWV fleets are serviced in fixed facilities, the workshop-configured <strong>run-flat machine</strong> offers the highest throughput and operator comfort. For forward operating bases and expeditionary maintenance, containerized or trailer-mounted configurations bring the same hydraulic capability closer to the point of need.",
          "Key selection criteria include: rim compatibility (16.5-inch for standard HMMWV), hydraulic force rating sufficient for Hutchinson inserts, dual control systems (joystick and radio remote) for operator safety, emergency-stop logic, and a documented training and spare-parts support program.",
        ],
      },
    ],
  },
  {
    slug: "stryker-apc-runflat-tire-replacement-machine",
    title: "Stryker & APC Run-Flat Tire Replacement: Armored Vehicle Tire Machine Guide",
    href: "/stryker-apc-runflat-tire-replacement-machine/",
    date: "2025-12-15",
    author: "hazel",
    image: "/assets/blog-stryker-runflat-system.png",
    excerpt:
      "A comprehensive guide to Stryker combat vehicle and APC run-flat tire replacement, covering runflat disassembly, Hutchinson insert systems, and selecting the right armored vehicle tire machine for military maintenance operations.",
    category: "run-flat-machine",
    tags: ["armored-vehicle", "run-flat-tire-changer", "run-flat-machine"],
    sections: [
      {
        heading: "Stryker and APC Run-Flat Systems: Why They Matter",
        body: [
          "The Stryker family of wheeled combat vehicles — including the M1126 Infantry Carrier Vehicle, M1128 Mobile Gun System, and emerging variants — relies on eight-wheel independent suspension with run-flat tire systems that enable continued mobility after ballistic tire damage. Similarly, armored personnel carriers (APCs) across global forces depend on run-flat inserts to maintain operational tempo when tires are compromised.",
          "These <strong>run-flat systems</strong> use heavy-duty rubber or composite inserts (typically Hutchinson or equivalent) that sit inside the tire cavity and bear the vehicle's weight when air pressure is lost. For an 8×8 Stryker weighing up to 19 tons, each wheel assembly represents a significant mass that requires machine-assisted handling for safe and efficient tire service.",
          "Without a purpose-built <a href='/products/'>run-flat machine for armored vehicles</a>, maintenance teams face extended downtime, increased injury risk, and potential damage to expensive run-flat inserts and ballistic rims during disassembly and reassembly.",
        ],
      },
      {
        heading: "Runflat Disassembly Process for 8×8 Combat Vehicles",
        body: [
          "The run-flat disassembly workflow for Stryker and similar APC platforms follows a precision sequence: wheel removal from the vehicle using appropriate lifting equipment, secure positioning on the <strong>runflat machine</strong> platform, controlled deflation, locking-ring or beadlock hardware removal, hydraulic bead separation, and machine-assisted run-flat insert extraction.",
          "Stryker wheels typically use 20-inch rims with heavy Hutchinson run-flat inserts. The extraction force required to remove a seated insert from a Stryker tire significantly exceeds what manual methods can safely deliver. A hydraulic <a href='https://gmdefensive.com/run-flat-tire-changer/how-it-works/' target='_blank' rel='noopener'>military run-flat changer machine</a> applies calibrated, controlled force through the full extraction stroke — protecting both the technician and the reusable insert.",
        ],
      },
      {
        heading: "APC and Armored Vehicle Tire Machine Selection Criteria",
        body: [
          "When evaluating a <strong>tire machine for armored vehicles</strong>, procurement teams should verify compatibility with the specific rim diameters in their fleet inventory. Stryker platforms use 20-inch rims, while other APCs like the Boxer, BTR-series, and VBCI families use rim sizes ranging from 16 to 24 inches.",
          "The <a href='/gmt-099-run-flat-machine-trailer-model/'>GMT-099 Trailer Model</a> is particularly well-suited for Stryker brigade maintenance operations because it can be towed to forward staging areas where wheeled combat vehicles are concentrated. The trailer-mounted configuration provides the same hydraulic capability as fixed workshop models while maintaining road-mobile deployment flexibility.",
          "Critical evaluation factors include: maximum rim diameter capacity, hydraulic force output for insert removal, integrated lifting systems for heavy wheel assemblies, dual control interfaces (joystick and radio remote), and comprehensive training and spare-parts support from the manufacturer.",
        ],
      },
      {
        heading: "Hutchinson Run-Flat Insert Installation Best Practices",
        body: [
          "Proper Hutchinson run-flat insert installation requires clean rim surfaces, correct lubricant application on the insert exterior and tire bead areas, precise alignment during insertion, and controlled hydraulic press-fitting to seat the insert without damage. Machine-assisted installation ensures consistent seating pressure across the full circumference of the insert.",
          "Post-installation checks should include visual inspection for proper insert seating, tire bead position verification, locking-ring torque verification, and inflation to specified operating pressure. A standardized machine-assisted workflow makes these checks repeatable across different technician skill levels and operating environments.",
        ],
      },
    ],
  },
  {
    slug: "mrap-military-run-flat-tire-machine-guide",
    title: "MRAP Run-Flat Tire Machine: Military Run-Flat Replacement & Disassembly Guide",
    href: "/mrap-military-run-flat-tire-machine-guide/",
    date: "2026-01-08",
    author: "admin",
    image: "/assets/blog-mrap-tire-changer.png",
    excerpt:
      "Complete guide to MRAP run-flat tire replacement and disassembly, covering military run-flat inserting machines, runflat removal tools, and the best run-flat changer machines for armored vehicle fleet maintenance.",
    category: "run-flat-machine",
    tags: ["armored-vehicle", "run-flat-tire", "run-flat-changer-machine"],
    sections: [
      {
        heading: "MRAP Vehicles and the Run-Flat Maintenance Challenge",
        body: [
          "Mine-Resistant Ambush Protected (MRAP) vehicles — including the Cougar, MaxxPro, Buffalo, and Caiman families — represent some of the heaviest wheeled platforms in modern military inventories. With gross vehicle weights ranging from 14 to 25 tons, these vehicles impose extreme demands on their tire and <strong>run-flat systems</strong>, making tire maintenance one of the most critical and physically challenging tasks in armored fleet operations.",
          "MRAP tires are engineered with oversized <strong>run-flat inserts</strong> that enable continued mobility at reduced speed after ballistic damage, IED blast effects, or puncture events. These inserts — typically manufactured by Hutchinson or equivalent defense-grade suppliers — are press-fitted inside the tire cavity and require substantial hydraulic force for both removal and reinstallation.",
          "Traditional manual methods using pry bars and improvised leverage are not only inadequate for MRAP-class wheel assemblies — they are genuinely dangerous. The energy stored in a seated run-flat insert during manual extraction can cause uncontrolled release, leading to serious technician injuries. A dedicated <a href='/products/'>run-flat machine for military vehicles</a> eliminates this risk by applying controlled hydraulic force through the full disassembly and reassembly cycle.",
        ],
      },
      {
        heading: "Run-Flat Disassembly and Reassembly Workflow for MRAPs",
        body: [
          "The <strong>run-flat disassembly</strong> process for MRAP wheels follows a controlled sequence designed to protect both the technician and reusable components. The workflow begins with wheel removal from the vehicle, secure mounting on the machine platform, full deflation, and locking-ring or beadlock hardware removal.",
          "Once the tire bead is broken using calibrated hydraulic pressure, the <strong>run-flat remover</strong> system extracts the insert from the tire cavity with controlled, progressive force. The rim and insert are then inspected for damage, cleaned, and prepared for reassembly with a new or refurbished tire.",
          "For reassembly, the <strong>run-flat inserting machine</strong> reverses the process: the insert is lubricated, aligned, and hydraulically pressed into the new tire cavity, followed by bead seating, locking-ring installation, and inflation to operating pressure. Modern machines like the <a href='/gmh-098-run-flat-machine-container-model/'>GMH-098 Container Model</a> perform this entire cycle within a protected, containerized workspace — ideal for forward operating base deployments where MRAP maintenance demand is highest.",
        ],
      },
      {
        heading: "Selecting the Best Run-Flat Tire Machine for MRAP Fleets",
        body: [
          "MRAP fleets require <strong>run-flat changer machines</strong> with higher hydraulic force output than standard military tire changers. The oversized inserts, heavier rims (typically 20–24 inches), and greater tire sidewall stiffness all demand machines specifically rated for heavy armored vehicle service.",
          "Key procurement evaluation criteria for MRAP-compatible <strong>military run-flat machines</strong> include: maximum rim diameter (24-inch minimum for most MRAP families), hydraulic cylinder force rating, integrated wheel lifting capacity, dual control systems with emergency-stop logic, and manufacturer-provided training and long-term spare-parts support.",
          "<a href='https://gmdefensive.com/run-flat-tire-changer/' target='_blank' rel='noopener'>GM Defensive run-flat tire changer</a> machines support rim sizes from 16 to 27 inches, covering the full range of MRAP wheel assemblies across Cougar, MaxxPro, Buffalo, and equivalent international MRAP platforms. The three available configurations — workshop, container, and trailer — allow maintenance planners to match the machine deployment model to their specific operating environment.",
        ],
      },
      {
        heading: "Field vs. Depot Maintenance: Choosing the Right Configuration",
        body: [
          "For MRAP fleets operating from fixed garrison facilities, the workshop-configured <strong>run-flat tire changer</strong> delivers the highest throughput with the most comfortable operating environment. For forward deployed units, the containerized model provides a protected, climate-controllable workspace that can be transported by standard military logistics assets.",
          "When maximum mobility is required — such as supporting dispersed MRAP units across multiple operating locations — the trailer-mounted configuration brings full hydraulic run-flat capability to wherever the vehicles are staged, without requiring permanent infrastructure.",
        ],
      },
    ],
  },
  {
    slug: "hemtt-hutchinson-run-flat-insert-replacement-guide",
    title: "HEMTT Run-Flat System & Hutchinson Insert Replacement: Military Truck Tire Guide",
    href: "/hemtt-hutchinson-run-flat-insert-replacement-guide/",
    date: "2026-01-20",
    author: "hazel",
    image: "/assets/blog-hemtt-runflat-system.png",
    excerpt:
      "Comprehensive guide to HEMTT truck run-flat systems, Hutchinson run-flat insert replacement, military truck tire maintenance, and selecting runflat machines for heavy logistics vehicle fleets.",
    category: "run-flat-machine",
    tags: ["military-tires", "run-flat-tire", "run-flat-machine"],
    sections: [
      {
        heading: "HEMTT: The Backbone of Military Heavy Logistics",
        body: [
          "The Heavy Expanded Mobility Tactical Truck (HEMTT) is the primary heavy logistics platform for the U.S. Army and numerous allied forces worldwide. Produced by Oshkosh Defense, the HEMTT family includes cargo carriers (M977), fuel tankers (M978), wrecker recovery vehicles (M984), and ammunition carriers that collectively form the logistics backbone of brigade combat teams.",
          "Each HEMTT variant relies on large-diameter wheels equipped with <strong>Hutchinson run-flat inserts</strong> that enable continued mobility after tire damage — critical for logistics convoys operating in areas where improvised explosive devices (IEDs) and ballistic threats target soft-skinned and armored logistics vehicles alike.",
          "The sheer size and weight of HEMTT wheel assemblies — with rims ranging from 20 to 24 inches — makes tire and run-flat maintenance one of the most physically demanding tasks in military motor pool operations. Without a <a href='/products/'>dedicated run-flat machine</a>, maintenance teams face prolonged service times, increased injury exposure, and potential damage to expensive Hutchinson inserts during manual removal attempts.",
        ],
      },
      {
        heading: "Understanding Hutchinson Run-Flat Systems",
        body: [
          "Hutchinson is the predominant manufacturer of <strong>military run-flat inserts</strong> used across NATO and allied defense forces. The Hutchinson run-flat system consists of a precisely engineered rubber or composite ring that sits inside the tire cavity, resting on the rim. When tire pressure is lost, the run-flat insert bears the vehicle's weight and maintains a degree of mobility — typically allowing continued operation at reduced speed for a specified distance.",
          "The <strong>Hutchinson run-flat installation</strong> process requires the insert to be press-fitted into the tire with precise alignment and specified lubrication. Improper installation — such as uneven seating, insufficient lubricant, or misaligned inserts — can lead to premature insert failure, uneven tire wear, and compromised run-flat performance when the system is most needed.",
          "A hydraulic <a href='https://gmdefensive.com/military-run-flat-tires/' target='_blank' rel='noopener'>run-flat changer machine</a> ensures consistent insertion force and alignment across the full circumference of the insert, eliminating the variability inherent in manual or improvised installation methods.",
        ],
      },
      {
        heading: "HEMTT Run-Flat Replacement Workflow",
        body: [
          "The <strong>run-flat replacement</strong> workflow for HEMTT trucks follows a structured maintenance sequence: wheel removal from the vehicle (typically requiring a crane or heavy forklift due to assembly weight), secure positioning on the <strong>runflat machine</strong> platform, complete deflation, beadlock or locking-ring hardware removal, hydraulic bead separation, and controlled insert extraction.",
          "For HEMTT wheels, the extraction force required to remove a fully seated Hutchinson insert is substantially higher than for lighter tactical vehicles like the HMMWV. This makes machine-assisted extraction not merely convenient but operationally essential. The <a href='/run-flat-machine-workshop-model/'>GMR-023 Workshop Model</a> is engineered for exactly this class of heavy-duty tire work, with hydraulic systems calibrated for the forces involved in HEMTT, MRAP, and similarly demanding wheel assemblies.",
          "After insert removal, the maintenance sequence continues with rim inspection, cleaning, new tire mounting, insert lubrication and hydraulic installation, bead seating, locking-ring installation, and final inflation to operating specifications.",
        ],
      },
      {
        heading: "Fleet-Level Procurement Considerations for Heavy Truck Tire Machines",
        body: [
          "When procuring <strong>runflat machines for military trucks</strong>, logistics planners should evaluate the full scope of wheel assemblies in their inventory — not just the dominant vehicle type. A single brigade may field HEMTT, HMMWV, FMTV, JLTV, and Stryker platforms, each with different rim sizes, insert types, and tire specifications.",
          "The ideal procurement strategy selects machines with the widest rim compatibility range (16–27 inches covers most NATO standard military wheels), sufficient hydraulic capacity for the heaviest assemblies in the fleet, and deployment configurations that match the unit's maintenance concept — fixed workshop for garrison, containerized for semi-permanent forward sites, or trailer-mounted for maximum field mobility.",
          "Long-term support factors including operator training, technical documentation, spare-parts availability (15-year programs), and warranty coverage should receive equal weight alongside technical specifications during the procurement evaluation process.",
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
  "/blog/": "2026-01-20",
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
  "/hmmwv-humvee-run-flat-tire-changer-guide/": "2025-12-10",
  "/stryker-apc-runflat-tire-replacement-machine/": "2025-12-15",
  "/mrap-military-run-flat-tire-machine-guide/": "2026-01-08",
  "/hemtt-hutchinson-run-flat-insert-replacement-guide/": "2026-01-20",
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
