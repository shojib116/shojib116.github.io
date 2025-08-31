import { Github, Linkedin, Mail } from "lucide-react";
import { type Project, Category } from "./types";
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
    stack: ["Next.js", "Node.js", "MySQL"],
    links: {
      github: "#",
      live: "#",
    },
    category: Category.fullstack,
  },
  {
    title: "Competency Assessment Questionnaire (CAQ)",
    description:
      "Real-time assessment tool with question bank management system.",
    impact: "Faster, interactive evaluation for instructors.",
    stack: ["Node.js", "Express.js", "MongoDB"],
    links: {
      github: "#",
    },
    category: Category.fullstack,
  },
  {
    title: "Password Generator",
    description:
      "Secure password generator with customizable rules and strength indicators.",
    impact: "Encouraged better security habits.",
    stack: ["React", "TailwindCSS"],
    links: {
      github: "#",
      live: "#",
    },
    category: Category.frontend,
  },
  {
    title: "Color Scheme Generator",
    description:
      "Dynamic color palette generator using external APIs for design inspiration.",
    impact: "Helped designers/devs get quick color inspiration.",
    stack: ["React", "APIs"],
    links: {
      github: "#",
      live: "#",
    },
    category: Category.frontend,
  },
  {
    title: "Neighborhood Segmentation & Clustering",
    description: "Python data analysis project for urban planning insights.",
    impact: "Extracted insights for urban planning and markets.",
    stack: ["Python", "Scikit-learn", "Pandas"],
    links: {
      github: "#",
    },
    category: Category.dataScience,
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "Simple Python game with clean logic and interactive gameplay.",
    impact: "Logic + clean code practice.",
    stack: ["Python"],
    links: {
      github: "#",
    },
    category: Category.game,
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
      { name: "MongoDB", icon: MongodbIcon },
      { name: "PostgreSQL", icon: PostgresqlIcon },
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
