import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Github } from 'lucide-react';
import { PORTFOLIO_DATA, PROJECT_CATEGORIES, Project } from '../data/portfolioData.ts';
import { ProjectLogoPanel } from './ProjectLogoPanel.tsx';

const openProject = (project: Project) => {
  if (project.liveUrl) window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
};

export const ProjectShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const projectsList = PORTFOLIO_DATA.projects;

  const categories = ['All', ...PROJECT_CATEGORIES];

  const filteredProjects = selectedCategory === 'All'
    ? projectsList
    : projectsList.filter((p) => p.categories.includes(selectedCategory as Project['categories'][number]));

  return (
    <section id="projects" className="py-12 sm:py-14 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2 font-mono">
              Selected Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Featured Projects & Systems
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
              Production products across web, mobile, and cloud, built around real business problems.
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-[#111827] border border-slate-200 dark:border-slate-800 mb-6 w-fit max-w-full">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-purple-600 rounded-lg shadow-sm"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Project Row: one straight line. 4 across on desktop; swipeable row with snap on smaller screens */}
        <motion.div
          layout
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 xl:mx-0 xl:px-0 xl:pb-0 xl:grid xl:grid-cols-5 xl:overflow-visible"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => openProject(project)}
                className={`group relative w-[82%] sm:w-[46%] md:w-[38%] lg:w-[30%] shrink-0 snap-start xl:w-auto rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden ${
                  project.liveUrl ? 'cursor-pointer' : ''
                }`}
              >
                {/* Media Container */}
                <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-200 dark:border-slate-800">
                  <ProjectLogoPanel
                    project={project}
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Corner Quick Action Overlay */}
                  {project.liveUrl && (
                    <div className="absolute top-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1.5 shadow-md">
                        <span>Visit Site</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-purple-400" />
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Categories */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                      {project.categories.map((cat, i) => (
                        <React.Fragment key={cat}>
                          {i > 0 && <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">//</span>}
                          <span>{cat}</span>
                        </React.Fragment>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Role + period + location */}
                    <div className="mt-1 mb-4">
                      <div className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                        {project.role}
                      </div>
                      {(project.period || project.location) && (
                        <div className="text-xs font-mono uppercase tracking-wide text-slate-500 dark:text-slate-400 mt-0.5">
                          {[project.period, project.location].filter(Boolean).join(' • ')}
                        </div>
                      )}
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Metric line */}
                    {project.metrics && (
                      <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-5 pb-4 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-purple-600 dark:text-purple-400 font-semibold">Outcome: </span>
                        <span className="tabular-nums">{project.metrics}</span>
                      </div>
                    )}
                  </div>

                  {/* Tech Stack List & Action Controls */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-[#1A2236] text-slate-700 dark:text-purple-300 border border-slate-200 dark:border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 pt-2">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 shadow-sm transition-colors"
                        >
                          <span>Explore Project</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      ) : (
                        <span className="flex-1 inline-flex items-center justify-center py-2.5 rounded-xl text-sm font-semibold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-[#1A2236] border border-slate-200 dark:border-slate-800">
                          Live link coming soon
                        </span>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors"
                          title="Source Code"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty category state */}
        {filteredProjects.length === 0 && (
          <div className="py-12 text-center rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
            No {selectedCategory.toLowerCase()} projects published yet. Check back soon.
          </div>
        )}

      </div>
    </section>
  );
};
