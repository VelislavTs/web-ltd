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
          d="M8 28C8 28 8 24 10 22C12 20 14 19 16 18.5C18 18 20 18 24 18C28 18 30 18 32 18.5C34 19 36 20 38 22C40 24 40 28 40 28C40 30 40 34 38 36C36 38 34 39 32 39.5C30 40 28 40 24 40C20 40 18 40 16 39.5C14 39 12 38 10 36C8 34 8 30 8 28Z"
          fill="url(#breadBody)"
        />

        <ellipse cx="24" cy="21" rx="13" ry="7" fill="url(#breadTop)" />

        <path
          d="M18 24C18.5 23.5 19.5 23 21 23C22.5 23 23 23.5 23.5 24"
          stroke="#8B6F47"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M25 24C25.5 23.5 26.5 23 28 23C29.5 23 30 23.5 30.5 24"
          stroke="#8B6F47"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.4"
        />

        <path
          d="M20 20C20 20 22 18 24 18C26 18 28 20 28 20"
          stroke="#A0826D"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <path
          d="M16 12C16 12 16.5 10 17 9"
          stroke="#DC6316"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M20 10C20 10 20.5 8 21 7"
          stroke="#DC6316"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M24 9C24 9 24.5 7 25 6"
          stroke="#DC6316"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M28 10C28 10 28.5 8 29 7"
          stroke="#DC6316"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M32 12C32 12 32.5 10 33 9"
          stroke="#DC6316"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />

        <defs>
          <linearGradient
            id="breadBody"
            x1="24"
            y1="18"
            x2="24"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E8A05D" />
            <stop offset="0.4" stopColor="#D68937" />
            <stop offset="1" stopColor="#B86B28" />
          </linearGradient>
          <linearGradient
            id="breadTop"
            x1="24"
            y1="14"
            x2="24"
            y2="28"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F4C67A" />
            <stop offset="0.6" stopColor="#E09B4A" />
            <stop offset="1" stopColor="#D68937" />
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
