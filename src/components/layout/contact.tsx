"use client";

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { contactMethods } from "@/lib/data";
import MaxWidthWrapper from "./max-width-wrapper";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <MaxWidthWrapper>
        <motion.div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Always interested in new opportunities and exciting projects. Let's
            build something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 border border-border hover:shadow-lg hover:border-primary/50 transition-all group text-center"
            >
              <div className="space-y-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                    {method.label}
                  </h3>
                  <p className="text-primary font-mono text-sm mb-2 break-all">
                    {method.value}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {method.description}
                  </p>
                </div>
                <div className="flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="animate-background block w-fit bg-gradient-to-r from-green-300 via-blue-600 mx-auto rounded-lg to-red-300 bg-[length:_400%_400%] p-0.5 [animation-duration:_6s]">
            <div className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg bg-card">
              <p className="text-muted-foreground p-4">
                <span className="font-medium text-foreground">
                  Open to opportunities:
                </span>{" "}
                Fullstack Developer roles, Backend Developer Roles, Freelance
                projects, Technical collaborations
              </p>
            </div>
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
}
