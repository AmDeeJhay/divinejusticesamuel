import React from 'react';

/**
 * Amdeejhay mark: a white "A" drawn as an upward peak on a purple tile,
 * with a blue dot as the crossbar. Kept in sync with public/favicon.svg.
 */
export const LogoMark: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
    <rect width="32" height="32" rx="9" fill="#7C3AED" />
    <path d="M9 23.5 16 9l7 14.5" fill="none" stroke="#FFFFFF" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="16" cy="19.4" r="2.1" fill="#60A5FA" />
  </svg>
);

/** Full logo: mark + "Amdeejhay." wordmark in the site font */
export const Logo: React.FC<{ markClassName?: string; textClassName?: string }> = ({
  markClassName = 'w-8 h-8',
  textClassName = 'text-lg',
}) => (
  <span className="inline-flex items-center gap-2.5">
    <LogoMark className={`${markClassName} shrink-0 transition-transform group-hover:-rotate-6 group-hover:scale-105`} />
    <span className={`${textClassName} font-extrabold tracking-tight text-slate-900 dark:text-white`}>
      Amdeejhay<span className="text-blue-600 dark:text-blue-400">.</span>
    </span>
  </span>
);
