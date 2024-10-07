import Hero from "../../components/Hero";
import About from "../../components/About";
import Experience from "../../components/Experience";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import ContactMe from "../../components/ContactMe";
import { NextPage } from "next";
import React from "react";
import ChatBot from "../../components/ChatBot";
import { useLocale } from "next-intl";

const Home: NextPage = () => {
  // const t = useTranslations("Home");
  const locale = useLocale();

  return (
    <div
      // dark:bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900
      // dark:bg-[#1A1C29]
      className={
        "bg-lightBackground dark:bg-gradient-to-b from-slate-900/100 via-gray-900 to-gray-300 w-full" +
        " h-full snap-y" +
        " mb-5 overflow-auto snap-mandatory z-0 min-h-screen"
        // "md:overflow-hidden overflow-y-scroll flex flex-col xl:-mt-48 space-y-2
      }
    >
      <section id={"hero"} className={"snap-start"}>
        <Hero />
      </section>
      <section id={"about"} className={"snap-center"}>
        <About />
      </section>
      <section id={"experience"} className={"snap-center"}>
        <Experience />
      </section>
      <section id={"skills"} className={"snap-center"}>
        <Skills />
      </section>
      <section id={"projects"} className={"snap-center"}>
        <Projects />
      </section>
      <section id={"contactMe"} className={"snap-center"}>
        <ContactMe />
      </section>
      <div
        className={`fixed z-1 ${locale === "ar" ? "left-3" : "right-3"} bottom-1`}
      >
        <ChatBot />
      </div>
    </div>
  );
};
export default Home;
