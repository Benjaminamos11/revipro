import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-400">
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="md:col-span-2">
                        <div className="mb-6">
                            <Link href="/" className="inline-block">
                                <Image
                                    src="/revipro_logo_transparent.png"
                                    alt="Revipro Logo"
                                    width={180}
                                    height={48}
                                    className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                                />
                            </Link>
                        </div>
                        <p className="text-sm leading-relaxed mb-6 max-w-md">
                            Spezialisierte finanztechnische Prüfstellen mit Schwerpunkt auf Städte, Gemeinden, Zweckverbände und andere öffentliche Institutionen im Kanton Zürich sowie für Revisionen in der Privatwirtschaft.
                        </p>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-burnt-terra-cotta mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-white">Revipro AG + GemeindeFinanzen.ch GmbH</p>
                                    <p>Zimmerbergstrasse 10</p>
                                    <p>8800 Thalwil, Schweiz</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-burnt-terra-cotta flex-shrink-0" />
                                <a href="tel:+41442400202" className="hover:text-white transition-colors">
                                    044 240 02 02
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <Mail className="w-4 h-4 text-burnt-terra-cotta mt-0.5 flex-shrink-0" />
                                <div className="space-y-1">
                                    <a href="mailto:kontakt@revipro.ch" className="hover:text-white transition-colors block">
                                        kontakt@revipro.ch
                                    </a>
                                    <a href="mailto:info@gemeinde-finanzen.ch" className="hover:text-white transition-colors block">
                                        info@gemeinde-finanzen.ch
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/" className="hover:text-burnt-terra-cotta transition-colors">Startseite</Link></li>
                            <li><Link href="/uber-uns" className="hover:text-burnt-terra-cotta transition-colors">Über uns</Link></li>
                            <li><Link href="/angebot" className="hover:text-burnt-terra-cotta transition-colors">Angebot</Link></li>
                            <li><Link href="/kontakt" className="hover:text-burnt-terra-cotta transition-colors">Kontakt</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Rechtliches</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/impressum" className="hover:text-burnt-terra-cotta transition-colors">Impressum</Link></li>
                            <li><Link href="/privacy" className="hover:text-burnt-terra-cotta transition-colors">Datenschutz</Link></li>
                            <li><Link href="/terms" className="hover:text-burnt-terra-cotta transition-colors">AGB</Link></li>
                        </ul>
                        <div className="mt-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                                <span className="w-2 h-2 rounded-full bg-red-600"></span>
                                <span className="text-xs font-medium text-white">RAB 504748</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-500">
                        &copy; {new Date().getFullYear()} Revipro AG + GemeindeFinanzen.ch GmbH. Alle Rechte vorbehalten.
                    </p>
                    <div className="flex items-center gap-6 text-xs text-gray-500">
                        <a href="https://www.revipro.ch" target="_blank" rel="noopener noreferrer" className="hover:text-burnt-terra-cotta transition-colors">
                            www.revipro.ch
                        </a>
                        <a href="https://www.gemeinde-finanzen.ch" target="_blank" rel="noopener noreferrer" className="hover:text-burnt-terra-cotta transition-colors">
                            www.gemeinde-finanzen.ch
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
