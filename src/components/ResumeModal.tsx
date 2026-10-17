import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Download, Copy, Check, FileText, Award, GraduationCap, Briefcase } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { resume, profile, experience } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadMarkdown = () => {
    const markdownContent = `# ${resume.fullName}
${resume.summary}

Email: ${resume.contact.email}
Location: ${resume.contact.location}
Portfolio: ${resume.contact.portfolio}
GitHub: https://${resume.contact.github}
X: https://${resume.contact.x}

---

## PROFESSIONAL EXPERIENCE

${experience
  .map(
    (exp) => `### ${exp.role}
${exp.period} | ${exp.location ?? exp.type}
${exp.description}

Key Achievements:
${exp.achievements.map((a) => `- ${a}`).join('\n')}
Technologies: ${exp.skills.join(', ')}
`
  )
  .join('\n')}

---

## EDUCATION
${resume.education
  .map(
    (edu) => `### ${edu.degree}
${edu.institution} (${edu.period})
Grade: ${edu.grade}
Honors: ${edu.honors}
`
  )
  .join('\n')}

---

## CERTIFICATIONS
${resume.certifications.map((c) => `- ${c}`).join('\n')}
`;

    const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Samuel_Divine_Resume_2026.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyText = () => {
    const textContent = `${resume.fullName} - ${profile.role}
Email: ${resume.contact.email}
Location: ${resume.contact.location}
Portfolio: ${resume.contact.portfolio}

Summary:
${resume.summary}
`;
    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0A0F1C]/80 backdrop-blur-sm no-print"
        />

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-700/70 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col"
        >
          {/* Action Toolbar Header */}
          <div className="no-print flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#1A2236]">
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-600 dark:text-purple-400 font-mono">
              <FileText className="w-4 h-4" />
              <span>Verified Curriculum Vitae</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-[#0A0F1C] border border-slate-300 dark:border-slate-700/70 hover:border-purple-500 rounded-lg transition-colors cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print / PDF</span>
              </button>

              <button
                onClick={handleDownloadMarkdown}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors shadow-sm cursor-pointer"
                title="Download Markdown Document"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download .MD</span>
              </button>

              <button
                onClick={handleCopyText}
                className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-purple-600 hover:bg-slate-200 dark:hover:bg-slate-800/70 transition-colors cursor-pointer"
                title="Copy Quick Bio"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800/70 transition-colors ml-2 cursor-pointer"
                aria-label="Close resume"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content Container */}
          <div className="overflow-y-auto p-6 sm:p-10 space-y-7 text-slate-900 dark:text-slate-100 bg-white dark:bg-[#111827]">
            
            {/* Header info */}
            <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {resume.fullName}
              </h1>
              <p className="text-base text-purple-600 dark:text-purple-400 font-semibold mt-0.5">
                {profile.role}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400 mt-2 font-mono">
                <span>{resume.contact.location}</span>
                <span>·</span>
                <a href={`mailto:${resume.contact.email}`} className="text-purple-600 dark:text-purple-400 hover:underline">
                  {resume.contact.email}
                </a>
                <span>·</span>
                <span>{resume.contact.github}</span>
              </div>
            </div>

            {/* Executive Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 font-mono mb-2">
                Executive Profile
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {resume.summary}
              </p>
            </div>

            {/* Professional Experience */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 font-mono mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Work History &amp; Leadership
              </h2>
              <div className="space-y-5">
                {experience.map((exp) => (
                  <div key={exp.role} className="border-l-2 border-purple-500/40 pl-4 space-y-1.5">
                    <div className="flex flex-wrap items-center justify-between">
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </div>
                      <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      {exp.description}
                    </p>
                    <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 space-y-0.5">
                      {exp.achievements.map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 font-mono mb-2.5 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Education
              </h2>
              {resume.education.map((edu) => (
                <div key={edu.degree} className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#1A2236] border border-slate-200 dark:border-slate-800">
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </div>
                  <div className="text-xs text-purple-600 dark:text-purple-400 font-medium mt-0.5">
                    {edu.institution} · <span className="text-slate-500">{edu.period}</span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 mt-1.5">
                    {edu.grade} · {edu.honors}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 font-mono mb-2.5 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Verified Industry Certifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {resume.certifications.map((cert) => (
                  <div
                    key={cert}
                    className="p-3 rounded-lg bg-slate-50 dark:bg-[#1A2236] border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300"
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
