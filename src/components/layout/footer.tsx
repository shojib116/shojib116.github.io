"use client";

import { motion } from "motion/react";
import MaxWidthWrapper from "./max-width-wrapper";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <MaxWidthWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground">
            © {currentYear} Designed & Developed by{" "}
            <span className="font-medium text-foreground">
              Md. Nazmul Hasan Shajib
            </span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Built with Next.js, TailwindCSS, and Framer Motion
          </p>
        </motion.div>
      </MaxWidthWrapper>
    </footer>
  );
}
