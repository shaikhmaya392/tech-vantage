export const site = {
  name: "Tech Vantage Now",
  shortName: "Tech Vantage",
  legalName: "Tech Vantage Now LLC",
  url: "https://techvantagenow.com",
  tagline: "Your digital design & marketing powerhouse",
  description:
    "Tech Vantage Now is a US-based creative digital agency delivering premium logo design, website & mobile app development, video animation, SEO and social media marketing — backed by 8 years of industry expertise.",
  founded: 2016,
  experienceYears: 8,
  email: "info@techvantagenow.com",
  phone: "+1 317 296 6078",
  phoneHref: "+13172966078",
  address: {
    street: "60 Tower Pl",
    city: "Yonkers",
    region: "NY",
    postalCode: "10703",
    country: "US",
    full: "60 Tower Pl, Yonkers, NY 10703, USA",
  },
  socials: [
    {
      name: "Facebook",
      href: "https://facebook.com/profile.php?id=61550707577306",
      icon: "facebook",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/techvantage.now/",
      icon: "instagram",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/tech-vantage-now/",
      icon: "linkedin",
    },
  ],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Logo Design", href: "/services/logo-design" },
      { label: "Website Development", href: "/services/website-development" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "Video Animation", href: "/services/video-animation" },
      { label: "SEO", href: "/services/seo" },
      { label: "Social Media Marketing", href: "/services/social-media-marketing" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 8, suffix: "+", label: "Years of experience" },
  { value: 450, suffix: "+", label: "Projects delivered" },
  { value: 320, suffix: "+", label: "Happy clients" },
  { value: 98, suffix: "%", label: "Client retention" },
];

export const differentiators = [
  {
    title: "Attention to Detail",
    description:
      "Tight schedules, clear timelines and disciplined project management — every pixel and every milestone is accounted for.",
    icon: "target",
  },
  {
    title: "Expert Team",
    description:
      "Industry-seasoned designers, developers and analysts who turn ambitious ideas into polished, shippable products.",
    icon: "users",
  },
  {
    title: "Fair Pricing",
    description:
      "Transparent packages scaled for startups through large enterprises — premium quality without the premium markup.",
    icon: "badge-dollar-sign",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "We dig into your goals, audience and competitors to build a strategy grounded in real insight.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Concepts, wireframes and high-fidelity designs crafted around your brand and your customers.",
  },
  {
    step: "03",
    title: "Develop",
    description:
      "Clean, performant builds — from brand assets to full-stack web and mobile applications.",
  },
  {
    step: "04",
    title: "Deliver & Grow",
    description:
      "We launch, measure and optimize with SEO and marketing so results keep compounding.",
  },
];
