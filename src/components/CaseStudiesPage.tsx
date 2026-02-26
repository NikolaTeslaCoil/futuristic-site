import { motion } from 'motion/react';
import { Shield, Cpu, Server, Database, Terminal, Network, Lock, Eye, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import cerberusPiImage from "../assets/f6a544fb3b3b36514746bdcb63017562b8a62f6b.png";

interface CaseStudiesPageProps {
  darkMode: boolean;
}

export function CaseStudiesPage({ darkMode }: CaseStudiesPageProps) {
  const caseStudies = [
  {
    id: 1,
    title: 'Intelligent Kundeassistent',
    subtitle: 'AI-basert automatisering av kundedialog',
    description: 'Et helautomatisert kundesystem som håndterer dialog, kvalifisering av leads, booking og oppfølging. Løsningen reduserer responstid, eliminerer manuelle prosesser og øker konverteringsgrad.',
    icon: Terminal,
    technologies: ['AI-dialogmotor', 'Automatiserte arbeidsflyter', 'CRM-integrasjon', 'API-tilkoblinger', 'Egendefinert dashboard'],
    features: [
      '24/7 automatisk kundekommunikasjon',
      'Intelligent kvalifisering av henvendelser',
      'Automatisk møtebooking',
      'Sanntidssynkronisering av data',
      'Eskalering til menneskelig support ved behov',
      'Analyse og ytelsesmåling'
    ],
    gradient: 'from-orange-500 to-red-600',
    year: '2024'
  },
  {
    id: 2,
    title: 'Forretningsautomatisering',
    subtitle: 'Effektivisering av interne prosesser',
    description: 'Skreddersydd automasjon som kobler sammen systemer, økonomiverktøy og kundedata for å redusere manuelt arbeid og forbedre operasjonell effektivitet.',
    icon: Shield,
    technologies: ['API-integrasjoner', 'Arbeidsflyt-automatisering', 'Datasynkronisering', 'Sikker skyløsning', 'Overvåking og logging'],
    features: [
      'Automatisert fakturaflyt',
      'Godkjenningsprosesser internt',
      'Automatisk datavalidering',
      'Feildeteksjon og gjenoppretting',
      'Sanntidsrapportering',
      'Tilgangsstyring'
    ],
    gradient: 'from-cyan-500 to-blue-600',
    year: '2024'
  },
  {
    id: 3,
    title: 'Moderne Webplattform',
    subtitle: 'Skalerbar nettside- og appløsning',
    description: 'En høyytelses webplattform utviklet for konvertering, hastighet og skalerbarhet. Bygget med moderne arkitektur og sikker distribusjon.',
    icon: Eye,
    technologies: ['Moderne frontend-rammeverk', 'Sikre backend-APIer', 'Ytelsesoptimalisering', 'Skydeploy', 'Analyseverktøy'],
    features: [
      'Konverteringsoptimalisert design',
      'Rask lastetid',
      'Sikker autentisering',
      'Modulbasert innholdssystem',
      'SEO-optimalisering',
      'Skalerbar hosting'
    ],
    gradient: 'from-purple-500 to-pink-600',
    year: '2024'
  },
  {
    id: 4,
    title: 'Digital Kontrollplattform',
    subtitle: 'Sentralisert oversikt og styring',
    description: 'En samlet kontrollplattform som gir ledelsen innsikt i nøkkeltall, kundedata og operasjonell status – alt i ett sikkert dashboard.',
    icon: Database,
    technologies: ['Datainnsamling', 'Automatiserte triggere', 'Dashboard UI', 'Sikker databehandling', 'Varslingssystem'],
    features: [
      'Sanntidsovervåking av KPIer',
      'Automatiske varsler',
      'Datadrevet beslutningsstøtte',
      'Ledelsesrapportering',
      'Flere brukernivåer',
      'Revisjonsspor og sikker logging'
    ],
    gradient: 'from-green-500 to-emerald-600',
    year: '2024'
  }
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
            className="inline-flex items-center gap-3 mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <Network className="w-16 h-16 text-cyan-400" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-cyan-400 rounded-full"
            />
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Lock className="w-16 h-16 text-blue-400" />
            </motion.div>
          </motion.div>
          <h1 className="text-5xl md:text-7xl mb-6 text-white">
            Case <span className="text-cyan-400">Studies</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our portfolio of cutting-edge cybersecurity innovations and solutions deployed for real-world defense scenarios.
          </p>
        </motion.div>

        {/* 3D Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-purple-500/50" />

          {/* Case Studies */}
          <div className="space-y-32">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className={`md:grid md:grid-cols-2 gap-8 items-center ${!isLeft ? 'md:flex-row-reverse' : ''}`}>
                    {/* Content Card */}
                    <div className={isLeft ? 'md:pr-16' : 'md:pl-16 md:col-start-2'}>
                      <motion.div
                        whileHover={{ scale: 1.02, rotateY: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-cyan-500/30 backdrop-blur overflow-hidden group hover:border-cyan-400 transition-all duration-300">
                          <div className="p-8">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-6">
                              <div className="flex-1">
                                <Badge className={`bg-gradient-to-r ${study.gradient} border-0 mb-3`}>
                                  {study.year}
                                </Badge>
                                <h2 className="text-3xl mb-2 text-white">{study.title}</h2>
                                <p className="text-cyan-400 text-lg">{study.subtitle}</p>
                              </div>
                              <motion.div
                                whileHover={{ rotate: 360, scale: 1.2 }}
                                transition={{ duration: 0.6 }}
                                className="ml-4"
                              >
                                <div className={`w-16 h-16 bg-gradient-to-br ${study.gradient} rounded-xl flex items-center justify-center`}>
                                  <Icon className="w-8 h-8 text-white" />
                                </div>
                              </motion.div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-400 mb-6 leading-relaxed">
                              {study.description}
                            </p>

                            {/* Technologies */}
                            <div className="mb-6">
                              <h4 className="text-sm text-gray-500 mb-3">Technologies Used</h4>
                              <div className="flex flex-wrap gap-2">
                                {study.technologies.map((tech, techIndex) => (
                                  <motion.span
                                    key={techIndex}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: techIndex * 0.1 }}
                                    className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400"
                                  >
                                    {tech}
                                  </motion.span>
                                ))}
                              </div>
                            </div>

                            {/* Features */}
                            <div>
                              <h4 className="text-sm text-gray-500 mb-3">Key Features</h4>
                              <div className="space-y-2">
                                {study.features.map((feature, featureIndex) => (
                                  <motion.div
                                    key={featureIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: featureIndex * 0.1 }}
                                    className="flex items-center gap-2 text-gray-300"
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                    <span className="text-sm">{feature}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Animated Background */}
                          <div className={`absolute -bottom-20 ${isLeft ? '-right-20' : '-left-20'} w-64 h-64 bg-gradient-to-br ${study.gradient} opacity-20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700`} />
                        </Card>
                      </motion.div>
                    </div>

                    {/* 3D Visualization Side */}
                    <div className={`hidden md:block ${isLeft ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'} ${isLeft ? 'md:pl-16' : 'md:pr-16'}`}>
                      <motion.div
                        animate={{
                          y: [0, -20, 0],
                          rotateY: [0, 10, 0],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5
                        }}
                        className="relative"
                      >
                        {/* 3D Holographic Effect */}
                        <div className="relative w-full aspect-square">
                          {/* Outer Ring */}
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className={`absolute inset-0 border-2 border-dashed ${study.gradient.includes('cyan') ? 'border-cyan-500/30' : study.gradient.includes('purple') ? 'border-purple-500/30' : study.gradient.includes('green') ? 'border-green-500/30' : 'border-orange-500/30'} rounded-full`}
                          />
                          
                          {/* Middle Ring */}
                          <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className={`absolute inset-8 border ${study.gradient.includes('cyan') ? 'border-cyan-400/50' : study.gradient.includes('purple') ? 'border-purple-400/50' : study.gradient.includes('green') ? 'border-green-400/50' : 'border-orange-400/50'} rounded-full`}
                          />

                          {/* Center Icon or Image */}
<div className="absolute inset-0 flex items-center justify-center">
  <motion.div
    animate={{ rotate: [0, 360] }}
    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    className={`w-32 h-32 bg-gradient-to-br ${study.gradient} rounded-2xl flex items-center justify-center relative overflow-hidden`}
  >
    <Icon className="w-16 h-16 text-white relative z-10" />
    <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl" />
  </motion.div>
</div> 
                                  src={cerberusPiImage} 
                                  alt="Cerberus-PI Device" 
                                  className="w-full h-full object-cover rounded-2xl relative z-10"
                                  style={{ filter: 'drop-shadow(0 0 10px rgba(0, 183, 255, 0.6))' }}
                                />
                              ) : (
                                <Icon className="w-16 h-16 text-white relative z-10" />
                              )}
                              <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl" />
                            </motion.div>
                          </div>

                          {/* Orbiting Elements */}
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className={`absolute w-4 h-4 rounded-full bg-gradient-to-br ${study.gradient}`}
                              style={{
                                top: '50%',
                                left: '50%',
                                marginLeft: '-8px',
                                marginTop: '-8px',
                              }}
                              animate={{
                                x: [
                                  Math.cos((i * Math.PI * 2) / 3) * 120,
                                  Math.cos(((i + 1) * Math.PI * 2) / 3) * 120,
                                  Math.cos((i * Math.PI * 2) / 3) * 120,
                                ],
                                y: [
                                  Math.sin((i * Math.PI * 2) / 3) * 120,
                                  Math.sin(((i + 1) * Math.PI * 2) / 3) * 120,
                                  Math.sin((i * Math.PI * 2) / 3) * 120,
                                ],
                              }}
                              transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "linear",
                                delay: i * 0.5,
                              }}
                            />
                          ))}

                          {/* Glow Effect */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-20 rounded-full blur-3xl`} />
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className={`w-6 h-6 bg-gradient-to-br ${study.gradient} rounded-full border-4 border-black`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} rounded-full blur-lg animate-pulse`} />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl mb-4 text-white">
                Interested in Our Solutions?
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                Discover how Yanova's innovations can protect and enhance your infrastructure.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 text-cyan-400 cursor-pointer"
              >
                <span>Contact Our Team</span>
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </div>
            
            {/* Animated Particles */}
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
          </div>
        </motion.div>
      </div>
    </div>
  );
}
