"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface AppointmentModalProps {
    isOpen: boolean
    onClose: () => void
}

export function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        phone: "",
        email: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: Add online booking tool integration here
        console.log("Form submitted:", formData)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-in fade-in zoom-in duration-200 my-8">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-sm"
                >
                    <X className="w-5 h-5 text-gray-600" />
                </button>

                {/* Header with gradient */}
                <div className="bg-gradient-to-br from-burnt-terra-cotta to-soft-apricot p-6 pb-12 text-white">
                    <h2 className="text-2xl font-bold mb-2">Termin vereinbaren</h2>
                    <p className="text-white/90 text-sm">
                        Wir freuen uns auf Ihre Kontaktaufnahme
                    </p>
                </div>

                {/* Profile Picture - overlapping header */}
                <div className="flex justify-center -mt-10 mb-4">
                    <div className="relative">
                        <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-100">
                            <Image
                                src="https://res.cloudinary.com/dphbnwjtx/image/upload/v1763770793/verena-901x1024_apznj9.png"
                                alt="Verena Kamer van Toornburg"
                                width={96}
                                height={96}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white" />
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-3">
                    <div className="text-center mb-4">
                        <p className="font-semibold text-gray-900">Verena Kamer van Toornburg</p>
                        <p className="text-sm text-gray-600">Geschäftsführerin</p>
                    </div>

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-burnt-terra-cotta focus:ring-2 focus:ring-burnt-terra-cotta/20 outline-none transition-all"
                            placeholder="Ihr Name"
                        />
                    </div>

                    <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                            Firma / Gemeinde
                        </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-burnt-terra-cotta focus:ring-2 focus:ring-burnt-terra-cotta/20 outline-none transition-all"
                            placeholder="Ihre Organisation"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Telefon *
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-burnt-terra-cotta focus:ring-2 focus:ring-burnt-terra-cotta/20 outline-none transition-all"
                            placeholder="+41 XX XXX XX XX"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            E-Mail *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-burnt-terra-cotta focus:ring-2 focus:ring-burnt-terra-cotta/20 outline-none transition-all"
                            placeholder="ihre@email.ch"
                        />
                    </div>

                    <Button
                        type="submit"
                        size="lg"
                        className="w-full rounded-full text-base mt-4 bg-gradient-to-r from-burnt-terra-cotta to-soft-apricot hover:shadow-lg transition-all"
                    >
                        Jetzt online Termin vereinbaren
                    </Button>

                    <p className="text-xs text-gray-500 text-center mt-4">
                        Durch Klicken auf &quot;Termin vereinbaren&quot; stimmen Sie unseren{" "}
                        <a href="/datenschutz" className="text-burnt-terra-cotta hover:underline">
                            Datenschutzbestimmungen
                        </a>{" "}
                        zu.
                    </p>
                </form>
            </div>
        </div>
    )
}
