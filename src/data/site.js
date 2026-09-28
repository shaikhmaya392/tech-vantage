export const site = {
  name: "Tech Vantage Now",
  shortName: "Tech Vantage",
  legalName: "Tech Vantage Now",
  url: "https://techvantagenow.com",
  tagline: "Custom Website, Logo, Animation & More",
  description:
    "Tech Vantage Now is a US-based creative digital agency offering premium logo design, website & mobile app development, video animation, SEO and social media marketing. Custom Website, Logo, Animation & More.",
  copyrightYear: 2026,
  email: "info@techvantagenow.com",
  phone: "+1 317 296 6078",
  phoneHref: "+13172966078",
  address: {
    street: "60 Tower Pl",
    city: "Yonkers",
    region: "NY",
    postalCode: "10703",
    country: "US",
    full: "60 Tower Pl, Yonkers, NY 10703",
  },
  // Real hero background video from the original site
  heroVideo: "/assets/brand-videos/home-video.mp4",
  // Real typewriter headlines from the original site
  heroTypewriter: [
    "Web Designs that attract millions",
    "Results-oriented SEO",
    "Unique Logo Designs",
    "Self-explanatory Video Animation",
  ],
  logos: {
    white: "/assets/images/logo-white.png",
    dark: "/assets/images/black-logo.png",
    color: "/assets/images/logo.png",
  },
  socials: [
    {
      name: "Facebook",
      href: "https://facebook.com/profile.php?id=61550707577306",
      icon: "facebook",
      png: "/assets/images/facebook.png",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/techvantage.now/",
      icon: "instagram",
      png: "/assets/images/instagram.png",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/tech-vantage-now/",
      icon: "linkedin",
      png: "/assets/images/linkedin.png",
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
      { label: "Mobile Apps", href: "/services/mobile-app-development" },
      { label: "Video Animation", href: "/services/video-animation" },
      { label: "SEO", href: "/services/seo" },
      { label: "Social Media", href: "/services/social-media-marketing" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

// Real, factual proof points (no invented metrics)
export const stats = [
  { value: 100, suffix: "+", label: "Pleased clients" },
  { value: 6, suffix: "", label: "Core services" },
  { value: 100, suffix: "%", label: "Satisfaction guarantee" },
  { value: 100, suffix: "%", label: "Ownership rights" },
];

// Real "What distinguishes Tech Vantage Now from the rest?" content
export const differentiators = [
  {
    title: "Attention To Detail",
    description:
      "It's our attention to the small stuff, scheduling of timelines & keen project management that makes us stand out from the rest. We are creative while keeping a close eye on the calendar and your budget.",
    icon: "target",
  },
  {
    title: "Experts Only",
    description:
      "Tech Vantage Now hires the best designers, developers, and analysts in their team so that the clients get exactly what they are looking for. All the industry-experienced teams we have are one of a kind in their respective industries.",
    icon: "users",
  },
  {
    title: "Fair Pricing",
    description:
      "Tech Vantage Now offer is kept to cater to all types of organization types starting from Startup to Large-scale organizations.",
    icon: "badge-dollar-sign",
  },
];
