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
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            {t.about.title}
          </h2>
          <p className="text-2xl text-slate-600">
            {t.about.subtitle}
          </p>
        </div>

        <div className="space-y-6 mb-14">
          {t.about.description.map((paragraph, index) => (
            <p key={index} className="text-xl text-slate-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
            >
              <div className="flex justify-center mb-5">
                <div className="p-4 bg-blue-100 rounded-lg">
                  <stat.icon className="text-blue-600" size={36} />
                </div>
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-3">
                {stat.value}
              </div>
              <div className="text-base text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-10">
          <h3 className="text-3xl font-bold text-slate-900 mb-6">
            Technical Excellence
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-slate-900 mb-4">Frontend</h4>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-white text-slate-700 rounded-lg text-base shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-slate-900 mb-4">Backend</h4>
              <div className="flex flex-wrap gap-3">
                {['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-white text-slate-700 rounded-lg text-base shadow-sm">
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
