import { ArrowRight, Heart, Sparkles, Users, Zap } from 'lucide-react';
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
    <section id="home" className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Animated gradient background with depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgb(59, 130, 246) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(59, 130, 246) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Floating geometric shapes with parallax effect */}
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-blue-400/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-[15%] w-96 h-96 bg-blue-500/5 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-20 left-[20%] w-80 h-80 bg-blue-300/10 rounded-full animate-float-slow"></div>

        {/* Gradient orbs for depth */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-blue-500/15 to-transparent rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Main content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-6 shadow-sm border border-blue-100 animate-fade-in">
                <Heart className="text-blue-500" size={18} fill="currentColor" />
                <span className="text-sm font-medium text-blue-900">Built with care for your success</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight animate-slide-up">
                {t.hero.title}
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed animate-slide-up-delayed">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 animate-slide-up-more-delayed">
                <button
                  onClick={scrollToContact}
                  className="group inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-xl hover:shadow-blue-500/50"
                >
                  <span>{t.hero.cta}</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-slate-600 animate-fade-in-slow">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="text-blue-600" size={16} />
                  </div>
                  <span className="font-medium">50+ Happy Clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Zap className="text-blue-600" size={16} />
                  </div>
                  <span className="font-medium">Fast Delivery</span>
                </div>
              </div>
            </div>

            {/* Right side - Interactive 3D-style cards */}
            <div className="hidden lg:block relative h-[600px]">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Card 1 - Floating with depth */}
                <div className="absolute top-8 -right-8 bg-white p-8 rounded-2xl shadow-2xl border border-blue-100 transform hover:scale-105 transition-all duration-500 hover:shadow-blue-200/50 animate-float-card w-72">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Sparkles className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">Beautiful Design</h3>
                      <p className="text-sm text-slate-600">Interfaces that users love</p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="absolute top-48 -left-8 bg-white p-8 rounded-2xl shadow-2xl border border-blue-100 transform hover:scale-105 transition-all duration-500 hover:shadow-blue-200/50 animate-float-card-delayed w-72">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Zap className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">Lightning Fast</h3>
                      <p className="text-sm text-slate-600">Optimized for performance</p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="absolute bottom-8 right-4 bg-white p-8 rounded-2xl shadow-2xl border border-blue-100 transform hover:scale-105 transition-all duration-500 hover:shadow-blue-200/50 animate-float-card-slow w-72">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Heart className="text-white" size={28} fill="currentColor" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">We Care</h3>
                      <p className="text-sm text-slate-600">Your success is our mission</p>
                    </div>
                  </div>
                </div>

                {/* Central glow effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2"></div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, 30px); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(15px, 25px); }
        }

        @keyframes float-card {
          0%, 100% { transform: translateY(0px) rotate(2deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        @keyframes float-card-delayed {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-15px) rotate(-2deg); }
        }

        @keyframes float-card-slow {
          0%, 100% { transform: translateY(0px) rotate(1deg); }
          50% { transform: translateY(-25px) rotate(1deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        @keyframes pulse-slower {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }

        .animate-float-card {
          animation: float-card 6s ease-in-out infinite;
        }

        .animate-float-card-delayed {
          animation: float-card-delayed 7s ease-in-out infinite;
        }

        .animate-float-card-slow {
          animation: float-card-slow 8s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-slide-up-delayed {
          animation: slide-up 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-slide-up-more-delayed {
          animation: slide-up 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-slow {
          animation: fade-in 1s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
