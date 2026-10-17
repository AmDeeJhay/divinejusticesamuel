import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Download, FileText } from 'lucide-react';
import { ResumeSheet } from './ResumeSheet.tsx';
import { downloadResume } from '../data/resume.ts';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
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

  return (
    <>
      {/* Print-only copy of the resume, mounted at <body> level so Save-as-PDF works from anywhere on the site */}
      {createPortal(
        <div className="resume-print" aria-hidden="true">
          <ResumeSheet />
        </div>,
        document.body,
      )}

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-[#0A0F1C]/80 backdrop-blur-sm"
            />

            {/* Viewer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col border border-slate-200 dark:border-slate-700/70"
            >
              {/* Toolbar */}
              <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#1A2236]">
                <div className="flex items-center gap-2 text-xs font-semibold text-purple-600 dark:text-purple-400 font-mono">
                  <FileText className="w-4 h-4" />
                  <span>Resume</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-[#0A0F1C] border border-slate-300 dark:border-slate-700/70 hover:border-purple-500 rounded-lg transition-colors cursor-pointer"
                    title="Print resume"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Print</span>
                  </button>

                  <button
                    onClick={downloadResume}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors shadow-sm cursor-pointer"
                    title="Download resume as PDF"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </button>

                  <button
                    onClick={onClose}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800/70 transition-colors ml-1 cursor-pointer"
                    aria-label="Close resume"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Paper preview */}
              <div className="overflow-y-auto bg-slate-200 dark:bg-[#0A0F1C] p-3 sm:p-8">
                <div className="mx-auto max-w-[794px] bg-white shadow-xl px-5 py-7 sm:px-[70px] sm:py-12">
                  <ResumeSheet />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
