import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackText,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-slate-100 dark:bg-[#161722] border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-purple-300/60 p-4 select-none ${className}`}
      >
        <ImageIcon className="w-8 h-8 mb-2 opacity-50 text-purple-500" />
        <span className="text-xs font-medium tracking-tight text-center">
          {fallbackText || alt || 'Asset Preview'}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-slate-200/60 dark:bg-slate-800/60 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt || 'Visual preview'}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        {...props}
      />
    </div>
  );
};
