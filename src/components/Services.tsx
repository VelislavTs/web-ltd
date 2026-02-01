import { Palette, Layers, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Palette,
      title: t.services.customWebsites.title,
      description: t.services.customWebsites.description,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Layers,
      title: t.services.webApps.title,
      description: t.services.webApps.description,
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: TrendingUp,
      title: t.services.digitalMarketing.title,
      description: t.services.digitalMarketing.description,
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t.services.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
