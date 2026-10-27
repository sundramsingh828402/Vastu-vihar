import React, { useState } from 'react';
import { Building2 } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  category?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle = 'Vastu Vihar Property',
  category = 'Architecture',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#1F2228] via-[#16181C] to-[#0E1012] text-center p-6 text-stone-200 ${className}`}
        role="img"
        aria-label={alt}
      >
        {/* Subtle architectural geometric blueprint grid */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="relative z-10 flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880]">
            <Building2 className="w-6 h-6 stroke-[1.5]" />
          </div>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#C5A880] font-medium">
            {category}
          </span>
          <p className="text-sm font-serif-luxury text-stone-100 max-w-[200px] leading-tight">
            {fallbackTitle}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#181A1E] ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-stone-800/40 animate-pulse flex items-center justify-center">
          <Building2 className="w-6 h-6 text-stone-600 animate-bounce" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-all duration-700 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
      />
    </div>
  );
};
