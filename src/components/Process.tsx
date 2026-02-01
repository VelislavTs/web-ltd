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
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">
            {t.process.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t.process.subtitle}
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-500 via-purple-500 via-emerald-500 via-orange-500 to-pink-500 transform -translate-x-1/2 opacity-20"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative mb-8 last:mb-0"
            >
              <div className="flex items-center gap-6">
                <div className={`hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br ${step.color} items-center justify-center flex-shrink-0 shadow-lg z-10 ring-4 ring-white`}>
                  <span className="text-white font-bold text-2xl">{index + 1}</span>
                </div>

                <div className="flex md:hidden w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>

                <div className="flex-1">
                  <div className="bg-slate-50 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                        <step.icon className="text-white" size={26} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-base text-slate-600 leading-relaxed ml-0 md:ml-18">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
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
