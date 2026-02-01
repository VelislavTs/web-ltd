import { Circle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FlourBackground = () => (
  <svg width="300" height="150" viewBox="0 0 300 150" className="absolute -right-24 -top-12 opacity-40 pointer-events-none z-0">
    <circle cx="80" cy="30" r="3" fill="#E8A05D" />
    <circle cx="120" cy="20" r="2.5" fill="#F0A044" />
    <circle cx="150" cy="40" r="3.5" fill="#DC6316" />
    <circle cx="100" cy="50" r="2" fill="#E8A05D" />
    <circle cx="140" cy="65" r="3" fill="#F0A044" />
    <circle cx="180" cy="45" r="2.5" fill="#DC6316" />
    <circle cx="110" cy="75" r="3.5" fill="#E8A05D" />
    <circle cx="170" cy="80" r="2" fill="#F0A044" />
    <circle cx="200" cy="60" r="3" fill="#DC6316" />
    <circle cx="65" cy="60" r="2.5" fill="#E8A05D" />
    <circle cx="190" cy="35" r="2" fill="#F0A044" />
    <circle cx="95" cy="85" r="2.5" fill="#DC6316" />
    <circle cx="220" cy="50" r="3" fill="#E8A05D" />
    <circle cx="130" cy="90" r="2.5" fill="#F0A044" />
    <circle cx="240" cy="70" r="2" fill="#DC6316" />
    <circle cx="160" cy="25" r="2" fill="#E8A05D" />
    <circle cx="205" cy="75" r="2.5" fill="#F0A044" />
    <circle cx="75" cy="70" r="2" fill="#DC6316" />
    <circle cx="185" cy="55" r="2.5" fill="#E8A05D" />
    <circle cx="125" cy="45" r="2" fill="#F0A044" />
  </svg>
);

const BowlWithDoughBackground = () => (
  <svg width="300" height="150" viewBox="0 0 300 150" className="absolute -right-24 -top-12 opacity-40 pointer-events-none z-0">
    <path
      d="M40 60 Q45 80 55 90 Q65 100 120 100 Q175 100 185 90 Q195 80 200 60 L200 50 Q200 47 195 45 Q185 40 120 40 Q55 40 45 45 Q40 47 40 50 Z"
      fill="url(#bowlGradient)"
      stroke="#8B6F47"
      strokeWidth="2"
    />
    <ellipse cx="120" cy="50" rx="60" ry="18" fill="#F4C67A" />
    <ellipse cx="120" cy="47" rx="50" ry="14" fill="#F5D4A0" opacity="0.8" />
    <path
      d="M70 50 Q85 42 100 41 Q120 40 140 41 Q155 42 170 50"
      stroke="#E8B870"
      strokeWidth="2"
      fill="none"
      opacity="0.7"
    />
    <defs>
      <linearGradient id="bowlGradient" x1="120" y1="40" x2="120" y2="100">
        <stop offset="0%" stopColor="#A0826D" opacity="0.3" />
        <stop offset="50%" stopColor="#8B6F47" opacity="0.5" />
        <stop offset="100%" stopColor="#6B5437" opacity="0.6" />
      </linearGradient>
    </defs>
  </svg>
);

const DoughBallBackground = () => (
  <svg width="300" height="150" viewBox="0 0 300 150" className="absolute -right-24 -top-12 opacity-40 pointer-events-none z-0">
    <circle cx="120" cy="60" r="50" fill="url(#doughGradient)" />
    <ellipse cx="120" cy="48" rx="38" ry="18" fill="#F4C67A" opacity="0.6" />
    <path
      d="M95 52 Q98 56 105 58"
      stroke="#D6C19C"
      strokeWidth="2"
      fill="none"
      opacity="0.6"
    />
    <path
      d="M135 58 Q142 56 145 52"
      stroke="#D6C19C"
      strokeWidth="2"
      fill="none"
      opacity="0.6"
    />
    <path
      d="M105 70 Q112 74 120 74 Q128 74 135 70"
      stroke="#D6C19C"
      strokeWidth="2.5"
      fill="none"
      opacity="0.5"
    />
    <path
      d="M90 62 Q93 66 97 68"
      stroke="#D6C19C"
      strokeWidth="1.5"
      fill="none"
      opacity="0.5"
    />
    <path
      d="M143 68 Q147 66 150 62"
      stroke="#D6C19C"
      strokeWidth="1.5"
      fill="none"
      opacity="0.5"
    />
    <ellipse cx="105" cy="55" rx="6" ry="4" fill="#E8D4B0" opacity="0.4" />
    <ellipse cx="135" cy="55" rx="6" ry="4" fill="#E8D4B0" opacity="0.4" />
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
  <svg width="300" height="150" viewBox="0 0 300 150" className="absolute -right-24 -top-12 opacity-40 pointer-events-none z-0">
    <path
      d="M60 35 Q67 28 78 30 Q86 32 90 38 Q94 45 92 51 Q90 57 82 60 Q75 62 69 58 Q64 54 62 47 Q61 41 63 37"
      fill="#E8D4B0"
      stroke="#D6C19C"
      strokeWidth="2.5"
    />
    <path
      d="M71 40 Q75 38 78 39"
      stroke="#C9B89A"
      strokeWidth="1.2"
      fill="none"
      opacity="0.6"
    />
    <path
      d="M120 48 Q127 41 138 43 Q146 45 150 51 Q154 58 152 64 Q150 70 142 73 Q135 75 129 71 Q124 67 122 60 Q121 54 124 50"
      fill="#E8D4B0"
      stroke="#D6C19C"
      strokeWidth="2.5"
    />
    <path
      d="M131 53 Q135 51 138 52"
      stroke="#C9B89A"
      strokeWidth="1.2"
      fill="none"
      opacity="0.6"
    />
    <path
      d="M86 75 Q93 68 104 70 Q112 72 116 78 Q120 85 118 91 Q116 97 108 100 Q101 102 95 98 Q90 94 88 87 Q87 81 90 77"
      fill="#E8D4B0"
      stroke="#D6C19C"
      strokeWidth="2.5"
    />
    <path
      d="M97 80 Q101 78 104 79"
      stroke="#C9B89A"
      strokeWidth="1.2"
      fill="none"
      opacity="0.6"
    />
  </svg>
);

const ReadyBreadBackground = () => (
  <svg width="300" height="150" viewBox="0 0 300 150" className="absolute -right-24 -top-12 opacity-40 pointer-events-none z-0">
    <ellipse
      cx="120"
      cy="65"
      rx="68"
      ry="28"
      fill="url(#breadGradient2)"
    />
    <ellipse
      cx="120"
      cy="58"
      rx="64"
      ry="22"
      fill="url(#breadTopGradient)"
    />
    <path
      d="M65 50 L85 65"
      stroke="#8B6F47"
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M85 48 L105 63"
      stroke="#8B6F47"
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M105 47 L125 62"
      stroke="#8B6F47"
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M125 47 L145 62"
      stroke="#8B6F47"
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M145 48 L165 63"
      stroke="#8B6F47"
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.6"
    />
    <defs>
      <linearGradient id="breadGradient2" x1="120" y1="37" x2="120" y2="93">
        <stop offset="0%" stopColor="#E09B4A" />
        <stop offset="50%" stopColor="#C67B2E" />
        <stop offset="100%" stopColor="#A66424" />
      </linearGradient>
      <linearGradient id="breadTopGradient" x1="120" y1="36" x2="120" y2="80">
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
                  <div className="relative hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-crust-400 to-crust-500 items-center justify-center flex-shrink-0 shadow-md z-10 overflow-visible">
                    <BackgroundComponent />
                    <span className="text-white font-bold text-xl relative z-10">{index + 1}</span>
                  </div>

                  <div className="relative flex md:hidden w-12 h-12 rounded-full bg-gradient-to-br from-crust-400 to-crust-500 items-center justify-center flex-shrink-0 shadow-md z-10 overflow-visible">
                    <BackgroundComponent />
                    <span className="text-white font-bold text-lg relative z-10">{index + 1}</span>
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
