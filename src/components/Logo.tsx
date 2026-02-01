interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <rect width="40" height="40" rx="8" fill="url(#logoGradient)" />

        <path
          d="M12 14L8 20L12 26"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M28 14L32 20L28 26"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M23 12L17 28"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <defs>
          <linearGradient
            id="logoGradient"
            x1="0"
            y1="0"
            x2="40"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>
      </svg>

      {showText && (
        <span className="text-2xl font-bold">
          <span className="text-white">Web</span>
          <span className="text-blue-400">Ltd</span>
        </span>
      )}
    </div>
  );
}
