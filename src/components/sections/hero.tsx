"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

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

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-4 md:mb-6 leading-[1.1]">
                            Wirtschaftsprüfung & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-burnt-terra-cotta to-soft-apricot">
                                Beratung.
                            </span>
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-lg">
                            Ihr Partner für präzise Revision in Gemeinden und moderne Wirtschaftsprüfung. Spezialisiert auf öffentliche Hand & KMU.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                            <Button size="lg" className="rounded-full text-sm md:text-base w-full sm:w-auto">
                                <span className="hidden sm:inline">Beratungstermin buchen</span>
                                <span className="sm:hidden">Termin buchen</span>
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full text-sm md:text-base group w-full sm:w-auto">
                                <span className="hidden sm:inline">Unsere Dienstleistungen</span>
                                <span className="sm:hidden">Dienstleistungen</span>
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right: Video Background */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative h-[400px] md:h-[540px] rounded-3xl overflow-hidden shadow-2xl"
                    >
                        {/* Video */}
                        <video
                            className="absolute inset-0 w-full h-full object-cover"
                            src="https://res.cloudinary.com/dphbnwjtx/video/upload/v1763772492/890f6199-2808-44d6-ad4c-6261814d6963_w9eoak.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                        {/* Floating Quote Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl"
                        >
                            <p className="text-gray-800 text-xs md:text-sm lg:text-base italic leading-relaxed">
                                "Vertrauen ist die Grundlage jeder erfolgreichen Partnerschaft. In der Treuhand bedeutet dies nicht nur Zahlen zu prüfen, sondern Verantwortung zu übernehmen."
                            </p>
                            <p className="text-burnt-terra-cotta text-xs mt-2 font-medium">
                                — Revipro AG
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
