import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Projects() {
  const { t, language } = useLanguage();

  const projects = [
    {
      title: 'Nadya Libra',
      description: language === 'en'
        ? 'Elegant astrology and spiritual guidance website featuring modern design, smooth animations, and intuitive navigation. Built with React and optimized for performance.'
        : 'Елегантен уебсайт за астрология и духовно ръководство с модерен дизайн, плавни анимации и интуитивна навигация. Изграден с React и оптимизиран за производителност.',
      url: 'https://nadya-libra.netlify.app/',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Party Center Vratsa',
      description: language === 'en'
        ? 'Comprehensive event venue showcase with interactive galleries, booking system integration, and multi-language support. Features advanced SEO and performance optimization.'
        : 'Цялостна презентация на място за събития с интерактивни галерии, интеграция със система за резервации и многоезична поддръжка. Включва усъвършенствано SEO и оптимизация на производителността.',
      url: 'https://party-center-vratsa.vercel.app/',
      tags: ['Next.js', 'React', 'SEO', 'Performance'],
      gradient: 'from-blue-500 to-teal-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            {t.projects.title}
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="text-white text-4xl font-bold z-10">
                  {project.title}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-base text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1.5 bg-slate-700 text-slate-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  <span>{t.projects.viewProject}</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
