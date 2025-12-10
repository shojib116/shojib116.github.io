import type { JSX, SVGProps } from "react";

export enum Category {
  frontend = "Frontend",
  backend = "Backend",
  fullstack = "Fullstack",
  ai = "AI",
  dataScience = "Data Science",
  game = "Game",
  others = "Others",
}

export type Icon = {
  title: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};
export type Project = {
  title: string;
  description: string;
  impact?: string;
  stack: (string | Icon)[];
  links: {
    github?: string;
    live?: string;
  };
  category: Category;
};

export type Experience = {
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
};
