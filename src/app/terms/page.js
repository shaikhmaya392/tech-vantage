import PageHero from "@/components/ui/PageHero";
import LegalBody from "@/components/ui/LegalBody";
import { buildMetadata, breadcrumbSchema, JsonLd } from "@/lib/seo";
import { terms } from "@/data/legal";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  path: "/terms",
  description: "The terms and conditions that govern your use of Tech Vantage Now's website and services.",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Terms", path: "/terms" }])} />
      <PageHero eyebrow="Legal" title="Terms & Conditions" breadcrumbs={[{ name: "Home", path: "/" }, { name: "Terms", path: "/terms" }]} />
      <LegalBody intro={terms.intro} sections={terms.sections} />
    </>
  );
}
