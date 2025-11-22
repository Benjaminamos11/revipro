"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { AppointmentModal } from "@/components/ui/appointment-modal"
import { motion } from "framer-motion"

const navItems = [
    { name: "Über uns", href: "/uber-uns" },
    { name: "Angebot", href: "/angebot" },
    { name: "Kontakt", href: "/kontakt" },
]

export function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                    <Logo />

                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-gray-600 hover:text-burnt-terra-cotta transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <Button
                            onClick={() => setIsModalOpen(true)}
                            className="text-sm md:text-base px-3 md:px-4 whitespace-nowrap"
                        >
                            <span className="hidden sm:inline">Beratungstermin buchen</span>
                            <span className="sm:hidden">Termin</span>
                        </Button>
                    </div>
                </div>
            </header>

            <AppointmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
}
