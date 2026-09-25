import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-brand text-white hover:bg-brand-600 shadow-glow hover:shadow-[0_0_50px_-8px_rgba(15,102,184,0.7)]",
  dark: "bg-white/10 text-white border border-white/15 hover:bg-white/20",
  outline:
    "border border-white/20 text-white hover:border-brand hover:text-brand-300 bg-transparent",
  ghost: "text-white hover:text-brand-300 bg-transparent",
  white: "bg-white text-black hover:bg-white/90",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  withArrow = false,
  ...props
}) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    if (external) {
      return (
        <a href={href} className={classes} {...props}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
