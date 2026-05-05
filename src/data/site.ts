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
    image: "/assets/cap-lift-system.png",
  },
  {
    title: "Ring Remover System",
    body: "Supports controlled split-rim and locking-ring workflows common in military wheel assemblies.",
    image: "/assets/cap-ring-remover.png",
  },
  {
    title: "Hydraulic System Unit",
    body: "Applies the force required for practical run-flat insert disassembly and reassembly.",
    image: "/assets/cap-hydraulic-unit.png",
  },
  {
    title: "Controller Unit",
    body: "Uses joystick and radio remote control logic so operators can keep safer working distances.",
    image: "/assets/cap-controller-unit.png",
  },
  {
    title: "Safety Architecture",
    body: "Emergency-stop controls and stable handling routines reduce exposure during high-force tire work.",
    image: "/assets/cap-safety-arch.png",
  },
  {
    title: "Training and Support",
    body: "Worldwide delivery, setup support, operator training, warranty coverage, and spare parts planning.",
    image: "/assets/cap-training-support.png",
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
