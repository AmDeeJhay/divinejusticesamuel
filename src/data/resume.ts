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
  headline: 'Frontend Developer',
  contact: {
    email: 'samueldivine2021@gmail.com',
    phone: '07044573745',
    location: 'Nigeria',
    linkedin: { label: 'linkedin.com/DivineJustice-Samuel', url: 'https://www.linkedin.com/in/DivineJustice-Samuel' },
    x: { label: 'x.com/awscloudboy', url: 'https://x.com/awscloudboy' },
    github: { label: 'github.com/AmDeeJhay', url: 'https://github.com/AmDeeJhay' },
  },

  profile:
    'I am a Frontend Engineer. I work with organisations and individuals to deliver quality software product and create visually appealing responsive web pages that meets client requirements. I Engineered innovative web platform that propelled competitive edge, leading to a 40% increase in user engagement and a 30% growth in conversion rates.',

  experience: [
    {
      title: 'Frontend Developer,',
      org: 'Reggie',
      date: '10/2023 – 12/2023',
      location: 'Uyo, Nigeria.',
      description:
        'I was hired by the organization to build a business management system. I worked as the Lead Frontend Developer on the team, Assisted with day-to-day operations, working efficiently and productively with all team members.',
    },
    {
      title: 'Frontend Developer,',
      org: 'AppLift Technologies Limited.',
      subtitle: 'Applift',
      url: 'https://applift.xyz',
      date: '2023 – present',
      location: 'Uyo, Nigeria',
      description:
        'As a co-founder, I assisted the team in building the software. My role in Applift was reaching out to clients to pitch potential software solutions for their businesses.',
    },
    {
      title: 'Lead Frontend Engineer',
      subtitle: 'Swiftly Xpress',
      url: 'https://swiftlyxpress.com',
      date: '09/2025 – 2026',
      location: 'Uyo',
      description:
        'I Architected and developed a production-grade logistics platform serving real users, building a scalable and responsive user interface using Next.js/TS and Ionic React + Vite with modern frontend architecture. Implemented core features including booking systems, user authentication, dashboard management, and real-time ride and order updates using WebSockets. Integrated third-party services such as payment gateways, email notifications, and chat support, while improving performance through optimized rendering and efficient state management. Deployed the application using cloud infrastructure and managed production releases and updates.',
    },
    {
      title: 'Frontend Developer',
      subtitle: 'Fraiche Palace',
      url: 'https://eatfraiche.com',
      date: '2024 – 2025',
      location: 'Uyo',
      description:
        'Contributed to the building of fraiche palace site using Next.Js and typescript. Worked closely with the UI/UX team and collaborated with the backend developer on the project.',
    },
    {
      title: 'Mobile Developer',
      subtitle: 'Patnaar',
      date: '02/2026 – 03/2026',
      location: 'Nigeria',
      description:
        'I was hired by the Organisation to build the Patnaar Mobile App as well as the cloud infrastructure of the application. Patnaar is an all-in-one payroll and team payment platform designed to simplify how businesses send, track, and manage employee payouts.',
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
    { title: 'AWS Student Builder Group Leader', subtitle: 'University of Uyo', date: '03/2025 – 03/2026', location: 'Uyo, Nigeria' },
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
