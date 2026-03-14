import { motion } from 'motion/react';
import {
  Check,
  Zap,
  Smartphone,
  TrendingUp,
  Search,
  Code,
  Users,
  Target,
  MessageSquare,
  Gauge,
  LayoutTemplate,
  Globe,
  ChevronRight,
} from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

interface LageNettsideBedriftPageProps {
  darkMode: boolean;
}

export function LageNettsideBedriftPage({ darkMode }: LageNettsideBedriftPageProps) {
  const navigate = useNavigate();

  const problems = [
    'Ser grei ut, men ikke skaper henvendelser',
    'Er treg og dårlig tilpasset mobil',
    'Har uklart budskap',
    'Mangler struktur for kontakt og lead-generering',
    'Ikke rangerer i Google',
  ];

  const features = [
    { icon: Target, title: 'Mål og målgruppe', description: 'Tydelig definert målgruppe og forretningsmål' },
    { icon: MessageSquare, title: 'Tydelig verdiforslag', description: 'Klart budskap som engasjerer' },
    { icon: TrendingUp, title: 'Struktur for henvendelser', description: 'Optimalisert for konvertering' },
    { icon: Smartphone, title: 'Mobilopplevelse', description: 'Perfekt tilpasset alle enheter' },
    { icon: Gauge, title: 'Hastighet og teknisk kvalitet', description: 'Raske lastetider og moderne teknologi' },
    { icon: Search, title: 'SEO-grunnstruktur', description: 'Optimalisert for søkemotorer' },
  ];

  const deliverables = [
    {
      title: 'Skreddersydd design',
      description: 'Profesjonelt design som speiler merkevaren din og skaper tillit hos besøkende.',
    },
    {
      title: 'Mobiltilpasset og rask løsning',
      description: 'Fungerer perfekt på alle enheter med raske lastetider og sømløs navigasjon.',
    },
    {
      title: 'Struktur for konvertering',
      description: 'Strategisk plasserte CTA-er og kontaktpunkter som driver besøkende til handling.',
    },
    {
      title: 'SEO-grunnstruktur',
      description: 'Teknisk og innholdsmessig optimalisert for å rangere bedre i søkemotorer.',
    },
    {
      title: 'Enkel videreutvikling',
      description: 'Bygget med moderne teknologi som gjør det enkelt å utvide og vedlikeholde.',
    },
  ];

  const targetAudience = [
    'Håndverkere',
    'Konsulenter',
    'Lokale tjenestebedrifter',
    'Små og mellomstore selskaper',
    'Oppstartsbedrifter',
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Kartlegging',
      description: 'Vi starter med å forstå din bedrift, målgruppe og forretningsmål.',
    },
    {
      number: '02',
      title: 'Struktur og design',
      description: 'Vi lager en klar struktur og visuelt design som speiler merkevaren din.',
    },
    {
      number: '03',
      title: 'Utvikling',
      description: 'Vi bygger nettsiden med fokus på hastighet, mobilopplevelse og brukervennlighet.',
    },
    {
      number: '04',
      title: 'Lansering',
      description: 'Vi lanserer nettsiden og sikrer at alt fungerer perfekt på tvers av enheter.',
    },
  ];

  const whyUs = [
    { title: 'Rask levering', description: 'Effektiv prosess med kort leveringstid' },
    { title: 'Konkurransedyktig pris', description: 'Profesjonell kvalitet til fair pris' },
    { title: 'Moderne design', description: 'Tidløst design som bygger tillit' },
    { title: 'Tydelig konverteringsstruktur', description: 'Bygget for å drive henvendelser' },
    { title: 'Løsninger bygget for vekst', description: 'Skalerbar og enkel å utvide' },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-8"
          >
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-30" />
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl mb-6 text-white leading-tight">
            Lage nettside for bedrift –{' '}
            <span className="text-cyan-400">profesjonell løsning</span>
            <br />
            fra 15 000 kr
          </h1>
          <p className="text-xl text-gray-400 mb-6 leading-relaxed">
            Vi lager moderne, mobiltilpassede nettsider for små og mellomstore bedrifter i hele Norge.
            <br />
            Fokus på tydelig budskap, rask levering og flere henvendelser.
          </p>

          <div className="mb-8 inline-block">
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 rounded-2xl px-8 py-4">
              <div className="text-sm text-cyan-400 mb-1">Prisestimat</div>
              <div className="text-3xl text-white">15 000 – 25 000 kr</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 px-8 py-6"
            >
              Få tilbud
              <ChevronRight className="ml-2" />
            </Button>
            <Button
              onClick={() => navigate('/tjenester/nettside-pris')}
              variant="outline"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6"
            >
              Se full prisguide
            </Button>
          </div>
        </motion.div>

        {/* Problem Section */}
        <section className="mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-16 text-center"
          >
            Hvorfor mange{' '}
            <span className="text-cyan-400">bedriftsnettsider</span> ikke fungerer
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-gray-400 leading-relaxed mb-6">
                Mange bedrifter har nettsider som ser greie ut, men som ikke gir den verdien de kunne.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Det handler ofte ikke om design alene, men om struktur, budskap og teknisk kvalitet.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border-cyan-500/30 backdrop-blur p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
                <div className="relative z-10 space-y-4">
                  {problems.map((problem, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mt-2 flex-shrink-0" />
                      <span className="text-gray-300">{problem}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />
              </Card>
            </motion.div>
          </div>
        </section>

        {/* What it involves Section */}
        <section className="mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-16 text-center"
          >
            Hva innebærer det å{' '}
            <span className="text-cyan-400">lage nettside for bedrift</span>?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border-cyan-500/30 backdrop-blur p-6 h-full hover:border-cyan-400 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300" />
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-cyan-400" />
                      </div>
                      <h3 className="text-xl mb-2 text-white">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-16 text-center"
          >
            Dette får du når vi{' '}
            <span className="text-cyan-400">lager nettsiden din</span>
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {deliverables.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border-cyan-500/30 backdrop-blur p-8 relative overflow-hidden group hover:border-cyan-400 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all" />
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {index < deliverables.length - 1 && (
                  <div className="flex justify-center my-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-cyan-500/50 to-transparent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-16 text-center"
          >
            Hvem <span className="text-cyan-400">passer det for</span>?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-gray-400 leading-relaxed mb-4">
                Vi lager nettsider for bedrifter som trenger en profesjonell og funksjonell nettløsning.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Enten du starter opp eller vil fornye eksisterende nettside.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border-cyan-500/30 backdrop-blur p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5" />
                <div className="relative z-10 space-y-4">
                  {targetAudience.map((audience, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300 text-lg group-hover/item:text-white transition-colors">
                        {audience}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-16 text-center"
          >
            Slik <span className="text-cyan-400">lager vi nettsiden</span>
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border-cyan-500/30 backdrop-blur p-8 relative overflow-hidden group hover:border-cyan-400 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all" />
                  <div className="relative z-10 flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400 text-lg leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-16 text-center"
          >
            Hva koster det å{' '}
            <span className="text-cyan-400">lage nettside</span>?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-cyan-500/50 backdrop-blur p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/50 rounded-full mb-6">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-cyan-400">Konkurransedyktig pris</span>
                </div>

                <div className="text-6xl md:text-7xl text-white mb-6">
                  15 000 – 25 000 kr
                </div>

                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  Prisen avhenger av omfang, antall sider og tilleggsfunksjoner.
                </p>

                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Skreddersydd design</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Mobiltilpasset</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">SEO-optimalisert</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Rask levering</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
            </Card>
          </motion.div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-16 text-center"
          >
            Hvorfor <span className="text-cyan-400">velge oss</span>?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border-cyan-500/30 backdrop-blur p-6 h-full hover:border-cyan-400 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-cyan-500/50 backdrop-blur p-16 text-center relative overflow-hidden">
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
                Klar for å lage nettside for{' '}
                <span className="text-cyan-400">bedriften din</span>?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                Fortell kort om bedriften din og hva dere trenger, så får du et konkret tilbud.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  onClick={() => navigate('/contact')}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 px-8 py-6 text-lg"
                >
                  Få tilbud innen 24 timer
                  <ChevronRight className="ml-2" />
                </Button>
                <Button
                  onClick={() => navigate('/contact')}
                  variant="outline"
                  className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg"
                >
                  Kontakt oss
                </Button>
              </div>
            </div>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}
