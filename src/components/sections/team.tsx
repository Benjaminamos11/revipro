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
        role: "Fachfrau im Finanz- und Rechnungswesen",
        subRole: "zugelassene Revisorin RAB",
        image: "https://res.cloudinary.com/dphbnwjtx/image/upload/v1763770796/nataly-902x1024_zlrnlb.png",
    },
    {
        name: "Andreas Hottinger",
        role: "Dipl. Experte in Rechnungslegung und Controlling",
        subRole: "zugelassener Revisionsexperte RAB",
        image: "https://res.cloudinary.com/dphbnwjtx/image/upload/v1763770794/andreas_f9wklc.png",
    },
]

export function Team() {
    return (
        <section className="py-24 bg-white" id="team">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">Unser Team</h2>
                    <p className="text-gray-600">
                        Erfahrene Experten für Ihre finanzielle Sicherheit und Compliance.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
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
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                            <p className="text-burnt-terra-cotta font-medium text-sm mb-1">{member.role}</p>
                            <p className="text-gray-500 text-xs">{member.subRole}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
