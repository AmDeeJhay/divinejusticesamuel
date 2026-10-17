import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './components/ThemeContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ProjectShowcase } from './components/ProjectShowcase.tsx';
import { ProjectsPage } from './components/ProjectsPage.tsx';
import { ExperienceTimeline } from './components/ExperienceTimeline.tsx';
import { SkillsSection } from './components/SkillsSection.tsx';
import { ToolsSection } from './components/ToolsSection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { ResumeDownloadBanner } from './components/ResumeDownloadBanner.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';

const PROJECTS_ROUTE = '#/projects';

/** Hash-based routing (works on GitHub Pages without server rewrites): #/projects vs. the home page */
function useRoute() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const route = hash.startsWith(PROJECTS_ROUTE) ? 'projects' : 'home';

  // Page changes: projects page starts at the top; home jumps to the linked section (e.g. #about)
  useEffect(() => {
    if (route === 'projects') {
      window.scrollTo({ top: 0 });
    } else if (hash.length > 1) {
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
    }
  }, [route, hash]);

  return route;
}

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const route = useRoute();

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-slate-900 dark:bg-[#0A0F1C] dark:text-slate-100 transition-colors duration-200 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
        
        {/* Floating Island Navbar (detached from borders) */}
        <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-1">
          {route === 'projects' ? (
            <ProjectsPage />
          ) : (
            <>
              <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
              <AboutSection />
              <ProjectShowcase />
              <ExperienceTimeline />
              <SkillsSection />
              <ToolsSection />
              <TestimonialsSection />
              <ResumeDownloadBanner onOpenResume={() => setIsResumeModalOpen(true)} />
              <ContactSection />
            </>
          )}
        </main>

        {/* Minimalist Footer */}
        <Footer />

        {/* Downloadable / Printable Resume Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />

      </div>
    </ThemeProvider>
  );
}
