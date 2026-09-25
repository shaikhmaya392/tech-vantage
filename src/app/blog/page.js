import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import CtaSection from "@/components/sections/CtaSection";
import { buildMetadata, breadcrumbSchema, JsonLd } from "@/lib/seo";
import { posts } from "@/data/blog";
import { formatDate } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Blog",
  path: "/blog",
  description:
    "Insights, tips and guides on design, web & app development, SEO and digital marketing from the Tech Vantage Now team.",
});

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <PageHero
        eyebrow="Insights"
        title="Ideas worth reading"
        description="Practical advice on design, development, SEO and marketing to help your brand grow."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />

      <section className="section bg-white">
        <div className="container-tv">
          {/* Featured */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-[2rem] border border-black/5 bg-white card-hover lg:grid-cols-2"
          >
            <div className="aspect-[16/10] overflow-hidden lg:aspect-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.cover}
                alt={featured.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="flex items-center gap-3 text-sm text-ink/50">
                <span className="rounded-full bg-brand/10 px-3 py-1 font-semibold text-brand">
                  {featured.category}
                </span>
                <span>{formatDate(featured.date)}</span>
                <span>· {featured.readTime}</span>
              </div>
              <h2 className="mt-4 font-heading text-2xl font-bold text-ink sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-ink/60">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-1 font-semibold text-brand">
                Read article
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>

          {/* Rest */}
          <StaggerGroup className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <StaggerItem key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white card-hover"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.cover}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs text-ink/50">
                      <span className="rounded-full bg-brand/10 px-2.5 py-0.5 font-semibold text-brand">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="mt-3 font-heading text-lg font-semibold text-ink">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-ink/60">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 text-sm text-ink/40">
                      {formatDate(post.date)}
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
