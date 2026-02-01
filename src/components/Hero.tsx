import { ArrowRight, Circle, Users, Timer } from 'lucide-react';
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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-dough-100 via-dough-50 to-white">
      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px',
      }}></div>

      {/* Warm floating orbs */}
      <div className="absolute top-20 right-[10%] w-96 h-96 bg-gradient-to-br from-crust-200/40 to-transparent rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-[15%] w-80 h-80 bg-gradient-to-tr from-dough-300/30 to-transparent rounded-full blur-3xl animate-float-delayed"></div>

      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full border border-dough-300/50 shadow-sm">
                <Circle className="text-crust-500 fill-crust-500" size={8} />
                <span className="text-sm font-medium text-grain-800">
                  {t.hero.badge} <span className="text-crust-600">◆</span> {t.hero.badgeEnd}
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-grain-900 leading-[1.1] tracking-tight">
                {t.hero.title}
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-grain-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {t.hero.subtitle}
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={scrollToContact}
                  className="group inline-flex items-center justify-center space-x-2 bg-grain-900 hover:bg-grain-800 text-dough-50 px-8 py-4 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl hover:shadow-grain-900/20"
                >
                  <span>{t.hero.cta}</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-crust-300 to-crust-400 flex items-center justify-center shadow-sm">
                    <Users className="text-grain-800" size={20} strokeWidth={2.5} />
                  </div>
                  <span className="text-sm text-grain-700 font-medium">{t.hero.trustIndicators.clients}</span>
                </div>
                <div className="w-px h-8 bg-dough-300"></div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-dough-300 to-dough-400 flex items-center justify-center shadow-sm">
                    <Timer className="text-grain-800" size={20} strokeWidth={2.5} />
                  </div>
                  <span className="text-sm text-grain-700 font-medium">{t.hero.trustIndicators.delivery}</span>
                </div>
              </div>
            </div>

            {/* Right side - Simple cards */}
            <div className="hidden lg:block relative h-[500px]">
              {/* Card stack effect */}
              <div className="absolute top-12 left-8 right-8 space-y-4">
                {/* Card 1 */}
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border-2 border-dough-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-crust-500 mt-1.5 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-grain-900 text-lg mb-1">{t.hero.cards.design.title}</h3>
                      <p className="text-grain-600">{t.hero.cards.design.description}</p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border-2 border-dough-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ml-8">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-dough-500 mt-1.5 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-grain-900 text-lg mb-1">{t.hero.cards.fast.title}</h3>
                      <p className="text-grain-600">{t.hero.cards.fast.description}</p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border-2 border-dough-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ml-4">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-grain-700 mt-1.5 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-grain-900 text-lg mb-1">{t.hero.cards.care.title}</h3>
                      <p className="text-grain-600">{t.hero.cards.care.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute -right-4 top-1/4 flex flex-col gap-2">
                <div className="w-2 h-2 rounded-full bg-crust-400"></div>
                <div className="w-2 h-2 rounded-full bg-dough-400"></div>
                <div className="w-2 h-2 rounded-full bg-crust-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.05); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-20px, 20px) scale(1.1); }
        }

        .animate-float {
          animation: float 15s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 18s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
