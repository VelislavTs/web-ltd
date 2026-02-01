import { Check, Circle } from 'lucide-react';
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
    <section id="pricing" className="py-24 bg-dough-50/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-grain-900 mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-xl text-grain-600 max-w-2xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 border-2 hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'border-crust-400 shadow-lg' : 'border-dough-200'
              }`}
            >
              {plan.popular && (
                 <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-crust-500 to-crust-600 text-white px-6 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap shadow-md">
                      {language === 'en' ? 'Popular' : 'Популярен'}
                    </span>
                  </div>
              )}

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Circle className="text-crust-500 fill-crust-500" size={8} />
                  <h3 className="text-2xl font-bold text-grain-900">
                    {plan.name}
                  </h3>
                </div>
                <p className="text-grain-600">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6 space-y-4">
                <div className="bg-dough-50 border border-dough-200 rounded-xl p-4">
                  <div className="text-xs font-semibold text-grain-600 uppercase mb-1">
                    {t.pricing.upfront}
                  </div>
                  <div className="text-3xl font-bold text-grain-900">
                    {plan.upfrontPrice}
                  </div>
                </div>

                {!plan.isContact && (
                  <div className="bg-gradient-to-br from-crust-50 to-crust-100 rounded-xl p-4 border-2 border-crust-300">
                    <div className="text-xs font-semibold text-crust-700 uppercase mb-1">
                      {t.pricing.monthly}
                    </div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-3xl font-bold text-grain-900">
                        {plan.monthlyPrice}
                      </span>
                      <span className="text-grain-600 text-sm">
                        {t.pricing.perMonth}
                      </span>
                    </div>
                    <div className="text-xs text-grain-700">
                      {t.pricing.monthlyIncludes}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-xl font-semibold transition-all mb-6 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-crust-500 to-crust-600 hover:from-crust-600 hover:to-crust-700 text-white shadow-md hover:shadow-lg'
                    : 'bg-dough-100 hover:bg-dough-200 text-grain-900 border-2 border-dough-200 hover:border-dough-300'
                }`}
              >
                {language === "en" ? "Get Started" : "Нека започваме"}
              </button>

              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-crust-100 flex items-center justify-center mt-0.5">
                      <Check className="text-crust-600" size={14} strokeWidth={3} />
                    </div>
                    <span className="text-grain-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-grain-600">
            {language === 'en'
              ? 'All prices are estimates. Final pricing depends on project scope and requirements.'
              : 'Всички цени са ориентировъчни. Крайната цена зависи от обхвата и изискванията на проекта.'}
          </p>
        </div>
      </div>
    </section>
  );
}
