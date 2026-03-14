import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { CircleCheck as CheckCircle2, ChevronRight, Layers, Paintbrush, Puzzle, FileText, Link2, Wrench, X } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

interface NettsidePrisPageProps {
  darkMode: boolean;
}

function HeroVisual() {
  const cards = [
    { label: 'Enkel nettside', price: 'Fra 15 000 kr', delay: 0 },
    { label: 'Standard', price: '20 000 – 25 000 kr', delay: 0.3 },
    { label: 'Tilpasset', price: 'Pris etter behov', delay: 0.6 },
  ];

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/10 rounded-3xl blur-3xl" />

      <div className="relative space-y-3">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: card.delay + 0.5, duration: 0.6 }}
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.4,
              }}
            >
              <div className="bg-gradient-to-br from-gray-900/90 to-black/90 border border-cyan-500/30 rounded-xl px-5 py-4 backdrop-blur flex items-center justify-between group hover:border-cyan-400/60 transition-all duration-300">
                <span className="text-gray-400 text-sm">{card.label}</span>
                <span className="text-cyan-400 font-medium text-sm">{card.price}</span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full"
        animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-3 -left-3 w-5 h-5 bg-cyan-400/50 rounded-full"
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />
    </div>
  );
}

const factorCards = [
  {
    icon: Layers,
    title: 'Antall sider',
    text: 'Jo flere sider nettsiden har, desto mer arbeid kreves med design og struktur.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Paintbrush,
    title: 'Designniv\u00e5',
    text: 'Skreddersydd design tar mer tid enn en enkel standardl\u00f8sning.',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Puzzle,
    title: 'Funksjoner',
    text: 'Booking, integrasjoner, kundedialog eller automatisering p\u00e5virker prisen.',
    gradient: 'from-cyan-600 to-blue-500',
  },
  {
    icon: FileText,
    title: 'Innhold',
    text: 'Tekst, bilder og strukturering av innhold kan v\u00e6re en viktig del av prosjektet.',
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    icon: Link2,
    title: 'Integrasjoner',
    text: 'CRM-systemer, betalingsl\u00f8sninger eller API-integrasjoner \u00f8ker kompleksiteten.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Wrench,
    title: 'Tilpasninger',
    text: 'Spesialfunksjoner eller unike l\u00f8sninger krever ekstra utvikling.',
    gradient: 'from-blue-500 to-cyan-600',
  },
];

const pricingCards = [
  {
    title: 'Enkel bedriftsnettside',
    price: 'Fra 15\u202f000 kr',
    text: 'Passer for mindre bedrifter som trenger en profesjonell og tydelig nettside.',
    highlight: false,
  },
  {
    title: 'Standard bedriftsnettside',
    price: '20\u202f000 \u2013 25\u202f000 kr',
    text: 'Den vanligste l\u00f8sningen for bedrifter som vil ha flere seksjoner og bedre struktur for henvendelser.',
    highlight: true,
  },
  {
    title: 'Mer tilpasset l\u00f8sning',
    price: 'Pris etter behov',
    text: 'For prosjekter som krever flere funksjoner, integrasjoner eller spesialtilpasninger.',
    highlight: false,
  },
];

const included = [
  'Skreddersydd design',
  'Mobiltilpasset l\u00f8sning',
  'Rask lastetid',
  'Struktur for konvertering',
  'Grunnleggende SEO-struktur',
  'Enkelt \u00e5 videreutvikle',
];

const cheapPoints = [
  'Standard mal',
  'Lite struktur',
  'F\u00e5 henvendelser',
  'Vanskelig \u00e5 videreutvikle',
];

const proPoints = [
  'Design som bygger tillit',
  'Struktur for henvendelser',
  'Mobiloptimalisert',
  'Bygget for vekst',
];

const steps = [
  {
    number: '1',
    title: 'Kartlegging',
    description: 'Vi ser p\u00e5 behov, m\u00e5lgruppe og hva nettsiden skal oppn\u00e5.',
  },
  {
    number: '2',
    title: 'Struktur og design',
    description: 'Vi lager en l\u00f8sning som passer bedriften og gj\u00f8r det enkelt for kunder \u00e5 ta kontakt.',
  },
  {
    number: '3',
    title: 'Utvikling og lansering',
    description: 'Nettsiden bygges, testes og lanseres.',
  },
];

export function NettsidePrisPage({ darkMode }: NettsidePrisPageProps) {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">

        {/* HERO */}
        <div className="relative py-20 md:py-28 mb-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <div
              style={{
                width: '720px',
                height: '480px',
                background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.12) 0%, rgba(6,182,212,0.04) 50%, transparent 75%)',
                filter: 'blur(40px)',
              }}
            />
          </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex flex-col items-center text-center gap-6 mx-auto max-w-2xl"
        >
          <span className="text-sm font-medium tracking-widest text-cyan-400 uppercase">
            Nettside pris
          </span>

          <h1 className="text-4xl md:text-5xl text-white leading-tight">
            Hva koster en nettside for bedrift?
          </h1>

          <p className="text-lg text-gray-400 leading-relaxed">
            De fleste bedriftsnettsider ligger mellom 15&nbsp;000 og 25&nbsp;000 kr, avhengig av omfang, funksjoner og behov.
          </p>

          <p className="text-base text-gray-500 leading-relaxed">
            Vi bygger moderne nettsider med tydelig struktur, rask levering og fokus p&aring; henvendelser.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 px-8 py-6"
            >
              F&aring; tilbud
              <ChevronRight className="ml-2" />
            </Button>
            <Button
              onClick={() => navigate('/tjenester/lage-nettside-bedrift')}
              variant="outline"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6"
            >
              Se hvordan vi bygger nettsider
            </Button>
          </div>
        </motion.div>
        </div>
        {/* HeroVisual available for reuse: <HeroVisual /> */}

        {/* SECTION 1 — Factors */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              Hva p&aring;virker{' '}
              <span className="text-cyan-400">prisen p&aring; en nettside?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Prisen p&aring; en nettside varierer basert p&aring; flere faktorer. Det viktigste er hvor
              omfattende l&oslash;sningen skal v&aelig;re og hvilke funksjoner som trengs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {factorCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border-cyan-500/30 backdrop-blur p-8 relative overflow-hidden group hover:border-cyan-400 transition-all duration-300 h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all" />
                    <div className="relative z-10">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-5`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl text-white mb-3">{card.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{card.text}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* SECTION 2 — Pricing Cards */}
        <section className="pt-20 md:pt-28 mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl mb-8 text-white">
              Vanlig pris p&aring;{' '}
              <span className="text-cyan-400">nettside for bedrift</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              De fleste sm&aring; og mellomstore bedrifter trenger en nettside som er tydelig, rask og
              mobiltilpasset.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card
                  className={`backdrop-blur p-8 relative overflow-hidden group transition-all duration-300 h-full flex flex-col ${
                    card.highlight
                      ? 'bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border-cyan-400/60 hover:border-cyan-300'
                      : 'bg-gradient-to-br from-gray-900/50 to-black/50 border-cyan-500/30 hover:border-cyan-400'
                  }`}
                >
                  {card.highlight && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-t-xl" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all" />
                  <div className="relative z-10 flex flex-col flex-1">
                    <h3 className="text-xl text-white mb-4">{card.title}</h3>
                    <div className="text-3xl text-cyan-400 mb-5">{card.price}</div>
                    <p className="text-gray-400 leading-relaxed flex-1">{card.text}</p>
                    {card.highlight && (
                      <div className="mt-6 inline-flex items-center gap-2 text-xs text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-3 py-1 w-fit">
                        Mest vanlig
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 3 — What's included */}
        <section className="pt-20 md:pt-28 mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl mb-8 text-white">
              Hva er inkludert i en{' '}
              <span className="text-cyan-400">profesjonell nettside?</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-cyan-500/30 backdrop-blur p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-transparent" />
              <div className="relative z-10 grid sm:grid-cols-2 gap-4">
                {included.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 group/item"
                  >
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300 text-lg group-hover/item:text-white transition-colors">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* SECTION 4 — Comparison */}
        <section className="pt-20 md:pt-28 mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl mb-8 text-white">
              Billig nettside vs{' '}
              <span className="text-cyan-400">profesjonell nettside</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-gray-700/50 to-gray-900/60 border-gray-600/40 backdrop-blur p-8 h-full">
                <h3 className="text-2xl text-white mb-6 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-gray-400" />
                  Billig l&oslash;sning
                </h3>
                <div className="space-y-4">
                  {cheapPoints.map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <X className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-300">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border-cyan-500/40 backdrop-blur p-8 h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-t-xl" />
                <h3 className="text-2xl text-white mb-6 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-cyan-400" />
                  Profesjonell l&oslash;sning
                </h3>
                <div className="space-y-4">
                  {proPoints.map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* SECTION 5 — Steps */}
        <section className="pt-20 md:pt-28 mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl mb-8 text-white">
              Hvordan f&aring;{' '}
              <span className="text-cyan-400">riktig pris p&aring; nettside?</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {steps.map((step, index) => (
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

        {/* FINAL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-20 md:pt-28"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0"
                  animate={{
                    background: [
                      `radial-gradient(circle at ${20 + i * 30}% ${20 + i * 30}%, rgba(0, 183, 255, 0.3) 0%, transparent 50%)`,
                      `radial-gradient(circle at ${80 - i * 30}% ${80 - i * 30}%, rgba(0, 183, 255, 0.3) 0%, transparent 50%)`,
                      `radial-gradient(circle at ${20 + i * 30}% ${20 + i * 30}%, rgba(0, 183, 255, 0.3) 0%, transparent 50%)`,
                    ],
                  }}
                  transition={{ duration: 10, repeat: Infinity, delay: i * 0.5 }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl mb-4 text-white">
                Klar for &aring; finne riktig l&oslash;sning for nettsiden din?
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Fortell litt om bedriften din og hva du trenger, s&aring; f&aring;r du et konkret tilbud.
              </p>
              <Button
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 px-10 py-6 text-lg"
              >
                F&aring; tilbud
                <ChevronRight className="ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
