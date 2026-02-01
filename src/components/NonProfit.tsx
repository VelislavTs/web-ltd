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
    <section className="py-24 bg-gradient-to-br from-dough-100 via-crust-50 to-dough-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-crust-500 to-crust-600 rounded-full mb-5 shadow-lg">
            <Heart className="text-white" size={32} fill="currentColor" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-grain-900 mb-4">
            {t.nonprofit.title}
          </h2>
          <p className="text-xl text-grain-700 max-w-2xl mx-auto">
            {t.nonprofit.subtitle}
          </p>
        </div>

        <div className="bg-white border-2 border-dough-200 rounded-2xl p-8 md:p-10 shadow-xl">
          <p className="text-lg text-grain-700 mb-8 leading-relaxed">
            {t.nonprofit.description}
          </p>

          <div className="space-y-4 mb-8">
            {t.nonprofit.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-crust-100 flex items-center justify-center mt-0.5">
                  <Check className="text-crust-600" size={16} strokeWidth={3} />
                </div>
                <span className="text-grain-700">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-crust-50 border-l-4 border-crust-500 p-6 rounded-r-xl mb-8">
            <div className="flex items-start space-x-3">
              <Info className="text-crust-600 flex-shrink-0 mt-0.5" size={20} />
              <p className="text-grain-700">
                <strong className="text-grain-900">{t.nonprofit.note.split('(')[0]}</strong>
                {t.nonprofit.note.includes('(') ? `(${t.nonprofit.note.split('(')[1]}` : ''}
              </p>
            </div>
          </div>

          <button
            onClick={scrollToContact}
            className="w-full md:w-auto bg-gradient-to-r from-crust-500 to-crust-600 hover:from-crust-600 hover:to-crust-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg"
          >
            {t.nonprofit.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
