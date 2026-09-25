import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import CtaSection from "@/components/sections/CtaSection";
import {
  buildMetadata,
  breadcrumbSchema,
  articleSchema,
  JsonLd,
} from "@/lib/seo";
import { posts, getPost } from "@/data/blog";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    path: `/blog/${post.slug}`,
    description: post.excerpt,
    keywords: [post.category, "digital agency blog"],
    type: "article",
  });
}

export default function BlogPostPage({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={articleSchema(post)} />

      <PageHero eyebrow={post.category} title={post.title} breadcrumbs={crumbs} />

      <article className="section bg-white">
        <div className="container-tv max-w-3xl">
          <div className="flex items-center gap-4 text-sm text-ink/50">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-brand" /> {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-brand" /> {post.readTime}
            </span>
            <span>By {post.author}</span>
          </div>

          <Reveal>
            <div className="mt-8 overflow-hidden rounded-[2rem] shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.cover}
                alt={post.title}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="prose mt-10 max-w-none space-y-6 text-lg leading-relaxed text-ink/75">
            {post.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-12 border-t border-black/5 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand"
            >
              <ArrowLeft className="h-4 w-4" /> Back to all articles
            </Link>
          </div>
        </div>
      </article>

      <section className="section bg-brand-50/40">
        <div className="container-tv">
          <h2 className="heading-3 text-center">Keep reading</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white card-hover"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold text-brand">
                    {p.category}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-semibold text-ink">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
