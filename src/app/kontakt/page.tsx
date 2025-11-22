import { ContactForm } from "@/components/sections/contact-form";
import { ContactInfo } from "@/components/sections/contact-info";
import { generatePageMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
    title: "Kontakt",
    description: "Kontaktieren Sie uns für Revisionsdienstleistungen. Revipro AG + GemeindeFinanzen.ch GmbH in Thalwil.",
    path: "/kontakt",
    keywords: ["Kontakt", "Anfrage", "Beratung", "Thalwil"],
});

export default function ContactPage() {
    return (
        <>
            <ContactForm />
            <ContactInfo />
        </>
    );
}
