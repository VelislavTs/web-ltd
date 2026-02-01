import { Award, Users, Briefcase, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { icon: Award, value: '5+', label: t.about.stats.years },
    { icon: Briefcase, value: '100+', label: t.about.stats.projects },
    { icon: Users, value: '80+', label: t.about.stats.clients },
    { icon: Heart, value: '98%', label: t.about.stats.satisfaction },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-dough-50 to-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-grain-900 mb-4">
            {t.about.title}
          </h2>
          <p className="text-2xl text-crust-600 font-medium">
            {t.about.subtitle}
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm border-2 border-dough-200 rounded-2xl p-8 md:p-12 mb-12 shadow-lg">
          <div className="space-y-6">
            {t.about.description.map((paragraph, index) => (
              <p key={index} className="text-lg text-grain-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white border-2 border-dough-200 rounded-xl hover:border-crust-300 hover:shadow-lg transition-all"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-crust-300 to-crust-400 rounded-full flex items-center justify-center shadow-md">
                  <stat.icon className="text-white" size={20} strokeWidth={2.5} />
                </div>
              </div>
              <div className="text-3xl font-bold text-grain-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-grain-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
