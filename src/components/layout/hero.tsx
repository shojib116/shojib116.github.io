"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { Button } from "../ui/button";
import { socials } from "@/lib/data";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-foreground">
              On a journey to create impact through software, In Sha Allah{" "}
            </span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Fullstack Developer | Go, Node.js, React & Next.js
          </motion.p>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Striving to learn, grow, and use software engineering to one day
            build impactful applications that change lives — by the help of
            Allah.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              onClick={() => scrollToSection("#projects")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            ><Button>
                View Projects</Button>
            </motion.div>

            <motion.div
              onClick={() => scrollToSection("#contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            ><Button variant={"secondary"}>
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
              >
                <Icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button
            onClick={() => scrollToSection("#projects")}
            className="text-muted-foreground hover:text-foreground transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
