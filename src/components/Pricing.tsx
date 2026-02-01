import { Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Pricing() {
  const { t, language } = useLanguage();

  const plans: Array<{
    name: string;
    upfrontPrice: string;
    monthlyPrice: string;
    description: string;
    features: string[];
    popular: boolean;
    isContact?: boolean;
  }> = [
    {
      name: t.pricing.starter.name,
      upfrontPrice: language === 'en' ? '$1,200' : '2,200 лв',
      monthlyPrice: t.pricing.starter.monthlyPrice,
      description: t.pricing.starter.description,
      features: t.pricing.starter.features,
      popular: false,
    },
    {
      name: t.pricing.professional.name,
      upfrontPrice: language === 'en' ? '$3,500' : '6,400 лв',
      monthlyPrice: t.pricing.professional.monthlyPrice,
      description: t.pricing.professional.description,
      features: t.pricing.professional.features,
      popular: true,
    },
    {
      name: t.pricing.enterprise.name,
      upfrontPrice: t.pricing.contact,
      monthlyPrice: t.pricing.enterprise.monthlyPrice,
      description: t.pricing.enterprise.description,
      features: t.pricing.enterprise.features,
      popular: false,
      isContact: true,
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-16 bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            {t.pricing.title}
          </h2>
          <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? 'border-2 border-blue-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-5 py-2 rounded-full text-base font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-3xl font-bold text-slate-900 mb-3">
                  {plan.name}
                </h3>
                <p className="text-slate-600 text-base">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8 space-y-5">
                <div className="bg-slate-50 rounded-lg p-5">
                  <div className="text-sm font-semibold text-slate-500 uppercase mb-2">
                    {t.pricing.upfront}
                  </div>
                  <div className="text-4xl font-bold text-slate-900">
                    {plan.upfrontPrice}
                  </div>
                </div>

                {!plan.isContact && (
                  <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-200">
                    <div className="text-sm font-semibold text-blue-600 uppercase mb-2">
                      {t.pricing.monthly}
                    </div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-slate-900">
                        {plan.monthlyPrice}
                      </span>
                      <span className="text-slate-600 text-base">
                        {t.pricing.perMonth}
                      </span>
                    </div>
                    <div className="text-sm text-slate-600">
                      {t.pricing.monthlyIncludes}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={scrollToContact}
                className={`w-full py-4 rounded-lg text-lg font-semibold transition-colors mb-10 ${
                  plan.popular
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                }`}
              >
                Get Started
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                      <Check className="text-blue-600" size={16} />
                    </div>
                    <span className="text-slate-700 text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 text-lg">
            {language === 'en'
              ? 'All prices are estimates. Final pricing depends on project scope and requirements.'
              : 'Всички цени са ориентировъчни. Крайната цена зависи от обхвата и изискванията на проекта.'}
          </p>
        </div>
      </div>
    </section>
  );
}
