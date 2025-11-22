"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const team = [
    {
        name: "Verena Kamer van Toornburg",
        role: "Dipl. Wirtschaftsprüferin",
        subRole: "zugelassene Revisionsexpertin RAB",
        image: "https://res.cloudinary.com/dphbnwjtx/image/upload/v1763770793/verena-901x1024_apznj9.png",
    },
    {
        name: "Nataly Stauber",
        role: "Fachfrau im Finanz- und Rechnungswesen mit eidg. Fachausweis",
        subRole: "zugelassene Revisorin RAB",
        image: "https://res.cloudinary.com/dphbnwjtx/image/upload/v1763770796/nataly-902x1024_zlrnlb.png",
    },
    {
        name: "Andreas Hottinger",
        role: "Dipl. Experte in Rechnungslegung und Controlling",
        subRole: "zugelassener Revisionsexperte RAB",
        image: "https://res.cloudinary.com/dphbnwjtx/image/upload/v1763770794/andreas_f9wklc.png",
    },
    {
        name: "Sibylle Vonaesch",
        role: "Dipl. Wirtschaftsprüferin",
        subRole: "zugelassene Revisionsexpertin RAB",
        image: "", // Placeholder - no image provided
    },
]

export function TeamGrid() {
    return (
        <section className="py-24 bg-white" id="team">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold mb-6">Unser Team</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Alle Revisoren der GemeindeFinanzen.ch GmbH und der Revipro AG haben langjährige Prüfererfahrung sowohl im öffentlichen Haushalt als auch in der Privatwirtschaft.
                    </p>
                    <p className="text-gray-600 mt-4">
                        Als ehemalige Mitarbeitende der <strong>Abteilung Revisionsdienste (Gemeindeamt Kanton Zürich)</strong> durften wir umfassende Kenntnisse bei diversen Prüfungen von Städten, politischen Gemeinden, Kirch- und Schulgemeinden sowie Zweckverbänden im ganzen Kanton Zürich gewinnen.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-2xl bg-gray-100">
                                {member.image ? (
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-burnt-terra-cotta to-soft-apricot">
                                        <span className="text-white text-6xl font-bold">
                                            {member.name.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                            <p className="text-burnt-terra-cotta font-medium text-sm mb-1">{member.role}</p>
                            <p className="text-gray-500 text-xs">{member.subRole}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
