"use client";

import { motion } from "motion/react";
import { ExternalLink, Github, Zap } from "lucide-react";
import { projects } from "@/lib/data";
import MaxWidthWrapper from "./max-width-wrapper";
import { Category } from "@/lib/types";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <MaxWidthWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my work across fullstack development, data science,
            and problem-solving
          </p>
        </motion.div>
        <ProjectComponent />
        <motion.div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            More exciting Go and Node.js projects coming soon!
          </p>
          <motion.a
            href="https://github.com/shojib116"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-5 w-5" />
            <span>View All Projects</span>
          </motion.a>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
}

function ProjectComponent() {
  const [selected, setSelected] = useState<Category | null>(null);
  const categories = Object.values(Category);

  const displayProjects =
    selected === null
      ? projects
      : projects.filter((p) => p.category === selected);
  return (
    <>
      <div className="mb-4 flex flex-wrap gap-2 ">
        <FilterButton
          category={"All"}
          isSelected={selected === null}
          selectFunc={() => setSelected(null)}
        />
        {categories.map((c) => (
          <FilterButton
            key={c}
            category={c}
            isSelected={selected === c}
            selectFunc={() => setSelected(c)}
          />
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayProjects.map((project) => (
          <motion.div
            key={project.title}
            className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-all group"
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {project.description}
                </p>
                <div className="flex items-center space-x-2 text-sm text-green-600 dark:text-green-400">
                  <Zap className="h-4 w-4" />
                  <span className="font-medium">Impact:</span>
                  <span>{project.impact}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex space-x-4">
                  {project.links.github && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-5 w-5" />
                    </motion.a>
                  )}
                  {project.links.live && (
                    <motion.a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
function FilterButton({
  isSelected,
  selectFunc,
  category,
}: {
  isSelected: boolean;
  selectFunc: () => void;
  category: Category | "All";
}) {
  return (
    <Button
      variant={"secondary"}
      className={cn(
        isSelected &&
          buttonVariants({
            variant: "default",
          }),
      )}
      onClick={selectFunc}
    >
      {category}
    </Button>
  );
}
