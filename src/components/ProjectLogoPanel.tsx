import React from 'react';
import { Project } from '../data/portfolioData.ts';
import { ImageWithFallback } from './ImageWithFallback.tsx';

/** Media panel: screenshot if provided, otherwise brand mark + project name */
export const ProjectLogoPanel: React.FC<{ project: Project; className?: string }> = ({ project, className = '' }) => (
  <div className={`relative flex items-center justify-center bg-slate-50 dark:bg-[#0A0F1C] overflow-hidden ${className}`}>
    {project.image ? (
      <ImageWithFallback src={project.image} alt={project.title} className="w-full h-full object-cover" />
    ) : (
      <>
        {/* Faint dot grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60 dark:opacity-30 text-slate-300 dark:text-slate-700"
          style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '18px 18px' }}
        />
        {project.logo && project.logoIsWordmark ? (
          <div
            className="relative px-7 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"
            style={{ backgroundColor: project.logoBg ?? '#ffffff' }}
          >
            <img src={project.logo} alt={project.title} className="h-16 w-auto object-contain" />
          </div>
        ) : (
        <div className="relative flex items-center gap-3">
          {project.logo ? (
            <img
              src={project.logo}
              alt=""
              className="w-14 h-14 rounded-2xl bg-white border border-slate-200 dark:border-slate-700 shadow-sm object-contain"
            />
          ) : (
            <span className="w-14 h-14 rounded-2xl bg-purple-600 text-white flex items-center justify-center text-2xl font-bold">
              {project.title.charAt(0)}
            </span>
          )}
          <span className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {project.title}
          </span>
        </div>
        )}
      </>
    )}
  </div>
);
