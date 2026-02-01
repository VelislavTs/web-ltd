import { Circle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FlourBackground = () => (
  <svg width="400" height="200" viewBox="0 0 400 200" className="absolute -right-32 -top-8 opacity-40 pointer-events-none z-0">
    <circle cx="80" cy="60" r="3" fill="#E8A05D" />
    <circle cx="120" cy="45" r="2.5" fill="#F0A044" />
    <circle cx="150" cy="70" r="3.5" fill="#DC6316" />
    <circle cx="100" cy="90" r="2" fill="#E8A05D" />
    <circle cx="140" cy="110" r="3" fill="#F0A044" />
    <circle cx="180" cy="85" r="2.5" fill="#DC6316" />
    <circle cx="110" cy="130" r="3.5" fill="#E8A05D" />
    <circle cx="170" cy="140" r="2" fill="#F0A044" />
    <circle cx="200" cy="115" r="3" fill="#DC6316" />
    <circle cx="65" cy="110" r="2.5" fill="#E8A05D" />
    <circle cx="190" cy="65" r="2" fill="#F0A044" />
    <circle cx="95" cy="150" r="2.5" fill="#DC6316" />
    <circle cx="220" cy="95" r="3" fill="#E8A05D" />
    <circle cx="130" cy="160" r="2.5" fill="#F0A044" />
    <circle cx="240" cy="130" r="2" fill="#DC6316" />
    <circle cx="160" cy="50" r="2" fill="#E8A05D" />
    <circle cx="205" cy="140" r="2.5" fill="#F0A044" />
    <circle cx="75" cy="125" r="2" fill="#DC6316" />
    <circle cx="185" cy="105" r="2.5" fill="#E8A05D" />
    <circle cx="125" cy="80" r="2" fill="#F0A044" />
  </svg>
);

const BowlWithDoughBackground = () => (
  <svg width="400" height="200" viewBox="0 0 400 200" className="absolute -right-32 -top-8 opacity-40 pointer-events-none z-0">
    <path
      d="M60 115 Q65 145 75 160 Q90 175 150 175 Q210 175 225 160 Q235 145 240 115 L240 100 Q240 95 235 92 Q225 85 150 85 Q75 85 65 92 Q60 95 60 100 Z"
      fill="url(#bowlGradient)"
      stroke="#8B6F47"
      strokeWidth="2"
    />
    <ellipse cx="150" cy="100" rx="80" ry="22" fill="#F4C67A" />
    <ellipse cx="150" cy="95" rx="65" ry="18" fill="#F5D4A0" opacity="0.8" />
    <path
      d="M95 100 Q110 90 130 88 Q150 87 170 88 Q190 90 205 100"
      stroke="#E8B870"
      strokeWidth="2.5"
      fill="none"
      opacity="0.7"
    />
    <defs>
      <linearGradient id="bowlGradient" x1="150" y1="85" x2="150" y2="175">
        <stop offset="0%" stopColor="#A0826D" opacity="0.3" />
        <stop offset="50%" stopColor="#8B6F47" opacity="0.5" />
        <stop offset="100%" stopColor="#6B5437" opacity="0.6" />
      </linearGradient>
    </defs>
  </svg>
);

const DoughBallBackground = () => (
  <svg width="400" height="200" viewBox="0 0 400 200" className="absolute -right-32 -top-8 opacity-40 pointer-events-none z-0">
    <circle cx="150" cy="100" r="60" fill="url(#doughGradient)" />
    <ellipse cx="150" cy="85" rx="45" ry="22" fill="#F4C67A" opacity="0.6" />
    <path
      d="M120 90 Q125 95 135 98"
      stroke="#D6C19C"
      strokeWidth="2"
      fill="none"
      opacity="0.6"
    />
    <path
      d="M165 98 Q175 95 180 90"
      stroke="#D6C19C"
      strokeWidth="2"
      fill="none"
      opacity="0.6"
    />
    <path
      d="M135 115 Q145 120 155 120 Q165 120 175 115"
      stroke="#D6C19C"
      strokeWidth="2.5"
      fill="none"
      opacity="0.5"
    />
    <path
      d="M115 105 Q120 110 125 112"
      stroke="#D6C19C"
      strokeWidth="1.5"
      fill="none"
      opacity="0.5"
    />
    <path
      d="M175 112 Q180 110 185 105"
      stroke="#D6C19C"
      strokeWidth="1.5"
      fill="none"
      opacity="0.5"
    />
    <ellipse cx="130" cy="95" rx="8" ry="5" fill="#E8D4B0" opacity="0.4" />
    <ellipse cx="170" cy="95" rx="8" ry="5" fill="#E8D4B0" opacity="0.4" />
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
  <svg width="400" height="200" viewBox="0 0 400 200" className="absolute -right-32 -top-8 opacity-40 pointer-events-none z-0">
    <path
      d="M80 70 Q90 60 105 62 Q115 64 120 70 Q125 78 123 85 Q120 92 110 95 Q100 97 92 92 Q85 87 83 78 Q82 72 85 68"
      fill="#E8D4B0"
      stroke="#D6C19C"
      strokeWidth="3"
    />
    <path
      d="M95 75 Q100 72 105 73"
      stroke="#C9B89A"
      strokeWidth="1.5"
      fill="none"
      opacity="0.6"
    />
    <path
      d="M160 85 Q170 75 185 77 Q195 79 200 85 Q205 93 203 100 Q200 107 190 110 Q180 112 172 107 Q165 102 163 93 Q162 87 165 83"
      fill="#E8D4B0"
      stroke="#D6C19C"
      strokeWidth="3"
    />
    <path
      d="M175 90 Q180 87 185 88"
      stroke="#C9B89A"
      strokeWidth="1.5"
      fill="none"
      opacity="0.6"
    />
    <path
      d="M115 130 Q125 120 140 122 Q150 124 155 130 Q160 138 158 145 Q155 152 145 155 Q135 157 127 152 Q120 147 118 138 Q117 132 120 128"
      fill="#E8D4B0"
      stroke="#D6C19C"
      strokeWidth="3"
    />
    <path
      d="M130 135 Q135 132 140 133"
      stroke="#C9B89A"
      strokeWidth="1.5"
      fill="none"
      opacity="0.6"
    />
  </svg>
);

const ReadyBreadBackground = () => (
  <svg width="400" height="200" viewBox="0 0 400 200" className="absolute -right-32 -top-8 opacity-40 pointer-events-none z-0">
    <ellipse
      cx="150"
      cy="115"
      rx="85"
      ry="35"
      fill="url(#breadGradient2)"
    />
    <ellipse
      cx="150"
      cy="105"
      rx="80"
      ry="28"
      fill="url(#breadTopGradient)"
    />
    <path
      d="M85 95 L110 115"
      stroke="#8B6F47"
      strokeWidth="3.5"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M110 92 L135 112"
      stroke="#8B6F47"
      strokeWidth="3.5"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M135 90 L160 110"
      stroke="#8B6F47"
      strokeWidth="3.5"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M160 90 L185 110"
      stroke="#8B6F47"
      strokeWidth="3.5"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M185 92 L210 112"
      stroke="#8B6F47"
      strokeWidth="3.5"
      strokeLinecap="round"
      opacity="0.6"
    />
    <defs>
      <linearGradient id="breadGradient2" x1="150" y1="80" x2="150" y2="150">
        <stop offset="0%" stopColor="#E09B4A" />
        <stop offset="50%" stopColor="#C67B2E" />
        <stop offset="100%" stopColor="#A66424" />
      </linearGradient>
      <linearGradient id="breadTopGradient" x1="150" y1="77" x2="150" y2="133">
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
