import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group relative block overflow-hidden rounded-3xl bg-ink"
    >
      <div className="aspect-[4/3] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.thumb}
          alt={`${project.title} — ${project.category} case study`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-90" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <span className="inline-block rounded-full bg-brand/90 px-3 py-1 text-xs font-semibold text-white">
          {project.category}
        </span>
        <h3 className="mt-3 font-heading text-xl font-semibold text-white">
          {project.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-white/60">
          {project.summary}
        </p>
      </div>
      <span className="absolute right-6 top-6 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-white text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <ArrowUpRight className="h-5 w-5" />
      </span>
    </Link>
  );
}
