export enum Category {
  frontend = "Frontend",
  backend = "Backend",
  fullstack = "Fullstack",
  dataScience = "Data Science",
  game = "Game",
  others = "Others",
}

export type Project = {
  title: string;
  description: string;
  impact?: string;
  stack: string[];
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
