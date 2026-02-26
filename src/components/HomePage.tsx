import { motion, useScroll, useTransform } from 'motion/react';
import { Shield, Lock, Brain, Server, Cpu, ChevronRight, Zap, Network, Eye, Database, Terminal } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { useRef, useState } from 'react';
import yanovaLogo from 'figma:asset/f6a544fb3b3b36514746bdcb63017562b8a62f6b.png';
import cerberusPiImage from 'figma:asset/589bd9a46597d34b4880ea3b09437a44f8b09825.png';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
  darkMode: boolean;
}

export function HomePage({ setCurrentPage, darkMode }: HomePageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNav, setHoveredNav] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Navigation items for orbiting icons
  const navigationItems = [
    { icon: Shield, title: 'Cybersecurity', action: () => setCurrentPage('services'), type: 'page' },
    { icon: Eye, title: 'Case Studies', action: () => setCurrentPage('case-studies'), type: 'page' },
    { icon: Network, title: 'Services', action: () => setCurrentPage('services'), type: 'page' },
    { icon: Server, title: 'Cerberus-PI', action: () => setCurrentPage('case-studies'), type: 'project' },
    { icon: Terminal, title: 'Yanova OS', action: () => setCurrentPage('case-studies'), type: 'project' },
    { icon: Database, title: 'Contact', action: () => setCurrentPage('contact'), type: 'page' },
  ];

  const services = [
    { icon: Shield, title: 'Cybersecurity Consulting & Auditing', color: 'cyan' },
    { icon: Network, title: 'Network Design & Installation', color: 'purple' },
    { icon: Brain, title: 'Training & Capacity Building', color: 'green' },
    { icon: Cpu, title: 'Design & Infography', color: 'orange' },
    { icon: Eye, title: 'Photography & Filmmaking', color: 'pink' },
    { icon: Server, title: 'Web & App Development', color: 'indigo' },
  ];

  const projects = [
    { name: 'Cerberus-PI', description: 'Network Intrusion Detection Device - Plug-and-play IDS for protecting small and medium-sized networks with real-time threat alerts' },
    { name: 'Yanova OS', description: 'The Defensive Cyber Operating System - Linux-hardened OS built for network defense, SOC environments, and enterprise security' },
    { name: 'Yanova VA Machine', description: 'Plug & Play Vulnerability Assessment Device - Automatic network scanning and professional security reports in minutes' },
  ];

  return (
    <div ref={containerRef} className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="container mx-auto px-4 text-center relative z-10">
          {/* 3D Navigation Hub */}
          <div className="relative w-96 h-96 mx-auto mb-12 group/hub">
            <motion.div
              className="relative w-full h-full"
              animate={{
                rotateY: hoveredNav !== null ? 0 : [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: hoveredNav !== null ? 0 : Infinity,
                ease: "linear"
              }}
            >
              {/* Central Logo Hub */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-cyan-500/30 flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => setCurrentPage('home')}
              >
                <div className="absolute inset-4 rounded-full border border-cyan-400/50" />
                <div className="absolute inset-8 rounded-full border border-blue-400/40 bg-black/50 backdrop-blur-xl" />
                
                {/* Yanova Logo - stays visible */}
                <motion.div 
                  className="relative z-10 w-32 h-32 flex items-center justify-center"
                  animate={{
                    rotateY: [0, -360],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <img 
                    src={yanovaLogo} 
                    alt="Yanova Solutions" 
                    className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(0,183,255,0.6)]"
                  />
                </motion.div>
                
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" />
              </motion.div>

              {/* Orbiting Navigation Items */}
              {navigationItems.map((navItem, index) => {
                const Icon = navItem.icon;
                const angle = (index * Math.PI * 2) / navigationItems.length;
                const radius = 170;
                const labelRadius = 240; // Position for labels further out
                
                // Calculate position for label based on angle
                const labelX = Math.cos(angle) * labelRadius;
                const labelY = Math.sin(angle) * labelRadius;
                
                // Determine text alignment based on position
                const isLeft = labelX < 0;
                const isTop = labelY < 0;
                
                return (
                  <div key={index}>
                    {/* Navigation Button */}
                    <motion.button
                      className="absolute w-16 h-16 bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-full border-2 border-cyan-400/50 flex items-center justify-center cursor-pointer group/nav overflow-hidden"
                      style={{
                        top: '50%',
                        left: '50%',
                        marginLeft: '-32px',
                        marginTop: '-32px',
                      }}
                      animate={{
                        x: [
                          Math.cos(angle) * radius,
                          Math.cos(angle + Math.PI / 12) * radius,
                          Math.cos(angle) * radius,
                        ],
                        y: [
                          Math.sin(angle) * radius,
                          Math.sin(angle + Math.PI / 12) * radius,
                          Math.sin(angle) * radius,
                        ],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.2,
                      }}
                      whileHover={{ 
                        scale: 1.3, 
                        borderColor: 'rgba(0, 183, 255, 1)',
                        boxShadow: '0 0 25px rgba(0, 183, 255, 0.8)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={navItem.action}
                      onHoverStart={() => setHoveredNav(index)}
                      onHoverEnd={() => setHoveredNav(null)}
                    >
                      {/* Hover Glow Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 rounded-full"
                        whileHover={{
                          background: 'radial-gradient(circle, rgba(0,183,255,0.3) 0%, rgba(34,211,238,0.1) 100%)'
                        }}
                      />
                      
                      <Icon className="w-7 h-7 text-cyan-400 relative z-10 group-hover/nav:scale-110 transition-transform" />
                    </motion.button>

                    {/* Floating Label - appears on hover */}
                    <motion.div
                      className="absolute pointer-events-none"
                      style={{
                        top: '50%',
                        left: '50%',
                      }}
                      animate={{
                        x: [
                          labelX + Math.cos(angle + Math.PI / 12) * 10,
                          labelX + Math.cos(angle) * 10,
                          labelX + Math.cos(angle + Math.PI / 12) * 10,
                        ],
                        y: [
                          labelY + Math.sin(angle + Math.PI / 12) * 10,
                          labelY + Math.sin(angle) * 10,
                          labelY + Math.sin(angle + Math.PI / 12) * 10,
                        ],
                        opacity: hoveredNav === index ? 1 : 0,
                        scale: hoveredNav === index ? 1 : 0.8,
                      }}
                      transition={{
                        x: { duration: 8, repeat: Infinity, ease: "linear", delay: index * 0.2 },
                        y: { duration: 8, repeat: Infinity, ease: "linear", delay: index * 0.2 },
                        opacity: { duration: 0.15 },
                        scale: { duration: 0.15 }
                      }}
                    >
                      <div 
                        className={`bg-black/95 backdrop-blur-xl border-2 border-cyan-400 px-4 py-3 rounded-xl min-w-[180px] ${
                          isLeft ? 'text-right' : 'text-left'
                        }`}
                        style={{
                          transform: isLeft ? 'translateX(-100%)' : 'translateX(0)',
                          boxShadow: '0 0 20px rgba(0, 183, 255, 0.5)'
                        }}
                      >
                        <div className="text-xs text-cyan-400/60 mb-1 tracking-wider uppercase">Navigate to</div>
                        <div className="text-lg text-cyan-400 mb-1">
                          {navItem.title}
                        </div>
                        <div className="text-xs text-gray-400 flex items-center gap-1 justify-end">
                          <span>{navItem.type === 'project' ? 'View Project' : 'Explore Page'}</span>
                          <ChevronRight className="w-3 h-3" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}

              {/* Connection Lines from center to orbiting icons */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {navigationItems.map((_, i) => {
                  const angle = (i * Math.PI * 2) / navigationItems.length;
                  const radius = 44; // Percentage for SVG
                  
                  return (
                    <motion.line
                      key={i}
                      x1="50%"
                      y1="50%"
                      x2={`${50 + Math.cos(angle) * radius}%`}
                      y2={`${50 + Math.sin(angle) * radius}%`}
                      stroke={hoveredNav === i ? "rgba(0, 183, 255, 0.8)" : "rgba(0, 183, 255, 0.2)"}
                      strokeWidth={hoveredNav === i ? "2" : "1"}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: [0, 1, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  );
                })}
              </svg>

              {/* Orbital Rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute border border-cyan-500/10 rounded-full"
                  style={{
                    top: `${10 + i * 10}%`,
                    left: `${10 + i * 10}%`,
                    right: `${10 + i * 10}%`,
                    bottom: `${10 + i * 10}%`,
                  }}
                  animate={{
                    rotate: i % 2 === 0 ? 360 : -360,
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 20 + i * 5,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    scale: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                />
              ))}
            </motion.div>

            {/* Instruction Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center"
            >
              <p className="text-sm text-cyan-400/60">Click icons to navigate</p>
            </motion.div>
          </div>

          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className={`text-5xl md:text-7xl mb-6 tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <span className={darkMode ? 'text-white' : 'text-gray-900'}>Yanova Solutions</span>
              <br />
              <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                darkMode ? 'from-cyan-400 to-blue-500' : 'from-cyan-600 to-blue-600'
              }`}>
                Securing the Future
              </span>
            </h1>
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              From cyber defense to smart infrastructure, we build digital trust.
            </p>
            <Button
              onClick={() => setCurrentPage('services')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-6 rounded-lg group"
            >
              Explore Our Innovations
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Animated Circuit Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                left: 0,
                right: 0,
              }}
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </section>

      {/* About Yanova Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              className="inline-block mb-8"
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <div className="relative">
                <Shield className="w-20 h-20 text-cyan-400" />
                <div className="absolute inset-0 bg-cyan-400 blur-2xl opacity-50" />
              </div>
            </motion.div>
            <h2 className={`text-4xl md:text-5xl mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Om <span className={darkMode ? 'text-cyan-400' : 'text-cyan-600'}>Oss</span>
            </h2>
            <p className={`text-xl leading-relaxed mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Hos Brandboost Marketing mener vi at alle bedrifter fortjener tilgang til den transformative kraften i kunstig intelligens. Vårt oppdrag er å bygge bro mellom kompleks AI-teknologi og praktiske forretningsløsninger, slik at selskaper kan automatisere prosesser, redusere kostnader og fokusere på det de gjør best.
            </p>
            <div className={`rounded-2xl p-8 mt-8 ${
              darkMode 
                ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30'
                : 'bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-600/40'
            }`}>
              <h3 className={`text-2xl mb-4 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>The Yanova Ecosystem</h3>
              <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                All Yanova products are interconnected: <span className={darkMode ? 'text-cyan-400' : 'text-cyan-600'}>Yanova VA Machine</span> identifies vulnerabilities, 
                <span className={darkMode ? 'text-cyan-400' : 'text-cyan-600'}> Cerberus-PI</span> monitors and detects intrusions, 
                <span className={darkMode ? 'text-cyan-400' : 'text-cyan-600'}> Yanova OS</span> defends, analyzes, and manages systems — 
                all controlled under the future <span className={darkMode ? 'text-cyan-400' : 'text-cyan-600'}>Yanova Cloud Control</span> platform. 
                Together, they form a complete cybersecurity ecosystem <span className={darkMode ? 'text-orange-400' : 'text-orange-600'}>built in Algeria, made for the world</span> — 
                empowering enterprises, schools, and institutions to secure their digital infrastructures independently.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-center mb-16"
          >
            Våre <span className="text-cyan-400">Tjenester</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="group"
                >
                  <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border-cyan-500/30 backdrop-blur p-6 h-full hover:border-cyan-400 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300" />
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-cyan-400" />
                      </div>
                      <h3 className="text-xl mb-2 text-white">{service.title}</h3>
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => setCurrentPage('services')}
              variant="outline"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
            >
              View All Services
              <ChevronRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-center mb-16"
          >
            Featured <span className="text-cyan-400">Innovations</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card className={`backdrop-blur p-8 relative overflow-hidden group cursor-pointer h-full ${
                  darkMode 
                    ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border-cyan-500/30' 
                    : 'bg-white/80 border-cyan-600/40 shadow-lg'
                }`}>
                  <div className={`absolute inset-0 bg-gradient-to-br transition-all duration-500 ${
                    darkMode
                      ? 'from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/20 group-hover:via-blue-500/20 group-hover:to-purple-500/20'
                      : 'from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-400/10 group-hover:via-blue-400/10 group-hover:to-purple-400/10'
                  }`} />
                  
                  <div className="relative z-10">
                    <h3 className={`text-2xl mb-3 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>{project.name}</h3>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{project.description}</p>
                  </div>
                  <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500 ${
                    darkMode ? 'bg-cyan-500/20' : 'bg-cyan-400/30'
                  }`} />
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => setCurrentPage('case-studies')}
              variant="outline"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
            >
              View All Case Studies
              <ChevronRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Flow Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-center mb-8"
          >
            The <span className="text-cyan-400">Yanova Ecosystem</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 mb-16 max-w-3xl mx-auto text-lg"
          >
            An interconnected defense system where each product works in harmony to provide complete cybersecurity coverage
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* VA Machine */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-gradient-to-br from-purple-900/30 to-black/50 border-purple-500/30 p-6 text-center relative overflow-hidden group hover:border-purple-400 transition-all">
                <div className="absolute inset-0 bg-purple-500/5 group-hover:bg-purple-500/10 transition-all" />
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl text-purple-400 mb-2">Yanova VA Machine</h3>
                  <p className="text-sm text-gray-400">Identifies vulnerabilities</p>
                </div>
              </Card>
            </motion.div>

            {/* Cerberus-PI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-cyan-900/30 to-black/50 border-cyan-500/30 p-6 text-center relative overflow-hidden group hover:border-cyan-400 transition-all">
                <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-all" />
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl text-cyan-400 mb-2">Cerberus-PI</h3>
                  <p className="text-sm text-gray-400">Monitors & detects intrusions</p>
                </div>
              </Card>
            </motion.div>

            {/* Yanova OS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-gradient-to-br from-orange-900/30 to-black/50 border-orange-500/30 p-6 text-center relative overflow-hidden group hover:border-orange-400 transition-all">
                <div className="absolute inset-0 bg-orange-500/5 group-hover:bg-orange-500/10 transition-all" />
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                    <Terminal className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl text-orange-400 mb-2">Yanova OS</h3>
                  <p className="text-sm text-gray-400">Defends, analyzes & manages</p>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Cloud Control - Coming Soon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-cyan-500/50 p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-orange-500/10" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/50 rounded-full mb-4">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-cyan-400">Coming Soon</span>
                </div>
                <h3 className="text-2xl mb-3 text-white">
                  <span className="text-cyan-400">Yanova Cloud Control</span>
                </h3>
                <p className="text-gray-400">
                  Unified platform to manage all your Yanova security nodes from a single dashboard. 
                  Monitor vulnerabilities, intrusion alerts, and system health across your entire infrastructure.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <h2 className="text-4xl md:text-6xl mb-6 text-white">
            Er det på tide med et <span className="text-cyan-400">enklere</span> system?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Vi hjelper bedrifter som din med å håndtere henvendelser lettere og raskere.
          </p>
          <Button
            onClick={() => setCurrentPage('contact')}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-6 rounded-lg"
          >
            Get In Touch
            <ChevronRight className="ml-2" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
