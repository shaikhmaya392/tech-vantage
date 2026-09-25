import PageHero from "@/components/ui/PageHero";
import LegalBody from "@/components/ui/LegalBody";
import { buildMetadata, breadcrumbSchema, JsonLd } from "@/lib/seo";
import { site } from "@/data/site";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  path: "/privacy-policy",
  description:
    "How Tech Vantage Now collects, uses and protects your personal information.",
});

const sections = [
  {
    heading: "1. Introduction",
    body: [
      `${site.name} ("we", "us", "our") respects your privacy and is committed to protecting your personal data. This policy explains how we collect, use and safeguard information when you visit ${site.url} or use our services.`,
    ],
  },
  {
    heading: "2. Information we collect",
    body: [
      "We may collect information you provide directly — such as your name, email, phone number and project details when you contact us or request a quote.",
      "We also collect limited technical data automatically, such as your browser type, device and pages visited, using cookies and analytics tools.",
    ],
  },
  {
    heading: "3. How we use your information",
    body: [
      "We use your information to respond to enquiries, deliver our services, improve our website, and — with your consent — send occasional updates. We do not sell your personal data.",
    ],
  },
  {
    heading: "4. Cookies",
    body: [
      "Our site uses cookies to enhance your experience and analyze traffic. You can control cookies through your browser settings at any time.",
    ],
  },
  {
    heading: "5. Data security",
    body: [
      "We implement appropriate technical and organizational measures to protect your data against unauthorized access, loss or misuse.",
    ],
  },
  {
    heading: "6. Your rights",
    body: [
      "You may request access to, correction of, or deletion of your personal data at any time by contacting us.",
    ],
  },
  {
    heading: "7. Contact us",
    body: [
      `If you have any questions about this policy, email us at ${site.email} or write to ${site.address.full}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ]}
      />
      <LegalBody sections={sections} updated="January 2025" />
    </>
  );
}
