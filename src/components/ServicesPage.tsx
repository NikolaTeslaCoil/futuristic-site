import { motion } from 'motion/react';
import {
  Shield,
  Zap,
  Brain,
  Network,
  Camera,
  Code,
  Sparkles,
  Globe,
  TrendingUp,
} from 'lucide-react';
import { Card } from './ui/card';

interface ServicesPageProps {
  darkMode: boolean;
}

export function ServicesPage({ darkMode }: ServicesPageProps) {
  const services = [
    {
      icon: Code,
      title: 'Nettside- og appdesign',
      description:
        'Moderne, raske og brukervennlige nettsider og apper som bygger tillit, skaper tydelighet og leverer resultater.',
      features: [
        'Design som speiler merkevaren din',
        'Mobiltilpasset og responsivt (alle skjermstørrelser)',
        'Struktur for konvertering og lead capture',
        'Tydelige brukerreiser og CTA-er',
        'Levering med rask iterasjon og høy kvalitet',
      ],
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Network,
      title: 'Automatisering av arbeidsprosesser',
      description:
        'Vi effektiviserer drift ved å koble systemer, eliminere manuelt arbeid og sikre flyt mellom verktøyene dere allerede bruker.',
      features: [
        'Kartlegging av prosesser og flaskehalser',
        'Automatiserte arbeidsflyter på tvers av systemer',
        'Varsler, oppgaver og oppfølging uten friksjon',
        'Datakvalitet og struktur (mindre feil, mer kontroll)',
        'Trygg utrulling og dokumentasjon',
      ],
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: Brain,
      title: 'AI-drevne assistenter',
      description:
        'Smarte assistenter som håndterer henvendelser, kvalifiserer leads og forbedrer dialogen med kunder og ansatte — 24/7.',
      features: [
        'Chatassistenter for kundeservice og salg',
        'Kunnskapsbase og svar fra interne dokumenter',
        'Lead-kvalifisering og booking av møter',
        'Tilpasning til tone, språk og brand',
        'Måling og kontinuerlig forbedring',
      ],
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: TrendingUp,
      title: 'Konverteringsoptimalisering',
      description:
        'Vi forbedrer budskap, struktur og brukeropplevelse slik at flere besøk blir til henvendelser, møter og kunder.',
      features: [
        'Gjennomgang av brukerreise og friksjonspunkter',
        'Bedre struktur, hierarki og budskap',
        'Optimalisering av skjemaer og CTA-er',
        'Hastighet og teknisk kvalitet',
        'Måleplan og forbedringsforslag',
      ],
      gradient: 'from-orange-500 to-red-600',
    },
    {
      icon: Camera,
      title: 'Foto- og videoinnhold',
      description:
        'Profesjonelt visuelt innhold som løfter nettsiden og markedsføringen — uten å ta fokus fra kjerneleveransen.',
      features: [
        'Portrett og bedriftsfoto',
        'Enkle promo- og presentasjonsvideoer',
        'Innhold til nettside og kampanjer',
        'Klipp og etterarbeid',
        'Levering tilpasset format og plattform',
      ],
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      icon: Shield,
      title: 'Digital strategi & struktur',
      description:
        'Vi hjelper dere å velge riktig retning og bygge et solid digitalt fundament — med klare prioriteringer og en plan som kan gjennomføres.',
      features: [
        'Behovskartlegging og målsetting',
        'Informasjonsarkitektur og innholdsstruktur',
        'Valg av løsning og implementeringsplan',
        'Samarbeid med eksisterende team/leverandører',
        'Roadmap for videre utvikling',
      ],
      gradient: 'from-indigo-500 to-blue-600',
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-6"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <div className="relative w-20 h-20">
              <div
                className="absolute inset-0 border-2 border-cyan-500/30 rounded-lg"
                style={{ transform: 'rotate(45deg)' }}
              />
              <div
                className="absolute inset-2 border border-cyan-400/50 rounded-lg"
                style={{ transform: 'rotate(45deg)' }}
              />
              <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-cyan-400" />
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl mb-6 text-white">
            Våre <span className="text-cyan-400">tjenester</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Helhetlige digitale løsninger som kombinerer design, automatisering og AI — bygget for
            effektiv drift og målbare resultater.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: 0.2 }}
              >
                <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border-cyan-500/30 backdrop-blur overflow-hidden group hover:border-cyan-400 transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                    {/* Icon and Title Side */}
                    <div className={`flex flex-col justify-center ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                      <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="mb-6">
                        <div
                          className={`w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center relative`}
                        >
                          <Icon className="w-12 h-12 text-white relative z-10" />
                          <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl group-hover:scale-150 transition-transform duration-500" />
                        </div>
                      </motion.div>

                      <h2 className="text-3xl md:text-4xl mb-4 text-white">{service.title}</h2>
                      <p className="text-gray-400 text-lg leading-relaxed">{service.description}</p>

                      {/* Animated Decoration */}
                      <div className="mt-6 relative h-1 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${service.gradient}`}
                          initial={{ x: '-100%' }}
                          whileInView={{ x: '100%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: 'easeInOut' }}
                        />
                      </div>
                    </div>

                    {/* Features Side */}
                    <div className={`flex flex-col justify-center ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                      <div className="space-y-4">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * featureIndex }}
                            className="flex items-center gap-3 group/feature"
                          >
                            <div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} group-hover/feature:scale-150 transition-transform`}
                            />
                            <span className="text-gray-300 group-hover/feature:text-white transition-colors">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* 3D-like Floating Element */}
                      <motion.div
                        className="mt-8 relative"
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: index * 0.3,
                        }}
                      >
                        <div className={`w-full h-32 bg-gradient-to-br ${service.gradient} opacity-10 rounded-lg blur-xl`} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Background Glow Effect */}
                  <div
                    className={`absolute -bottom-20 ${isEven ? '-left-20' : '-right-20'} w-64 h-64 bg-gradient-to-br ${service.gradient} opacity-20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700`}
                  />
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
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

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl mb-4 text-white">Trenger du en skreddersydd løsning?</h2>
              <p className="text-gray-400 text-lg mb-6">
                Fortell kort hva du ønsker å oppnå, så finner vi en smart og effektiv vei videre.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Globe className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400">kontakt@dittdomene.no</span>
              </div>
              <p className="text-gray-500 text-sm mt-4">
                (Bytt e-postadressen over til din egen.)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
