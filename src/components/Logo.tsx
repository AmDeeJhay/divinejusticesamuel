import React from 'react';

/**
 * DivineJustice mark: a white "D" on a purple tile with a blue dot at its core.
 * Kept in sync with public/favicon.svg and public/divinejustice-logo.svg.
 */
export const LogoMark: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
    <rect width="32" height="32" rx="9" fill="#7C3AED" />
    <path d="M10.5 8.5v15h4.5a7.5 7.5 0 0 0 0-15z" fill="none" stroke="#FFFFFF" strokeWidth="3.2" strokeLinejoin="round" />
    <circle cx="15.2" cy="16" r="2.1" fill="#60A5FA" />
  </svg>
);

/** Full logo: mark + "DivineJustice." wordmark in the site font */
export const Logo: React.FC<{ markClassName?: string; textClassName?: string }> = ({
  markClassName = 'w-8 h-8',
  textClassName = 'text-lg',
}) => (
  <span className="inline-flex items-center gap-2.5">
    <LogoMark className={`${markClassName} shrink-0 transition-transform group-hover:-rotate-6 group-hover:scale-105`} />
    <span className={`${textClassName} font-extrabold tracking-tight text-slate-900 dark:text-white`}>
      DivineJustice<span className="text-blue-600 dark:text-blue-400">.</span>
    </span>
  </span>
);
