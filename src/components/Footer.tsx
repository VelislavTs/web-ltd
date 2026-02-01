import {useLanguage} from "../contexts/LanguageContext.tsx";
import Logo from "./Logo.tsx";

export default function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <footer className="bg-slate-950 text-slate-300">
        <div className="container mx-auto px-2 py-12">
          <div className="grid md:grid-cols-3 gap-2 mb-2 text-center">
            {/* Logo + tagline */}
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <Logo variant="dark" />
              </div>
              <p className="text-slate-400 leading-relaxed max-w-xs">
                {t.footer.tagline}
              </p>
            </div>

            {/* Quick links */}
            <div className="flex flex-col items-center">
              <h4 className="text-white font-semibold mb-4">
                {language === 'en' ? 'Quick Links' : 'Бързи връзки'}
              </h4>
              <nav className="space-y-2">
                <button
                    onClick={() => scrollToSection('home')}
                    className="block mx-auto hover:text-blue-400 transition-colors"
                >
                  {t.nav.home}
                </button>
                <button
                    onClick={() => scrollToSection('services')}
                    className="block mx-auto hover:text-blue-400 transition-colors"
                >
                  {t.nav.services}
                </button>
                <button
                    onClick={() => scrollToSection('about')}
                    className="block mx-auto hover:text-blue-400 transition-colors"
                >
                  {t.nav.about}
                </button>
              </nav>
            </div>

            {/* Services */}
            <div className="flex flex-col items-center">
              <h4 className="text-white font-semibold mb-4">
                {language === 'en' ? 'Services' : 'Услуги'}
              </h4>
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

          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; {currentYear} Web. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
  );
}
