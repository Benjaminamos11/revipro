"use client"

import { motion } from "framer-motion"
import { BookOpen, Users, TrendingUp, UserCheck, Settings, Award } from "lucide-react"

const advantages = [
    {
        title: "Vertiefte Kenntnisse der gesetzlichen Grundlagen im öffentlichen Haushalt",
        description: "Fundierte Kenntnisse der geltenden Gesetze und Verordnungen im Kanton Zürich sowie des Kirchengesetzes und der gesetzlichen Grundlagen der Evangelisch-reformierten Landeskirche und der Katholischen Kirche im Kanton Zürich.",
        icon: BookOpen,
    },
    {
        title: "Kontinuität",
        description: "Die gesetzlich vorgeschriebenen Prüfungen werden jedes Jahr vom gleichen Prüfungsteam durchgeführt. Somit hat der Kunde immer die gleichen Ansprechpersonen, welche die Gegebenheiten des Kunden sehr genau kennen.",
        icon: Users,
    },
    {
        title: "Qualitätssteigerung",
        description: "Das im jährlich wiederkehrenden Prüfprozess gesammelte Know how bleibt erhalten.",
        icon: TrendingUp,
    },
    {
        title: "Persönliche Kundenbeziehung das ganze Jahr",
        description: "Die Revisionsstelle ist auch unter dem Jahr für den Kunden da, wenn offene Fragen zu beantworten sind.",
        icon: UserCheck,
    },
    {
        title: "Individuelle Prüfungen",
        description: "Die Prüfungen werden \"massgeschneidert\" auf den Kunden durchgeführt. Zudem können bestimmte Bedürfnisse bei der Sachbereichsprüfung berücksichtigt werden.",
        icon: Settings,
    },
    {
        title: "Zulassung der AG als Revisionsexpertin",
        description: "Die Revisionsgesellschaft Revipro AG ist im Register der Revisionsaufsichtsbehörde (RAB) als Revisionsexpertin zugelassen (RAB-Nr. 504748).",
        icon: Award,
    },
]

export function Advantages() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-6">
                        Warum <span className="text-transparent bg-clip-text bg-gradient-to-r from-burnt-terra-cotta to-soft-apricot">Revipro</span>?
                    </h2>
                    <p className="text-xl text-gray-600">
                        Ihre Vorteile bei der Zusammenarbeit mit uns
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {advantages.map((advantage, index) => {
                        const Icon = advantage.icon;
                        return (
                            <motion.div
                                key={advantage.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="h-full bg-warm-grey rounded-2xl p-6 hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Icon className="w-6 h-6 text-burnt-terra-cotta" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-3">{advantage.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{advantage.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
