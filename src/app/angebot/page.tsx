import { ServicesGrid } from "@/components/sections/services-grid";
import { Advantages } from "@/components/sections/advantages";
import { generatePageMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
    title: "Angebot",
    description: "Gesetzlich vorgeschriebene Prüfungen im öffentlichen Haushalt, KVG-Revision, Lohngleichheitsanalyse und Privatwirtschaft.",
    path: "/angebot",
    keywords: ["Dienstleistungen", "Prüfungen", "KVG-Revision", "Lohngleichheit"],
});

export default function ServicesPage() {
    return (
        <>
            <ServicesGrid />
            <Advantages />
        </>
    );
}
