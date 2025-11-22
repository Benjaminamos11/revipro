"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Phone } from "lucide-react"
import Link from "next/link"
import { AppointmentModal } from "@/components/ui/appointment-modal"
import { useState } from "react"

export function CTASection() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <section className="py-24 bg-[#F5F5F5]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Part 1: Direct Call-to-Action */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                                    Klarheit und Sicherheit für Ihre Finanzen.
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                                    Kontaktieren Sie uns für eine unverbindliche Erstberatung. Wir analysieren Ihre Bedürfnisse und zeigen Ihnen auf, wie wir Sie optimal unterstützen können.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                                <Button
                                    size="lg"
                                    onClick={() => setIsModalOpen(true)}
                                    className="rounded-full text-base px-8 bg-gradient-to-r from-burnt-terra-cotta to-soft-apricot hover:shadow-lg transition-all"
                                >
                                    Jetzt unverbindlich anfragen
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>

                                <a
                                    href="tel:+41442400904"
                                    className="flex items-center gap-2 text-gray-600 hover:text-burnt-terra-cotta transition-colors font-medium px-4 py-2"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span>+41 44 240 09 04 anrufen</span>
                                </a>
                            </div>
                        </div>

                        {/* Part 2: Trust and Credibility */}
                        <div className="relative">
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden">
                                {/* Decorative quote mark */}
                                <div className="absolute top-4 right-6 text-9xl leading-none text-gray-50 font-serif select-none">
                                    &rdquo;
                                </div>

                                <div className="relative z-10 space-y-8">
                                    {/* RAB Badge - Prominent Version */}
                                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 shadow-sm">
                                        <div className="w-8 h-8 rounded-full bg-burnt-terra-cotta flex items-center justify-center">
                                            <CheckCircle2 className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Zertifiziert</p>
                                            <p className="text-sm font-bold text-gray-900">RAB 504748</p>
                                        </div>
                                    </div>

                                    <blockquote className="space-y-4">
                                        <p className="text-xl md:text-2xl font-medium text-gray-900 leading-relaxed italic">
                                            "Dank der professionellen und unkomplizierten Arbeitsweise von Revipro fühlen wir uns bestens aufgehoben. Ihre Expertise hat uns geholfen, unsere Prozesse zu optimieren und finanzielle Klarheit zu gewinnen. Absolut empfehlenswert!"
                                        </p>
                                        <footer className="flex items-center gap-4 pt-2">
                                            <div className="w-10 h-1 bg-gradient-to-r from-burnt-terra-cotta to-soft-apricot rounded-full" />
                                            <cite className="not-italic text-sm font-semibold text-gray-600">
                                                CEO, eines zufriedenen KMU-Kunden
                                            </cite>
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
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
