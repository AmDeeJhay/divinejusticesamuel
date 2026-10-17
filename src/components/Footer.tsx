import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { Logo } from './Logo.tsx';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';

export const Footer: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0A0F1C] py-10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <Logo markClassName="w-7 h-7" textClassName="text-base" />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Senior Frontend &amp; Mobile Engineer.
            </p>
          </div>

          {/* Clean Navigation Links with Typographic Separators */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600 dark:text-slate-400 font-medium">
            <a href="#hero" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Home
            </a>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <a href="#projects" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Works
            </a>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <a href="#experience" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Experience
            </a>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <a href="#skills" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Capabilities
            </a>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <a href="#contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <a
                href="https://github.com/amdeejhay"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-[#1A2236] hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/DivineJustice-Samuel"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-[#1A2236] hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/awscloudboy"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-[#1A2236] hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                aria-label="X (Twitter)"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a
                href="mailto:samueldivine2021@gmail.com"
                className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-[#1A2236] hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-xl bg-slate-100 dark:bg-[#1A2236] text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
