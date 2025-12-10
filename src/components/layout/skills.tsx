"use client";

import { motion } from "motion/react";
import MaxWidthWrapper from "./max-width-wrapper";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <MaxWidthWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-center">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map(({ title, icon: Icon }, skillIndex) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-2 rounded-md hover:bg-accent/50 transition-colors"
                  >
                    <Icon className="h-6 w-6 dark:bg-primary dark:rounded-xs dark:p-px" />
                    <span className="font-medium">{title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
