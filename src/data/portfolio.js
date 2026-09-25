// Placeholder case studies. Replace images/results with real client work later.
export const projects = [
  {
    slug: "novabank-fintech-app",
    title: "NovaBank — Fintech Mobile App",
    client: "NovaBank",
    category: "Mobile Apps",
    year: "2024",
    cover: "https://picsum.photos/seed/novabank/1200/800",
    thumb: "https://picsum.photos/seed/novabank/800/600",
    tags: ["Mobile App", "UI/UX", "Fintech"],
    summary:
      "A next-gen banking app with instant transfers, budgeting and biometric security.",
    challenge:
      "NovaBank needed a modern, trustworthy mobile experience to compete with digital-first challengers and reduce support tickets.",
    solution:
      "We reimagined onboarding, redesigned the transaction flow and built a React Native app with biometric auth and smart budgeting.",
    results: [
      { value: "4.8★", label: "App Store rating" },
      { value: "+62%", label: "Daily active users" },
      { value: "-38%", label: "Support tickets" },
    ],
    services: ["Mobile App Development", "UI/UX Design"],
  },
  {
    slug: "verdeleaf-ecommerce",
    title: "VerdeLeaf — Sustainable E-commerce",
    client: "VerdeLeaf",
    category: "Website Development",
    year: "2024",
    cover: "https://picsum.photos/seed/verdeleaf/1200/800",
    thumb: "https://picsum.photos/seed/verdeleaf/800/600",
    tags: ["E-commerce", "Next.js", "SEO"],
    summary:
      "A lightning-fast eco storefront with headless commerce and rich storytelling.",
    challenge:
      "Slow load times and a dated storefront were hurting conversions and organic reach.",
    solution:
      "We rebuilt VerdeLeaf on Next.js with headless commerce, optimized Core Web Vitals and layered in a full SEO strategy.",
    results: [
      { value: "+140%", label: "Organic traffic" },
      { value: "0.9s", label: "Largest Contentful Paint" },
      { value: "+54%", label: "Conversion rate" },
    ],
    services: ["Website Development", "SEO"],
  },
  {
    slug: "pulsefit-brand",
    title: "PulseFit — Brand Identity",
    client: "PulseFit",
    category: "Logo Design",
    year: "2023",
    cover: "https://picsum.photos/seed/pulsefit/1200/800",
    thumb: "https://picsum.photos/seed/pulsefit/800/600",
    tags: ["Branding", "Logo", "Guidelines"],
    summary:
      "A bold, energetic identity for a fast-growing fitness startup.",
    challenge:
      "PulseFit had no cohesive brand — inconsistent visuals were weakening recognition across channels.",
    solution:
      "We crafted a dynamic logo system, energetic palette and complete brand guidelines with social and packaging assets.",
    results: [
      { value: "3x", label: "Brand recall" },
      { value: "+80%", label: "Social engagement" },
      { value: "12", label: "Asset templates" },
    ],
    services: ["Logo Design", "Social Media Marketing"],
  },
  {
    slug: "skyroute-saas",
    title: "SkyRoute — SaaS Explainer",
    client: "SkyRoute",
    category: "Video Animation",
    year: "2024",
    cover: "https://picsum.photos/seed/skyroute/1200/800",
    thumb: "https://picsum.photos/seed/skyroute/800/600",
    tags: ["Motion", "Explainer", "2D Animation"],
    summary:
      "A 90-second animated explainer that made a complex logistics SaaS click.",
    challenge:
      "Prospects didn't understand SkyRoute's value fast enough, hurting trial sign-ups.",
    solution:
      "We wrote, storyboarded and animated a crisp 2D explainer used on the homepage and in ads.",
    results: [
      { value: "+47%", label: "Trial sign-ups" },
      { value: "2.1x", label: "Homepage time-on-page" },
      { value: "1.3M", label: "Ad views" },
    ],
    services: ["Video Animation"],
  },
  {
    slug: "lumen-dental-seo",
    title: "Lumen Dental — Local SEO",
    client: "Lumen Dental",
    category: "SEO",
    year: "2023",
    cover: "https://picsum.photos/seed/lumen/1200/800",
    thumb: "https://picsum.photos/seed/lumen/800/600",
    tags: ["Local SEO", "Content", "GBP"],
    summary:
      "A local SEO program that put a dental group at the top of the map pack.",
    challenge:
      "Lumen Dental was invisible in local search despite great reviews offline.",
    solution:
      "We optimized their Google Business Profile, built local content and earned citations and backlinks.",
    results: [
      { value: "#1", label: "Map pack ranking" },
      { value: "+210%", label: "Booking calls" },
      { value: "+3.5x", label: "Organic leads" },
    ],
    services: ["SEO"],
  },
  {
    slug: "aurora-social",
    title: "Aurora Cosmetics — Social Growth",
    client: "Aurora Cosmetics",
    category: "Social Media Marketing",
    year: "2024",
    cover: "https://picsum.photos/seed/aurora/1200/800",
    thumb: "https://picsum.photos/seed/aurora/800/600",
    tags: ["Social", "Paid Ads", "Content"],
    summary:
      "A content + paid engine that scaled a beauty brand's community and sales.",
    challenge:
      "Aurora had a great product but flat social growth and inefficient ad spend.",
    solution:
      "We built a content system, UGC pipeline and paid social funnel across Meta and TikTok.",
    results: [
      { value: "+95K", label: "New followers" },
      { value: "4.2x", label: "ROAS" },
      { value: "+68%", label: "Store revenue" },
    ],
    services: ["Social Media Marketing"],
  },
];

export const portfolioCategories = [
  "All",
  "Logo Design",
  "Website Development",
  "Mobile Apps",
  "Video Animation",
  "SEO",
  "Social Media Marketing",
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
