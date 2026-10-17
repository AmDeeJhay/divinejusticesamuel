import type { IconType } from 'react-icons';
import { TbApi } from 'react-icons/tb';

// Official full-colour logos (devicon, Wikimedia Commons, playwright.dev)
const logos = import.meta.glob<string>('../assets/tools/*.svg', { eager: true, import: 'default' });
const logo = (name: string) => logos[`../assets/tools/${name}.svg`];

export interface Tool {
  name: string;
  tag: string;
  caption: string;
  /** Official logo file; tools without a brand (e.g. REST) use `icon` instead */
  image?: string;
  icon?: IconType;
  color?: string;
}

export const TOOLS: Tool[] = [
  { name: 'React', tag: 'Library', caption: 'Hooks / Components / UI', image: logo('react') },
  { name: 'Next.js', tag: 'Framework', caption: 'App Router / SSR / SEO', image: logo('nextjs') },
  { name: 'TypeScript', tag: 'Language', caption: 'Type Safety / Generics', image: logo('typescript') },
  { name: 'JavaScript', tag: 'Core', caption: 'ESNext / Async', image: logo('javascript') },
  { name: 'Vue.js', tag: 'Framework', caption: 'Vue 3 / Composition API', image: logo('vuejs') },
  { name: 'Tailwind CSS', tag: 'Styling', caption: 'Utility-first / Design Systems', image: logo('tailwindcss') },
  { name: 'HTML5 & CSS3', tag: 'Core Web', caption: 'Semantic / Responsive', image: logo('html5') },
  { name: 'React Native', tag: 'Mobile', caption: 'iOS & Android Apps', image: logo('reactnative') },
  { name: 'Ionic', tag: 'Mobile', caption: 'Hybrid Apps / Capacitor', image: logo('ionic') },
  { name: 'Vite', tag: 'Bundler', caption: 'HMR / Fast Builds', image: logo('vite') },
  { name: 'AWS', tag: 'Cloud', caption: 'Hosting / Storage / Compute', image: logo('aws') },
  { name: 'Azure', tag: 'Cloud', caption: 'App Services / Static Web Apps', image: logo('azure') },
  { name: 'Google Cloud', tag: 'Cloud', caption: 'Compute / Cloud Run', image: logo('googlecloud') },
  { name: 'Cloudflare', tag: 'Edge', caption: 'DNS / CDN / Security', image: logo('cloudflare') },
  { name: 'Docker', tag: 'Containers', caption: 'Images / Compose', image: logo('docker') },
  { name: 'Kubernetes', tag: 'Orchestration', caption: 'Deployments / Scaling', image: logo('kubernetes') },
  { name: 'Terraform', tag: 'IaC', caption: 'Infrastructure as Code', image: logo('terraform') },
  { name: 'GitHub Actions', tag: 'CI/CD', caption: 'Pipelines / Auto Deploys', image: logo('githubactions') },
  { name: 'Jenkins', tag: 'CI/CD', caption: 'Build Pipelines / Automation', image: logo('jenkins') },
  { name: 'Jest', tag: 'Testing', caption: 'Unit / Integration Tests', image: logo('jest') },
  { name: 'Playwright', tag: 'Testing', caption: 'End-to-End / Cross-Browser', image: logo('playwright') },
  { name: 'Git', tag: 'DevOps', caption: 'Version Control / Branching', image: logo('git') },
  { name: 'GitHub', tag: 'DevOps', caption: 'Repos / Code Reviews', image: logo('github') },
  { name: 'REST APIs', tag: 'Networking', caption: 'Integrations / Auth', icon: TbApi, color: '#7C3AED' },
  { name: 'Google Maps', tag: 'Location', caption: 'Live Tracking / Routing', image: logo('googlemaps') },
  { name: 'Twilio', tag: 'Messaging', caption: 'SMS / OTP / Alerts', image: logo('twilio') },
  { name: 'Paystack', tag: 'Payments', caption: 'Checkout / Webhooks', image: logo('paystack') },
  { name: 'PostgreSQL', tag: 'Database', caption: 'Relational Data / SQL', image: logo('postgresql') },
  { name: 'MongoDB', tag: 'Database', caption: 'Document Store', image: logo('mongodb') },
];
