import React from 'react';
import { motion } from 'motion/react';
import { TOOLS } from '../data/tools.ts';

export const ToolsSection: React.FC = () => (
  <section id="tools" className="py-12 sm:py-14 border-t border-slate-200 dark:border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Section Header */}
      <div className="mb-8">
        <div className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2 font-mono">
          Toolbox
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
          Tools &amp; Platforms
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
          {TOOLS.length} tools I use day to day to design, build, integrate, and deploy products.
        </p>
      </div>

      {/* Tool Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3">
        {TOOLS.map((tool, idx) => {
          const Icon = tool.icon;
          return (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: (idx % 7) * 0.03 }}
              className="group p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* Index + Tag */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 tabular-nums">
                  #{String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-[9px] font-mono font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 truncate">
                  {tool.tag}
                </span>
              </div>

              {/* Logo */}
              {/* White tile in both themes so official logo colours (incl. black marks) stay true */}
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                {tool.image ? (
                  <img src={tool.image} alt="" className="w-7 h-7 object-contain" />
                ) : Icon ? (
                  <Icon className="w-6 h-6" style={{ color: tool.color }} aria-hidden="true" />
                ) : null}
              </div>

              {/* Name + Caption */}
              <div className="text-center">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight truncate">
                  {tool.name}
                </h3>
                <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 mt-0.5 truncate" title={tool.caption}>
                  {tool.caption}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

    </div>
  </section>
);
