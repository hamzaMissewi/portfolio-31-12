import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/Experience";
import Skills from "@/components/Skills";
import Experience from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import { NextPage } from "next";
import React from "react";
import ChatBot from "@/components/ChatBot";
import { useLocale } from "next-intl";

const Home: NextPage = () => {
  // const t = useTranslations("Home");
  const locale = useLocale();

  return (
    <div
      className={
        "relative bg-white dark:bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900 dark:bg-white flex-grow" +
        " w-full h-full dark:bg-[#1A1C29] snap-y"
        // "items-center md:overflow-hidden overflow-y-scroll flex flex-col xl:-mt-48 space-y-2 bg-[rgb(36,36,36)]
        // text-white h-screen  snap-mandatory z-0"
      }
    >
      <section id={"hero"} className={"snap-center"}>
        <Hero />
      </section>

      <section id={"about"} className={"snap-center"}>
        <About />
      </section>

      <section id={"experience"} className={"snap-center"}>
        <WorkExperience />
      </section>

      <section id={"skills"} className={"snap-start"}>
        <Skills />
      </section>

      <section id={"projects"} className={"snap-start"}>
        <Experience />
      </section>

      <section id={"contactMe"} className={"snap-start"}>
        <ContactMe />
      </section>

      <section id={"chatbot"}>
        <div
          className={`fixed z-[100] ${locale === "ar" ? "left-2" : "right-2"} bottom-2 p-1 w-fit self-end`}
        >
          <ChatBot />
        </div>
      </section>

      {/*<section id={"footer"} className={"snap-end bottom-0"}>*/}
      {/*  <footer className={"fixed cursor-pointer w-full"}>*/}
      {/*    <Footer/>*/}
      {/*    <Link href={"#hero"}>*/}
      {/*      <Image*/}
      {/*          width={100}*/}
      {/*          height={100}*/}
      {/*          className="w-12 h-12 rounded-full filter grayscale hover:grayscale-0"*/}
      {/*          src={*/}
      {/*            "https://res.cloudinary.com/hamzaostouri/image/upload/v1663664915/avatar_photos/ra3cbssf64n3ihc2fw0o.png"*/}
      {/*          }*/}
      {/*          alt={""}*/}
      {/*      />*/}
      {/*    </Link>*/}
      {/*  </footer>*/}
      {/*</section>*/}
    </div>
  );
};
export default Home;
