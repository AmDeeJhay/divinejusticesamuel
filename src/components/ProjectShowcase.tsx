import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';
import { CategoryTabs, EmptyCategory, ProjectCard, useProjectFilter } from './ProjectCard.tsx';

/** How many projects the home page shows before "See all projects" */
const HOME_LIMIT = 4;

export const ProjectShowcase: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const { categories, selectedCategory, setSelectedCategory, filtered } = useProjectFilter(projects);
  const visible = filtered.slice(0, HOME_LIMIT);

  return (
    <section id="projects" className="py-12 sm:py-14 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
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

          <a
            href="#/projects"
            className="group hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            <span>View all {projects.length} projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <CategoryTabs
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
          layoutId="homeCategoryPill"
        />

        {/* Project Row: one straight line. 4 across on desktop; swipeable row with snap on smaller screens */}
        <motion.div
          layout
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 lg:pb-0 lg:grid lg:grid-cols-4 lg:overflow-visible"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                className="w-[82%] sm:w-[46%] md:w-[38%] shrink-0 snap-start lg:w-auto"
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && <EmptyCategory category={selectedCategory} />}

        {/* See all projects */}
        <div className="mt-8 flex justify-center">
          <a
            href="#/projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 shadow-sm transition-colors"
          >
            <span>
              See all projects
              {filtered.length > HOME_LIMIT && ` (${filtered.length - HOME_LIMIT} more)`}
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
