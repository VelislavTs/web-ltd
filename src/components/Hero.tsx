import { ArrowRight, Code2, Zap, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTE4IDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6bTM2IDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBzdHJva2U9InJnYmEoNTksIDEzMCwgMjQ2LCAwLjA1KSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center space-x-6">
            <div className="p-4 bg-blue-500/10 rounded-lg backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-colors">
              <Code2 className="text-blue-400" size={32} />
            </div>
            <div className="p-4 bg-blue-500/10 rounded-lg backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-colors">
              <Zap className="text-blue-400" size={32} />
            </div>
            <div className="p-4 bg-blue-500/10 rounded-lg backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-colors">
              <Shield className="text-blue-400" size={32} />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t.hero.title}
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
            {t.hero.subtitle}
          </p>

          <button
            onClick={scrollToContact}
            className="group inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
          >
            <span>{t.hero.cta}</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>

          <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">React</div>
              <div className="text-sm text-slate-400">TypeScript</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">Node.js</div>
              <div className="text-sm text-slate-400">Express</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">Cloud</div>
              <div className="text-sm text-slate-400">Scalable</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
