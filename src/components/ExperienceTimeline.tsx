import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, CheckCircle2, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';

export const ExperienceTimeline: React.FC = () => {
  const { experience, leadership } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-12 sm:py-14 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2 font-mono">
            Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Professional Experience & Leadership
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
            The four roles I work in, what I can take on for your team, and the developer communities I&apos;ve led.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-purple-300 dark:border-purple-900/60 space-y-10 sm:space-y-12">
          {experience.map((item, idx) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-2 w-4 h-4 rounded-full bg-white dark:bg-[#0A0F1C] border-2 border-purple-600 dark:border-purple-400 group-hover:scale-125 group-hover:bg-purple-600 transition-all duration-200" />

              {/* Milestone Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-purple-500/40 shadow-sm hover:shadow-md transition-all duration-200">
                
                {/* Meta details bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {item.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                      {item.type}
                    </span>
                    {item.location && (
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Role Narrative */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* What I can do */}
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                  What I can do
                </div>
                <div className="space-y-2 mb-5">
                  {item.achievements.map((achieve, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                      <span>{achieve}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-[#1A2236] text-slate-700 dark:text-purple-300 border border-slate-200 dark:border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership & Community */}
        <div className="mt-12">
          <div className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2 font-mono">
            Leadership &amp; Community
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            Building developer communities
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {leadership.map((item, idx) => {
              return (
                <motion.div
                  key={item.role + item.org}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-purple-500/40 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start gap-4 mb-3">
                    {/* White tile in both themes so the official logo colours stay true */}
                    <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center shrink-0 p-2.5">
                      <img src={item.logo} alt={item.org} className="w-full h-full object-contain" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                        {item.role}
                      </h4>
                      <div className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                        {item.org}
                      </div>
                      {item.period && (
                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-2">
                    {item.highlights.map((point, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
