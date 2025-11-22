import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
    title: 'Impressum',
    description: 'Impressum und rechtliche Informationen der Revipro AG - Wirtschaftsprüfung und Beratung in Zürich.',
    path: '/impressum',
    keywords: ['Impressum', 'Rechtliche Informationen', 'Kontakt'],
})

export default function ImpressumPage() {
    return (
        <div className="min-h-screen bg-warm-grey pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">Impressum</h1>

                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
                    {/* Company Information */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-burnt-terra-cotta">Angaben gemäss Art. 8 UWG</h2>
                        <div className="space-y-2 text-gray-700">
                            <p className="font-semibold text-lg">Revipro AG</p>
                            <p>Zimmerbergstrasse 10</p>
                            <p>CH-8800 Thalwil</p>
                            <p>Schweiz</p>
                        </div>
                    </section>

                    {/* Contact */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-burnt-terra-cotta">Kontakt</h2>
                        <div className="space-y-2 text-gray-700">
                            <p>
                                <span className="font-semibold">Telefon:</span>{' '}
                                <a href="tel:+41442400202" className="text-burnt-terra-cotta hover:underline">
                                    +41 44 240 02 02
                                </a>
                            </p>
                            <p>
                                <span className="font-semibold">E-Mail:</span>{' '}
                                <a href="mailto:kontakt@revipro.ch" className="text-burnt-terra-cotta hover:underline">
                                    kontakt@revipro.ch
                                </a>
                            </p>
                            <p>
                                <span className="font-semibold">Website:</span>{' '}
                                <a href="https://revipro.ch" className="text-burnt-terra-cotta hover:underline">
                                    www.revipro.ch
                                </a>
                            </p>
                        </div>
                    </section>

                    {/* Register Information */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-burnt-terra-cotta">Handelsregister</h2>
                        <div className="space-y-2 text-gray-700">
                            <p>
                                <span className="font-semibold">Handelsregister-Nummer:</span> CH-020.3.039.062-0
                            </p>
                            <p>
                                <span className="font-semibold">UID:</span> CHE-268.728.392
                            </p>
                            <p>
                                <span className="font-semibold">Handelsregisteramt:</span> Thalwil
                            </p>
                        </div>
                    </section>

                    {/* Management */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-burnt-terra-cotta">Geschäftsführung</h2>
                        <div className="space-y-2 text-gray-700">
                            <p>Sibylle Vonaesch, Geschäftsführerin</p>
                            <p>Weitere Geschäftsführer gemäss Handelsregistereintrag</p>
                        </div>
                    </section>

                    {/* Certification */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-burnt-terra-cotta">Zulassung</h2>
                        <div className="space-y-2 text-gray-700">
                            <p>
                                <span className="font-semibold">Zugelassene Revisionsexperten RAB</span>
                            </p>
                            <p>Eidgenössische Revisionsaufsichtsbehörde (RAB)</p>
                        </div>
                    </section>

                    {/* Disclaimer */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-burnt-terra-cotta">Haftungsausschluss</h2>
                        <div className="space-y-4 text-gray-700">
                            <div>
                                <h3 className="font-semibold mb-2">Inhalt des Onlineangebotes</h3>
                                <p className="text-sm leading-relaxed">
                                    Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität
                                    der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, welche sich auf Schäden
                                    materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen
                                    Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht
                                    wurden, sind grundsätzlich ausgeschlossen, sofern seitens des Autors kein nachweislich vorsätzliches
                                    oder grob fahrlässiges Verschulden vorliegt.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-2">Verweise und Links</h3>
                                <p className="text-sm leading-relaxed">
                                    Bei direkten oder indirekten Verweisen auf fremde Webseiten (&quot;Hyperlinks&quot;), die ausserhalb
                                    des Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschliesslich in
                                    dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch möglich
                                    und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-2">Urheber- und Kennzeichenrecht</h3>
                                <p className="text-sm leading-relaxed">
                                    Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Grafiken,
                                    Tondokumente, Videosequenzen und Texte zu beachten, von ihm selbst erstellte Grafiken, Tondokumente,
                                    Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken, Tondokumente, Videosequenzen und
                                    Texte zurückzugreifen. Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte
                                    geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen
                                    Kennzeichenrechts und den Besitzrechten der jeweiligen eingetragenen Eigentümer.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Copyright */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-burnt-terra-cotta">Copyright</h2>
                        <p className="text-gray-700">
                            © {new Date().getFullYear()} Revipro AG. Alle Rechte vorbehalten.
                        </p>
                    </section>

                    {/* Back Link */}
                    <div className="pt-8 border-t">
                        <Link
                            href="/"
                            className="inline-flex items-center text-burnt-terra-cotta hover:text-soft-apricot transition-colors font-medium"
                        >
                            ← Zurück zur Startseite
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
