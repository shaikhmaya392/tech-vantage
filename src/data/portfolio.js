// Real portfolio assets pulled from techvantagenow.com (public/assets/...).
const IMG = "/assets/images/portfolio";
const VID = "/assets/brand-videos";

export const portfolioCategories = [
  { key: "all", label: "All" },
  { key: "website", label: "Website" },
  { key: "logo", label: "Logo" },
  { key: "branding", label: "Branding" },
  { key: "animation", label: "Animation" },
  { key: "smm", label: "Social Media" },
  { key: "nft", label: "NFT Design" },
];

// type: "image" | "video"
export const portfolioItems = [
  // Websites
  ...[1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({
    id: `web-${n}`,
    category: "website",
    type: "image",
    src: `${IMG}/website/${n}.png`,
    title: "Website Design",
  })),
  // Logos
  ...[1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({
    id: `logo-${n}`,
    category: "logo",
    type: "image",
    src: `${IMG}/logo/0${n}.jpg`,
    title: "Logo Design",
  })),
  // Branding
  ...["11", "22", "33", "44", "55", "66", "77", "88"].map((n, i) => ({
    id: `brand-${i}`,
    category: "branding",
    type: "image",
    src: `${IMG}/branding/${n}.${["png", "png", "jpg", "png", "jpg", "png", "png", "png"][i]}`,
    title: "Branding",
  })),
  // Animation (real brand videos)
  ...["01", "02", "03", "04", "05", "06", "07", "08"].map((n) => ({
    id: `anim-${n}`,
    category: "animation",
    type: "video",
    src: `${VID}/${n}.mp4`,
    title: "Video Animation",
  })),
  // Social media
  ...["01", "02", "03", "04", "05", "06", "07", "08"].map((n) => ({
    id: `smm-${n}`,
    category: "smm",
    type: "image",
    src: `${IMG}/smm/${n}.jpg`,
    title: "Social Media Design",
  })),
  // NFT
  ...["01", "02", "03", "05"].map((n) => ({
    id: `nft-${n}`,
    category: "nft",
    type: "image",
    src: `${IMG}/nft/${n}.png`,
    title: "NFT Design",
  })),
];

export const getItemsByCategory = (category) =>
  category === "all" || !category
    ? portfolioItems
    : portfolioItems.filter((i) => i.category === category);
