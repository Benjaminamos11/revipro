"use client"

import { motion } from "framer-motion"
import { Calculator, Users, Rocket } from "lucide-react"

const services = [
    {
        title: "Steuerberatung",
        description: "Strategische Steuerplanung und Compliance für Privatpersonen und Unternehmen. Wir optimieren Ihre Steuerlast im gesetzlichen Rahmen.",
        icon: Calculator,
    },
    {
        title: "Lohnbuchhaltung & Personal",
        description: "Umfassende Lohnbuchhaltung, Sozialversicherungsabrechnungen und Personaladministration. Präzise und pünktlich.",
        icon: Users,
    },
    {
        title: "Firmengründung",
        description: "Expertenberatung für Startups und Neugründungen. Von der Wahl der Rechtsform bis zum Handelsregistereintrag.",
        icon: Rocket,
    },
]

export function Services() {
    return (
        <section className="py-20 bg-white" id="services">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Umfassende Treuhanddienstleistungen</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Über die Prüfung hinaus unterstützen wir Ihr Unternehmen mit einem vollen Spektrum an Finanz- und Beratungsdienstleistungen.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-burnt-terra-cotta/30 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 text-gray-700 group-hover:text-burnt-terra-cotta transition-colors">
                                <service.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
