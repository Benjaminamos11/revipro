import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
    title: 'Datenschutzerklärung',
    description: 'Datenschutzerklärung der Revipro AG - Informationen zum Schutz Ihrer persönlichen Daten.',
    path: '/datenschutz',
    keywords: ['Datenschutz', 'Privacy', 'DSGVO', 'Datensicherheit'],
})

export default function DatenschutzPage() {
    return (
        <div className="min-h-screen bg-warm-grey pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">Datenschutzerklärung</h1>

                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
                    {/* Introduction */}
                    <section>
                        <p className="text-gray-700 leading-relaxed">
                            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher
                            ausschliesslich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, DSG). In diesen
                            Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen
                            unserer Website.
                        </p>
                    </section>

                    {/* Responsible Party */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-burnt-terra-cotta">Verantwortliche Stelle</h2>
                        <div className="space-y-2 text-gray-700">
                            <p className="font-semibold">Revipro AG</p>
                            <p>Zimmerbergstrasse 10</p>
                            <p>CH-8800 Thalwil</p>
                            <p>Schweiz</p>
                            <p className="mt-4">
                                <span className="font-semibold">E-Mail:</span>{' '}
                                <a href="mailto:kontakt@revipro.ch" className="text-burnt-terra-cotta hover:underline">
                                    kontakt@revipro.ch
                                </a>
                            </p>
                            <p>
                                <span className="font-semibold">Telefon:</span>{' '}
                                <a href="tel:+41441234567" className="text-burnt-terra-cotta hover:underline">
                                    +41 44 123 45 67
                                </a>
                            </p>
                        </div>
                    </section>

                    {/* Data Collection */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-burnt-terra-cotta">Datenerfassung auf unserer Website</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Kontaktformular</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
                                    inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
                                    von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">Server-Log-Dateien</h3>
                                <p className="text-sm text-gray-700 leading-relaxed mb-2">
                                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                                    Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                                </p>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-4">
                                    <li>Browsertyp und Browserversion</li>
                                    <li>Verwendetes Betriebssystem</li>
                                    <li>Referrer URL</li>
                                    <li>Hostname des zugreifenden Rechners</li>
                                    <li>Uhrzeit der Serveranfrage</li>
                                    <li>IP-Adresse</li>
                                </ul>
                                <p className="text-sm text-gray-700 leading-relaxed mt-2">
                                    Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Grundlage für die
                                    Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, der die Verarbeitung von Daten zur Erfüllung eines
                                    Vertrags oder vorvertraglicher Massnahmen gestattet.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Cookies */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-burnt-terra-cotta">Cookies</h2>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät
                            speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
                            Einige Cookies sind &quot;Session-Cookies.&quot; Solche Cookies werden nach Ende Ihrer Browser-Sitzung von selbst
                            gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen.
                            Solche Cookies helfen uns, Sie bei Rückkehr auf unserer Website wiederzuerkennen. Mit einem modernen
                            Webbrowser können Sie das Setzen von Cookies überwachen, einschränken oder unterbinden. Viele Webbrowser
                            lassen sich so konfigurieren, dass Cookies mit dem Schliessen des Programms von selbst gelöscht werden.
                            Die Deaktivierung von Cookies kann eine eingeschränkte Funktionalität unserer Website zur Folge haben.
                        </p>
                    </section>

                    {/* Third Party Services */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-burnt-terra-cotta">Dienste von Drittanbietern</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Google Maps</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Diese Website nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google Ireland
                                    Limited, Gordon House, Barrow Street, Dublin 4, Irland. Zur Nutzung der Funktionen von Google Maps ist
                                    es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server
                                    von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss
                                    auf diese Datenübertragung.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">Cloudinary</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Wir nutzen Cloudinary für die Bereitstellung und Optimierung von Bildern und Videos auf unserer
                                    Website. Cloudinary kann dabei technische Informationen wie Ihre IP-Adresse erfassen. Weitere
                                    Informationen finden Sie in der Datenschutzerklärung von Cloudinary.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* User Rights */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-burnt-terra-cotta">Ihre Rechte</h2>
                        <p className="text-sm text-gray-700 leading-relaxed mb-4">
                            Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung,
                            Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten
                            gegen das Datenschutzrecht verstösst oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise
                            verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren.
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            In der Schweiz ist dies der Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte (EDÖB).
                        </p>
                    </section>

                    {/* Data Security */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-burnt-terra-cotta">Datensicherheit</h2>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in
                            Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. In der
                            Regel handelt es sich dabei um eine 256 Bit Verschlüsselung. Falls Ihr Browser keine 256-Bit
                            Verschlüsselung unterstützt, greifen wir stattdessen auf 128-Bit v3 Technologie zurück. Ob eine einzelne
                            Seite unseres Internetauftrittes verschlüsselt übertragen wird, erkennen Sie an der geschlossenen
                            Darstellung des Schüssel- beziehungsweise Schloss-Symbols in der unteren Statusleiste Ihres Browsers.
                        </p>
                    </section>

                    {/* Contact for Privacy */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-burnt-terra-cotta">Kontakt in Datenschutzfragen</h2>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Für Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:
                        </p>
                        <div className="mt-4 space-y-2 text-gray-700">
                            <p>
                                <span className="font-semibold">E-Mail:</span>{' '}
                                <a href="mailto:kontakt@revipro.ch" className="text-burnt-terra-cotta hover:underline">
                                    kontakt@revipro.ch
                                </a>
                            </p>
                            <p>
                                <span className="font-semibold">Telefon:</span>{' '}
                                <a href="tel:+41441234567" className="text-burnt-terra-cotta hover:underline">
                                    +41 44 123 45 67
                                </a>
                            </p>
                        </div>
                    </section>

                    {/* Last Updated */}
                    <section className="pt-6 border-t">
                        <p className="text-sm text-gray-500">
                            Stand: {new Date().toLocaleDateString('de-CH', { year: 'numeric', month: 'long', day: 'numeric' })}
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
