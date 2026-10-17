import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, FileDown, Github, Globe2, Linkedin, Mail, Terminal } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';
import { ImageWithFallback } from './ImageWithFallback.tsx';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { profile } = PORTFOLIO_DATA;
  const [avatarOpen, setAvatarOpen] = useState(false);

  return (
    <section id="hero" className="relative pt-24 sm:pt-28 pb-10 md:pb-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Grid: Left Typography + Right Media Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status indicator (Clean unboxed pill in purple & navy) */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/30 text-xs text-purple-900 dark:text-purple-200">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400" />
                </span>
                <span className="font-semibold tracking-tight">{profile.status}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-xs text-blue-900 dark:text-blue-200">
                <Globe2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span className="font-semibold tracking-tight">{profile.workMode}</span>
              </div>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6 max-w-2xl text-balance">
              Architecting resilient systems and{' '}
              <span className="text-purple-600 dark:text-purple-400">
                high-impact
              </span>{' '}
              digital experiences.
            </h1>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mb-8">
              Hello, I&apos;m <strong className="text-slate-900 dark:text-white font-semibold">DivineJustice Samuel</strong>. 
              Senior frontend &amp; mobile engineer building fast, reliable web and mobile products, from interface architecture all the way to cloud deployment.
            </p>

            {/* Interactive Actions */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 rounded-xl shadow-sm transition-all duration-200 group cursor-pointer"
              >
                <span>Explore Selected Works</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-[#111827] hover:bg-slate-50 dark:hover:bg-[#1A2236] border border-slate-300 dark:border-slate-700/70 rounded-xl shadow-sm transition-all duration-200 cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
                Connect
              </span>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <a
                href="https://github.com/amdeejhay"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1.5"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/DivineJustice-Samuel"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1.5"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="https://x.com/awscloudboy"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1.5"
                title="X (Twitter) Profile"
              >
                <FaXTwitter className="w-4 h-4" />
                <span className="hidden sm:inline">X</span>
              </a>
              <a
                href="mailto:samueldivine2021@gmail.com"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1.5"
                title="Direct Email"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">Email</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Visual Container in Purple/Navy */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl p-2 bg-slate-100 dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xl">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-900">
                <ImageWithFallback
                  src={profile.heroWorkspace}
                  alt="DivineJustice Samuel engineering workspace"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />

                {/* Profile card on media */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-white/95 dark:bg-[#111827]/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onMouseEnter={() => setAvatarOpen(true)}
                      onMouseLeave={() => setAvatarOpen(false)}
                      onFocus={() => setAvatarOpen(true)}
                      onBlur={() => setAvatarOpen(false)}
                      onClick={() => setAvatarOpen((open) => !open)}
                      aria-label="Enlarge profile photo"
                      className={`w-10 h-10 rounded-lg overflow-hidden border shrink-0 cursor-zoom-in transition-all duration-200 ${
                        avatarOpen ? 'border-purple-500 ring-2 ring-purple-500/40 scale-105' : 'border-purple-500/40'
                      }`}
                    >
                      <ImageWithFallback
                        src={profile.avatar}
                        alt="DivineJustice Samuel portrait"
                        className="w-full h-full object-cover"
                      />
                    </button>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">DivineJustice Samuel</h4>
                      <p className="text-xs text-purple-600 dark:text-purple-400 font-mono">Software & Systems</p>
                    </div>
                  </div>

                  <div className="hidden sm:flex flex-col items-end">
                    <span className="text-[11px] font-mono text-purple-600 dark:text-purple-400 flex items-center gap-1 font-semibold">
                      Remote
                    </span>
                    <span className="text-[10px] text-slate-400">Relocation ready</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enlarged portrait: pops out beside the profile card (outside the clipped media box) */}
            <AnimatePresence>
              {avatarOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.25 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.25 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                  className="pointer-events-none absolute z-20 bottom-24 left-3 origin-bottom-left lg:bottom-2 lg:left-auto lg:right-full lg:mr-4 lg:origin-right"
                >
                  <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full p-1.5 bg-white dark:bg-[#111827] border-2 border-purple-500 shadow-2xl shadow-purple-900/30">
                    <ImageWithFallback
                      src={profile.avatar}
                      alt="DivineJustice Samuel portrait, enlarged"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Quick architectural chip */}
            <div className="hidden md:flex absolute -top-3 -right-3 px-3 py-1.5 rounded-lg bg-white dark:bg-[#1A2236] border border-slate-200 dark:border-slate-700/70 shadow-md items-center gap-2 text-xs font-mono text-purple-700 dark:text-purple-300">
              <Terminal className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>Software & Cloud Native</span>
            </div>
          </motion.div>

        </div>

        {/* Full-width 4-Column KPI Metric Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {profile.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-2xl bg-slate-50 dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 hover:border-purple-500/40 transition-all duration-200"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-mono tabular-nums mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {stat.caption}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
