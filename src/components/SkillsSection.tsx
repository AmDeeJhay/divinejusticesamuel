import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Smartphone, Cloud, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';

export const SkillsSection: React.FC = () => {
  const { skillCategories } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<number>(0);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case 1:
        return <Smartphone className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case 2:
        return <Cloud className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="py-12 sm:py-14 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-8">
          <div className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2 font-mono">
            Technical Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Engineering Capabilities & Tooling
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
            The stack I use to build and ship web, mobile, and cloud products, from the interface to the infrastructure it runs on.
          </p>
        </div>

        {/* Tab Controls for Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {skillCategories.map((category, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={category.title}
                onClick={() => setActiveTab(idx)}
                className={`p-5 rounded-2xl text-left border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white dark:bg-[#111827] border-purple-600 dark:border-purple-500 shadow-md ring-1 ring-purple-600/30'
                    : 'bg-slate-50 dark:bg-[#0A0F1C] border-slate-200 dark:border-slate-800 hover:border-purple-400/50'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-xl ${isActive ? 'bg-purple-50 dark:bg-purple-500/10' : 'bg-slate-200/70 dark:bg-[#1A2236]'}`}>
                    {getCategoryIcon(idx)}
                  </div>
                  <h3 className={`text-sm sm:text-base font-bold ${isActive ? 'text-purple-600 dark:text-purple-400' : 'text-slate-900 dark:text-white'}`}>
                    {category.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {category.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Category Skills Detail Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {skillCategories[activeTab].skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-xl bg-slate-50 dark:bg-[#1A2236] border border-slate-200/80 dark:border-slate-800 hover:border-purple-500/40 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono font-semibold text-purple-600 dark:text-purple-400 tabular-nums">
                    {skill.level}%
                  </span>
                </div>

                {/* Solid Purple Proficiency Bar */}
                <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full bg-purple-600 dark:bg-purple-500"
                  />
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {skill.note}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
