import { motion } from 'motion/react';
import { Shield } from 'lucide-react';
import { Card } from './ui/card';

interface PrivacyPolicyPageProps {
  darkMode: boolean;
}

export function PrivacyPolicyPage({ darkMode }: PrivacyPolicyPageProps) {
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
              <Shield className={`w-16 h-16 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
              <div className="absolute inset-0 bg-cyan-400 blur-2xl opacity-50" />
            </div>
          </div>

          <h1 className={`text-4xl md:text-5xl text-center mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <span className={darkMode ? 'text-cyan-400' : 'text-cyan-600'}>Personvern</span>policy
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
                  1. Formål og dataansvar
                </h2>
                <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Brandboost Marketing er ansvarlig for behandling av personopplysninger i forbindelse med våre
                  tjenester. Vi er forpliktet til å beskytte ditt personvern og behandle dine personopplysninger i
                  samsvar med gjeldende personvernlovgivning.
                </p>
              </section>

              <section>
                <h2 className={`text-2xl mb-4 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  2. Hvilke data vi samler inn
                </h2>
                <p className={`leading-relaxed mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Vi samler inn følgende typer informasjon:
                </p>
                <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>Kontaktinformasjon (navn, e-post, telefonnummer)</li>
                  <li>Bedriftsinformasjon når relevant</li>
                  <li>Teknisk informasjon (IP-adresse, nettlesertype, besøksdata)</li>
                  <li>Kommunikasjonshistorikk med oss</li>
                </ul>
              </section>

              <section>
                <h2 className={`text-2xl mb-4 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>3. Hvordan vi bruker dataene</h2>
                <p className={`leading-relaxed mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Personopplysningene brukes til:
                </p>
                <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>Å levere og forbedre våre tjenester</li>
                  <li>Å kommunisere med deg om forespørsler og prosjekter</li>
                  <li>Å sende relevant informasjon om våre tjenester (med samtykke)</li>
                  <li>Å overholde juridiske forpliktelser</li>
                </ul>
              </section>

              <section>
                <h2 className={`text-2xl mb-4 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>4. Lagring og sikkerhet</h2>
                <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Vi lagrer personopplysninger så lenge det er nødvendig for å oppfylle formålene beskrevet i denne
                  policyen. Vi implementerer passende tekniske og organisatoriske sikkerhetstiltak for å beskytte dine
                  data mot uautorisert tilgang, endring eller sletting.
                </p>
              </section>

              <section>
                <h2 className={`text-2xl mb-4 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>5. Deling med tredjeparter</h2>
                <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Vi deler ikke dine personopplysninger med tredjeparter med mindre det er nødvendig for å levere våre
                  tjenester, eller vi er pålagt det ved lov. Eventuelle tredjepartsleverandører vi bruker er
                  kontraktsmessig forpliktet til å beskytte dine data.
                </p>
              </section>

              <section>
                <h2 className={`text-2xl mb-4 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>6. Dine rettigheter</h2>
                <p className={`leading-relaxed mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Du har rett til:
                </p>
                <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>Innsyn i hvilke personopplysninger vi behandler om deg</li>
                  <li>Retting av uriktige eller ufullstendige opplysninger</li>
                  <li>Sletting av dine personopplysninger</li>
                  <li>Begrensning av behandling</li>
                  <li>Dataportabilitet</li>
                  <li>Å protestere mot behandling Design template by [Abdellah Rayen] (CC BY 4.0)</li>
                </ul>
              </section>

              <section>
                <h2 className={`text-2xl mb-4 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>7. Kontakt</h2>
                <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  For spørsmål om personvern eller for å utøve dine rettigheter, vennligst kontakt oss på:{' '}
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
