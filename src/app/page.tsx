import { Hero } from "@/components/sections/hero";
import { BentoGrid } from "@/components/sections/bento-grid";
import { Team } from "@/components/sections/team";
import { Services } from "@/components/sections/services";
import { CTASection } from "@/components/sections/cta-section";
import { generatePageMetadata, generateOrganizationSchema, generateLocalBusinessSchema } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Revipro AG",
  description: "Ihr Partner für präzise Revision in Gemeinden und moderne Wirtschaftsprüfung. Spezialisiert auf öffentliche Hand & KMU in der Schweiz.",
  path: "/",
  keywords: ["Wirtschaftsprüfung Thalwil", "Revision Gemeinden", "Finanzkontrolle", "KMU Beratung"],
});

export default function Home() {
  const organizationSchema = generateOrganizationSchema();
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero />
      <BentoGrid />
      <Team />
      <Services />
      <CTASection />
    </>
  );
}
