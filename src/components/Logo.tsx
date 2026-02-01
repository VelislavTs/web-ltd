interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'light' | 'dark';
}

export default function Logo({ className = '', showText = true, variant = 'light' }: LogoProps) {
  const textColor = variant === 'dark' ? 'text-dough-50' : 'text-grain-900';

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <path
          d="M8 28 Q8 20 12 16 Q16 12 24 12 Q32 12 36 16 Q40 20 40 28 L38 36 Q38 38 36 38 L12 38 Q10 38 10 36 Z"
          fill="url(#baguetteGradient)"
        />

        <ellipse
          cx="24"
          cy="14"
          rx="10"
          ry="4"
          fill="#F5D4A0"
          opacity="0.8"
        />

        <path
          d="M14 18 L16 24"
          stroke="#A66424"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M20 16 L22 23"
          stroke="#A66424"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M26 16 L28 23"
          stroke="#A66424"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M32 18 L34 24"
          stroke="#A66424"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.4"
        />

        <defs>
          <linearGradient
            id="baguetteGradient"
            x1="24"
            y1="12"
            x2="24"
            y2="38"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F5D4A0" />
            <stop offset="0.3" stopColor="#E8B870" />
            <stop offset="0.7" stopColor="#D69B4A" />
            <stop offset="1" stopColor="#C67B2E" />
          </linearGradient>
        </defs>
      </svg>

      {showText && (
        <span className="text-2xl font-bold">
          <span className={textColor}>Web</span>
        </span>
      )}
    </div>
  );
}
