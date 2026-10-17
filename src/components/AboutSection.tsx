import React from 'react';
import { motion } from 'motion/react';
import { Target, CloudCog, Users, GraduationCap } from 'lucide-react';

const Strong: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <strong className="font-semibold text-slate-900 dark:text-white">{children}</strong>
);

const principles = [
  {
    icon: Target,
    title: 'Product-First Engineering',
    body: 'Understand the requirement before the code: scope, trade-offs, and the business outcome the feature has to serve.',
  },
  {
    icon: CloudCog,
    title: 'Cloud-Backed Delivery',
    body: 'CI/CD pipelines, AWS and Cloudflare deployments, and infrastructure config so features ship and stay up.',
  },
  {
    icon: Users,
    title: 'Teaching & Community',
    body: 'Helping students get hands-on exposure to cloud computing and modern software development.',
  },
];

export const AboutSection: React.FC = () => (
  <section id="about" className="py-12 sm:py-14 border-t border-slate-200 dark:border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Section Header */}
      <div className="mb-8">
        <div className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2 font-mono">
          About Me
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
          Senior Frontend &amp; Mobile Engineer
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
          Building modern web applications and mobile experiences, backed by scalable cloud infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

        {/* Biography */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-7 p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm"
        >
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
            <p>
              I&apos;m <Strong>DivineJustice Anthony Samuel</Strong>, a senior frontend and mobile engineer who turns ideas into
              production-ready digital products. With <Strong>4+ years</Strong> of professional development experience,
              I work across frontend engineering, mobile development, and cloud infrastructure, with project work
              spanning <Strong>5 industries</Strong>: fintech, delivery, food, management, and consultancy.
            </p>
            <p>
              My toolkit spans <Strong>25+ technologies</Strong>, including{' '}
              <Strong>React, Next.js, TypeScript, Vue, React Native, Tailwind CSS, Vite, AWS</Strong>, and{' '}
              <Strong>Cloudflare</Strong>. I own work end to end: frontend architecture, API integrations (maps, SMS,
              and payments), cloud deployments, CI/CD workflows, and infrastructure configuration, connecting the
              application to the systems that keep it running reliably.
            </p>
            <p>
              Beyond code, I take an ownership-driven approach: understanding product requirements, collaborating
              across teams, and building maintainable solutions for real business needs. I also contribute to developer
              education and community building, helping students gain practical exposure to cloud computing and modern
              software development.
            </p>
          </div>

          {/* Education */}
          <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-start gap-3">
            <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div className="text-xs sm:text-sm">
              <div className="font-semibold text-slate-900 dark:text-white">B.E. Computer Engineering, University of Uyo</div>
              <div className="text-slate-500 dark:text-slate-400 mt-0.5">
                Exploring cloud-native architecture, automation, and distributed systems.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Principles */}
        <div className="lg:col-span-5 space-y-4">
          {principles.map(({ icon: Icon, title, body }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="p-5 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-purple-500/40 shadow-sm transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">{title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  </section>
);
