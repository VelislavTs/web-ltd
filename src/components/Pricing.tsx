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
      upfrontPrice: t.pricing.starter.upfrontPrice,
      monthlyPrice: t.pricing.starter.monthlyPrice,
      description: t.pricing.starter.description,
      features: t.pricing.starter.features,
      popular: false,
    },
    {
      name: t.pricing.professional.name,
      upfrontPrice: t.pricing.professional.upfrontPrice,
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
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">
            {t.pricing.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? 'border-2 border-blue-500' : ''
              }`}
            >
              {plan.popular && (
                 <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-6 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap">
                      Най-предпочитано
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

              <div className="mb-6 space-y-4">
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="text-xs font-semibold text-slate-500 uppercase mb-1">
                    {t.pricing.upfront}
                  </div>
                  <div className="text-3xl font-bold text-slate-900">
                    {plan.upfrontPrice}
                  </div>
                </div>

                {!plan.isContact && (
                  <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                    <div className="text-xs font-semibold text-blue-600 uppercase mb-1">
                      {t.pricing.monthly}
                    </div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-3xl font-bold text-slate-900">
                        {plan.monthlyPrice}
                      </span>
                      <span className="text-slate-600 text-sm">
                        {t.pricing.perMonth}
                      </span>
                    </div>
                    <div className="text-xs text-slate-600">
                      {t.pricing.monthlyIncludes}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-lg font-semibold transition-colors mb-6 ${
                  plan.popular
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                }`}
              >
                {language === "en" ? "Get Started" : "Нека започваме"}
              </button>

              <div className="space-y-3">
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

        <div className="mt-10 text-center">
          <p className="text-slate-600 text-base">
            {language === 'en'
              ? 'All prices are estimates. Final pricing depends on project scope and requirements.'
              : 'Всички цени са ориентировъчни. Крайната цена зависи от обхвата и изискванията на проекта.'}
          </p>
        </div>
      </div>
    </section>
  );
}
