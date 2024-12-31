import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import React from "react";
import ChatBot from "@/components/ChatBot";
import { cn } from "@/lib/utils";
import { tailwindColorClasses } from "@/lib/tailwindClasses";
import Education from "@/components/Education";
import Hero from "@/components/Hero";

function Home() {
  // const router = useRouter();
  // const intl = getIntl(locale as (typeof locales)[number]);

  return (
    // <Container textAlign="center" fontSize="2xl" p="1em">
    <main
      className={cn(
        `${tailwindColorClasses.gradient_color["1"]} w-full h-full snap-y mb-5 overflow-auto snap-mandatory z-0 xl:-mt-48 space-y-2`,
      )}
    >
      <section id={"hero"} className={"snap-start"}>
        <Hero />
      </section>
      <section id={"about"} className={"snap-center"}>
        <About />
      </section>
      <section id={"education"} className={"snap-center"}>
        <Education />
      </section>
      <section id={"experience"} className={"snap-center"}>
        <Experience />
      </section>
      <section id={"projects"} className={"snap-center"}>
        <Projects />
      </section>
      <section id={"skills"} className={"snap-center"}>
        <Skills />
      </section>
      <section id={"contactMe"} className={"snap-center"}>
        <ContactMe />
      </section>

      <ChatBot />
    </main>
  );
}
export default Home;
