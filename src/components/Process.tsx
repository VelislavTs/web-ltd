import { Circle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FlourBackground = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" className="absolute -left-4 -top-4 opacity-20 pointer-events-none">
    <circle cx="30" cy="35" r="4" fill="#E8A05D" />
    <circle cx="45" cy="28" r="3" fill="#F0A044" />
    <circle cx="55" cy="40" r="5" fill="#DC6316" />
    <circle cx="38" cy="48" r="3.5" fill="#E8A05D" />
    <circle cx="50" cy="55" r="4" fill="#F0A044" />
    <circle cx="65" cy="45" r="3" fill="#DC6316" />
    <circle cx="42" cy="62" r="4.5" fill="#E8A05D" />
    <circle cx="60" cy="65" r="3" fill="#F0A044" />
    <circle cx="72" cy="55" r="4" fill="#DC6316" />
    <circle cx="25" cy="55" r="3" fill="#E8A05D" />
    <circle cx="70" cy="35" r="3.5" fill="#F0A044" />
    <circle cx="35" cy="70" r="3" fill="#DC6316" />
  </svg>
);

const BowlWithDoughBackground = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" className="absolute -left-4 -top-4 opacity-20 pointer-events-none">
    <path
      d="M30 55C30 55 35 50 60 50C85 50 90 55 90 55L90 70C90 75 85 85 60 85C35 85 30 75 30 70L30 55Z"
      fill="#D68937"
      opacity="0.6"
    />
    <ellipse cx="60" cy="55" rx="30" ry="12" fill="#F4C67A" />
    <path
      d="M35 55C35 55 38 52 45 50C52 48 68 48 75 50C82 52 85 55 85 55"
      stroke="#E09B4A"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

const DoughBallBackground = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" className="absolute -left-4 -top-4 opacity-20 pointer-events-none">
    <circle cx="60" cy="60" r="28" fill="url(#doughGradient)" />
    <ellipse cx="60" cy="50" rx="20" ry="10" fill="#F4C67A" opacity="0.6" />
    <defs>
      <radialGradient id="doughGradient">
        <stop offset="0%" stopColor="#F4E5C7" />
        <stop offset="70%" stopColor="#E8D4B0" />
        <stop offset="100%" stopColor="#D6C19C" />
      </radialGradient>
    </defs>
  </svg>
);

const DoughKnotsBackground = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" className="absolute -left-4 -top-4 opacity-20 pointer-events-none">
    <path
      d="M35 50C35 50 40 45 50 47C60 49 58 55 55 58C52 61 45 62 42 58C39 54 40 50 45 48"
      fill="#E8D4B0"
      stroke="#D6C19C"
      strokeWidth="2"
    />
    <path
      d="M65 58C65 58 70 53 80 55C90 57 88 63 85 66C82 69 75 70 72 66C69 62 70 58 75 56"
      fill="#E8D4B0"
      stroke="#D6C19C"
      strokeWidth="2"
    />
    <path
      d="M48 70C48 70 53 65 63 67C73 69 71 75 68 78C65 81 58 82 55 78C52 74 53 70 58 68"
      fill="#E8D4B0"
      stroke="#D6C19C"
      strokeWidth="2"
    />
  </svg>
);

const ReadyBreadBackground = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" className="absolute -left-4 -top-4 opacity-20 pointer-events-none">
    <path
      d="M35 65C35 65 35 58 40 55C45 52 50 50 60 50C70 50 75 52 80 55C85 58 85 65 85 65C85 68 85 72 80 75C75 78 70 80 60 80C50 80 45 78 40 75C35 72 35 68 35 65Z"
      fill="url(#breadGradient)"
    />
    <ellipse cx="60" cy="52" rx="22" ry="8" fill="#F4C67A" />
    <path
      d="M50 58C50 58 52 56 55 56C58 56 60 58 60 58"
      stroke="#A0826D"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M62 58C62 58 64 56 67 56C70 56 72 58 72 58"
      stroke="#A0826D"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient id="breadGradient" x1="60" y1="50" x2="60" y2="80">
        <stop offset="0%" stopColor="#E8A05D" />
        <stop offset="50%" stopColor="#D68937" />
        <stop offset="100%" stopColor="#B86B28" />
      </linearGradient>
    </defs>
  </svg>
);

const backgroundComponents = [
  FlourBackground,
  BowlWithDoughBackground,
  DoughBallBackground,
  DoughKnotsBackground,
  ReadyBreadBackground,
];

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      title: t.process.steps.inquiry.title,
      description: t.process.steps.inquiry.description,
    },
    {
      title: t.process.steps.meeting.title,
      description: t.process.steps.meeting.description,
    },
    {
      title: t.process.steps.information.title,
      description: t.process.steps.information.description,
    },
    {
      title: t.process.steps.prototype.title,
      description: t.process.steps.prototype.description,
    },
    {
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
              const BackgroundComponent = backgroundComponents[index];
              return (
                <div key={index} className="relative flex items-start gap-6">
                  <div className="relative hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-crust-400 to-crust-500 items-center justify-center flex-shrink-0 shadow-md z-10">
                    <BackgroundComponent />
                    <span className="text-white font-bold text-xl relative z-10">{index + 1}</span>
                  </div>

                  <div className="relative flex md:hidden w-12 h-12 rounded-full bg-gradient-to-br from-crust-400 to-crust-500 items-center justify-center flex-shrink-0 shadow-md z-10">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>

                  <div className="flex-1">
                    <div className="bg-dough-50/50 border-2 border-dough-200 rounded-2xl p-6 md:p-8 hover:border-crust-300 hover:bg-white hover:shadow-lg transition-all">
                      <h3 className="text-xl md:text-2xl font-bold text-grain-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-grain-700 leading-relaxed">
                        {step.description}
                      </p>
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
