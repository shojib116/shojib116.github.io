import { Github, GraduationCap, Linkedin, Mail, Users } from "lucide-react";
import { type Project, Category, type Experience } from "./types";
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

export const projects: Project[] = [
  {
    title: "Personal Research Portfolio",
    description:
      "Fullstack web app with admin dashboard to manage research publications.",
    impact: "Made research visibility dynamic and scalable.",
    stack: ["Next.js", "Node.js", "Supabase", "Tailwind"],
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
    stack: ["Node.js", "Next.js", "MongoDB"],
    links: {
      github: "https://github.com/shojib116/caq",
    },
    category: Category.fullstack,
  },
  {
    title: "Password Generator",
    description:
      "Secure password generator with customizable rules and strength indicators.",
    stack: ["HTML", "CSS", "Javascript"],
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
    stack: ["HTML", "CSS", "Javascript", "API Integration"],
    links: {
      github: "https://github.com/shojib116/color-scheme-generator",
      live: "https://color-scheme-generator-shojib116.netlify.app/",
    },
    category: Category.frontend,
  },
  {
    title: "Neighborhood Segmentation & Clustering",
    description: "Python data analysis project for urban planning insights.",
    stack: ["Python", "Numpy", "Pandas", "Matplotlib"],
    links: {
      github: "https://github.com/shojib116/data-science-capstone",
    },
    category: Category.dataScience,
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "Simple Python game with clean logic and interactive gameplay.",
    stack: ["Python"],
    links: {
      github: "https://github.com/shojib116/tictactoe",
    },
    category: Category.game,
  },
  {
    title: "Web Tic Tac Toe Game",
    description: "Simple game with clean logic and interactive gameplay.",
    stack: ["HTML", "CSS", "Javascript"],
    links: {
      github: "https://github.com/shojib116/Web-TicTacToe",
      live: "https://tic-tac-toe-shojib116.netlify.app/",
    },
    category: Category.game,
  },
  {
    title: "Oldagram",
    description: "Instagram UI Clone",
    stack: ["HTML", "CSS", "Javascript"],
    links: {
      github: "https://github.com/shojib116/oldagram",
      live: "https://shojib116.github.io/oldagram",
    },
    category: Category.frontend,
  },
  {
    title: "Cookie Consent",
    description: "Fun and annoying cookie consent app",
    stack: ["HTML", "CSS", "Javascript"],
    links: {
      live: "https://cookie-consent-shojib116.netlify.app/",
    },
    category: Category.frontend,
  },
  {
    title: "Dayf Booking",
    description: "Frontend prototype for a booking company",
    stack: ["HTML", "CSS", "Javascript"],
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
      { name: "JavaScript", icon: JavascriptIcon },
      { name: "TypeScript", icon: TypescriptIcon },
      { name: "Go", icon: GoIcon },
      { name: "Python", icon: PythonIcon },
      { name: "C", icon: CIcon },
      { name: "C++", icon: CPPIcon },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: ReactIcon },
      { name: "Next.js", icon: NextIcon },
      { name: "TailwindCSS", icon: TailwindIcon },
      { name: "Framer Motion", icon: MotionIcon },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: NodeIcon },
      { name: "Express.js", icon: ExpressIcon },
      { name: "Go", icon: GoIcon },
      { name: "REST APIs", icon: RestAPIIcon },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: MysqlIcon },
      { name: "PostgreSQL", icon: PostgresqlIcon },
      { name: "MongoDB", icon: MongodbIcon },
      { name: "Supabase", icon: SupabaseIcon },
    ],
  },
  {
    title: "Tools & OS",
    skills: [
      { name: "Git", icon: GitIcon },
      { name: "Neovim", icon: NeovimIcon },
      { name: "Linux", icon: LinuxIcon },
      { name: "Windows", icon: WindowsIcon },
    ],
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
