"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Phone, User, MessageSquare } from "lucide-react"
import { useState } from "react"

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Form submission logic would go here
        console.log("Form submitted:", formData)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

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
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-burnt-terra-cotta to-soft-apricot">Kontakt</span>
                    </h1>
                    <p className="text-xl text-gray-600">
                        Wir sind für Sie da! Gerne vereinbaren wir mit Ihnen einen Termin.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-sm"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4 text-burnt-terra-cotta" />
                                    Name *
                                </div>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-burnt-terra-cotta focus:ring-2 focus:ring-burnt-terra-cotta/20 outline-none transition-colors"
                                placeholder="Ihr Name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-burnt-terra-cotta" />
                                    E-Mail *
                                </div>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-burnt-terra-cotta focus:ring-2 focus:ring-burnt-terra-cotta/20 outline-none transition-colors"
                                placeholder="ihre.email@beispiel.ch"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-burnt-terra-cotta" />
                                    Telefon
                                </div>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-burnt-terra-cotta focus:ring-2 focus:ring-burnt-terra-cotta/20 outline-none transition-colors"
                                placeholder="+41 44 240 02 02"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                <div className="flex items-center gap-2">
                                    <MessageSquare className="w-4 h-4 text-burnt-terra-cotta" />
                                    Nachricht *
                                </div>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                rows={6}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-burnt-terra-cotta focus:ring-2 focus:ring-burnt-terra-cotta/20 outline-none transition-colors resize-none"
                                placeholder="Ihre Nachricht an uns..."
                            />
                        </div>

                        <Button type="submit" size="lg" className="w-full rounded-full">
                            Nachricht senden
                        </Button>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}
