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
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <ellipse cx="22" cy="26" rx="18" ry="14" fill="url(#breadGradient)" />

        <ellipse cx="22" cy="14" rx="16" ry="8" fill="url(#topGradient)" />

        <line x1="10" y1="20" x2="10" y2="23" stroke="#9c7d5f" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        <line x1="15" y1="18" x2="15" y2="21" stroke="#9c7d5f" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        <line x1="22" y1="17" x2="22" y2="20" stroke="#9c7d5f" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        <line x1="29" y1="18" x2="29" y2="21" stroke="#9c7d5f" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        <line x1="34" y1="20" x2="34" y2="23" stroke="#9c7d5f" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>

        <defs>
          <linearGradient
            id="breadGradient"
            x1="22"
            y1="12"
            x2="22"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#f0a044" />
            <stop offset="0.5" stopColor="#dc6316" />
            <stop offset="1" stopColor="#b74914" />
          </linearGradient>
          <linearGradient
            id="topGradient"
            x1="22"
            y1="6"
            x2="22"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#f5c371" />
            <stop offset="1" stopColor="#eb7f20" />
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
