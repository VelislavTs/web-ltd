import { MessageSquare, Users, FileSearch, Palette, Handshake } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: MessageSquare,
      title: t.process.steps.inquiry.title,
      description: t.process.steps.inquiry.description,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: t.process.steps.meeting.title,
      description: t.process.steps.meeting.description,
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: FileSearch,
      title: t.process.steps.information.title,
      description: t.process.steps.information.description,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Palette,
      title: t.process.steps.prototype.title,
      description: t.process.steps.prototype.description,
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Handshake,
      title: t.process.steps.delivery.title,
      description: t.process.steps.delivery.description,
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t.process.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t.process.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2"></div>

            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'
                }`}
              >
                <div className={`flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-shadow relative">
                      <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <div className={`flex items-center gap-4 mb-4 ${
                        index % 2 === 0 ? 'md:flex-row-reverse md:justify-end' : ''
                      }`}>
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                          <step.icon className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 pr-12">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="md:hidden absolute left-1/2 top-0 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center z-10">
                    <span className="text-blue-600 font-bold text-lg">{index + 1}</span>
                  </div>

                  <div className="flex-1 hidden md:block"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-blue-50 border-2 border-blue-200 rounded-xl px-8 py-6">
            <p className="text-slate-700 text-lg">
              <span className="font-semibold text-blue-600">{t.process.timeline}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
