import { Circle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FlourIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L13 7M12 3L11 7M12 3V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <ellipse cx="12" cy="8" rx="2" ry="1" fill="currentColor" opacity="0.3"/>
    <path d="M8 10C8 10 9 11 12 11C15 11 16 10 16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <rect x="7" y="12" width="10" height="9" rx="1" stroke="currentColor" strokeWidth="2"/>
    <path d="M10 16H14M10 18H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const KneadIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 14C5 14 7 12 12 12C17 12 19 14 19 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <ellipse cx="12" cy="15" rx="7" ry="4" fill="currentColor" opacity="0.2"/>
    <path d="M8 9C8 9 6 10 6 12M16 9C16 9 18 10 18 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
    <circle cx="16" cy="8" r="1.5" fill="currentColor"/>
    <path d="M9 18C9 18 10 19 12 19C14 19 15 18 15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const OvenIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
    <rect x="6" y="10" width="12" height="8" rx="1" fill="currentColor" opacity="0.2"/>
    <line x1="4" y1="9" x2="20" y2="9" stroke="currentColor" strokeWidth="2"/>
    <circle cx="8" cy="6.5" r="0.5" fill="currentColor"/>
    <circle cx="11" cy="6.5" r="0.5" fill="currentColor"/>
    <circle cx="14" cy="6.5" r="0.5" fill="currentColor"/>
    <path d="M9 14C9 14 10 13 12 13C14 13 15 14 15 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const BreadResultIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="14" rx="8" ry="6" fill="currentColor" opacity="0.2"/>
    <ellipse cx="12" cy="10" rx="7" ry="4" fill="currentColor" opacity="0.3"/>
    <path d="M5 13C5 13 7 12 12 12C17 12 19 13 19 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="8" y1="14" x2="8" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    <line x1="12" y1="13" x2="12" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    <line x1="16" y1="14" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

const DeliveryIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M12 11L16 9M12 15L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: FlourIcon,
      title: t.process.steps.inquiry.title,
      description: t.process.steps.inquiry.description,
    },
    {
      icon: KneadIcon,
      title: t.process.steps.meeting.title,
      description: t.process.steps.meeting.description,
    },
    {
      icon: FlourIcon,
      title: t.process.steps.information.title,
      description: t.process.steps.information.description,
    },
    {
      icon: OvenIcon,
      title: t.process.steps.prototype.title,
      description: t.process.steps.prototype.description,
    },
    {
      icon: BreadResultIcon,
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
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
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
                          <div className="text-crust-600">
                            <IconComponent />
                          </div>
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
              );
            })}
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
