import { Circle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FlourBackground = () => (
  <svg width="150" height="100" viewBox="0 0 150 100" className="absolute -left-12 top-0 opacity-50 pointer-events-none z-0">
    <circle cx="40" cy="30" r="3" fill="#E8A05D" />
    <circle cx="60" cy="20" r="2.5" fill="#F0A044" />
    <circle cx="75" cy="40" r="3.5" fill="#DC6316" />
    <circle cx="50" cy="50" r="2" fill="#E8A05D" />
    <circle cx="70" cy="60" r="3" fill="#F0A044" />
    <circle cx="90" cy="45" r="2.5" fill="#DC6316" />
    <circle cx="55" cy="70" r="3.5" fill="#E8A05D" />
    <circle cx="85" cy="75" r="2" fill="#F0A044" />
    <circle cx="100" cy="55" r="3" fill="#DC6316" />
    <circle cx="33" cy="55" r="2.5" fill="#E8A05D" />
    <circle cx="95" cy="35" r="2" fill="#F0A044" />
    <circle cx="48" cy="80" r="2.5" fill="#DC6316" />
    <circle cx="110" cy="50" r="3" fill="#E8A05D" />
    <circle cx="65" cy="85" r="2.5" fill="#F0A044" />
    <circle cx="120" cy="65" r="2" fill="#DC6316" />
    <circle cx="80" cy="25" r="2" fill="#E8A05D" />
    <circle cx="103" cy="70" r="2.5" fill="#F0A044" />
    <circle cx="38" cy="65" r="2" fill="#DC6316" />
  </svg>
);

const BowlWithDoughBackground = () => (
  <svg width="180" height="140" viewBox="0 0 180 140" className="absolute -left-20 -top-4 opacity-50 pointer-events-none z-0">
    <path
      d="M30 55 Q33 70 40 80 Q48 90 90 90 Q132 90 140 80 Q147 70 150 55 L150 47 Q150 45 147 43 Q140 38 90 38 Q40 38 33 43 Q30 45 30 47 Z"
      fill="url(#bowlGradient)"
      stroke="#8B6F47"
      strokeWidth="2"
    />
    <ellipse cx="90" cy="47" rx="55" ry="16" fill="#F4C67A" />
    <ellipse cx="90" cy="45" rx="45" ry="13" fill="#F5D4A0" opacity="0.8" />
    <path
      d="M50 47 Q62 40 75 39 Q90 38 105 39 Q118 40 130 47"
      stroke="#E8B870"
      strokeWidth="2"
      fill="none"
      opacity="0.7"
    />
    <defs>
      <linearGradient id="bowlGradient" x1="90" y1="38" x2="90" y2="90">
        <stop offset="0%" stopColor="#A0826D" opacity="0.3" />
        <stop offset="50%" stopColor="#8B6F47" opacity="0.5" />
        <stop offset="100%" stopColor="#6B5437" opacity="0.6" />
      </linearGradient>
    </defs>
  </svg>
);

const DoughBallBackground = () => (
  <svg width="180" height="140" viewBox="0 0 180 140" className="absolute -left-20 -top-8 opacity-50 pointer-events-none z-0">
    <circle cx="90" cy="70" r="45" fill="url(#doughGradient)" />
    <ellipse cx="90" cy="60" rx="35" ry="16" fill="#F4C67A" opacity="0.6" />
    <path
      d="M68 63 Q71 67 77 69"
      stroke="#D6C19C"
      strokeWidth="2"
      fill="none"
      opacity="0.6"
    />
    <path
      d="M103 69 Q109 67 112 63"
      stroke="#D6C19C"
      strokeWidth="2"
      fill="none"
      opacity="0.6"
    />
    <path
      d="M77 80 Q83 84 90 84 Q97 84 103 80"
      stroke="#D6C19C"
      strokeWidth="2.5"
      fill="none"
      opacity="0.5"
    />
    <path
      d="M65 72 Q68 76 72 78"
      stroke="#D6C19C"
      strokeWidth="1.5"
      fill="none"
      opacity="0.5"
    />
    <path
      d="M108 78 Q112 76 115 72"
      stroke="#D6C19C"
      strokeWidth="1.5"
      fill="none"
      opacity="0.5"
    />
    <ellipse cx="78" cy="65" rx="6" ry="4" fill="#E8D4B0" opacity="0.4" />
    <ellipse cx="102" cy="65" rx="6" ry="4" fill="#E8D4B0" opacity="0.4" />
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
  <svg width="200" height="180" viewBox="0 0 200 180" className="absolute -left-16 -top-6 opacity-60 pointer-events-none z-0">
    <ellipse cx="70" cy="90" rx="35" ry="25" fill="#E8D4B0" opacity="0.8" />
    <ellipse cx="60" cy="90" rx="30" ry="20" fill="#F4E5C7" opacity="0.7" />
    <ellipse cx="80" cy="90" rx="30" ry="20" fill="#F4E5C7" opacity="0.7" />

    <ellipse cx="110" cy="85" rx="28" ry="20" fill="#E8D4B0" opacity="0.8" />
    <ellipse cx="100" cy="85" rx="24" ry="16" fill="#F4E5C7" opacity="0.7" />
    <ellipse cx="120" cy="85" rx="24" ry="16" fill="#F4E5C7" opacity="0.7" />

    <ellipse cx="90" cy="115" rx="32" ry="22" fill="#E8D4B0" opacity="0.8" />
    <ellipse cx="80" cy="115" rx="27" ry="18" fill="#F4E5C7" opacity="0.7" />
    <ellipse cx="100" cy="115" rx="27" ry="18" fill="#F4E5C7" opacity="0.7" />

    <path
      d="M65 85 Q70 82 75 83"
      stroke="#D6C19C"
      strokeWidth="2"
      fill="none"
      opacity="0.5"
    />
    <path
      d="M105 80 Q110 77 115 78"
      stroke="#D6C19C"
      strokeWidth="2"
      fill="none"
      opacity="0.5"
    />
    <path
      d="M85 110 Q90 107 95 108"
      stroke="#D6C19C"
      strokeWidth="2"
      fill="none"
      opacity="0.5"
    />
  </svg>
);

const ReadyBreadBackground = () => (
  <svg width="280" height="180" viewBox="0 0 280 180" className="absolute -left-32 -top-16 opacity-70 pointer-events-none z-0">
    <ellipse
      cx="140"
      cy="110"
      rx="110"
      ry="50"
      fill="url(#breadGradient2)"
    />
    <ellipse
      cx="140"
      cy="95"
      rx="105"
      ry="40"
      fill="url(#breadTopGradient)"
    />
    <path
      d="M65 80 L95 105"
      stroke="#8B6F47"
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M95 75 L125 100"
      stroke="#8B6F47"
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M125 72 L155 97"
      stroke="#8B6F47"
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M155 72 L185 97"
      stroke="#8B6F47"
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M185 75 L215 100"
      stroke="#8B6F47"
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.6"
    />
    <defs>
      <linearGradient id="breadGradient2" x1="140" y1="60" x2="140" y2="160">
        <stop offset="0%" stopColor="#E09B4A" />
        <stop offset="50%" stopColor="#C67B2E" />
        <stop offset="100%" stopColor="#A66424" />
      </linearGradient>
      <linearGradient id="breadTopGradient" x1="140" y1="55" x2="140" y2="135">
        <stop offset="0%" stopColor="#F5D4A0" />
        <stop offset="40%" stopColor="#E8B870" />
        <stop offset="100%" stopColor="#D69B4A" />
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
                  <div className="relative hidden md:flex w-16 h-16 flex-shrink-0">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-crust-400 to-crust-500 items-center justify-center shadow-md z-10 flex">
                      <span className="text-white font-bold text-xl relative z-10">{index + 1}</span>
                    </div>
                  </div>

                  <div className="relative flex md:hidden w-12 h-12 flex-shrink-0">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-crust-400 to-crust-500 items-center justify-center shadow-md z-10 flex">
                      <span className="text-white font-bold text-lg relative z-10">{index + 1}</span>
                    </div>
                  </div>

                  <div className="flex-1 relative z-[5]">
                    <div className="relative bg-dough-50/50 border-2 border-dough-200 rounded-2xl p-6 md:p-8 hover:border-crust-300 hover:bg-white hover:shadow-lg transition-all overflow-hidden">
                      <div className="hidden md:block">
                        <BackgroundComponent />
                      </div>
                      <div className="relative z-10">
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
