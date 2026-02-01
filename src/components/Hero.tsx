import { ArrowRight, Heart, Coffee, Sparkles, Users } from 'lucide-react';
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
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden">
      {/* Playful background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Main content */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm border border-orange-200/50">
                <Heart className="text-orange-500" size={20} fill="currentColor" />
                <span className="text-sm font-medium text-orange-900">Made with love for local businesses</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                {t.hero.title}
              </h1>

              <p className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                <button
                  onClick={scrollToContact}
                  className="group inline-flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-orange-500/50"
                >
                  <span>{t.hero.cta}</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center justify-center md:justify-start space-x-6 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <Users className="text-orange-500" size={18} />
                  <span>50+ Happy Clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="text-orange-500" size={18} />
                  <span>Fast Delivery</span>
                </div>
              </div>
            </div>

            {/* Right side - Visual element */}
            <div className="hidden md:block">
              <div className="relative">
                {/* Friendly illustration-style cards */}
                <div className="absolute top-0 right-0 bg-white p-6 rounded-2xl shadow-xl transform rotate-3 hover:rotate-6 transition-transform">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                      <Coffee className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Coffee & Chat</div>
                      <div className="text-xs text-slate-500">How we start every project</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-32 left-0 bg-white p-6 rounded-2xl shadow-xl transform -rotate-3 hover:-rotate-6 transition-transform">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-xl flex items-center justify-center">
                      <Sparkles className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Beautiful Design</div>
                      <div className="text-xs text-slate-500">Stand out from the crowd</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 right-8 bg-white p-6 rounded-2xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                      <Heart className="text-white" size={24} fill="currentColor" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">We Care</div>
                      <div className="text-xs text-slate-500">Your success is our mission</div>
                    </div>
                  </div>
                </div>

                {/* Central decorative element */}
                <div className="relative mx-auto w-64 h-64 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full opacity-20 animate-pulse"></div>
                  <div className="text-6xl">👋</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-400 rounded-full mt-2"></div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
