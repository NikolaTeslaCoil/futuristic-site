import { motion } from 'motion/react';
import { Cookie } from 'lucide-react';
import { Card } from './ui/card';

interface CookiePolicyPageProps {
  darkMode: boolean;
}

export function CookiePolicyPage({ darkMode }: CookiePolicyPageProps) {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <Cookie className={`w-16 h-16 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
              <div className="absolute inset-0 bg-cyan-400 blur-2xl opacity-50" />
            </div>
          </div>

          <h1 className={`text-4xl md:text-5xl text-center mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <span className={darkMode ? 'text-cyan-400' : 'text-cyan-600'}>Informasjonskapsler</span>
          </h1>

          <p className={`text-center mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Sist oppdatert: {new Date().toLocaleDateString('nb-NO')}
          </p>

          <div
            className={`rounded-xl p-4 mb-8 text-sm ${
              darkMode ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400' : 'bg-cyan-50 border border-cyan-600/30 text-cyan-700'
            }`}
          >
            <strong>Merk:</strong> Dette er et utkast og vil bli oppdatert med fullstendig informasjon.
          </div>

          <Card
            className={`p-8 ${
              darkMode
                ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border-cyan-500/30'
                : 'bg-white border-cyan-600/20 shadow-lg'
            }`}
          >
            <div className="space-y-8">
              <section>
                <h2 className={`text-2xl mb-4 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  1. Hva er informasjonskapsler?
                </h2>
                <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Informasjonskapsler (cookies) er små tekstfiler som lagres på enheten din når du besøker nettsider.
                  De brukes til å huske innstillinger, forbedre brukeropplevelsen og samle anonym statistikk om hvordan
                  nettsiden brukes.
                </p>
              </section>

              <section>
                <h2 className={`text-2xl mb-4 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  2. Hvilke typer cookies bruker vi?
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Nødvendige cookies
                    </h3>
                    <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Disse er essensielle for at nettsiden skal fungere. De inkluderer for eksempel innstillinger for
                      mørk modus, språkvalg og sikkerhetsfunksjoner.
                    </p>
                  </div>

                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Funksjonelle cookies
                    </h3>
                    <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Disse husker valg du har gjort (som brukerpreferanser) og gir forbedrede, mer personlige
                      funksjoner.
                    </p>
                  </div>

                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Analyse-cookies
                    </h3>
                    <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Disse hjelper oss å forstå hvordan besøkende bruker nettsiden, slik at vi kan forbedre
                      innholdet og brukeropplevelsen. All data samles inn anonymt.
                    </p>
                  </div>

                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Markedsføringscookies
                    </h3>
                    <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Disse brukes til å vise relevante annonser og markedsføringsinnhold. De kan også brukes til å
                      måle effektiviteten av markedsføringskampanjer.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className={`text-2xl mb-4 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>3. Samtykke</h2>
                <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Ved første besøk på nettsiden vår vil du bli bedt om å godta bruk av cookies. Du kan når som helst
                  endre dine preferanser. Nødvendige cookies kan ikke deaktiveres, da de er essensielle for nettsidens
                  funksjonalitet.
                </p>
              </section>

              <section>
                <h2 className={`text-2xl mb-4 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  4. Tredjepartscookies
                </h2>
                <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Vi kan bruke tjenester fra tredjeparter som Google Analytics for å analysere nettsidetrafikk. Disse
                  tjenestene kan sette egne cookies. Vi anbefaler at du leser personvernpolicyene til disse tjenestene
                  for å forstå hvordan de bruker dine data.
                </p>
              </section>

              <section>
                <h2 className={`text-2xl mb-4 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  5. Hvordan slå av cookies
                </h2>
                <p className={`leading-relaxed mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Du kan når som helst slå av cookies i nettleserinnstillingene dine. Vær oppmerksom på at dette kan
                  påvirke funksjonaliteten til nettsiden. Her er lenker til instruksjoner for de vanligste nettleserne:
                </p>
                <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 underline"
                    >
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.mozilla.org/nb/kb/informasjonskapsler"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 underline"
                    >
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/nb-no/guide/safari/sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 underline"
                    >
                      Safari
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.microsoft.com/nb-no/microsoft-edge/slette-informasjonskapsler-i-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 underline"
                    >
                      Microsoft Edge
                    </a>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className={`text-2xl mb-4 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>6. Kontakt</h2>
                <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Har du spørsmål om vår bruk av cookies? Kontakt oss gjerne på:{' '}
                  <a href="mailto:kontakt@dittdomene.no" className="text-cyan-400 hover:text-cyan-300 underline">
                    post@brandboostmarketing.no
                  </a>
                </p>
              </section>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
