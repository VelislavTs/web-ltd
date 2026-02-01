import { Circle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FlourBackground = () => (
  <svg width="400" height="200" viewBox="0 0 400 200" className="absolute -left-32 -top-8 opacity-40 pointer-events-none z-0">
    <circle cx="80" cy="60" r="12" fill="#E8A05D" />
    <circle cx="120" cy="45" r="10" fill="#F0A044" />
    <circle cx="150" cy="70" r="14" fill="#DC6316" />
    <circle cx="100" cy="90" r="11" fill="#E8A05D" />
    <circle cx="140" cy="110" r="13" fill="#F0A044" />
    <circle cx="180" cy="85" r="10" fill="#DC6316" />
    <circle cx="110" cy="130" r="15" fill="#E8A05D" />
    <circle cx="170" cy="140" r="9" fill="#F0A044" />
    <circle cx="200" cy="115" r="12" fill="#DC6316" />
    <circle cx="65" cy="110" r="10" fill="#E8A05D" />
    <circle cx="190" cy="65" r="11" fill="#F0A044" />
    <circle cx="95" cy="150" r="10" fill="#DC6316" />
    <circle cx="220" cy="95" r="13" fill="#E8A05D" />
    <circle cx="130" cy="160" r="11" fill="#F0A044" />
    <circle cx="240" cy="130" r="10" fill="#DC6316" />
  </svg>
);

const BowlWithDoughBackground = () => (
  <svg width="400" height="200" viewBox="0 0 400 200" className="absolute -left-32 -top-8 opacity-40 pointer-events-none z-0">
    <path
      d="M80 110C80 110 90 100 150 100C210 100 220 110 220 110L220 140C220 150 210 170 150 170C90 170 80 150 80 140L80 110Z"
      fill="#D68937"
      opacity="0.7"
    />
    <ellipse cx="150" cy="110" rx="70" ry="25" fill="#F4C67A" />
    <path
      d="M90 110C90 110 100 105 120 100C140 95 160 95 180 100C200 105 210 110 210 110"
      stroke="#E09B4A"
      strokeWidth="4"
      fill="none"
    />
  </svg>
);

const DoughBallBackground = () => (
  <svg width="400" height="200" viewBox="0 0 400 200" className="absolute -left-32 -top-8 opacity-40 pointer-events-none z-0">
    <circle cx="150" cy="100" r="60" fill="url(#doughGradient)" />
    <ellipse cx="150" cy="85" rx="45" ry="22" fill="#F4C67A" opacity="0.6" />
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
  <svg width="400" height="200" viewBox="0 0 400 200" className="absolute -left-32 -top-8 opacity-40 pointer-events-none z-0">
    <path
      d="M80 70C80 70 90 60 110 65C130 70 125 85 120 90C115 95 100 98 95 90C90 82 92 70 105 65"
      fill="#E8D4B0"
      stroke="#D6C19C"
      strokeWidth="3"
    />
    <path
      d="M160 85C160 85 170 75 190 80C210 85 205 100 200 105C195 110 180 113 175 105C170 97 172 85 185 80"
      fill="#E8D4B0"
      stroke="#D6C19C"
      strokeWidth="3"
    />
    <path
      d="M115 130C115 130 125 120 145 125C165 130 160 145 155 150C150 155 135 158 130 150C125 142 127 130 140 125"
      fill="#E8D4B0"
      stroke="#D6C19C"
      strokeWidth="3"
    />
  </svg>
);

const ReadyBreadBackground = () => (
  <svg width="400" height="200" viewBox="0 0 400 200" className="absolute -left-32 -top-8 opacity-40 pointer-events-none z-0">
    <path
      d="M70 120C70 120 70 105 85 97C100 89 120 85 150 85C180 85 200 89 215 97C230 105 230 120 230 120C230 128 230 140 215 148C200 156 180 160 150 160C120 160 100 156 85 148C70 140 70 128 70 120Z"
      fill="url(#breadGradient2)"
    />
    <ellipse cx="150" cy="90" rx="55" ry="20" fill="#F4C67A" />
    <path
      d="M120 105C120 105 125 100 135 100C145 100 150 105 150 105"
      stroke="#A0826D"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M155 105C155 105 160 100 170 100C180 100 185 105 185 105"
      stroke="#A0826D"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient id="breadGradient2" x1="150" y1="85" x2="150" y2="160">
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
                <div key={index} className="relative flex items-start gap-6 overflow-visible">
                  <BackgroundComponent />

                  <div className="relative hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-crust-400 to-crust-500 items-center justify-center flex-shrink-0 shadow-md z-10">
                    <span className="text-white font-bold text-xl relative z-10">{index + 1}</span>
                  </div>

                  <div className="relative flex md:hidden w-12 h-12 rounded-full bg-gradient-to-br from-crust-400 to-crust-500 items-center justify-center flex-shrink-0 shadow-md z-10">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>

                  <div className="flex-1 relative z-[5]">
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
