import { Award, Users, Target, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { icon: Award, value: '5+', label: t.about.stats.years },
    { icon: Target, value: '100+', label: t.about.stats.projects },
    { icon: Users, value: '80+', label: t.about.stats.clients },
    { icon: TrendingUp, value: '98%', label: t.about.stats.satisfaction },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {t.about.title}
            </h2>
            <p className="text-xl text-slate-600">
              {t.about.subtitle}
            </p>
          </div>

          <div className="space-y-6 mb-16">
            {t.about.description.map((paragraph, index) => (
              <p key={index} className="text-lg text-slate-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <stat.icon className="text-blue-600" size={28} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
