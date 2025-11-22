import { ContactForm } from "@/components/sections/contact-form";
import { ContactInfo } from "@/components/sections/contact-info";

export const metadata = {
    title: "Kontakt | Revipro AG",
    description: "Kontaktieren Sie uns für Revisionsdienstleistungen. Revipro AG + GemeindeFinanzen.ch GmbH in Thalwil.",
};

export default function ContactPage() {
    return (
        <>
            <ContactForm />
            <ContactInfo />
        </>
    );
}
