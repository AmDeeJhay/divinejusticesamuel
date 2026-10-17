import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';
import { CategoryTabs, EmptyCategory, ProjectCard, useProjectFilter } from './ProjectCard.tsx';

/** Full project list, served at #/projects */
export const ProjectsPage: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const { categories, selectedCategory, setSelectedCategory, filtered } = useProjectFilter(projects);

  return (
    <section className="pt-28 sm:pt-32 pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <a
          href="#projects"
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to home</span>
        </a>

        {/* Page Header */}
        <div className="mb-8">
          <div className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2 font-mono">
            All Works
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Projects
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
            {projects.length} production products across web, mobile, and cloud. Click a project to visit it live.
          </p>
        </div>

        <CategoryTabs
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
          layoutId="pageCategoryPill"
        />

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && <EmptyCategory category={selectedCategory} />}

      </div>
    </section>
  );
};
