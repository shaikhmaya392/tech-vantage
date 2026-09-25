import PageHero from "@/components/ui/PageHero";
import LegalBody from "@/components/ui/LegalBody";
import { buildMetadata, breadcrumbSchema, JsonLd } from "@/lib/seo";
import { site } from "@/data/site";

export const metadata = buildMetadata({
  title: "Terms of Service",
  path: "/terms",
  description:
    "The terms and conditions that govern your use of the Tech Vantage Now website and services.",
});

const sections = [
  {
    heading: "1. Acceptance of terms",
    body: [
      `By accessing ${site.url} or engaging ${site.name} for services, you agree to be bound by these Terms of Service.`,
    ],
  },
  {
    heading: "2. Services",
    body: [
      "We provide digital design, development and marketing services as described on our website and agreed in individual project proposals.",
      "Specific deliverables, timelines and pricing are defined in each project agreement.",
    ],
  },
  {
    heading: "3. Payments",
    body: [
      "Fees, payment schedules and milestones are set out in your project agreement. Late payments may pause work until resolved.",
    ],
  },
  {
    heading: "4. Intellectual property",
    body: [
      "Upon full payment, ownership of final deliverables transfers to you. We retain the right to showcase completed work in our portfolio unless otherwise agreed.",
    ],
  },
  {
    heading: "5. Revisions & scope",
    body: [
      "Each package includes a defined number of revisions. Work beyond the agreed scope may be quoted separately.",
    ],
  },
  {
    heading: "6. Limitation of liability",
    body: [
      "To the fullest extent permitted by law, we are not liable for indirect or consequential damages arising from the use of our services.",
    ],
  },
  {
    heading: "7. Contact",
    body: [
      `For questions about these terms, contact us at ${site.email}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ])}
      />
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ]}
      />
      <LegalBody sections={sections} updated="January 2025" />
    </>
  );
}
