import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, Copy, Check, Mail, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { SiDiscord } from 'react-icons/si';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export const ContactSection: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: 'Architecture & Engineering',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedSocial, setCopiedSocial] = useState<string | null>(null);

  const copySocial = (name: string, username: string) => {
    navigator.clipboard.writeText(username);
    setCopiedSocial(name);
    setTimeout(() => setCopiedSocial(null), 2000);
  };
  const [errorMsg, setErrorMsg] = useState('');

  const projectTypes = [
    'Architecture & Engineering',
    'AI Systems & Optimization',
    'Full-Stack Web App',
    'Technical Advisory',
    'Other Opportunity',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 75,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#7C3AED', '#8B5CF6', '#1E293B', '#FFFFFF', '#0F172A'],
        });
      } catch {
        // Safe fallback
      }
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-12 sm:py-14 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2 font-mono">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Let&apos;s Build Together
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Have an engineering challenge, an ambitious system to architect, or an open position?
          </p>
        </div>

        {/* 2-Column Grid: Contact Form (Left) & Direct Links/Socials (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#111827] p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm relative">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center flex flex-col items-center"
                >
                  <div className="w-14 h-14 rounded-full bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Message Dispatched Successfully
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mb-8">
                    Thank you for reaching out, <strong className="text-slate-900 dark:text-white">{formData.name}</strong>. 
                    I have received your inquiry regarding <span className="text-purple-600 dark:text-purple-400 font-semibold">{formData.projectType}</span> and will reply within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'Architecture & Engineering',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-[#1A2236] border border-slate-200 dark:border-slate-800 hover:border-purple-500 rounded-xl transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 font-mono">
                        Your Name <span className="text-purple-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Mercer"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#1A2236] border border-slate-200 dark:border-slate-800 focus:border-purple-500 focus:outline-none text-sm text-slate-900 dark:text-white placeholder:text-slate-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 font-mono">
                        Your Email <span className="text-purple-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#1A2236] border border-slate-200 dark:border-slate-800 focus:border-purple-500 focus:outline-none text-sm text-slate-900 dark:text-white placeholder:text-slate-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 font-mono">
                      Project Scope / Inquiry Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#1A2236] border border-slate-200 dark:border-slate-800 focus:border-purple-500 focus:outline-none text-sm text-slate-900 dark:text-white transition-colors cursor-pointer"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 font-mono">
                      Project Details <span className="text-purple-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share your goals, architectural requirements, or timelines..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#1A2236] border border-slate-200 dark:border-slate-800 focus:border-purple-500 focus:outline-none text-sm text-slate-900 dark:text-white placeholder:text-slate-400 transition-colors resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-600 dark:text-red-400 font-medium">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Direct Channels & Social Hub (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Direct Email Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                    Direct Email
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Typical response within 24h
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#1A2236] border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 mt-3">
                <span className="text-xs sm:text-sm font-mono text-purple-600 dark:text-purple-300 truncate">
                  {profile.email}
                </span>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-[#0A0F1C] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700/70 hover:border-purple-500 transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Media Directory */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono mb-3">
                Social &amp; Developer Profiles
              </h3>

              <div className="space-y-2.5">
                {profile.socials
                  .filter((s) => s.name !== 'Email')
                  .map((social) => {
                    const getIcon = (name: string) => {
                      if (name.includes('GitHub')) return <Github className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
                      if (name.includes('LinkedIn')) return <Linkedin className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
                      if (name.includes('X')) return <FaXTwitter className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
                      return <SiDiscord className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
                    };

                    // No profile URL (e.g. Discord): copy the username instead of linking
                    const isCopy = !social.url;
                    const Wrapper = isCopy ? 'button' : 'a';
                    const wrapperProps = isCopy
                      ? { type: 'button' as const, onClick: () => copySocial(social.name, social.username), title: `Copy ${social.name} username` }
                      : { href: social.url, target: '_blank', rel: 'noreferrer' };

                    return (
                      <Wrapper
                        key={social.name}
                        {...wrapperProps}
                        className="group w-full text-left cursor-pointer p-3 rounded-xl bg-slate-50 dark:bg-[#1A2236] border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 transition-all flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800">
                            {getIcon(social.name)}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                              {social.name}
                            </div>
                            <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                              {social.username}
                            </div>
                          </div>
                        </div>

                        {isCopy ? (
                          copiedSocial === social.name ? (
                            <Check className="w-4 h-4 text-purple-500" />
                          ) : (
                            <Copy className="w-4 h-4 text-slate-400 group-hover:text-purple-500 transition-colors" />
                          )
                        ) : (
                          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-purple-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        )}
                      </Wrapper>
                    );
                  })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
