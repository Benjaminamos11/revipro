"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Globe } from "lucide-react"

export function ContactInfo() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold mb-8">Kontaktinformationen</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-lg mb-4">Revipro AG + GemeindeFinanzen.ch GmbH</h3>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-5 h-5 text-burnt-terra-cotta" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Adresse</p>
                                            <p className="text-gray-600">Zimmerbergstrasse 10</p>
                                            <p className="text-gray-600">8800 Thalwil</p>
                                            <p className="text-gray-600">Schweiz</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-5 h-5 text-burnt-terra-cotta" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Telefon</p>
                                            <a href="tel:+41442400202" className="text-burnt-terra-cotta hover:underline">
                                                044 240 02 02
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-5 h-5 text-burnt-terra-cotta" />
                                        </div>
                                        <div>
                                            <p className="font-medium">E-Mail</p>
                                            <a href="mailto:kontakt@revipro.ch" className="text-burnt-terra-cotta hover:underline block">
                                                kontakt@revipro.ch
                                            </a>
                                            <a href="mailto:info@gemeinde-finanzen.ch" className="text-burnt-terra-cotta hover:underline block">
                                                info@gemeinde-finanzen.ch
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                                            <Globe className="w-5 h-5 text-burnt-terra-cotta" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Websites</p>
                                            <a href="https://www.revipro.ch" target="_blank" rel="noopener noreferrer" className="text-burnt-terra-cotta hover:underline block">
                                                www.revipro.ch
                                            </a>
                                            <a href="https://www.gemeinde-finanzen.ch" target="_blank" rel="noopener noreferrer" className="text-burnt-terra-cotta hover:underline block">
                                                www.gemeinde-finanzen.ch
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="h-[500px] rounded-2xl overflow-hidden shadow-sm"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2704.8937384!2d8.5615!3d47.2935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa0b5e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sZimmerbergstrasse%2010%2C%208800%20Thalwil%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Revipro AG Location"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
