// Resume content, transcribed from the main CV. Rendered by ResumeModal (preview + print-to-PDF).

export interface ResumeEntry {
  title: string;
  /** Bold, shown after the title on the same line */
  org?: string;
  /** Italic line under the title; gets a link icon when `url` is set */
  subtitle?: string;
  url?: string;
  date?: string;
  location?: string;
  description?: string;
  /** Detailed format: concrete work done, one bullet each */
  bullets?: string[];
  /** Rendered as "Tech: …" under the bullets */
  tech?: string;
}

export interface ResumeSkill {
  name: string;
  /** 0–100; renders the bar beside the name */
  level?: number;
  description?: string;
  /** Extra paragraphs under the description */
  details?: string[];
}

export const RESUME = {
  /** Set to a PDF path in /public (e.g. 'DivineJustice-Samuel-Resume.pdf') to download that file instead of printing */
  pdf: undefined as string | undefined,

  name: 'Divine-Justice Anthony Samuel',
  headline: 'Senior Frontend & Mobile Engineer',
  contact: {
    email: 'samueldivine2021@gmail.com',
    phone: '07044573745',
    location: 'Nigeria',
    linkedin: { label: 'linkedin.com/DivineJustice-Samuel', url: 'https://www.linkedin.com/in/DivineJustice-Samuel' },
    x: { label: 'x.com/awscloudboy', url: 'https://x.com/awscloudboy' },
    github: { label: 'github.com/AmDeeJhay', url: 'https://github.com/AmDeeJhay' },
  },

  profile:
    'Senior Frontend & Mobile Engineer with 4+ years of experience building production web and mobile products across logistics, payroll and payments, workforce management, food, and business software. I work in React, Next.js, TypeScript, Vue, React Native and Ionic, and own delivery from interface architecture to cloud deployment on AWS. I engineered a web platform that drove a 40% increase in user engagement and a 30% growth in conversion rates.',

  experience: [
    {
      title: 'Praci | Frontend Engineer',
      subtitle: 'praci.io',
      url: 'https://praci.io',
      date: '2026 – present',
      location: 'UK | Remote',
      bullets: [
        'Build product features for a workforce platform connecting staffing agencies with the businesses they supply, covering rota, attendance, timesheets, payroll, invoicing and compliance.',
        'Develop responsive, maintainable interfaces in Next.js and TypeScript, with Zustand for application state and Jest tests for reliability.',
        'Monitor deployments and handle cloud configuration on AWS so releases reach production smoothly.',
      ],
      tech: 'Next.js, TypeScript, Tailwind CSS, State Management (Zustand), Jest, Git, AWS',
    },
    {
      title: 'AppLift Technologies Limited | Frontend Engineer',
      subtitle: 'applift.xyz',
      url: 'https://applift.xyz',
      date: '2023 – present',
      location: 'Uyo, Nigeria',
      bullets: [
        'Helped build the product and engineering side of a software studio delivering MVPs, custom platforms and internal tools for founders, SMEs and businesses across Africa.',
        'Build client products end to end with Next.js and Tailwind CSS, from interface architecture through to cloud deployment.',
        'Lead client engagement: pitching software solutions to businesses, scoping requirements and translating business needs into product plans.',
      ],
      tech: 'Next.js, React, TypeScript, Tailwind CSS, State Management (Zustand)',
    },
    {
      title: 'Patnaar | Mobile Engineer',
      subtitle: 'patnaar.com',
      url: 'https://patnaar.com',
      date: '02/2026 – 03/2026',
      location: 'Nigeria',
      bullets: [
        'Built the Patnaar mobile app, an all-in-one payroll and team payment platform that simplifies how businesses send, track and manage employee payouts.',
        'Set up and managed the cloud infrastructure behind the application alongside the mobile build.',
      ],
    },
    {
      title: 'Swiftly Xpress | Lead Frontend Engineer',
      subtitle: 'swiftlyxpress.com',
      url: 'https://swiftlyxpress.com',
      date: '09/2025 – 2026',
      location: 'Uyo, Nigeria',
      bullets: [
        'Architected and built a production-grade last-mile logistics platform serving real users, with customer and rider experiences on web and mobile.',
        'Built a scalable, responsive UI with Next.js/TypeScript and Ionic React + Vite on a modern frontend architecture.',
        'Implemented booking, user authentication, dashboard management, and real-time ride and order updates over WebSockets.',
        'Integrated payment gateways, email notifications and chat support, and improved performance through optimised rendering and efficient state management.',
        'Deployed the application on cloud infrastructure and managed production releases and updates.',
      ],
      tech: 'Next.js, TypeScript, Ionic React, React Native, Vite, Tailwind CSS, State Management (Zustand), WebSockets, Google Maps, Twilio, Paystack, MongoDB, PostgreSQL, AWS, Cloudflare',
    },
    {
      title: 'Fraiche Palace | Frontend Developer',
      subtitle: 'eatfraiche.com',
      url: 'https://eatfraiche.com',
      date: '2024 – 2025',
      location: 'Uyo, Nigeria',
      bullets: [
        'Built the Fraîche restaurant website with Next.js and TypeScript, presenting authentic African cuisine, local Akwa Ibom delicacies and classic Nigerian dishes.',
        'Translated UI/UX designs into responsive, production-ready pages, working closely with the design team.',
        'Collaborated with the backend developer to integrate APIs and online payments.',
      ],
      tech: 'Next.js, TypeScript, Tailwind CSS, State Management (Zustand), Paystack',
    },
    {
      title: 'Reggie | Lead Frontend Developer',
      date: '10/2023 – 12/2023',
      location: 'Uyo, Nigeria',
      bullets: [
        'Led frontend development of a business management system as the Lead Frontend Developer on the team.',
        'Supported day-to-day delivery and operations, working efficiently and productively with all team members.',
      ],
    },
  ] as ResumeEntry[],

  skills: {
    left: [
      {
        name: 'Frontend Development',
        level: 100,
        description: 'With advanced frontend frameworks, I convert beautiful user interfaces into working applications',
      },
      { name: 'Responsive Web design' },
      { name: 'AWS Cloud' },
      {
        name: 'Terraform(Infrastructure as a Code)',
        description:
          'Implemented small-scale deployments integrating AWS resources for testing, development environments and managing configurations in TypeScript projects.',
      },
      { name: 'CDKTF with TypeScript', level: 60 },
    ] as ResumeSkill[],
    right: [
      { name: 'Time management and Organizational skill' },
      { name: 'UI and UX Assurance.' },
      { name: 'Community Lead and Community Management' },
      {
        name: 'Serverless API & Frontend Deployment (TypeScript + AWS Lambda + Terraform)',
        description:
          'Developed a TypeScript-based serverless API on AWS Lambda with API Gateway and integrated it with a Next.js frontend.',
        details: [
          'Terraform scripts provisioned Lambda, API Gateway, DynamoDB, and IAM roles.',
          'Automated deployments via GitHub Actions + Terraform Cloud.',
          'Configured CloudWatch logging and environment variables securely via AWS Systems Manager (SSM).',
        ],
      },
    ] as ResumeSkill[],
    keywords:
      'SCSS, Tailwind, Next.Js, React.Js, Git, Github, Vue, Remix.Js, Terraform, AWS Cloud, Google Cloud, ReactNative, Ionic',
  },

  education: [
    { title: 'Cloud Practitioner', subtitle: 'AWS Skill builder', date: '2024', location: 'Nigeria' },
    { title: 'Cloud Engineer', subtitle: 'Cloud with Anne Academy', date: '2025', location: 'Nigeria' },
    {
      title: 'AWS Student Builder Group Leader',
      subtitle: 'University of Uyo',
      date: '03/2025 – 03/2026',
      location: 'Uyo, Nigeria',
      description: 'Led the campus cloud community and hosted AWS Student Community Day.',
    },
    {
      title: 'AI/ML Lead, Google Developer Groups on Campus',
      subtitle: 'University of Uyo',
      location: 'Uyo, Nigeria',
      description: 'Led the AI/ML track, running sessions and study jams for the campus developer community.',
    },
    {
      title: 'Meta Frontend Development',
      subtitle: 'Coursera',
      date: '2022 – 2022',
      description: 'I got a scholarship on Coursera to learn Frontend Web Development.',
    },
    { title: 'Frontend Development', subtitle: 'Roothub', location: 'Uyo, Nigeria' },
    {
      title: 'Google Cybersecurity',
      subtitle: 'Coursera',
      date: '2023',
      description: 'I got a Scholarship to learn Cybersecurity on coursera',
    },
    { title: 'Cybersecurity', subtitle: 'Elcharis Initiative for Africa', date: '2023', location: 'Uyo, Nigeria' },
    { title: 'First Degree, Computer Engineering', subtitle: 'University of Uyo', location: 'Uyo, Nigeria' },
  ] as ResumeEntry[],

  projects: [
    {
      title: 'Static Website Deployment on AWS',
      date: '2025',
      description:
        'Created a Next.Js app and automated the AWS infrastructure setup using Terraform. Provisioned an S3 bucket, configured CloudFront distribution, and implemented CI/CD for automated deployments.',
    },
    {
      title: 'Building on Aleo Blockchain',
      subtitle: 'Building and deploying smart contract using Leo',
      date: '2024',
    },
  ] as ResumeEntry[],

  declaration:
    'I, DivineJustice Samuel, declare that every information given here is true and binding on me. I understand that any misstatement or misrepresentation described herein may lead to my disqualification or dismissal by the Client.',
  signatory: { name: 'DivineJustice Anthony Samuel', location: 'Nigeria' },
};

/** Download the resume: the PDF file if one is configured, otherwise print the sheet (Save as PDF). */
export const downloadResume = () => {
  if (RESUME.pdf) {
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}${RESUME.pdf}`;
    link.download = RESUME.pdf;
    link.click();
  } else {
    window.print();
  }
};
