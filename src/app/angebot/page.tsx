import { ServicesGrid } from "@/components/sections/services-grid";
import { Advantages } from "@/components/sections/advantages";

export const metadata = {
    title: "Angebot | Revipro AG",
    description: "Gesetzlich vorgeschriebene Prüfungen im öffentlichen Haushalt, KVG-Revision, Lohngleichheitsanalyse und Privatwirtschaft.",
};

export default function ServicesPage() {
    return (
        <>
            <ServicesGrid />
            <Advantages />
        </>
    );
}
