import avatarImage from '../assets/images/avatar_engineer_portrait_1792144027921.jpg';
import heroWorkspaceImage from '../assets/images/hero_developer_workspace_1792144026942.jpg';
import swiftlyLogo from '../assets/images/swiftlyxpress-logo.png';
import fraicheLogo from '../assets/images/fraiche-logo.png';
import praciLogo from '../assets/images/praci-logo.svg';
import appliftLogo from '../assets/images/applift-logo.png';
import awsSbgLogo from '../assets/images/aws-sbg-logo.svg';
import googleLogo from '../assets/images/google-logo.svg';

export const PROJECT_CATEGORIES = ['Web', 'Mobile', 'Management', 'Consultancy', 'Food', 'Delivery', 'Fintech'] as const;
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export interface Project {
  id: string;
  title: string;
  /** A project can appear under several category tabs */
  categories: ProjectCategory[];
  role: string;
  period?: string;
  location?: string;
  description: string;
  metrics?: string;
  technologies: string[];
  /** Brand mark shown in the logo panel */
  logo?: string;
  /** Logo already contains the name (wordmark): show it alone, on `logoBg` */
  logoIsWordmark?: boolean;
  /** Tile background for logos that need contrast, e.g. white text */
  logoBg?: string;
  /** Full-bleed screenshot; takes precedence over the logo panel */
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: number; note: string }[];
}

export interface ExperienceItem {
  /** Discipline, e.g. "Frontend Developer" */
  role: string;
  period: string;
  location?: string;
  type: string;
  /** First-person summary of the experience */
  description: string;
  /** What I can do for a team or client */
  achievements: string[];
  skills: string[];
}

export interface LeadershipItem {
  role: string;
  org: string;
  /** Official brand logo file */
  logo: string;
  period?: string;
  description: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  relationship: string;
  avatar: string;
  rating: number;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'DivineJustice Samuel',
    role: 'Lead Full-Stack & Distributed Systems Architect',
    bio: 'Crafting resilient cloud-native architectures, low-latency streaming applications, and pixel-precise digital interfaces with modern purple and charcoal aesthetics.',
    location: 'London, UK / Remote Worldwide',
    email: 'samueldivine2021@gmail.com',
    status: 'Available for Full-time / Contract',
    workMode: 'Remote & Relocation Ready',
    avatar: avatarImage,
    heroWorkspace: heroWorkspaceImage,
    stats: [
      { label: 'Years Experience', value: '4+', caption: 'Professional development' },
      { label: 'Tools & Platforms', value: '25+', caption: 'Across web, mobile & cloud' },
      { label: 'Industries', value: '5', caption: 'Fintech, delivery, food, management, consultancy' },
      { label: 'Delivery Surfaces', value: '3', caption: 'Web, mobile & cloud infra' },
    ],
    socials: [
      { name: 'GitHub', url: 'https://github.com/amdeejhay', username: 'github.com/amdeejhay' },
      { name: 'X (Twitter)', url: 'https://x.com/awscloudboy', username: '@awscloudboy' },
      // Discord has no public profile URL by username, so the card copies it instead
      { name: 'Discord', url: '', username: '@amdeejhay' },
      { name: 'Email', url: 'mailto:samueldivine2021@gmail.com', username: 'samueldivine2021@gmail.com' },
    ],
  },

  projects: [
    {
      id: 'swiftlyxpress',
      title: 'SwiftlyXpress',
      categories: ['Web', 'Mobile', 'Delivery'],
      role: 'Frontend Developer & Cloud Engineer',
      period: '2025 – 2026',
      location: 'Nigeria',
      description:
        'Last-mile delivery platform with customer and rider apps: real-time GPS tracking, automated routing, and instant digital proof of delivery that keep shipments secure for individual and commercial vendors.',
      logo: swiftlyLogo,
      liveUrl: 'https://swiftlyxpress.com',
      technologies: [
        'Next.js', 'React Native', 'Ionic', 'Tailwind CSS', 'Zustand', 'AWS', 'Cloudflare',
        'Google Maps', 'Twilio', 'Paystack', 'MongoDB', 'PostgreSQL',
      ],
    },
    {
      id: 'fraiche',
      title: 'Fraîche',
      categories: ['Web', 'Food'],
      role: 'Frontend Developer',
      period: '2023 – 2024',
      location: 'Akwa Ibom, Nigeria',
      description:
        'African flavours. Freshly prepared. Delivered to you. Website for Fraîche Restaurant, a modern dining spot serving authentic African cuisine, local Akwa Ibom delicacies, and classic Nigerian dishes.',
      logo: fraicheLogo,
      logoIsWordmark: true,
      logoBg: '#1C1917',
      liveUrl: 'https://eatfraiche.com',
      technologies: ['Next.js', 'Tailwind CSS', 'Zustand', 'Paystack'],
    },
    {
      id: 'praci',
      title: 'Praci',
      categories: ['Web', 'Mobile', 'Management'],
      role: 'Frontend Engineer',
      period: '2026 – Present',
      location: 'UK',
      description:
        'One workforce platform connecting staffing agencies with the businesses they supply: rota, attendance, timesheets, payroll, invoicing, and compliance in a single place, on web and mobile.',
      logo: praciLogo,
      logoIsWordmark: true,
      logoBg: '#FFFFFF',
      liveUrl: 'https://praci.io',
      technologies: ['Next.js', 'Tailwind CSS', 'Zustand', 'Jest', 'Git', 'AWS'],
    },
    {
      id: 'applift',
      title: 'Applift Labs',
      categories: ['Web', 'Consultancy'],
      role: 'Frontend & Cloud Engineer',
      period: '2024 – 2026',
      location: 'Nigeria',
      description:
        'Software development studio building for founders, SMEs, and businesses across Africa: MVPs, custom platforms, and internal tools, with strategy, design, and engineering handled end to end.',
      logo: appliftLogo,
      logoIsWordmark: true,
      logoBg: '#0F172A',
      liveUrl: 'https://applift.xyz',
      technologies: ['Next.js', 'Tailwind CSS', 'Zustand'],
    },
  ] as Project[],

  experience: [
    {
      role: 'Frontend Developer',
      period: '2023 — Present',
      type: 'Web',
      description:
        "I've built and shipped production web frontends for multiple products, from restaurant websites to workforce management platforms. I work mostly in Next.js, React, and TypeScript, styled with Tailwind CSS and tested with Jest.",
      achievements: [
        'Turn designs into fast, responsive, accessible interfaces that stay true to the brand.',
        'Build complex product UIs: dashboards, multi-step flows, forms, and live tracking views.',
        'Set up a frontend codebase that stays maintainable: clear component structure, typed APIs, and Jest tests.',
        'Integrate payments, maps, and third-party APIs cleanly into the user journey.',
      ],
      skills: ['Next.js', 'React', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'Jest', 'Vite'],
    },
    {
      role: 'Mobile Developer',
      period: '2025 — Present',
      type: 'iOS & Android',
      description:
        'I have built customer and rider apps for a last-mile delivery service: customers book and track packages live, while riders receive jobs, follow routes, and capture proof of delivery. I build cross-platform with React Native and Ionic, so one codebase ships to both iOS and Android.',
      achievements: [
        'Build iOS and Android apps from a single React Native or Ionic codebase.',
        'Add live GPS tracking, maps, and route guidance with Google Maps.',
        'Wire up SMS / OTP verification with Twilio and in-app payments with Paystack.',
        'Design separate app experiences for different users, such as customers and field staff.',
      ],
      skills: ['React Native', 'Ionic', 'Google Maps', 'Twilio', 'Paystack'],
    },
    {
      role: 'Cloud Engineer',
      period: '2024 — Present',
      type: 'Infrastructure',
      description:
        "Alongside the frontend, I've owned the cloud side of several companies' infrastructure: deploying applications, monitoring deployments, configuring infrastructure, and keeping environments healthy. I work mainly on AWS and Cloudflare, with hands-on experience across Azure and Google Cloud.",
      achievements: [
        'Deploy and host web apps, APIs, and databases on AWS, Azure, or Google Cloud.',
        'Monitor deployments and configure AWS services so releases reach production smoothly.',
        'Put Cloudflare in front of your product for DNS, CDN caching, and security.',
        'Automate build, test, and deploy pipelines with GitHub Actions or Jenkins.',
        'Containerise services with Docker, run them on Kubernetes, and define infrastructure as code with Terraform.',
      ],
      skills: ['AWS', 'Azure', 'Google Cloud', 'Cloudflare', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Jenkins'],
    },
    {
      role: 'Solutions Architect',
      period: '2024 — Present',
      type: 'Architecture',
      description:
        'I help founders and SMEs turn business problems into working systems, from MVPs to custom platforms and internal tools. I start from the requirement, choose the stack and services, and connect the web app, mobile apps, integrations, and cloud into one product.',
      achievements: [
        'Translate business requirements into a clear technical plan and architecture.',
        'Choose the right stack, cloud services, and third-party integrations for your budget and scale.',
        'Design how web, mobile, APIs, and data (PostgreSQL, MongoDB) fit together.',
        'Take a product from idea to MVP to production, and mentor the team along the way.',
      ],
      skills: ['System Design', 'REST APIs', 'PostgreSQL', 'MongoDB', 'AWS', 'Cloudflare'],
    },
  ] as ExperienceItem[],

  leadership: [
    {
      role: 'Student Builder Group Leader',
      org: 'AWS Student Builder Group',
      logo: awsSbgLogo,
      description:
        'Led the campus AWS Student Builder Group, building a community where students learn cloud computing by doing, not just reading about it.',
      highlights: [
        'Hosted AWS Student Community Day, bringing students, speakers, and cloud practitioners together for talks, workshops, and networking.',
        'Ran hands-on sessions that took students from cloud fundamentals to deploying real workloads on AWS.',
        'Pointed members to AWS learning paths and certification resources to grow their careers in cloud.',
      ],
    },
    {
      role: 'AI/ML Lead',
      org: 'Google Developer Groups on Campus',
      logo: googleLogo,
      description:
        'Led the AI/ML track for GDG on Campus, helping students go from curious to confident with machine learning.',
      highlights: [
        'Planned and delivered AI/ML sessions and study jams for the campus developer community.',
        'Guided students from core concepts to building and presenting their first ML projects.',
        'Worked with the core team to grow and sustain an active developer community on campus.',
      ],
    },
  ] as LeadershipItem[],

  skillCategories: [
    {
      title: 'Frontend Engineering',
      description: 'Fast, accessible, and maintainable web interfaces and design systems',
      skills: [
        { name: 'React & Next.js', level: 94, note: 'Hooks, App Router, SSR, SEO' },
        { name: 'TypeScript / JavaScript', level: 93, note: 'Strict typing, ESNext, async patterns' },
        { name: 'Vue.js', level: 85, note: 'Vue 3, Composition API' },
        { name: 'Tailwind CSS & HTML5/CSS3', level: 96, note: 'Responsive layouts, semantic markup, design systems' },
        { name: 'Vite', level: 90, note: 'Fast builds, HMR, modern tooling' },
      ],
    },
    {
      title: 'Mobile & Integrations',
      description: 'Cross-platform apps and the third-party services that power them',
      skills: [
        { name: 'React Native', level: 88, note: 'iOS & Android apps from one codebase' },
        { name: 'Ionic', level: 85, note: 'Hybrid mobile apps with Capacitor' },
        { name: 'REST APIs', level: 93, note: 'API integration, auth flows, error handling' },
        { name: 'Google Maps Platform', level: 88, note: 'Live GPS tracking and delivery routing' },
        { name: 'Twilio & Paystack', level: 86, note: 'SMS / OTP notifications and payment checkout' },
      ],
    },
    {
      title: 'Cloud, Data & DevOps',
      description: 'Deploying, securing, and running products reliably in production',
      skills: [
        { name: 'AWS', level: 88, note: 'Cloud hosting, storage, and compute' },
        { name: 'Cloudflare', level: 87, note: 'DNS, CDN, edge security' },
        { name: 'CI/CD & Git / GitHub', level: 90, note: 'Automated pipelines, version control, code reviews' },
        { name: 'PostgreSQL & MongoDB', level: 83, note: 'Relational and document data modelling' },
        { name: 'Infrastructure Configuration', level: 84, note: 'Environments, deployments, and cloud setup' },
      ],
    },
  ] as SkillCategory[],

  testimonials: [
    {
      id: 'test-1',
      quote:
        'Samuel is that rare 1% engineer who effortlessly bridges the gap between deep systems architecture and breathtaking frontend finesse. Our latency dropped 60% within weeks of his architectural overhaul, and our team velocity doubled.',
      author: 'Elena Rostova',
      role: 'VP of Engineering',
      company: 'Synthetix Cloud',
      relationship: 'Managed Samuel on Cloud Platform Core',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      rating: 5,
    },
    {
      id: 'test-2',
      quote:
        'Delivered our flagship platform ahead of schedule with zero post-launch bugs. His attention to detail, performance micro-interactions, and code cleanliness set a new standard for our entire engineering organization.',
      author: 'Marcus Vance',
      role: 'Founder & CEO',
      company: 'Aether Distributed Systems',
      relationship: 'Client on Institutional Custody Project',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      rating: 5,
    },
    {
      id: 'test-3',
      quote:
        'The cleanest, most intuitive user experience we have ever deployed. Samuel brought our product vision to life with fluid 60fps animations and rock-solid reliability that held up under immense Black Friday traffic spikes.',
      author: 'Sophia Lin',
      role: 'Chief Product Officer',
      company: 'Lumina Digital Media',
      relationship: 'Product Partner on Commerce Engine',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      rating: 5,
    },
  ] as Testimonial[],

  resume: {
    fullName: 'DivineJustice Anthony Samuel',
    contact: {
      email: 'samueldivine2021@gmail.com',
      location: 'London, United Kingdom (Open to Global Remote)',
      portfolio: 'https://samueldivine.dev',
      github: 'github.com/amdeejhay',
      x: 'x.com/awscloudboy',
    },
    summary:
      'Accomplished Lead Systems & Full-Stack Architect with 8+ years of engineering excellence building high-throughput distributed services, scalable React frontends, and AI-powered systems. Renowned for combining rigorous computer science fundamentals with modern visual aesthetics, sub-second latency targets, and zero-defect deployments.',
    education: [
      {
        degree: 'B.Sc. (Hons) in Computer Science & Software Engineering',
        institution: 'University of London',
        period: '2013 — 2017',
        grade: 'First Class Honours (Summa Cum Laude)',
        honors: 'Dean’s Academic Excellence Award, Best Capstone Engineering Project',
      },
    ],
    certifications: [
      'AWS Certified Solutions Architect – Professional',
      'Certified Kubernetes Administrator (CKA – Linux Foundation)',
      'Google Cloud Certified Professional Cloud Architect',
      'Meta Certified Advanced Full-Stack Software Engineer',
    ],
  },
};
