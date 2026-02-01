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
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <ellipse
          cx="26"
          cy="28"
          rx="20"
          ry="11"
          fill="url(#breadBody)"
        />

        <ellipse
          cx="26"
          cy="25"
          rx="19"
          ry="9"
          fill="url(#breadTop)"
        />

        <path
          d="M13 22 L18 26"
          stroke="#8B6F47"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M17 20 L22 24"
          stroke="#8B6F47"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M22 19 L27 23"
          stroke="#8B6F47"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M28 19 L33 23"
          stroke="#8B6F47"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M34 20 L39 24"
          stroke="#8B6F47"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />

        <path
          d="M16 8C16 8 17 6 18 5"
          stroke="#DC6316"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M22 6C22 6 23 4 24 3"
          stroke="#DC6316"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M28 6C28 6 29 4 30 3"
          stroke="#DC6316"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M34 8C34 8 35 6 36 5"
          stroke="#DC6316"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />

        <defs>
          <linearGradient
            id="breadBody"
            x1="26"
            y1="17"
            x2="26"
            y2="39"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E09B4A" />
            <stop offset="0.5" stopColor="#C67B2E" />
            <stop offset="1" stopColor="#A66424" />
          </linearGradient>
          <linearGradient
            id="breadTop"
            x1="26"
            y1="16"
            x2="26"
            y2="34"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F5D4A0" />
            <stop offset="0.4" stopColor="#E8B870" />
            <stop offset="1" stopColor="#D69B4A" />
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
