import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

interface FAQPageProps {
  darkMode: boolean;
}

export function FAQPage({ darkMode }: FAQPageProps) {
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
          answer: 'Vanlig leveringstid er 1–3 uker. Tidsbruk avhenger av prosjektets størrelse og hvor raskt vi får nødvendig informasjon fra kunden.',
        },
        {
          question: 'Hva avgjør prisen på en nettside?',
          answer: 'Flere faktorer påvirker prisen:\n\n• Antall sider\n• Funksjonalitet\n• Integrasjoner\n• Innholdsproduksjon\n• Designbehov\n\nDu får alltid en fast pris før vi starter prosjektet.',
        },
      ],
    },
    {
      title: 'Prosess',
      items: [
        {
          question: 'Hvordan starter vi et prosjekt?',
          answer: 'Prosessen starter med en kort kartlegging av bedriften, målgruppen og hva nettsiden skal oppnå. Deretter lager vi struktur og design før utvikling starter.',
        },
        {
          question: 'Hva trenger dere fra meg?',
          answer: 'Vanligvis trenger vi:\n\n• Kort informasjon om bedriften\n• Eventuell eksisterende tekst eller innhold\n• Logo og visuelle elementer\n• Oversikt over tjenester eller produkter\n\nVi hjelper også med struktur hvis du er usikker.',
        },
      ],
    },
    {
      title: 'Teknisk',
      items: [
        {
          question: 'Blir nettsiden mobiltilpasset?',
          answer: 'Ja. Alle nettsider vi lager er fullt mobiltilpasset og fungerer optimalt på alle skjermstørrelser.',
        },
        {
          question: 'Kan nettsiden videreutvikles senere?',
          answer: 'Ja. Nettsidene bygges slik at de enkelt kan utvides med flere sider, funksjoner eller integrasjoner.',
        },
        {
          question: 'Hjelper dere med SEO?',
          answer: 'Nettsiden bygges med riktig teknisk struktur for søkemotorer slik at den kan rangere i Google over tid.',
        },
      ],
    },
    {
      title: 'AI og automatisering',
      items: [
        {
          question: 'Hva er en AI-assistent?',
          answer: 'En AI-assistent kan håndtere kundedialog, svare på spørsmål og hjelpe med oppgaver automatisk basert på bedriftens informasjon.',
        },
        {
          question: 'Hvordan kan automatisering hjelpe en bedrift?',
          answer: 'Automatisering kan spare tid ved å håndtere repetitive oppgaver som:\n\n• kundesupport\n• booking\n• oppfølging\n• dataflyt mellom systemer\n\nDette gjør at ansatte kan fokusere på viktigere arbeid.',
        },
        {
          question: 'Hva er forskjellen på ChatGPT og AI-løsninger for bedrifter?',
          answer: 'ChatGPT er et generelt verktøy. AI-løsninger for bedrifter tilpasses spesifikt til bedriftens data, systemer og prosesser.',
        },
      ],
    },
    {
      title: 'Samarbeid',
      items: [
        {
          question: 'Jobber dere med bedrifter i hele Norge?',
          answer: 'Ja. Vi jobber digitalt og leverer løsninger til bedrifter over hele landet.',
        },
        {
          question: 'Tilbyr dere oppfølging etter lansering?',
          answer: 'Ja. Nettsider kan videreutvikles, oppdateres og optimaliseres etter behov.',
        },
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-5xl md:text-6xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Vanlige spørsmål
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`text-xl md:text-2xl ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Her finner du svar på vanlige spørsmål om nettsider, priser, prosess og digitale løsninger.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {faqSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              >
                <h2
                  className={`text-3xl md:text-4xl font-bold mb-8 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {section.title}
                </h2>

                <div
                  className={`rounded-2xl border backdrop-blur-sm overflow-hidden ${
                    darkMode
                      ? 'bg-gray-900/50 border-cyan-500/30'
                      : 'bg-white/50 border-cyan-600/30'
                  }`}
                  style={{
                    boxShadow: darkMode
                      ? '0 0 30px rgba(0, 183, 255, 0.1)'
                      : '0 0 30px rgba(0, 183, 255, 0.05)',
                  }}
                >
                  <Accordion type="single" collapsible className="w-full">
                    {section.items.map((item, itemIndex) => (
                      <AccordionItem
                        key={itemIndex}
                        value={`item-${sectionIndex}-${itemIndex}`}
                        className={`border-b last:border-b-0 ${
                          darkMode
                            ? 'border-cyan-500/20'
                            : 'border-cyan-600/20'
                        }`}
                      >
                        <AccordionTrigger
                          className={`px-6 py-5 text-left hover:no-underline transition-colors ${
                            darkMode
                              ? 'text-white hover:bg-cyan-500/5'
                              : 'text-gray-900 hover:bg-cyan-600/5'
                          }`}
                        >
                          <span className="text-lg font-medium pr-4">
                            {item.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent
                          className={`px-6 pb-5 ${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}
                        >
                          <div className="leading-relaxed whitespace-pre-line">
                            {item.answer}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div
              className={`rounded-2xl border backdrop-blur-sm p-12 ${
                darkMode
                  ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30'
                  : 'bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-600/30'
              }`}
              style={{
                boxShadow: darkMode
                  ? '0 0 40px rgba(0, 183, 255, 0.15)'
                  : '0 0 40px rgba(0, 183, 255, 0.1)',
              }}
            >
              <h2
                className={`text-3xl md:text-4xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Fant du ikke svaret?
              </h2>
              <p
                className={`text-lg mb-8 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Ta kontakt med oss, så hjelper vi deg gjerne videre.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
