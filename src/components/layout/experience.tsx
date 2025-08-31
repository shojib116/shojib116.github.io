"use client";

import { motion } from "motion/react";
import { GraduationCap, Users, Award, BriefcaseBusiness } from "lucide-react";
import MaxWidthWrapper from "./max-width-wrapper";
import {
  experiences,
  leadershipExperiences,
  education,
  competitiveProgramming,
} from "@/lib/data";
import type { Experience as ExperienceType } from "@/lib/types";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <MaxWidthWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Experience & Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey in leadership, learning, and continuous skill development
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Professional Experience Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 flex items-center"
            >
              <BriefcaseBusiness className="h-6 w-6 mr-3 text-primary" />
              Professional Experience
            </motion.h3>

            {experiences.map((exp, index) => (
              <ExperienceDisplayComponent
                key={exp.title}
                exp={exp}
                index={index}
              />
            ))}
          </div>
          {/* Leadership Experience Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 flex items-center"
            >
              <Users className="h-6 w-6 mr-3 text-primary" />
              Leadership Experience
            </motion.h3>

            {leadershipExperiences.map((exp, index) => (
              <ExperienceDisplayComponent
                key={exp.title}
                exp={exp}
                index={index}
              />
            ))}
          </div>

          {/* Education Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 flex items-center"
            >
              <GraduationCap className="h-6 w-6 mr-3 text-primary" />
              Education
            </motion.h3>

            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-6 border border-border"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h4 className="text-xl font-semibold">{edu.degree}</h4>
                  <span className="text-sm text-muted-foreground">
                    {edu.period}
                  </span>
                </div>
                <p className="text-primary font-medium mb-4">
                  {edu.institution}
                </p>
                <div className="mb-4">
                  <span className="font-medium">Thesis: </span>
                  <span className="text-muted-foreground">{edu.thesis}</span>
                </div>
                <ul className="space-y-1">
                  {edu.highlights.map((highlight) => (
                    <HighlightComponent key={highlight} highlight={highlight} />
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Competitive Programming Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 flex items-center"
            >
              <Award className="h-6 w-6 mr-3 text-primary" />
              Competitive Programming
            </motion.h3>

            <div className="grid md:grid-cols-3 gap-6">
              {competitiveProgramming.map((platform, index) => (
                <motion.a
                  key={platform.platform}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg p-6 border border-border hover:shadow-lg hover:border-primary/50 transition-all group"
                >
                  <div className="text-center">
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {platform.platform}
                    </h4>
                    <p className="text-primary font-mono text-sm mb-2">
                      @{platform.username}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {platform.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

function ExperienceDisplayComponent({
  exp,
  index,
}: {
  exp: ExperienceType;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-card rounded-lg p-6 border border-border"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
        <h4 className="text-xl font-semibold">{exp.title}</h4>
        <span className="text-sm text-muted-foreground">{exp.period}</span>
      </div>
      <p className="text-primary font-medium mb-2">{exp.organization}</p>
      <p className="text-muted-foreground mb-4">{exp.description}</p>
      <ul className="space-y-1">
        {exp.highlights.map((highlight) => (
          <HighlightComponent key={highlight} highlight={highlight} />
        ))}
      </ul>
    </motion.div>
  );
}

function HighlightComponent({ highlight }: { highlight: string }) {
  return (
    <li key={highlight} className="text-sm flex items-start">
      <span className="text-primary mr-2">•</span>
      {highlight}
    </li>
  );
}
