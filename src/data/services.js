export const services = [
  {
    slug: "logo-design",
    title: "Logo Design",
    icon: "pen-tool",
    short: "Distinctive, memorable brand marks that make you unforgettable.",
    excerpt:
      "A logo is the handshake of your brand. We design timeless, versatile marks that capture your story and scale beautifully across every touchpoint.",
    hero:
      "Iconic logos & complete brand identities that make your business impossible to ignore.",
    features: [
      "Custom logo concepts",
      "Brand identity systems",
      "Color & typography guidelines",
      "Stationery & social kits",
      "Unlimited revisions*",
      "Print & vector-ready files",
    ],
    deliverables: [
      "Primary, secondary & submark logos",
      "AI, EPS, SVG, PNG & PDF files",
      "Brand style guide",
      "Social media avatar & cover set",
    ],
    faqs: [
      {
        q: "How many logo concepts will I get?",
        a: "Depending on your package, you receive 3–8 unique concepts, then unlimited revisions on the direction you choose.",
      },
      {
        q: "Do I own full rights to my logo?",
        a: "Yes. Once your project is complete you receive full copyright ownership and all source files.",
      },
    ],
  },
  {
    slug: "website-development",
    title: "Website Development",
    icon: "layout-template",
    short: "Blazing-fast, conversion-focused websites built to grow.",
    excerpt:
      "From marketing sites to full web apps, we build responsive, SEO-ready experiences that load fast and convert visitors into customers.",
    hero:
      "High-performance websites & web apps engineered for speed, SEO and conversions.",
    features: [
      "Custom UI/UX design",
      "React / Next.js builds",
      "Fully responsive",
      "CMS integration",
      "E-commerce ready",
      "Core Web Vitals optimized",
    ],
    deliverables: [
      "Design + development",
      "CMS / admin panel",
      "SEO foundations & analytics",
      "Training & documentation",
    ],
    faqs: [
      {
        q: "What technologies do you build with?",
        a: "We specialize in React, Next.js and modern headless stacks, plus WordPress and Shopify when they fit best.",
      },
      {
        q: "Will my site be mobile friendly?",
        a: "Absolutely. Every build is fully responsive and tested across devices and browsers.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    icon: "smartphone",
    short: "Native-quality iOS & Android apps your users will love.",
    excerpt:
      "We design and build performant, delightful mobile apps — from MVPs to full-scale products — for iOS, Android and cross-platform.",
    hero:
      "iOS & Android apps designed for delight and built for scale.",
    features: [
      "iOS & Android apps",
      "Cross-platform (React Native)",
      "UX/UI product design",
      "API & backend integration",
      "App Store deployment",
      "Ongoing support",
    ],
    deliverables: [
      "Product design & prototype",
      "Native / cross-platform build",
      "Backend & API",
      "Store submission & launch",
    ],
    faqs: [
      {
        q: "Do you build for both iOS and Android?",
        a: "Yes — natively or with React Native / Flutter for a single, cost-efficient codebase.",
      },
      {
        q: "Can you take over an existing app?",
        a: "We regularly audit, refactor and extend existing apps. Share your codebase and we'll advise.",
      },
    ],
  },
  {
    slug: "video-animation",
    title: "Video Animation",
    icon: "clapperboard",
    short: "Scroll-stopping explainer & motion graphics videos.",
    excerpt:
      "Explainer videos, 2D/3D motion graphics and product demos that communicate your value in seconds and keep audiences watching.",
    hero:
      "Explainer & motion graphics videos that turn attention into action.",
    features: [
      "2D & 3D animation",
      "Explainer videos",
      "Motion graphics",
      "Scriptwriting & voiceover",
      "Storyboarding",
      "Social-ready cuts",
    ],
    deliverables: [
      "Script & storyboard",
      "Full animated video",
      "Voiceover & sound design",
      "Platform-optimized exports",
    ],
    faqs: [
      {
        q: "How long does an explainer video take?",
        a: "Most 60–90 second explainers take 2–4 weeks from script to final export.",
      },
      {
        q: "Do you write the script too?",
        a: "Yes, scriptwriting, voiceover and sound design are all part of our production process.",
      },
    ],
  },
  {
    slug: "seo",
    title: "Search Engine Optimization",
    icon: "trending-up",
    short: "Rank higher, get found, grow organic revenue.",
    excerpt:
      "Technical SEO, on-page optimization, content strategy and authority building that move you up the rankings and keep you there.",
    hero:
      "Data-driven SEO that grows organic traffic, rankings and revenue.",
    features: [
      "Technical SEO audits",
      "Keyword research & strategy",
      "On-page optimization",
      "Content strategy",
      "Link building",
      "Local SEO",
    ],
    deliverables: [
      "SEO audit & roadmap",
      "Optimized pages & content",
      "Monthly performance reports",
      "Rank & traffic tracking",
    ],
    faqs: [
      {
        q: "How long until I see SEO results?",
        a: "SEO is a compounding investment — most clients see meaningful movement in 3–6 months.",
      },
      {
        q: "Do you offer local SEO?",
        a: "Yes, including Google Business Profile optimization, local citations and review strategy.",
      },
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    icon: "megaphone",
    short: "Grow, engage and convert your audience across platforms.",
    excerpt:
      "Strategy, content, community management and paid campaigns that build real audiences and drive measurable business results.",
    hero:
      "Social media strategy, content & ads that build audiences and drive sales.",
    features: [
      "Content strategy & calendar",
      "Creative & copywriting",
      "Community management",
      "Paid social campaigns",
      "Influencer outreach",
      "Analytics & reporting",
    ],
    deliverables: [
      "Monthly content calendar",
      "Branded creatives",
      "Ad campaign management",
      "Performance reporting",
    ],
    faqs: [
      {
        q: "Which platforms do you manage?",
        a: "Instagram, Facebook, LinkedIn, TikTok, X and YouTube — chosen around where your audience actually is.",
      },
      {
        q: "Do you handle paid ads?",
        a: "Yes, we plan, launch and optimize paid campaigns across Meta, LinkedIn and TikTok.",
      },
    ],
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
