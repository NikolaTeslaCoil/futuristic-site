import { motion } from 'motion/react';
import { MessageCircle, HelpCircle, Sparkles, ArrowRight, Send } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Card } from './ui/card';

interface FAQPageProps {
  darkMode: boolean;
  setCurrentPage: (page: string) => void;
}

const faqSections = [
  {
    title: 'Nettside og pris',
    items: [
      {
        question: 'Hva koster det å lage nettside?',
        answer: 'Nettsider starter fra rundt 15 000 kr og de fleste prosjekter ligger mellom 15 000 og 25 000 kr. Prisen avhenger av antall sider, funksjonalitet og om det trengs spesialtilpasninger.',
      },
      {
        question: 'Hvor lang tid tar det å lage en nettside?',
        answer: 'Vanlig leveringstid er 1\u20133 uker. Tidsbruk avhenger av prosjektets st\u00f8rrelse og hvor raskt vi f\u00e5r n\u00f8dvendig informasjon fra kunden.',
      },
      {
        question: 'Hva avgj\u00f8r prisen p\u00e5 en nettside?',
        answer: 'Flere faktorer p\u00e5virker prisen:\n\n\u2022 Antall sider\n\u2022 Funksjonalitet\n\u2022 Integrasjoner\n\u2022 Innholdsproduksjon\n\u2022 Designbehov\n\nDu f\u00e5r alltid en fast pris f\u00f8r vi starter prosjektet.',
      },
    ],
  },
  {
    title: 'Prosess',
    items: [
      {
        question: 'Hvordan starter vi et prosjekt?',
        answer: 'Prosessen starter med en kort kartlegging av bedriften, m\u00e5lgruppen og hva nettsiden skal oppn\u00e5. Deretter lager vi struktur og design f\u00f8r utvikling starter.',
      },
      {
        question: 'Hva trenger dere fra meg?',
        answer: 'Vanligvis trenger vi:\n\n\u2022 Kort informasjon om bedriften\n\u2022 Eventuell eksisterende tekst eller innhold\n\u2022 Logo og visuelle elementer\n\u2022 Oversikt over tjenester eller produkter\n\nVi hjelper ogs\u00e5 med struktur hvis du er usikker.',
      },
    ],
  },
  {
    title: 'Teknisk',
    items: [
      {
        question: 'Blir nettsiden mobiltilpasset?',
        answer: 'Ja. Alle nettsider vi lager er fullt mobiltilpasset og fungerer optimalt p\u00e5 alle skjermst\u00f8rrelser.',
      },
      {
        question: 'Kan nettsiden videreutvikles senere?',
        answer: 'Ja. Nettsidene bygges slik at de enkelt kan utvides med flere sider, funksjoner eller integrasjoner.',
      },
      {
        question: 'Hjelper dere med SEO?',
        answer: 'Nettsiden bygges med riktig teknisk struktur for s\u00f8kemotorer slik at den kan rangere i Google over tid.',
      },
    ],
  },
  {
    title: 'AI og automatisering',
    items: [
      {
        question: 'Hva er en AI-assistent?',
        answer: 'En AI-assistent kan h\u00e5ndtere kundedialog, svare p\u00e5 sp\u00f8rsm\u00e5l og hjelpe med oppgaver automatisk basert p\u00e5 bedriftens informasjon.',
      },
      {
        question: 'Hvordan kan automatisering hjelpe en bedrift?',
        answer: 'Automatisering kan spare tid ved \u00e5 h\u00e5ndtere repetitive oppgaver som:\n\n\u2022 kundesupport\n\u2022 booking\n\u2022 oppf\u00f8lging\n\u2022 dataflyt mellom systemer\n\nDette gj\u00f8r at ansatte kan fokusere p\u00e5 viktigere arbeid.',
      },
      {
        question: 'Hva er forskjellen p\u00e5 ChatGPT og AI-l\u00f8sninger for bedrifter?',
        answer: 'ChatGPT er et generelt verkt\u00f8y. AI-l\u00f8sninger for bedrifter tilpasses spesifikt til bedriftens data, systemer og prosesser.',
      },
    ],
  },
  {
    title: 'Samarbeid',
    items: [
      {
        question: 'Jobber dere med bedrifter i hele Norge?',
        answer: 'Ja. Vi jobber digitalt og leverer l\u00f8sninger til bedrifter over hele landet.',
      },
      {
        question: 'Tilbyr dere oppf\u00f8lging etter lansering?',
        answer: 'Ja. Nettsider kan videreutvikles, oppdateres og optimaliseres etter behov.',
      },
    ],
  },
];

function HeroIllustration() {
  const floatingIcons = [
    { icon: HelpCircle, delay: 0, x: 60, y: -60 },
    { icon: MessageCircle, delay: 1.5, x: -70, y: 40 },
    { icon: HelpCircle, delay: 3, x: 80, y: 50 },
    { icon: Sparkles, delay: 0.8, x: -50, y: -70 },
  ];

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 border-2 border-dashed border-cyan-500/30 rounded-full"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-8 border border-cyan-400/50 rounded-full"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-28 h-28 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center relative overflow-hidden"
        >
          <HelpCircle className="w-14 h-14 text-white relative z-10" />
          <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl" />
        </motion.div>
      </div>

      {floatingIcons.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: '50%',
              left: '50%',
              marginLeft: '-16px',
              marginTop: '-16px',
            }}
            animate={{
              x: [item.x * 0.8, item.x, item.x * 0.8],
              y: [item.y * 0.8, item.y, item.y * 0.8],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: item.delay,
            }}
          >
            <div className="w-8 h-8 bg-cyan-500/20 border border-cyan-500/40 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Icon className="w-4 h-4 text-cyan-400" />
            </div>
          </motion.div>
        );
      })}

      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600"
          style={{
            top: '50%',
            left: '50%',
            marginLeft: '-6px',
            marginTop: '-6px',
          }}
          animate={{
            x: [
              Math.cos((i * Math.PI * 2) / 3) * 110,
              Math.cos(((i + 1) * Math.PI * 2) / 3) * 110,
              Math.cos((i * Math.PI * 2) / 3) * 110,
            ],
            y: [
              Math.sin((i * Math.PI * 2) / 3) * 110,
              Math.sin(((i + 1) * Math.PI * 2) / 3) * 110,
              Math.sin((i * Math.PI * 2) / 3) * 110,
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-20 rounded-full blur-3xl" />
    </div>
  );
}

export function FAQPage({ darkMode, setCurrentPage }: FAQPageProps) {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero — two-column layout matching Prosjekter */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-6"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              >
                <HelpCircle className="w-16 h-16 text-cyan-400" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-cyan-400 rounded-full"
              />
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              >
                <MessageCircle className="w-16 h-16 text-blue-400" />
              </motion.div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl mb-6 text-white">
              Vanlige <span className="text-cyan-400">sp&oslash;rsm&aring;l</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-xl mb-8">
              Her finner du svar p&aring; vanlige sp&oslash;rsm&aring;l om nettsider, priser, prosess og digitale l&oslash;sninger.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage('contact')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-shadow"
              >
                <Send className="w-4 h-4" />
                Kontakt oss
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage('services')}
                className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-6 py-3 rounded-lg font-medium hover:bg-cyan-500/10 transition-colors"
              >
                Se tjenester
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block"
          >
            <motion.div
              animate={{ y: [0, -20, 0], rotateY: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <HeroIllustration />
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-16">
          {faqSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl md:text-4xl mb-8 text-white">
                {section.title}
              </h2>

              <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-cyan-500/30 backdrop-blur overflow-hidden hover:border-cyan-400 transition-all duration-300">
                <Accordion type="single" collapsible className="w-full">
                  {section.items.map((item, itemIndex) => (
                    <AccordionItem
                      key={itemIndex}
                      value={`item-${sectionIndex}-${itemIndex}`}
                      className="border-b last:border-b-0 border-cyan-500/20"
                    >
                      <AccordionTrigger
                        className="px-6 py-5 text-left hover:no-underline text-white hover:bg-cyan-500/5 transition-colors"
                      >
                        <span className="text-lg font-medium pr-4">
                          {item.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-5 text-gray-400">
                        <div className="leading-relaxed whitespace-pre-line">
                          {item.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA — matching Services page style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
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
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>

            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl mb-4 text-white">
                Har du flere sp&oslash;rsm&aring;l?
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Ta kontakt s&aring; finner vi riktig l&oslash;sning for din bedrift.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentPage('contact')}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-shadow"
                >
                  F&aring; tilbud
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentPage('contact')}
                  className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-6 py-3 rounded-lg font-medium hover:bg-cyan-500/10 transition-colors"
                >
                  Kontakt oss
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
