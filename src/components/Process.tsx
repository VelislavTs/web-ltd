import { MessageSquare, Users, FileSearch, Box, Handshake, Circle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: MessageSquare,
      title: t.process.steps.inquiry.title,
      description: t.process.steps.inquiry.description,
    },
    {
      icon: Users,
      title: t.process.steps.meeting.title,
      description: t.process.steps.meeting.description,
    },
    {
      icon: FileSearch,
      title: t.process.steps.information.title,
      description: t.process.steps.information.description,
    },
    {
      icon: Box,
      title: t.process.steps.prototype.title,
      description: t.process.steps.prototype.description,
    },
    {
      icon: Handshake,
      title: t.process.steps.delivery.title,
      description: t.process.steps.delivery.description,
    },
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-grain-900 mb-4">
            {t.process.title}
          </h2>
          <p className="text-xl text-grain-600 max-w-2xl mx-auto">
            {t.process.subtitle}
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-crust-300 via-dough-400 to-crust-300"></div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start gap-6">
                <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-crust-400 to-crust-500 items-center justify-center flex-shrink-0 shadow-md z-10 relative">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>

                <div className="flex md:hidden w-12 h-12 rounded-full bg-gradient-to-br from-crust-400 to-crust-500 items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>

                <div className="flex-1">
                  <div className="bg-dough-50/50 border-2 border-dough-200 rounded-2xl p-6 md:p-8 hover:border-crust-300 hover:bg-white hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-12 h-12 rounded-full bg-white border-2 border-dough-300 flex items-center justify-center flex-shrink-0">
                        <step.icon className="text-crust-600" size={22} strokeWidth={2.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-grain-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-grain-700 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-crust-50 to-dough-100 border-2 border-crust-200 rounded-xl px-8 py-4 shadow-md">
            <div className="flex items-center gap-2">
              <Circle className="text-crust-500 fill-crust-500" size={8} />
              <p className="text-grain-800 font-medium">
                {t.process.timeline}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
