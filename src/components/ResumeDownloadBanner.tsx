import React from 'react';
import { FileText, Download, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';

interface ResumeDownloadBannerProps {
  onOpenResume: () => void;
}

export const ResumeDownloadBanner: React.FC<ResumeDownloadBannerProps> = ({ onOpenResume }) => {
  const { resume } = PORTFOLIO_DATA;

  const handleQuickDownloadMD = (e: React.MouseEvent) => {
    e.stopPropagation();
    const markdownContent = `# ${resume.fullName}
${resume.summary}

Email: ${resume.contact.email}
Location: ${resume.contact.location}
Portfolio: ${resume.contact.portfolio}
GitHub: https://${resume.contact.github}
X: https://${resume.contact.x}

Education:
${resume.education.map((e) => `- ${e.degree}, ${e.institution} (${e.period})`).join('\n')}

Certifications:
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

  return (
    <section id="resume" className="py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-6 sm:p-8 bg-slate-900 dark:bg-[#111827] text-white border border-slate-800 dark:border-slate-700/70 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-xs font-mono text-purple-300 mb-3">
                <FileText className="w-3.5 h-3.5 text-purple-400" />
                <span>Verified Curriculum Vitae</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                Review Career History, Leadership &amp; Credentials
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Featuring verified engineering metrics, education credentials, cloud certifications, and technical stack capabilities formatted for executive review.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={onOpenResume}
                className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Open Full Resume</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleQuickDownloadMD}
                className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm border border-slate-700 transition-all flex items-center gap-2 cursor-pointer"
                title="Download Markdown Version"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Save .MD</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
