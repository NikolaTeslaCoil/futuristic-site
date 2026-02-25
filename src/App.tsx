import { useState, useEffect } from 'react';
import { Shield, Globe, Brain, Cpu, Server, Camera, PenTool, Share2, GraduationCap, Code, ChevronRight, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Menu, X, Lock, Zap, Network, Eye, Database, Terminal } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';
import { CaseStudiesPage } from './components/CaseStudiesPage';
import { ContactPage } from './components/ContactPage';
import { Navigation } from './components/Navigation';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(true);

  // Smooth scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className={`min-h-screen overflow-x-hidden relative transition-colors duration-300 ${
      darkMode 
        ? 'bg-black text-white' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Animated background grid */}
      <div className={`fixed inset-0 pointer-events-none ${darkMode ? 'opacity-20' : 'opacity-10'}`}>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(${darkMode ? 'rgba(0, 183, 255, 0.1)' : 'rgba(0, 183, 255, 0.2)'} 1px, transparent 1px),
            linear-gradient(90deg, ${darkMode ? 'rgba(0, 183, 255, 0.1)' : 'rgba(0, 183, 255, 0.2)'} 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridScroll 20s linear infinite'
        }} />
      </div>

      {/* Glowing orbs */}
      <div className={`fixed top-20 left-10 w-96 h-96 rounded-full blur-3xl pointer-events-none animate-pulse ${
        darkMode ? 'bg-blue-500/20' : 'bg-blue-400/30'
      }`} />
      <div className={`fixed bottom-20 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none animate-pulse ${
        darkMode ? 'bg-cyan-500/20' : 'bg-cyan-400/30'
      }`} style={{ animationDelay: '1s' }} />

      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="relative z-10">
        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} darkMode={darkMode} />}
        {currentPage === 'services' && <ServicesPage darkMode={darkMode} />}
        {currentPage === 'case-studies' && <CaseStudiesPage darkMode={darkMode} />}
        {currentPage === 'contact' && <ContactPage darkMode={darkMode} />}
      </main>

      <style jsx>{`
        @keyframes gridScroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }
      `}</style>
    </div>
  );
}
