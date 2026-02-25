import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Menu, X, Shield, Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import yanovaLogo from 'figma:asset/f6a544fb3b3b36514746bdcb63017562b8a62f6b.png';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

export function Navigation({ currentPage, setCurrentPage, darkMode, setDarkMode }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b ${
          darkMode 
            ? 'bg-black/80 border-cyan-500/30' 
            : 'bg-white/80 border-cyan-600/40'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => setCurrentPage('home')}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-10 h-10">
                <img 
                  src={yanovaLogo} 
                  alt="Yanova Solutions" 
                  className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(0,183,255,0.5)]"
                />
              </div>
              <div>
                <div className={darkMode ? 'tracking-wider text-cyan-400' : 'tracking-wider text-cyan-600'}>YANOVA</div>
                <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Solutions</div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className="relative group"
                >
                  <span className={`transition-colors ${
                    currentPage === item.id 
                      ? (darkMode ? 'text-cyan-400' : 'text-cyan-600')
                      : (darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900')
                  }`}>
                    {item.label}
                  </span>
                  {currentPage === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                      style={{ boxShadow: '0 0 10px rgba(0, 183, 255, 0.8)' }}
                    />
                  )}
                </button>
              ))}
              
              {/* Dark/Light Mode Toggle */}
              <motion.button
                onClick={() => setDarkMode(!darkMode)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all ${
                  darkMode 
                    ? 'bg-cyan-500/10 border-cyan-500/30 hover:bg-cyan-500/20' 
                    : 'bg-cyan-50 border-cyan-600/40 hover:bg-cyan-100'
                }`}
              >
                {darkMode ? (
                  <Sun className={darkMode ? 'w-5 h-5 text-cyan-400' : 'w-5 h-5 text-cyan-600'} />
                ) : (
                  <Moon className={darkMode ? 'w-5 h-5 text-cyan-400' : 'w-5 h-5 text-cyan-600'} />
                )}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className={`fixed inset-y-0 right-0 z-40 w-64 backdrop-blur-xl border-l md:hidden ${
              darkMode 
                ? 'bg-black/95 border-cyan-500/30' 
                : 'bg-white/95 border-cyan-600/40'
            }`}
            style={{ top: '73px' }}
          >
            <div className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left py-2 transition-colors ${
                    currentPage === item.id 
                      ? (darkMode ? 'text-cyan-400' : 'text-cyan-600')
                      : (darkMode ? 'text-gray-300' : 'text-gray-600')
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Dark/Light Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`flex items-center gap-3 py-2 transition-colors ${
                  darkMode 
                    ? 'text-gray-300 hover:text-cyan-400' 
                    : 'text-gray-600 hover:text-cyan-600'
                }`}
              >
                {darkMode ? (
                  <>
                    <Sun className="w-5 h-5" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-5 h-5" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
