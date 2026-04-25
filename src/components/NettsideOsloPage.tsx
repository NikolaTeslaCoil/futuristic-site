import { motion } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronRight, Zap, Building2, Paintbrush, MousePointerClick, Users } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

interface NettsideOsloPageProps {
  darkMode: boolean;
}

const whyUsCards = [
  {
    icon: Zap,
    title: 'Rask levering',
    text: 'Vi leverer vanligvis nettsider innen 1–3 uker, avhengig av omfang.',
  },
  {
    icon: Building2,
    title: 'Forståelse av lokale bedrifter',
    text: 'Vi kjenner behovene til små og mellomstore bedrifter i Oslo og bygger nettsider som passer markedet.',
  },
  {
    icon: Paintbrush,
    title: 'Moderne design',
    text: 'Nettsiden bygges med et profesjonelt uttrykk som skaper tillit fra første sekund.',
  },
  {
    icon: MousePointerClick,
    title: 'Fokus på henvendelser',
    text: 'Struktur, tekst og CTA-er settes opp for å gjøre det enkelt for kunder å kontakte deg.',
  },
];

const businessTypes = [
  'Håndverkere',
  'Konsulenter',
  'Lokale tjenestebedrifter',
  'Oppstartsbedrifter',
  'Små og mellomstore selskaper',
];

export function NettsideOsloPage({ darkMode }: NettsideOsloPageProps) {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-36 md:mb-48"
        >
          <h1 className="text-5xl md:text-7xl mb-8 text-white leading-tight">
            Nettside i Oslo &ndash;{' '}
            <span className="text-cyan-400">profesjonelle nettsider</span>
            <br />
            for bedrifter
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed mb-5">
            Vi lager moderne og mobiltilpassede nettsider for bedrifter i Oslo.
          </p>

          <p className="text-lg text-gray-500 leading-relaxed mb-16 max-w-3xl mx-auto">
            Fokus p&aring; tydelig budskap, rask levering og l&oslash;sninger som skaper flere
            henvendelser. Enten du starter nytt eller trenger en oppgradering, bygger vi nettsider
            som gir et profesjonelt f&oslash;rsteinntrykk.
          </p>

          <Button
            onClick={() => navigate('/contact')}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 px-8 py-6 text-lg"
          >
            F&aring; tilbud
            <ChevronRight className="ml-2" />
          </Button>
        </motion.section>

        {/* Section 1 */}
        <section className="max-w-4xl mx-auto mb-36 md:mb-48">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-12 text-center text-white"
          >
            Nettsider for bedrifter{' '}
            <span className="text-cyan-400">i Oslo</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-5"
          >
            <p className="text-xl text-gray-400 leading-relaxed">
              Oslo er et konkurransepreget marked, og en god nettside m&aring; gj&oslash;re mer enn
              &aring; se bra ut. Den m&aring; forklare hva bedriften tilbyr, bygge tillit raskt og
              gj&oslash;re det enkelt for potensielle kunder &aring; ta kontakt.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Vi hjelper sm&aring; og mellomstore bedrifter i Oslo med nettsider som er raske,
              mobiltilpassede og bygget med tydelig struktur.
            </p>
          </motion.div>
        </section>

        {/* Section 2 */}
        <section className="pt-8 md:pt-12 mb-28 md:mb-48">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-16 text-center text-white"
          >
            Hvorfor velge oss{' '}
            <span className="text-cyan-400">i Oslo?</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whyUsCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border-cyan-500/30 backdrop-blur p-8 h-full hover:border-cyan-400 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300" />
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-cyan-400" />
                      </div>
                      <h3 className="text-xl mb-3 text-white">{card.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{card.text}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Section 3 */}
        <section className="max-w-4xl mx-auto mb-28 md:mb-48">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-12 text-center text-white"
          >
            Hva koster en nettside{' '}
            <span className="text-cyan-400">i Oslo?</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Prisen p&aring; en nettside i Oslo avhenger av antall sider, funksjonalitet og hvor mye
              innhold som m&aring; utvikles. De fleste prosjekter ligger mellom 15&nbsp;000 og
              25&nbsp;000&nbsp;kr.
            </p>
            <Link
              to="/tjenester/nettside-pris"
              className="text-cyan-400 hover:text-cyan-300 text-lg transition-colors inline-flex items-center gap-1"
            >
              Se full prisoversikt
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </section>

        {/* Section 4 */}
        <section className="max-w-4xl mx-auto mb-28 md:mb-48">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-12 text-center text-white"
          >
            Hvordan vi bygger{' '}
            <span className="text-cyan-400">nettsider</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Vi starter med &aring; forst&aring; bedriften, m&aring;lgruppen og hva nettsiden skal
              oppn&aring;. Deretter bygger vi en tydelig struktur, moderne design og en l&oslash;sning
              som fungerer godt p&aring; mobil.
            </p>
            <Link
              to="/tjenester/lage-nettside-bedrift"
              className="text-cyan-400 hover:text-cyan-300 text-lg transition-colors inline-flex items-center gap-1"
            >
              Se hvordan vi lager nettsider for bedrifter
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </section>

        {/* Section 5 */}
        <section className="mb-32 md:mb-48">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-16 text-center text-white"
          >
            Passer for mange typer{' '}
            <span className="text-cyan-400">bedrifter</span>
          </motion.h2>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border-cyan-500/30 backdrop-blur px-10 py-12 md:px-12 md:py-14 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
              <div className="relative z-10 space-y-8">
                {businessTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 group/item"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300 text-lg group-hover/item:text-white transition-colors">
                      {type}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-cyan-500/50 backdrop-blur p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0"
                  animate={{
                    background: [
                      `radial-gradient(circle at ${20 + i * 30}% ${20 + i * 30}%, rgba(0, 183, 255, 0.2) 0%, transparent 50%)`,
                      `radial-gradient(circle at ${80 - i * 30}% ${80 - i * 30}%, rgba(0, 183, 255, 0.2) 0%, transparent 50%)`,
                      `radial-gradient(circle at ${20 + i * 30}% ${20 + i * 30}%, rgba(0, 183, 255, 0.2) 0%, transparent 50%)`,
                    ],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl mb-6 text-white">
                Trenger du ny nettside{' '}
                <span className="text-cyan-400">i Oslo?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Fortell kort om bedriften din og hva du trenger, s&aring; f&aring;r du et konkret tilbud.
              </p>
              <Button
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 px-8 py-6 text-lg"
              >
                F&aring; tilbud
                <ChevronRight className="ml-2" />
              </Button>
            </div>
          </Card>
        </motion.section>

      </div>
    </div>
  );
}
