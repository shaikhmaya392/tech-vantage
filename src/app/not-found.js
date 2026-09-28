import Link from "next/link";
import { Home } from "lucide-react";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white pt-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-60" />
      <div className="container-tv relative text-center">
        <div className="mx-auto max-w-xl">
          <div className="font-heading text-[7rem] font-extrabold leading-none text-brand sm:text-[10rem]">404</div>
          <h1 className="mt-2 heading-2">This page took a creative detour</h1>
          <p className="mx-auto mt-4 max-w-md text-ink/60">
            The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you
            back on track.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary">
              <Home className="h-4 w-4" /> Back to home
            </Link>
            <Link href="/contact" className="btn-outline">Contact us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
