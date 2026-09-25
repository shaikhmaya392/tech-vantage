import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Icon from "./Icon";

export default function ServiceCard({ service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white p-8 card-hover"
    >
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand/5 transition-transform duration-500 group-hover:scale-150" />
      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
        <Icon name={service.icon} className="h-7 w-7" />
      </div>
      <h3 className="relative mt-6 font-heading text-xl font-semibold text-ink">
        {service.title}
      </h3>
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-ink/60">
        {service.short}
      </p>
      <span className="relative mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand">
        Learn more
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
