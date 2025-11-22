"use client"

import { motion } from "framer-motion"
import { Building2, Heart, Scale, FileSearch, Briefcase } from "lucide-react"

const services = [
    {
        title: "Alle gesetzlich vorgeschriebenen Prüfungen im öffentlichen Haushalt",
        description: "Bei der finanztechnischen Revision handelt es sich um die Leistungserbringung der gesetzlich vorgeschriebenen Prüfungen der Jahresrechnung, des Geldverkehrs und der Bücher ausgewählter Verwaltungsbereiche (Sachbereich) gemäss § 143 Abs. 2 GG.",
        icon: Building2,
    },
    {
        title: "KVG-Revision",
        description: "Für die politischen Gemeinden nehmen wir die gesetzlich vorgeschriebene Prüfung der KVG-Abrechnungen vor.",
        icon: Heart,
    },
    {
        title: "Lohngleichheitsanalyse",
        description: "Überprüfung von Lohngleichheitsanalysen bei Unternehmen mit 100 oder mehr Angestellten, welche die erste betriebsinterne Lohngleichheitsanalyse bis spätestens Ende Juni 2021 durchführen müssen.",
        icon: Scale,
    },
    {
        title: "Von Ihnen gewünschte Prüfungshandlungen",
        description: "z.B. bezüglich Finanzinformationen, Amtsübergaben, Fusionen und sonstigen Spezialprüfungen.",
        icon: FileSearch,
    },
    {
        title: "Privatwirtschaft",
        description: "Die Revipro AG ist von der eidgenössischen Revisionsaufsichtsbehörde (RAB) als Revisionsexpertin zugelassen. Gerne übernehmen wir Ihr Revisionsmandat.",
        icon: Briefcase,
    },
]

export function ServicesGrid() {
    return (
        <section className="pt-32 pb-20 bg-gradient-to-b from-warm-grey to-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                        Unser <span className="text-transparent bg-clip-text bg-gradient-to-r from-burnt-terra-cotta to-soft-apricot">Angebot</span>
                    </h1>
                    <p className="text-xl text-gray-600">
                        Umfassende Revisions- und Beratungsdienstleistungen für öffentliche Hand und Privatwirtschaft
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-6">
                                    <Icon className="w-6 h-6 text-burnt-terra-cotta" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-burnt-terra-cotta to-soft-apricot rounded-2xl p-8 text-white text-center"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                            <Briefcase className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold">RAB-Zulassung</h3>
                    </div>
                    <p className="text-lg">
                        Die Revisionsgesellschaft Revipro AG ist im Register der Revisionsaufsichtsbehörde (RAB) als Revisionsexpertin zugelassen
                    </p>
                    <p className="mt-2 text-white/80">RAB-Nr. 504748</p>
                </motion.div>
            </div>
        </section>
    )
}
