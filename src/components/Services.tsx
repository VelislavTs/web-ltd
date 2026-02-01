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
    <section id="services" className="py-16 bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            {t.services.title}
          </h2>
          <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <service.icon className="text-white" size={40} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-5">
                {service.title}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
