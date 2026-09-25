import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-hero-grid opacity-70" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container-tv relative text-center">
        <div className="mx-auto max-w-xl">
          <div className="font-heading text-[8rem] font-extrabold leading-none gradient-text sm:text-[12rem]">
            404
          </div>
          <h1 className="mt-2 heading-2">Lost in the digital void</h1>
          <p className="mx-auto mt-4 max-w-md text-white/60">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/" variant="white" withArrow>
              <Home className="h-4 w-4" /> Back to home
            </Button>
            <Button href="/contact" variant="outline" className="border-white/20 text-white hover:border-brand hover:text-brand">
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
