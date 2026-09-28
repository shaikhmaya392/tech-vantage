import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={cn("flex max-w-3xl flex-col gap-4", alignment, className)}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className={cn("heading-2 text-balance", light && "text-white")}>{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className={cn("lead text-balance", light && "text-white/60")}>{description}</p>
        </Reveal>
      )}
    </div>
  );
}
