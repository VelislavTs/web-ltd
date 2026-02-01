import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleProjectsClick = () => {
    navigate('/projects');
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bg' : 'en');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200' : 'bg-white/60 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('home')}
            className="hover:opacity-80 transition-opacity"
          >
            <Logo />
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              {t.nav.home}
            </button>
            <button onClick={() => scrollToSection('services')} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              {t.nav.services}
            </button>
            <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              {t.nav.about}
            </button>
            <button onClick={() => scrollToSection('process')} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              {t.nav.process}
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              {t.nav.pricing}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              {t.nav.contact}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              <Globe size={18} />
              <span className="uppercase font-semibold">{language}</span>
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-6 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t.nav.services}
            </button>
            <button
              onClick={handleProjectsClick}
              className="block text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="block text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t.nav.process}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t.nav.pricing}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t.nav.contact}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              <Globe size={18} />
              <span className="uppercase font-semibold">{language}</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
