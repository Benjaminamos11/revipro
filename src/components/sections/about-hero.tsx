"use client"

import { motion } from "framer-motion"
import { Building2, Award, Users } from "lucide-react"

export function AboutHero() {
    return (
        <section className="pt-32 pb-20 bg-gradient-to-b from-warm-grey to-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                        Über <span className="text-transparent bg-clip-text bg-gradient-to-r from-burnt-terra-cotta to-soft-apricot">uns</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Zwei Unternehmen mit langjähriger Berufserfahrung
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-2xl p-8 shadow-sm"
                    >
                        <h2 className="text-2xl font-bold mb-4">Unsere Geschichte</h2>
                        <div className="space-y-4 text-gray-600">
                            <p>
                                Im <strong>September 2011</strong> wurde die Revisionsgesellschaft <strong>GemeindeFinanzen.ch GmbH</strong> und im <strong>April 2013</strong> die Revisionsgesellschaft <strong>REVIPRO AG</strong> gegründet.
                            </p>
                            <p>
                                Seit dem <strong>1. April 2019</strong> werden beide Unternehmen durch das gleiche Experten-Team geführt, welches über eine langjährige Berufserfahrung in der Wirtschaftsprüfung verfügt.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-white rounded-2xl p-8 shadow-sm"
                    >
                        <h2 className="text-2xl font-bold mb-4">Unsere Spezialisierung</h2>
                        <p className="text-gray-600 mb-6">
                            Wir sind spezialisiert auf <strong>Revisionen</strong> und <strong>Beratungen</strong> sowohl im öffentlichen Haushalt als auch in der Privatwirtschaft.
                        </p>
                        <p className="text-gray-600">
                            Wir nehmen die gesetzlich vorgeschriebenen Prüfungen vor und beraten Sie dort, wo spezifisches Wissen gefragt ist.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                >
                    <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-4">
                            <Award className="w-8 h-8 text-burnt-terra-cotta" />
                        </div>
                        <h3 className="font-bold mb-2">Professionell</h3>
                        <p className="text-sm text-gray-600">Höchste Qualitätsstandards</p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-4">
                            <Users className="w-8 h-8 text-burnt-terra-cotta" />
                        </div>
                        <h3 className="font-bold mb-2">Kundenorientiert</h3>
                        <p className="text-sm text-gray-600">Individuelle Lösungen</p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-4">
                            <Building2 className="w-8 h-8 text-burnt-terra-cotta" />
                        </div>
                        <h3 className="font-bold mb-2">Vertrauenswürdig</h3>
                        <p className="text-sm text-gray-600">Langjährige Erfahrung</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
