import { Github, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Logo from './Logo';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Logo variant="dark" />
            </div>
            <p className="text-slate-400 leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="block hover:text-blue-400 transition-colors"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block hover:text-blue-400 transition-colors"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block hover:text-blue-400 transition-colors"
              >
                {t.nav.about}
              </button>
            </nav>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                {t.services.customWebsites.title}
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                {t.services.webApps.title}
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                {t.services.digitalMarketing.title}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>
            &copy; {currentYear} Web. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
