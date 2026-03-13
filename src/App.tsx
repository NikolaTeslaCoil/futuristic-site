import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';

import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';
import { CaseStudiesPage } from './components/CaseStudiesPage';
import { ContactPage } from './components/ContactPage';
import { FAQPage } from './components/FAQPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { CookiePolicyPage } from './components/CookiePolicyPage';
import { LageNettsideBedriftPage } from './components/LageNettsideBedriftPage';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Keep your dark mode exactly as before
  const [darkMode, setDarkMode] = useState(true);

  // This replaces setCurrentPage. It changes the URL.
  const setCurrentPage = (page: string) => {
    const map: Record<string, string> = {
      home: '/',
      services: '/services',
      'case-studies': '/projects',
      faq: '/faq',
      contact: '/contact',
      privacy: '/privacy',
      cookies: '/cookies',
    };

    navigate(map[page] ?? '/');
  };

  // This replaces currentPage. It reads from the URL.
  const currentPage = (() => {
    const path = location.pathname;
    if (path === '/' || path === '') return 'home';
    if (path.startsWith('/services')) return 'services';
    if (path.startsWith('/projects')) return 'case-studies';
    if (path.startsWith('/faq')) return 'faq';
    if (path.startsWith('/contact')) return 'contact';
    if (path.startsWith('/privacy')) return 'privacy';
    if (path.startsWith('/cookies')) return 'cookies';
    return 'home';
  })();

  // Smooth scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div
      className={`min-h-screen overflow-x-hidden relative transition-colors duration-300 ${
        darkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      {/* Animated background grid */}
      <div className={`fixed inset-0 pointer-events-none ${darkMode ? 'opacity-20' : 'opacity-10'}`}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(${darkMode ? 'rgba(0, 183, 255, 0.1)' : 'rgba(0, 183, 255, 0.2)'} 1px, transparent 1px),
              linear-gradient(90deg, ${darkMode ? 'rgba(0, 183, 255, 0.1)' : 'rgba(0, 183, 255, 0.2)'} 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridScroll 20s linear infinite',
          }}
        />
      </div>

      {/* Glowing orbs */}
      <div
        className={`fixed top-20 left-10 w-96 h-96 rounded-full blur-3xl pointer-events-none animate-pulse ${
          darkMode ? 'bg-blue-500/20' : 'bg-blue-400/30'
        }`}
      />
      <div
        className={`fixed bottom-20 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none animate-pulse ${
          darkMode ? 'bg-cyan-500/20' : 'bg-cyan-400/30'
        }`}
        style={{ animationDelay: '1s' }}
      />

      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage setCurrentPage={setCurrentPage} darkMode={darkMode} />} />
          <Route path="/services" element={<ServicesPage darkMode={darkMode} />} />
          <Route path="/tjenester/lage-nettside-bedrift" element={<LageNettsideBedriftPage darkMode={darkMode} />} />

          {/* Your old "case-studies" becomes a real URL: /projects */}
          <Route
            path="/projects"
            element={<CaseStudiesPage darkMode={darkMode} setCurrentPage={setCurrentPage} />}
          />

          <Route path="/faq" element={<FAQPage darkMode={darkMode} />} />
          <Route path="/contact" element={<ContactPage darkMode={darkMode} />} />
          <Route path="/privacy" element={<PrivacyPolicyPage darkMode={darkMode} />} />
          <Route path="/cookies" element={<CookiePolicyPage darkMode={darkMode} />} />

          {/* Backwards compatibility if anything still tries /case-studies */}
          <Route path="/case-studies" element={<Navigate to="/projects" replace />} />

          {/* Anything unknown goes home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer setCurrentPage={setCurrentPage} darkMode={darkMode} />

      <style>{`
        @keyframes gridScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
      `}</style>
    </div>
  );
}
