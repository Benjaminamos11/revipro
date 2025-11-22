"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function References() {
    return (
        <section className="py-20 bg-warm-grey">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl font-bold mb-6">Referenzen</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Referenzen geben wir gerne auf Anfrage.
                    </p>
                    <Link href="/kontakt">
                        <Button size="lg" className="rounded-full group">
                            Kontaktieren Sie uns
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
