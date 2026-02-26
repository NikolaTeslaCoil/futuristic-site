import { motion } from 'motion/react';
import { Mail, MapPin, Clock } from 'lucide-react';
import brandboostMark from '../assets/brandboost-mark.png';

interface FooterProps {
  setCurrentPage: (page: string) => void;
  darkMode: boolean;
}

export function Footer({ setCurrentPage, darkMode }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { label: 'Tjenester', page: 'services' },
    { label: 'Prosjekter', page: 'case-studies' },
    { label: 'Kontakt', page: 'contact' },
  ];

  const legalLinks = [
    { label: 'Personvern', page: 'privacy' },
    { label: 'Informasjonskapsler', page: 'cookies' },
  ];

  return (
    <footer className="relative mt-20">
      <div className="container mx-auto px-4 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`rounded-3xl p-12 relative overflow-hidden ${
            darkMode
              ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-cyan-500/30'
              : 'bg-gradient-to-br from-gray-50 to-white border border-cyan-600/20 shadow-xl'
          }`}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <motion.img
                  src={brandboostMark}
                  alt="Brandboost Marketing"
                  className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(0,183,255,0.5)]"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Brandboost Marketing
                </h3>
              </div>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Vi utvikler moderne nettsider, automatiserer prosesser og bygger AI-løsninger som skaper målbar vekst
                for bedrifter.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className={`font-semibold mb-4 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>Tjenester</h4>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.page}>
                    <button
                      onClick={() => setCurrentPage(link.page)}
                      className={`text-sm hover:text-cyan-400 transition-colors ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className={`font-semibold mb-4 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>Kontakt</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Mail className={`w-4 h-4 mt-0.5 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                  <a
                    href="mailto:kontakt@dittdomene.no"
                    className={`text-sm hover:text-cyan-400 transition-colors ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    post@brandboostmarketing.no
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className={`w-4 h-4 mt-0.5 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Eikenga 25,0579 Oslo</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className={`w-4 h-4 mt-0.5 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Svar innen 24–48 timer
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className={`font-semibold mb-4 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>Juridisk</h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.page}>
                    <button
                      onClick={() => setCurrentPage(link.page)}
                      className={`text-sm hover:text-cyan-400 transition-colors ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
                <li>
                  <a
                    href="/sitemap.xml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm hover:text-cyan-400 transition-colors ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    Sidekart
                  </a>
                </li>
              </ul>
              <div className={`text-xs mt-6 pt-4 border-t ${darkMode ? 'border-cyan-500/20 text-gray-500' : 'border-gray-300 text-gray-500'}`}>
              
              </div>
            </div>
          </div>

          <div className={`pt-8 border-t ${darkMode ? 'border-cyan-500/20' : 'border-gray-300'} text-center`}>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © {currentYear} Brandboost Marketing. Alle rettigheter forbeholdt.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
