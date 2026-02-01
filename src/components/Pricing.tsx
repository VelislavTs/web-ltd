import { Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Pricing() {
  const { t, language } = useLanguage();

  const plans = [
    {
      name: t.pricing.starter.name,
      price: language === 'en' ? '$1,200' : '2,200 лв',
      period: t.pricing.oneTime,
      description: t.pricing.starter.description,
      features: t.pricing.starter.features,
      popular: false,
    },
    {
      name: t.pricing.professional.name,
      price: language === 'en' ? '$3,500' : '6,400 лв',
      period: t.pricing.oneTime,
      description: t.pricing.professional.description,
      features: t.pricing.professional.features,
      popular: true,
    },
    {
      name: t.pricing.enterprise.name,
      price: t.pricing.contact,
      period: '',
      description: t.pricing.enterprise.description,
      features: t.pricing.enterprise.features,
      popular: false,
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? 'border-2 border-blue-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-600 text-sm">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-slate-900">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="ml-2 text-slate-600">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-lg font-semibold transition-colors mb-8 ${
                  plan.popular
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                }`}
              >
                Get Started
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                      <Check className="text-blue-600" size={14} />
                    </div>
                    <span className="text-slate-700 text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600">
            {language === 'en'
              ? 'All prices are estimates. Final pricing depends on project scope and requirements.'
              : 'Всички цени са ориентировъчни. Крайната цена зависи от обхвата и изискванията на проекта.'}
          </p>
        </div>
      </div>
    </section>
  );
}
