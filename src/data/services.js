// All copy below is taken from the real techvantagenow.com site.
export const services = [
  {
    slug: "logo-design",
    title: "Logo Design",
    image: "/assets/images/logodesign.webp",
    icon: "pen-tool",
    short: "Unique Logo Designs that make your brand unforgettable.",
    hero: "Unique Logo Designs",
    intro:
      "A logo is the face of your brand. Our designers craft distinctive, versatile logo designs that capture your identity and stand out across every platform.",
    portfolioCategory: "logo",
    points: [
      {
        title: "Custom Logo Concepts",
        text: "Multiple original concepts designed around your brand, with unlimited revisions on your chosen direction.",
      },
      {
        title: "Brand Identity",
        text: "Complete identity systems — colour, typography and usage guidelines that keep your brand consistent.",
      },
      {
        title: "100% Ownership Rights",
        text: "On completion you receive all source files and full ownership rights to your logo.",
      },
    ],
  },
  {
    slug: "website-development",
    title: "Website Development",
    image: "/assets/images/website.png",
    icon: "layout-template",
    short: "Rule the digital world with a modern website.",
    hero: "Rule The Digital World With A Modern Website",
    intro:
      "Web solutions that convert clients. We design and build fast, modern, search-engine-optimized websites — from marketing sites to full web applications.",
    portfolioCategory: "website",
    points: [
      {
        title: "Web Application",
        text: "We make technically complicated and demanding web applications for both desktop computers and all sorts of portable devices.",
      },
      {
        title: "B2B & B2C Portals",
        text: "The portals allow businesses to sell & purchase products or services. We ensure that the website portals we create are search engine optimized and have a user-friendly content management system.",
      },
      {
        title: "CMS Websites",
        text: "CMS allows business owners to manage and update their websites without going to and fro a developer. Developing a CMS-based website is a major strength that our developers own.",
      },
      {
        title: "Ecommerce Websites",
        text: "Merchant integration, CMS, product reports and coupons are just some of the ways we provide comprehensive online solutions to improve your revenue via an online store.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile Apps",
    image: "/assets/images/mobile-pic.png",
    icon: "smartphone",
    short: "Mobile apps that offer incredible user experience.",
    hero: "Mobile Apps That Offer Incredible User Experience",
    intro:
      "Delivering world-class Mobile Applications. We stick to best practices for mobile app development while making sure that our style is agile.",
    portfolioCategory: "website",
    points: [
      {
        title: "iOS & Android",
        text: "Native-quality apps built for both platforms, designed for delight and built to scale.",
      },
      {
        title: "Agile Development",
        text: "We stick to best practices for mobile app development while making sure that our style is agile.",
      },
      {
        title: "End-to-End Delivery",
        text: "From product design and development to backend integration and store deployment.",
      },
    ],
  },
  {
    slug: "video-animation",
    title: "Video Animation",
    image: "/assets/images/video-edit.jpg",
    icon: "clapperboard",
    short: "Self-explanatory video animation that keeps audiences watching.",
    hero: "Self-explanatory Video Animation",
    intro:
      "Explainer videos and motion graphics that communicate your value in seconds. See a selection of our real animation work below.",
    portfolioCategory: "animation",
    points: [
      {
        title: "2D & 3D Animation",
        text: "Eye-catching animated content crafted to tell your story clearly and memorably.",
      },
      {
        title: "Explainer Videos",
        text: "Self-explanatory videos that turn complex ideas into simple, engaging stories.",
      },
      {
        title: "Motion Graphics",
        text: "Scroll-stopping motion for social, ads and product demos.",
      },
    ],
  },
  {
    slug: "seo",
    title: "SEO",
    image: "/assets/images/seo2.png",
    icon: "trending-up",
    short: "Results-oriented SEO that grows traffic and revenue.",
    hero: "Rev up your online presence with SEO magic",
    intro:
      "Unlocking 50% more traffic and doubling your revenue — it's a game-changer! Our data-driven SEO covers every angle of search.",
    portfolioCategory: null,
    points: [
      {
        title: "Content SEO",
        text: "Involves creating high-quality, relevant content that appeals to the target audience and aligns with search engine algorithms. Content SEO emphasizes keyword research, content structure, and user engagement.",
      },
      {
        title: "Off-Page SEO",
        text: "Involves activities outside the website to improve its online presence. This includes backlink building, social media marketing, and influencer outreach.",
      },
      {
        title: "On-Page SEO",
        text: "Focuses on optimizing individual web pages to rank higher and earn more relevant traffic. This includes optimizing content, HTML code, and meta tags.",
      },
      {
        title: "Technical SEO",
        text: "Optimizes your site's technical foundation — speed, structure, crawlability and indexing — so search engines can find and rank you.",
      },
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media",
    image: "/assets/images/smm.png",
    icon: "megaphone",
    short: "Social media marketing that grows and engages your audience.",
    hero: "Social Media Marketing",
    intro:
      "Strategy, content and campaigns across social platforms that build real audiences and drive engagement. Browse our real social media design work below.",
    portfolioCategory: "smm",
    points: [
      {
        title: "Content & Creative",
        text: "On-brand posts, stories and creatives planned around your audience.",
      },
      {
        title: "Community Management",
        text: "Consistent engagement that turns followers into a loyal community.",
      },
      {
        title: "Campaigns",
        text: "Planned and managed social campaigns to grow reach and engagement.",
      },
    ],
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
