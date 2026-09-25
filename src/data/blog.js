export const posts = [
  {
    slug: "why-your-business-needs-a-fast-website-in-2025",
    title: "Why Your Business Needs a Fast Website in 2025",
    excerpt:
      "Speed isn't a nice-to-have anymore — it's a ranking factor and a revenue driver. Here's why performance should top your list.",
    category: "Web Development",
    date: "2025-01-14",
    readTime: "6 min read",
    author: "Tech Vantage Team",
    cover: "https://picsum.photos/seed/blogfast/1200/700",
    content: [
      "In 2025, your website's speed is one of the first things both users and search engines judge you on. Studies consistently show that even a one-second delay in load time can cut conversions dramatically.",
      "Google's Core Web Vitals — Largest Contentful Paint, Interaction to Next Paint and Cumulative Layout Shift — are now direct ranking signals. A slow site doesn't just frustrate visitors, it quietly loses you organic visibility.",
      "Modern frameworks like Next.js make it possible to ship fast experiences by default: server rendering, image optimization and code splitting all work together to keep your pages lightning quick.",
      "At Tech Vantage Now we treat performance as a feature, not an afterthought. Every build is measured against real-world metrics before it ships — because a beautiful site that loads slowly is a beautiful site nobody waits for.",
    ],
  },
  {
    slug: "logo-design-mistakes-to-avoid",
    title: "7 Logo Design Mistakes That Weaken Your Brand",
    excerpt:
      "A great logo builds instant trust. These common mistakes quietly undermine your brand — and how to fix them.",
    category: "Branding",
    date: "2025-01-02",
    readTime: "5 min read",
    author: "Tech Vantage Team",
    cover: "https://picsum.photos/seed/bloglogo/1200/700",
    content: [
      "Your logo is often the first impression a customer forms of your business. Get it wrong and you're fighting an uphill battle for trust.",
      "The most common mistake is over-complication. Logos need to work at 16 pixels and on a billboard alike — simplicity scales, detail doesn't.",
      "Another frequent misstep is following trends too closely. Gradients and effects that feel fresh today can date your brand within a year. Timeless beats trendy.",
      "Finally, skipping a proper brand guide means your logo gets misused across channels. Consistency is what turns a mark into a memorable brand.",
    ],
  },
  {
    slug: "seo-basics-every-founder-should-know",
    title: "SEO Basics Every Founder Should Know",
    excerpt:
      "You don't need to be an expert to make smart SEO decisions. Here are the fundamentals that actually move the needle.",
    category: "SEO",
    date: "2024-12-18",
    readTime: "7 min read",
    author: "Tech Vantage Team",
    cover: "https://picsum.photos/seed/blogseo/1200/700",
    content: [
      "SEO can feel like a black box, but the fundamentals are surprisingly approachable — and they compound over time.",
      "Start with intent. Understand what your customers are actually searching for, then build genuinely useful pages around those queries.",
      "Technical health matters too: fast load times, clean site structure, mobile friendliness and proper metadata give search engines every reason to rank you.",
      "Finally, authority is earned. Quality content that others reference and link to is still the most durable SEO investment you can make.",
    ],
  },
  {
    slug: "social-media-strategy-that-converts",
    title: "Building a Social Media Strategy That Actually Converts",
    excerpt:
      "Followers are vanity, sales are sanity. Here's how to turn your social presence into a growth engine.",
    category: "Marketing",
    date: "2024-12-05",
    readTime: "6 min read",
    author: "Tech Vantage Team",
    cover: "https://picsum.photos/seed/blogsocial/1200/700",
    content: [
      "A big follower count feels good, but it doesn't pay the bills. A strategy that converts starts with clear business goals, not vanity metrics.",
      "Know your audience deeply — where they spend time, what they care about, and the problems your product solves for them.",
      "Consistency and quality beat frequency. A steady rhythm of genuinely valuable, on-brand content outperforms sporadic posting every time.",
      "Layer in paid amplification once organic content proves itself. Put budget behind what already resonates and you'll scale efficiently.",
    ],
  },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);
