import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/Experience";
import Skills from "@/components/Skills";
import Experience from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import { NextPage } from "next";
import React from "react";
import ChatBot from "@/components/ChatBot";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Footer from "@/components/Footer";
import Image from "next/image";

const Home: NextPage = () => {
  const t = useTranslations("Home");

  return (
    <div
      className={
        "relative bg-white dark:bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900 dark:bg-white flex-grow" +
        " w-full h-full dark:bg-[#1A1C29]"
        // "min-w-screen items-center md:overflow-hidden overflow-y-scroll flex flex-col xl:-mt-48 space-y-2" +
        // " bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory z-0"
      }
    >
      {t("title")}
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
        <div className={"fixed z-100 right-2 bottom-0 p-1"}>
          <ChatBot />
        </div>
      </section>

      <footer className={"fixed cursor-pointer w-full"}>
        <section id={"footer"} className={"snap-end bottom-0"}>
          <Link href={"#hero"}>
            <Image
              width={100}
              height={100}
              className="w-12 h-12 rounded-full filter grayscale hover:grayscale-0"
              src={
                "https://res.cloudinary.com/hamzaostouri/image/upload/v1663664915/avatar_photos/ra3cbssf64n3ihc2fw0o.png"
              }
              alt={""}
            />
          </Link>
        </section>
      </footer>
      <Footer />
    </div>
  );
};
export default Home;
