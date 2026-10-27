import React from 'react';

interface VastuViharLogoProps {
  variant?: 'light' | 'dark' | 'color'; // 'dark' = white text for dark header; 'color' = navy text on white
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const VastuViharLogo: React.FC<VastuViharLogoProps> = ({
  variant = 'color',
  size = 'md',
  showTagline = true,
  className = '',
}) => {
  const isDark = variant === 'dark';
  
  // Dimensions based on size
  const scale = size === 'sm' ? 0.75 : size === 'lg' ? 1.3 : 1;
  const width = Math.round(180 * scale);
  const height = Math.round((showTagline ? 62 : 46) * scale);

  const navyColor = isDark ? '#FFFFFF' : '#0E2B63';
  const taglineColor = isDark ? '#E2E8F0' : '#0E2B63';
  const redPrimary = '#E52424';
  const redShadow = '#B71C1C';
  const skyBlue = '#29A8E0';

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`} style={{ width }}>
      <svg
        viewBox="0 0 240 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xs"
        aria-label="Vastu Vihar Logo - एक विश्वस्तरीय टाउनशिप"
      >
        {/* Iconic Roof Chevron */}
        <g id="roof-chevron">
          {/* Left Roof Slope - Bright Red */}
          <path
            d="M 50 40 L 78 12 L 87 21 L 63 45 Z"
            fill={redPrimary}
          />
          {/* Peak Cap & Right Slope - Crimson Shadow */}
          <path
            d="M 78 12 L 87 21 L 115 45 L 102 45 L 82 24 Z"
            fill={redShadow}
          />
          {/* Center apex junction */}
          <polygon
            points="78,12 87,21 82,24"
            fill="#C62828"
          />
        </g>

        {/* Brand Text: Hindi वास्तु विहार */}
        <text
          x="10"
          y="60"
          fontFamily="'Plus Jakarta Sans', 'Mukta', 'Noto Sans Devanagari', 'Segoe UI', sans-serif"
          fontWeight="800"
          fontSize="36"
          letterSpacing="0.02em"
          fill={navyColor}
        >
          वास्तु विहार
        </text>

        {/* Registered Trademark symbol ® */}
        <text
          x="222"
          y="42"
          fontFamily="system-ui, sans-serif"
          fontWeight="700"
          fontSize="10"
          fill={navyColor}
        >
          ®
        </text>

        {/* Sky-Blue Ribbon Highlights */}
        {/* Left sky-blue rounded bar */}
        <rect
          x="10"
          y="66"
          width="48"
          height="6"
          rx="3"
          fill={skyBlue}
        />
        {/* Right sky-blue rounded bar */}
        <rect
          x="115"
          y="66"
          width="105"
          height="6"
          rx="3"
          fill={skyBlue}
        />

        {/* Tagline: एक विश्वस्तरीय टाउनशिप (A World-Class Township) */}
        {showTagline && (
          <text
            x="118"
            y="81"
            fontFamily="'Plus Jakarta Sans', 'Mukta', 'Noto Sans Devanagari', sans-serif"
            fontWeight="600"
            fontSize="12.5"
            letterSpacing="0.04em"
            fill={taglineColor}
          >
            एक विश्वस्तरीय टाउनशिप
          </text>
        )}
      </svg>
    </div>
  );
};
