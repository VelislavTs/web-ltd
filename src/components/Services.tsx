import { Globe, Box, Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Globe,
      title: t.services.customWebsites.title,
      description: t.services.customWebsites.description,
    },
    {
      icon: Box,
      title: t.services.webApps.title,
      description: t.services.webApps.description,
    },
    {
      icon: Search,
      title: t.services.digitalMarketing.title,
      description: t.services.digitalMarketing.description,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4bfa2' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-grain-900 mb-4">
            {t.services.title}
          </h2>
          <p className="text-xl text-grain-600 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-dough-50/50 border-2 border-dough-200 rounded-2xl p-8 hover:bg-white hover:border-crust-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-crust-400 to-crust-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                <service.icon className="text-white" size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-semibold text-grain-900 mb-4">
                {service.title}
              </h3>
              <p className="text-grain-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
