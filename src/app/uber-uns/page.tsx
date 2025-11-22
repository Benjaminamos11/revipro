import { AboutHero } from "@/components/sections/about-hero";
import { TeamGrid } from "@/components/sections/team-grid";
import { References } from "@/components/sections/references";
import { generatePageMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
    title: "Über uns",
    description: "Spezialisierte Revisionsgesellschaften mit langjähriger Berufserfahrung im öffentlichen Haushalt und in der Privatwirtschaft.",
    path: "/uber-uns",
    keywords: ["Team", "Expertise", "Erfahrung", "Revisionsexperten"],
});

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <TeamGrid />
            <References />
        </>
    );
}
