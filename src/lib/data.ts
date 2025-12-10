import { Github, Linkedin, Mail } from "lucide-react";
import { type Project, Category, Experience, Icon } from "./types";
import {
  CIcon,
  CPPIcon,
  ExpressIcon,
  GitIcon,
  GoIcon,
  JavascriptIcon,
  LinuxIcon,
  MongodbIcon,
  MotionIcon,
  MysqlIcon,
  NeovimIcon,
  NextIcon,
  NodeIcon,
  PostgresqlIcon,
  PythonIcon,
  ReactIcon,
  RestAPIIcon,
  SupabaseIcon,
  TailwindIcon,
  TypescriptIcon,
  WindowsIcon,
} from "@/components/icons";
import HTMLIcon from "@/components/icons/html";
import CSSIcon from "@/components/icons/css";
import SvelteIcon from "@/components/icons/svelte";

export const socials = [
  {
    icon: Github,
    href: "https://github.com/shojib116",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/shojib116",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:shojib116@gmail.com",
    label: "Email",
  },
];

export const iconMap: Record<string, Icon> = {
  JavaScript: { title: "JavaScript", icon: JavascriptIcon },
  TypeScript: { title: "TypeScript", icon: TypescriptIcon },
  Go: { title: "Go", icon: GoIcon },
  Python: { title: "Python", icon: PythonIcon },
  C: { title: "C", icon: CIcon },
  "C++": { title: "C++", icon: CPPIcon },

  HTML: { title: "HTML", icon: HTMLIcon },
  CSS: { title: "CSS", icon: CSSIcon },
  Svelte: { title: "Svelte", icon: SvelteIcon },
  React: { title: "React", icon: ReactIcon },
  NextJS: { title: "Next.js", icon: NextIcon },
  TailwindCSS: { title: "TailwindCSS", icon: TailwindIcon },
  FramerMotion: { title: "Framer Motion", icon: MotionIcon },

  NodeJS: { title: "Node.js", icon: NodeIcon },
  ExpressJS: { title: "Express.js", icon: ExpressIcon },
  REST_APIs: { title: "REST APIs", icon: RestAPIIcon },

  MySQL: { title: "MySQL", icon: MysqlIcon },
  PostgreSQL: { title: "PostgreSQL", icon: PostgresqlIcon },
  MongoDB: { title: "MongoDB", icon: MongodbIcon },
  Supabase: { title: "Supabase", icon: SupabaseIcon },

  Git: { title: "Git", icon: GitIcon },
  Neovim: { title: "Neovim", icon: NeovimIcon },
  Linux: { title: "Linux", icon: LinuxIcon },
  Windows: { title: "Windows", icon: WindowsIcon },
};

export const projects: Project[] = [
  {
    title: "Gold Digger",
    description:
      "Full-stack Node.js app that generates gold prices on the server and streams live updates to the frontend using Server-Sent Events.",
    stack: [iconMap.NodeJS, iconMap.HTML, iconMap.CSS, iconMap.JavaScript],
    links: {
      github: "https://github.com/shojib116/gold-digger",
    },
    category: Category.fullstack,
  },
  {
    title: "pokedexcli",
    description:
      "go powered cli tool to see, explore and catch pokemons in different locations. built using the pokeapi",
    stack: [iconMap.Go, "PokeAPI"],
    links: {
      github: "https://github.com/shojib116/pokedexcli",
    },
    category: Category.others,
  },
  {
    title: "Pasteroids",
    description: "Asteroids game built using pygame library",
    stack: [iconMap.Python, "PyGame"],
    links: {
      github: "https://github.com/shojib116/pasteroids",
    },
    category: Category.game,
  },
  {
    title: "Glaude",
    description: "A simple coding AI Agent built on gemini using python",
    stack: [iconMap.Python, "Gemini AI"],
    links: {
      github: "https://github.com/shojib116/glaude",
    },
    category: Category.ai,
  },
  {
    title: "Personal Research Portfolio",
    description:
      "Fullstack web app with admin dashboard to manage research publications.",
    impact: "Made research visibility dynamic and scalable.",
    stack: [
      iconMap.NextJS,
      iconMap.NodeJS,
      iconMap.Supabase,
      iconMap.TailwindCSS,
    ],
    links: {
      github: "https://github.com/srdhrubo/srdhrubo",
      live: "https://srdhrubo.vercel.app",
    },
    category: Category.fullstack,
  },
  {
    title: "Competency Assessment Questionnaire (CAQ)",
    description:
      "Real-time assessment tool with question bank management system.",
    impact: "Faster, interactive evaluation for instructors.",
    stack: [iconMap.NextJS, iconMap.NodeJS, iconMap.MongoDB],
    links: {
      github: "https://github.com/shojib116/caq",
    },
    category: Category.fullstack,
  },
  {
    title: "Password Generator",
    description:
      "Secure password generator with customizable rules and strength indicators.",
    stack: [iconMap.HTML, iconMap.CSS, iconMap.JavaScript],
    links: {
      github: "https://github.com/shojib116/password-generator",
      live: "https://password-generator-shojib116.netlify.app/",
    },
    category: Category.frontend,
  },
  {
    title: "Color Scheme Generator",
    description:
      "Dynamic color palette generator using external APIs for design inspiration.",
    stack: [iconMap.HTML, iconMap.CSS, iconMap.JavaScript, "API Integration"],
    links: {
      github: "https://github.com/shojib116/color-scheme-generator",
      live: "https://color-scheme-generator-shojib116.netlify.app/",
    },
    category: Category.frontend,
  },
  {
    title: "Neighborhood Segmentation & Clustering",
    description: "Python data analysis project for urban planning insights.",
    stack: [iconMap.Python, "Numpy", "Pandas", "Matplotlib"],
    links: {
      github: "https://github.com/shojib116/data-science-capstone",
    },
    category: Category.dataScience,
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "Simple Python game with clean logic and interactive gameplay.",
    stack: [iconMap.Python],
    links: {
      github: "https://github.com/shojib116/tictactoe",
    },
    category: Category.game,
  },
  {
    title: "Web Tic Tac Toe Game",
    description: "Simple game with clean logic and interactive gameplay.",
    stack: [iconMap.HTML, iconMap.CSS, iconMap.JavaScript],
    links: {
      github: "https://github.com/shojib116/Web-TicTacToe",
      live: "https://tic-tac-toe-shojib116.netlify.app/",
    },
    category: Category.game,
  },
  {
    title: "Oldagram",
    description: "Instagram UI Clone",
    stack: [iconMap.HTML, iconMap.CSS, iconMap.JavaScript],
    links: {
      github: "https://github.com/shojib116/oldagram",
      live: "https://shojib116.github.io/oldagram",
    },
    category: Category.frontend,
  },
  {
    title: "Cookie Consent",
    description: "Fun and annoying cookie consent app",
    stack: [iconMap.HTML, iconMap.CSS, iconMap.JavaScript],
    links: {
      live: "https://cookie-consent-shojib116.netlify.app/",
    },
    category: Category.frontend,
  },
  {
    title: "Dayf Booking",
    description: "Frontend prototype for a booking company",
    stack: [iconMap.HTML, iconMap.CSS, iconMap.JavaScript],
    links: {
      live: "https://dayf-booking.vercel.app/",
    },
    category: Category.frontend,
  },
];

export const skillCategories = [
  {
    title: "Languages",
    skills: [
      iconMap.JavaScript,
      iconMap.TypeScript,
      iconMap.Go,
      iconMap.Python,
      iconMap.C,
      iconMap["C++"],
    ],
  },
  {
    title: "Frontend",
    skills: [
      iconMap.HTML,
      iconMap.CSS,
      iconMap.Svelte,
      iconMap.React,
      iconMap.NextJS,
      iconMap.TailwindCSS,
      iconMap.FramerMotion,
    ],
  },
  {
    title: "Backend",
    skills: [iconMap.NodeJS, iconMap.ExpressJS, iconMap.Go, iconMap.REST_APIs],
  },
  {
    title: "Databases",
    skills: [
      iconMap.MySQL,
      iconMap.PostgreSQL,
      iconMap.MongoDB,
      iconMap.Supabase,
    ],
  },
  {
    title: "Tools & OS",
    skills: [iconMap.Git, iconMap.Neovim, iconMap.Linux, iconMap.Windows],
  },
];

export const experiences: Experience[] = [
  {
    title: "Quality Assurance Auditor, Engineering Department",
    organization: "US-Bangla Airlines Ltd.",
    period: "2023 - Present",
    description: "Auditing and compliance monitoring",
    highlights: [
      "Auditing different section of Engineering Departments",
      "Compliance and status monitoring of different aspects",
      "Cooperating in obtaining and issuing authorizationa and approvals",
    ],
  },
];

export const leadershipExperiences: Experience[] = [
  {
    title: "CEO, Control Engineering Club (LOOP)",
    organization: "KUET",
    period: "2020 - 2023",
    description: "Instructed 60+ students in C programming fundamentals",
    highlights: [
      "Guided non-CS students into programming basics",
      "Developed curriculum for practical programming skills",
      "Led technical workshops and coding sessions",
    ],
  },
];

export const education = [
  {
    degree: "B.Sc. in Mecanical Engineering",
    institution: "Khulna University of Engineering & Technology (KUET)",
    period: "2018 - 2023",
    thesis:
      "Numerical Investigation on The Effect of Piston Bowl Geometry on CI Engine Performance (ANSYS Forte)",
    highlights: [
      "Strong analytical and problem-solving foundation",
      "Experience with simulation and modeling tools",
      "Systems thinking approach to complex problems",
    ],
  },
];

export const competitiveProgramming = [
  {
    platform: "LeetCode",
    username: "shojib116",
    url: "https://leetcode.com/u/shojib116",
    description: "Problem-solving and algorithm optimization",
  },
  {
    platform: "Codeforces",
    username: "shojib116",
    url: "https://codeforces.com/profile/shojib116",
    description: "Competitive programming contests",
  },
  {
    platform: "HackerRank",
    username: "shojib116",
    url: "https://hackerrank.com/shojib116",
    description: "Technical skill assessments",
  },
];

export const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "shojib116@gmail.com",
    href: "mailto:shojib116@gmail.com",
    description: "Get in touch for opportunities",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/shojib116",
    href: "https://linkedin.com/in/shojib116",
    description: "Professional networking",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/shojib116",
    href: "https://github.com/shojib116",
    description: "Code repositories & projects",
  },
];
