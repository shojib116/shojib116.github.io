import About from "@/components/layout/about";
import Contact from "@/components/layout/contact";
import Experience from "@/components/layout/experience";
import Hero from "@/components/layout/hero";
import Projects from "@/components/layout/projects";
import Skills from "@/components/layout/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
