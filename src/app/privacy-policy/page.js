import PageHero from "@/components/ui/PageHero";
import LegalBody from "@/components/ui/LegalBody";
import { buildMetadata, breadcrumbSchema, JsonLd } from "@/lib/seo";
import { privacyPolicy } from "@/data/legal";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  path: "/privacy-policy",
  description: "How Tech Vantage Now collects, uses and protects your personal information.",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy" }])} />
      <PageHero eyebrow="Legal" title="Privacy Policy" breadcrumbs={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy" }]} />
      <LegalBody intro={privacyPolicy.intro} sections={privacyPolicy.sections} />
    </>
  );
}
