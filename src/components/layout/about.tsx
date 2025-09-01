"use client";

import { motion } from "motion/react";
import { Code2, Cpu, Trophy } from "lucide-react";
import MaxWidthWrapper from "./max-width-wrapper";

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Fullstack Development",
      description:
        "End-to-end applications with Go, Node.js, React, and Next.js",
    },
    {
      icon: Cpu,
      title: "Systems Thinking",
      description:
        "Mechanical Engineering background brings analytical problem-solving",
    },
    {
      icon: Trophy,
      title: "Competitive Programming",
      description:
        "Continuous practice on LeetCode, Codeforces, and HackerRank",
    },
  ];

  return (
    <section id="about" className="py-20">
      <MaxWidthWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building the future, one line of code at a time
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
              <p>
                I'm <strong>Md. Nazmul Hasan Shajib</strong>, an{" "}
                <strong>aspiring fullstack developer</strong> who loves turning
                ideas into impactful software. With hands-on experience in{" "}
                <strong>Go, Node.js, React, and Next.js</strong>, I specialize
                in building end-to-end applications that are both efficient on
                the backend and seamless on the frontend.
              </p>

              <p>
                Coming from a <strong>Mechanical Engineering background</strong>
                , I bring an analytical and systems-thinking approach to
                problem-solving. I've built projects ranging from fullstack
                research portfolios with admin dashboards to real-time
                assessment tools, design utilities, and data science
                applications.
              </p>

              <p>
                Beyond building applications, I actively sharpen my skills in{" "}
                <strong>competitive programming</strong> on platforms like{" "}
                <strong>LeetCode, Codeforces, and HackerRank</strong>. This
                continuous problem-solving practice strengthens my ability to
                write optimized, clean, and production-ready code.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors"
              >
                <div className="flex-shrink-0">
                  <highlight.icon className="h-6 w-6 mt-1 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
