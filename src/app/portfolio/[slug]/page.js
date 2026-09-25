import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, User, Layers } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import CtaSection from "@/components/sections/CtaSection";
import { buildMetadata, breadcrumbSchema, JsonLd } from "@/lib/seo";
import { projects, getProject } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = getProject(params.slug);
  if (!project) return {};
  return buildMetadata({
    title: `${project.title} — Case Study`,
    path: `/portfolio/${project.slug}`,
    description: project.summary,
    keywords: project.tags,
  });
}

export default function ProjectPage({ params }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: project.title, path: `/portfolio/${project.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow={project.category}
        title={project.title}
        description={project.summary}
        breadcrumbs={crumbs}
      />

      {/* Cover */}
      <section className="bg-white pt-14">
        <div className="container-tv">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.cover}
                alt={`${project.title} project cover`}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Meta + results */}
      <section className="section bg-white">
        <div className="container-tv grid gap-14 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="heading-3">The challenge</h2>
              <p className="mt-4 text-ink/70">{project.challenge}</p>
            </div>
            <div>
              <h2 className="heading-3">Our solution</h2>
              <p className="mt-4 text-ink/70">{project.solution}</p>
            </div>
            <div>
              <h2 className="heading-3">The results</h2>
              <StaggerGroup className="mt-6 grid gap-6 sm:grid-cols-3">
                {project.results.map((r) => (
                  <StaggerItem key={r.label}>
                    <div className="rounded-3xl bg-brand-gradient p-6 text-center text-white shadow-glow">
                      <div className="font-heading text-3xl font-extrabold">
                        {r.value}
                      </div>
                      <p className="mt-1 text-sm text-white/80">{r.label}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="h-fit rounded-3xl border border-black/5 bg-brand-50/40 p-8">
            <h3 className="font-heading text-lg font-semibold">Project details</h3>
            <dl className="mt-6 space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <User className="mt-0.5 h-4 w-4 text-brand" />
                <div>
                  <dt className="text-ink/40">Client</dt>
                  <dd className="font-medium text-ink">{project.client}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="mt-0.5 h-4 w-4 text-brand" />
                <div>
                  <dt className="text-ink/40">Year</dt>
                  <dd className="font-medium text-ink">{project.year}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Layers className="mt-0.5 h-4 w-4 text-brand" />
                <div>
                  <dt className="text-ink/40">Services</dt>
                  <dd className="font-medium text-ink">
                    {project.services.join(", ")}
                  </dd>
                </div>
              </div>
            </dl>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white px-3 py-1 text-xs font-medium text-brand"
                >
                  {t}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Nav */}
      <section className="border-t border-black/5 bg-white py-10">
        <div className="container-tv flex items-center justify-between">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink/60 transition-colors hover:text-brand"
          >
            <ArrowLeft className="h-4 w-4" /> All projects
          </Link>
          <Link
            href={`/portfolio/${next.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand"
          >
            Next: {next.title} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
