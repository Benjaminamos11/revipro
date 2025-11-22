import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
    title: 'Allgemeine Geschäftsbedingungen',
    description: 'Allgemeine Geschäftsbedingungen (AGB) der Revipro AG für Wirtschaftsprüfung und Beratungsdienstleistungen.',
    path: '/agb',
    keywords: ['AGB', 'Geschäftsbedingungen', 'Terms', 'Bedingungen'],
})

export default function AGBPage() {
    return (
        <div className="min-h-screen bg-warm-grey pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>

                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
                    {/* Introduction */}
                    <section>
                        <p className="text-gray-700 leading-relaxed">
                            Die nachfolgenden Allgemeinen Geschäftsbedingungen (AGB) regeln die Geschäftsbeziehung zwischen der
                            Revipro AG und ihren Kunden. Mit der Beauftragung unserer Dienstleistungen akzeptieren Sie diese
                            Bedingungen.
                        </p>
                    </section>

                    {/* Scope */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-burnt-terra-cotta">1. Geltungsbereich</h2>
                        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                            <p>
                                Diese AGB gelten für alle Dienstleistungen der Revipro AG im Bereich Wirtschaftsprüfung, Revision und
                                Beratung. Sie sind Bestandteil aller Verträge, die zwischen der Revipro AG und ihren Kunden geschlossen
                                werden.
                            </p>
                            <p>
                                Abweichende Bedingungen des Kunden werden nur dann Vertragsbestandteil, wenn die Revipro AG diese
                                ausdrücklich schriftlich anerkennt.
                            </p>
                        </div>
                    </section>

                    {/* Services */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-burnt-terra-cotta">2. Leistungsumfang</h2>
                        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                            <p>
                                Der Umfang der zu erbringenden Leistungen ergibt sich aus dem jeweiligen Auftrag bzw. der
                                Auftragsbestätigung. Zusätzliche Leistungen werden gesondert vereinbart und vergütet.
                            </p>
                            <p>
                                Die Revipro AG erbringt ihre Leistungen nach bestem Wissen und Gewissen unter Beachtung der geltenden
                                Gesetze, Vorschriften und Standesregeln.
                            </p>
                        </div>
                    </section>

                    {/* Client Obligations */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-burnt-terra-cotta">3. Mitwirkungspflichten des Kunden</h2>
                        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                            <p>
                                Der Kunde verpflichtet sich, alle für die Auftragserfüllung notwendigen Unterlagen vollständig,
                                richtig und rechtzeitig zur Verfügung zu stellen.
                            </p>
                            <p>
                                Der Kunde stellt sicher, dass alle erforderlichen Auskünfte erteilt und Zugang zu relevanten Personen
                                und Systemen gewährt wird.
                            </p>
                            <p>
                                Verzögerungen aufgrund unvollständiger oder verspäteter Informationen gehen zu Lasten des Kunden und
                                können zu einer Anpassung der Honorare führen.
                            </p>
                        </div>
                    </section>

                    {/* Fees */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-burnt-terra-cotta">4. Honorar und Zahlungsbedingungen</h2>
                        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                            <p>
                                Die Vergütung erfolgt nach Zeitaufwand oder nach Pauschalhonorar gemäss Vereinbarung. Auslagen werden
                                zusätzlich in Rechnung gestellt.
                            </p>
                            <p>
                                Rechnungen sind innerhalb von 30 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig. Bei
                                Zahlungsverzug werden Verzugszinsen von 5% p.a. berechnet.
                            </p>
                            <p>
                                Die Revipro AG ist berechtigt, für umfangreiche Aufträge Abschlagszahlungen zu verlangen.
                            </p>
                        </div>
                    </section>

                    {/* Confidentiality */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-burnt-terra-cotta">5. Vertraulichkeit</h2>
                        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                            <p>
                                Die Revipro AG verpflichtet sich, alle im Rahmen der Auftragserfüllung erlangten Informationen streng
                                vertraulich zu behandeln und nur im Rahmen des Auftrags zu verwenden.
                            </p>
                            <p>
                                Diese Verpflichtung gilt auch nach Beendigung des Auftragsverhältnisses, soweit nicht gesetzliche
                                Offenlegungspflichten bestehen.
                            </p>
                        </div>
                    </section>

                    {/* Liability */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-burnt-terra-cotta">6. Haftung</h2>
                        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                            <p>
                                Die Revipro AG haftet für Schäden nur bei Vorsatz oder grober Fahrlässigkeit. Die Haftung für leichte
                                Fahrlässigkeit ist ausgeschlossen, soweit gesetzlich zulässig.
                            </p>
                            <p>
                                Die Haftung ist in jedem Fall auf den Auftragswert, mindestens jedoch auf CHF 100'000.–, begrenzt.
                            </p>
                            <p>
                                Schadenersatzansprüche verjähren ein Jahr nach Kenntnis des Schadens und der Person des Schädigers,
                                spätestens jedoch fünf Jahre nach der schädigenden Handlung.
                            </p>
                        </div>
                    </section>

                    {/* Intellectual Property */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-burnt-terra-cotta">7. Urheberrecht</h2>
                        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                            <p>
                                Alle im Rahmen der Auftragserfüllung erstellten Berichte, Analysen und sonstigen Arbeitsergebnisse
                                bleiben geistiges Eigentum der Revipro AG.
                            </p>
                            <p>
                                Der Kunde erhält ein nicht-exklusives Nutzungsrecht für die vereinbarten Zwecke. Eine Weitergabe an
                                Dritte bedarf der vorherigen schriftlichen Zustimmung der Revipro AG.
                            </p>
                        </div>
                    </section>

                    {/* Termination */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-burnt-terra-cotta">8. Vertragsbeendigung</h2>
                        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                            <p>
                                Beide Parteien können den Vertrag jederzeit schriftlich kündigen. Bei Kündigung durch den Kunden sind
                                die bis dahin erbrachten Leistungen zu vergüten.
                            </p>
                            <p>
                                Das Recht zur ausserordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
                            </p>
                        </div>
                    </section>

                    {/* Data Protection */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-burnt-terra-cotta">9. Datenschutz</h2>
                        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                            <p>
                                Die Verarbeitung personenbezogener Daten erfolgt im Einklang mit den geltenden Datenschutzbestimmungen.
                                Weitere Informationen finden Sie in unserer{' '}
                                <Link href="/datenschutz" className="text-burnt-terra-cotta hover:underline font-medium">
                                    Datenschutzerklärung
                                </Link>
                                .
                            </p>
                        </div>
                    </section>

                    {/* Applicable Law */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-burnt-terra-cotta">10. Anwendbares Recht und Gerichtsstand</h2>
                        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                            <p>
                                Für alle Rechtsbeziehungen zwischen der Revipro AG und ihren Kunden gilt ausschliesslich Schweizer
                                Recht unter Ausschluss des UN-Kaufrechts.
                            </p>
                            <p>
                                Ausschliesslicher Gerichtsstand für alle Streitigkeiten ist Thalwil, Schweiz. Die Revipro AG ist jedoch
                                berechtigt, den Kunden auch an seinem Wohnsitz oder Geschäftssitz zu belangen.
                            </p>
                        </div>
                    </section>

                    {/* Amendments */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-burnt-terra-cotta">11. Änderungen der AGB</h2>
                        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                            <p>
                                Die Revipro AG behält sich das Recht vor, diese AGB jederzeit zu ändern. Änderungen werden dem Kunden
                                schriftlich mitgeteilt und gelten als genehmigt, wenn der Kunde nicht innerhalb von 30 Tagen
                                widerspricht.
                            </p>
                        </div>
                    </section>

                    {/* Severability */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-burnt-terra-cotta">12. Salvatorische Klausel</h2>
                        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                            <p>
                                Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen
                                Bestimmungen davon unberührt. Die unwirksame Bestimmung ist durch eine wirksame zu ersetzen, die dem
                                wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.
                            </p>
                        </div>
                    </section>

                    {/* Effective Date */}
                    <section className="pt-6 border-t">
                        <p className="text-sm text-gray-500">
                            Stand: {new Date().toLocaleDateString('de-CH', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                        <p className="text-sm text-gray-700 mt-4">
                            Revipro AG<br />
                            Zimmerbergstrasse 10<br />
                            CH-8800 Thalwil
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
