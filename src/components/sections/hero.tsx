"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AppointmentModal } from "@/components/ui/appointment-modal"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid xl:grid-cols-2 gap-8 md:gap-12 xl:gap-16 2xl:gap-20 items-center">

                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="max-w-2xl"
                        >
                            <div className="inline-flex items-center gap-2 px-2 md:px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-burnt-terra-cotta text-[10px] md:text-xs font-semibold tracking-wide uppercase mb-4 md:mb-6">
                                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-burnt-terra-cotta"></span>
                                <span className="hidden sm:inline">Zugelassene Revisionsexperten RAB</span>
                                <span className="sm:hidden">RAB Experten</span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground mb-4 md:mb-6 leading-[1.1] max-w-lg">
                                Wirtschaftsprüfung & Beratung.
                            </h1>

                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-lg">
                                Ihr Partner für präzise Revision in Gemeinden und moderne Wirtschaftsprüfung. Spezialisiert auf öffentliche Hand & KMU.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                                <Button
                                    size="lg"
                                    onClick={() => setIsModalOpen(true)}
                                    className="rounded-full text-sm md:text-base w-full sm:w-auto"
                                >
                                    <span className="hidden sm:inline">Beratungstermin buchen</span>
                                    <span className="sm:hidden">Termin buchen</span>
                                </Button>
                                <Link href="/angebot">
                                    <Button variant="outline" size="lg" className="rounded-full text-sm md:text-base group w-full sm:w-auto">
                                        <span className="hidden sm:inline">Unsere Dienstleistungen</span>
                                        <span className="sm:hidden">Dienstleistungen</span>
                                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right: Video Background */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-[400px] md:h-[540px] object-cover"
                                >
                                    <source
                                        src="https://res.cloudinary.com/dphbnwjtx/video/upload/v1763770550/Generated_Video_November_22_2025_-_8_15AM_pnqkfq.mp4"
                                        type="video/mp4"
                                    />
                                </video>

                                {/* Floating Quote Card */}
                                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-xl">
                                        <p className="text-xs md:text-sm lg:text-base text-gray-700 italic leading-relaxed mb-2 md:mb-3">
                                            &quot;Vertrauen ist die Grundlage jeder erfolgreichen Partnerschaft. In der Treuhand bedeutet dies nicht nur Zahlen zu prüfen, sondern Verantwortung zu übernehmen.&quot;
                                        </p>
                                        <p className="text-xs md:text-sm text-burnt-terra-cotta font-semibold">
                                            — Revipro AG
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <AppointmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
}
