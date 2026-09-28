import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import PortfolioGrid from "@/app/portfolio/PortfolioGrid";

export default function PortfolioPreview() {
  return (
    <section className="section bg-white">
      <div className="container-tv mb-12 flex flex-col items-center gap-6 text-center">
        <SectionHeading
          eyebrow="Our Portfolio"
          title="Work we're proud of"
          description="Real logos, websites, branding, animation, social and NFT design — filter by category and click any item to view it larger."
        />
      </div>
      <PortfolioGrid limit={6} />
      <div className="container-tv mt-12 flex justify-center">
        <Link href="/portfolio" className="btn-outline group">
          View All Portfolio
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>
  );
}
