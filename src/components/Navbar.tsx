import React, { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'motion/react';
import { Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from './ThemeContext.tsx';
import { useLiquidGlass } from './LiquidGlass.tsx';
import { Logo } from './Logo.tsx';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const glass = useLiquidGlass();

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Works', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Endorsements', href: '#testimonials' },
    { name: 'Resume', href: '#resume', action: onOpenResume },
  ];

  // Active section spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'experience', 'skills', 'testimonials', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Reading Progress Bar directly pinned at top */}
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-purple-600 z-50 pointer-events-none"
      />

      {/* Floating Island Navigation Bar: Detached from top, left, and right */}
      <div className="fixed top-3 sm:top-4 left-3 right-3 sm:left-6 sm:right-6 max-w-7xl mx-auto z-40 transition-all duration-300">
        {glass.filter}
        <header
          style={{ backdropFilter: glass.backdropFilter, WebkitBackdropFilter: glass.backdropFilter }}
          className="liquid-glass relative w-full rounded-full bg-white/30 dark:bg-[#111827]/35 border border-white/70 dark:border-white/10 pl-5 pr-3 sm:pl-7 sm:pr-3.5 h-16 flex items-center justify-between gap-4 md:gap-8">
          {glass.sheen}

          {/* Zone 1: Single-element Brand Wordmark (No /architect) */}
          <a
            href="#hero"
            className="relative group flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 transition-opacity"
          >
            <Logo />
            <span className="sr-only">Home</span>
          </a>

          {/* Zone 2: Navigation Links including 'Home' */}
          <nav className="relative hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
            {navLinks.map((link) => {
              const isResume = link.name === 'Resume';
              const isActive = activeSection === link.href.replace('#', '');

              if (isResume) {
                return (
                  <button
                    key={link.name}
                    onClick={() => {
                      onOpenResume();
                    }}
                    className="cursor-pointer px-3 py-1.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-all whitespace-nowrap shrink-0 flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-1.5 rounded-full transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-purple-600 dark:text-purple-300 font-semibold bg-purple-50 dark:bg-purple-500/10'
                      : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-300 hover:bg-slate-100/80 dark:hover:bg-slate-800/70'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Controls (Theme Toggle + Get in Touch + Mobile Toggle) */}
          <div className="relative flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark and light visual mode"
              className="p-2 sm:p-2.5 rounded-full text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 bg-slate-100 dark:bg-[#1A2236] border border-slate-200 dark:border-slate-800 hover:border-purple-500/30 transition-all cursor-pointer flex items-center justify-center"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-purple-400" />
              ) : (
                <Moon className="w-4 h-4 text-purple-600" />
              )}
            </button>

            {/* Primary Action Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-white bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 rounded-full shadow-sm transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer"
            >
              Get In Touch
            </a>

            {/* Mobile / Tablet Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-[#1A2236] border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800/70 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </header>

        {/* Floating Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2 rounded-2xl bg-white/95 dark:bg-[#111827]/95 backdrop-blur-xl border border-slate-200 dark:border-slate-700/70 shadow-2xl p-4 sm:p-5"
            >
              <div className="flex flex-col gap-1 text-sm font-medium">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (link.action) link.action();
                    }}
                    className="py-2.5 px-3 rounded-xl text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-slate-800/70 transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-3 w-full py-3 text-center text-xs font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-xl shadow-md"
                >
                  Get In Touch
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
