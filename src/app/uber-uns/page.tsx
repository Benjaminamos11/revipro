import { AboutHero } from "@/components/sections/about-hero";
import { TeamGrid } from "@/components/sections/team-grid";
import { References } from "@/components/sections/references";

export const metadata = {
    title: "Über uns | Revipro AG",
    description: "Spezialisierte Revisionsgesellschaften mit langjähriger Berufserfahrung im öffentlichen Haushalt und in der Privatwirtschaft.",
};

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <TeamGrid />
            <References />
        </>
    );
}
