import { Heart, Check, Info } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function NonProfit() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-full mb-6">
              <Heart className="text-white" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {t.nonprofit.title}
            </h2>
            <p className="text-xl text-slate-600">
              {t.nonprofit.subtitle}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              {t.nonprofit.description}
            </p>

            <div className="space-y-4 mb-8">
              {t.nonprofit.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                    <Check className="text-emerald-600" size={16} />
                  </div>
                  <span className="text-slate-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
              <div className="flex items-start space-x-3">
                <Info className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-slate-700">
                  <strong className="text-slate-900">{t.nonprofit.note.split(':')[0]}:</strong>
                  {t.nonprofit.note.split(':')[1]}
                </p>
              </div>
            </div>

            <button
              onClick={scrollToContact}
              className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-emerald-500/50"
            >
              {t.nonprofit.cta}
            </button>
          </div>

          <div className="mt-8 text-center text-slate-600 text-sm">
            * {t.nonprofit.note.includes('лв')
              ? 'Валидно за регистрирани НПО в България с актуална документация'
              : 'Valid for registered non-profit organizations with current documentation'}
          </div>
        </div>
      </div>
    </section>
  );
}
