"use client"

import { motion } from "framer-motion"
import { Calculator, Users, Rocket, Building2, Heart, Scale, FileSearch, Briefcase, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
    {
        title: "Öffentliche Haushalte",
        description: "Gesetzlich vorgeschriebene Prüfungen der Jahresrechnung und des Geldverkehrs für Gemeinden und Zweckverbände.",
        icon: Building2,
    },
    {
        title: "KVG-Revision",
        description: "Prüfung der KVG-Abrechnungen für politische Gemeinden gemäss den gesetzlichen Vorgaben.",
        icon: Heart,
    },
    {
        title: "Wirtschaftsprüfung",
        description: "Als zugelassene Revisionsexperten (RAB) führen wir ordentliche und eingeschränkte Revisionen durch.",
        icon: Briefcase,
    },
    {
        title: "Lohngleichheitsanalyse",
        description: "Überprüfung von Lohngleichheitsanalysen für Unternehmen mit 100+ Mitarbeitenden.",
        icon: Scale,
    },
    {
        title: "Steuerberatung & Treuhand",
        description: "Strategische Steuerplanung, Lohnbuchhaltung und Finanzberatung für Privatpersonen und KMU.",
        icon: Calculator,
    },
    {
        title: "Spezialprüfungen",
        description: "Prüfungen bei Gründungen, Kapitalerhöhungen, Fusionen oder Liquidationen.",
        icon: FileSearch,
    },
]

export function Services() {
    return (
        <section className="py-24 bg-white" id="services">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Unsere Expertise</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Wir bieten massgeschneiderte Prüfungs- und Beratungsdienstleistungen für die öffentliche Hand und die Privatwirtschaft.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-burnt-terra-cotta/30 hover:shadow-lg transition-all group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 text-gray-700 group-hover:text-burnt-terra-cotta transition-colors">
                                <service.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/angebot">
                        <Button variant="outline" size="lg" className="rounded-full group border-gray-200 hover:border-burnt-terra-cotta hover:text-burnt-terra-cotta">
                            Alle Dienstleistungen ansehen
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
