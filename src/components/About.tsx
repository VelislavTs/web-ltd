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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">
            {t.about.title}
          </h2>
          <p className="text-xl text-slate-600">
            {t.about.subtitle}
          </p>
        </div>

        <div className="space-y-5 mb-12">
          {t.about.description.map((paragraph, index) => (
            <p key={index} className="text-base text-slate-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
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

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-5">
            Technical Excellence
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-white text-slate-700 rounded-lg text-sm shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Backend</h4>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis'].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-white text-slate-700 rounded-lg text-sm shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
