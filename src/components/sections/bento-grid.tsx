"use client"

import { motion } from "framer-motion"
import { Building2, Briefcase, CheckCircle2, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function BentoGrid() {
    return (
        <section className="py-20 bg-gray-50/50" id="expertise">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">Doppelte Expertise</h2>
                    <p className="text-gray-600">
                        Spezialisiertes Wissen, wo es zählt. Ob für öffentliche Institutionen oder private Unternehmen, wir liefern Klarheit und Sicherheit.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Public Sector Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden"
                        id="public-sector"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Building2 className="w-32 h-32 text-burnt-terra-cotta" />
                        </div>

                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-6 text-burnt-terra-cotta">
                                <Building2 className="w-6 h-6" />
                            </div>

                            <h3 className="text-2xl font-bold mb-3">Öffentliche Hand <span className="text-gray-400 font-normal text-lg block mt-1">(Gemeinden)</span></h3>

                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Spezialisierte Revisionsdienstleistungen für Gemeinden und öffentliche Institutionen. Wir sorgen für Compliance, Transparenz und Budgetsicherheit.
                            </p>

                            <ul className="space-y-3 mb-8">
                                {["Gemeindeprüfungen", "Budget-Compliance", "Sonderprüfungen"].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                                        <CheckCircle2 className="w-4 h-4 text-soft-apricot" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <Link href="/angebot" className="inline-flex items-center text-burnt-terra-cotta font-medium hover:underline">
                                Mehr erfahren <ArrowUpRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Corporate Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden"
                        id="corporate"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Briefcase className="w-32 h-32 text-soft-apricot" />
                        </div>

                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-6 text-soft-apricot">
                                <Briefcase className="w-6 h-6" />
                            </div>

                            <h3 className="text-2xl font-bold mb-3">Unternehmen <span className="text-gray-400 font-normal text-lg block mt-1">(KMU)</span></h3>

                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Gesetzliche Revisionsstelle für AGs und GmbHs. Effiziente, digitale und unternehmensorientierte Prüfung, die Mehrwert schafft.
                            </p>

                            <ul className="space-y-3 mb-8">
                                {["Eingeschränkte Revision", "Kapitalerhöhungen", "Gründungen & Liquidationen"].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                                        <CheckCircle2 className="w-4 h-4 text-soft-apricot" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <Link href="/angebot" className="inline-flex items-center text-burnt-terra-cotta font-medium hover:underline">
                                Mehr erfahren <ArrowUpRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
