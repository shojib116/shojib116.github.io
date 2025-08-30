"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ThemeToggle } from "./theme-toggle";
import LogoIcon from "@/components/icons/logo";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Menu, X } from "lucide-react";
import MaxWidthWrapper from "../max-width-wrapper";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50"
          : "bg-transparent"
          }`}
      >
        <MaxWidthWrapper>
          <div className="grid grid-cols-2 lg:grid-cols-[9.375rem_1fr_9.375rem] items-center py-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl text-left font-bold text-foreground cursor-pointer flex gap-2"
              onClick={() => scrollToSection("#home")}
            >
              <LogoIcon className="w-8 h-8 fill-inherit" />
              <span className="hidden lg:block">Shajib.dev</span>
            </motion.div>

            <div className="hidden lg:flex items-center mx-auto space-x-8">
              <NavItems scrollToSection={scrollToSection} />
            </div>

            <div>
              <ThemeToggle className="hidden lg:block float-right" />
              <div className="lg:hidden float-right">
                <Popover open={open} onOpenChange={setOpen}>
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                  >
                    <PopoverTrigger>
                      <motion.div
                        animate={{ rotate: open ? 90 : 0 }}>
                        {open ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
                      </motion.div>
                    </PopoverTrigger>
                  </motion.div>
                  <PopoverContent className="min-w-30 max-w-60 relative">
                    <div className="flex flex-col space-y-2 items-start text-left">
                      <NavItems scrollToSection={scrollToSection} />
                      <ThemeToggle />
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </motion.nav>
    </motion.header>
  );
}


function NavItems({ scrollToSection }: { scrollToSection: (s: string) => void }) {
  return <>{navItems.map((item) => (
    <motion.button
      key={item.href}
      onClick={() => scrollToSection(item.href)}
      className="text-muted-foreground hover:text-foreground font-bold transition-colors"
      whileTap={{ scale: 0.95 }}
    >
      {item.label}
    </motion.button>
  ))}
  </>
