"use client";
import BackgroundCircles from "@/components/BackgroundCircles";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";
import CloudinaryImage from "@/components/cloudinary/CloudinaryImage";
import data from "../lib/images.json";
import { useLocale, useTranslations } from "next-intl";

type HeroProps = { text?: string };
const wordsByLanguage: { [locale: string]: string[] } = {
  en: [
    "Hi, My name is Hamza Missaoui",
    "I am software engineer and web developer who loves",
    "I love programming and design elegant web applications",
    "I have advanced knowledge in typescript, react, next and node",
    "Knowledge on variety of frameworks like react, next js , django and spring boot",
    "Knowledge in aws cloud serivces and docker containerisation",
  ],
  fr: [
    "Salut, je m'appelle Hamza Missaoui",
    "Je suis ingénieur génie logiciel et développeur web",
    "Je travaille sur des fullstack applications web responsives avec graphql et rest api",
    "J'ai des connaissances avancés en différents langages comme typescript python et java",
    "Aussi frameworks comme react, next js , django et spring boot",
    "Connaissances en aws cloud serivces et docker conteneurisation",
  ],
  ar: [
    "مرحبا، اسمي حمزة ميساوي",
    "أنا مهندس برمجيات ومطور ويب أحب",
    "أنا أحب البرمجة وتصميم تطبيقات الويب الأنيقة",
    "لدي معرفة متقدمة في الآلة الكاتبة والتفاعل والتالي والعقدة",
    "المعرفة بمجموعة متنوعة من أطر العمل مثل رد الفعل، وjs التالي، وجانغو، والتمهيد الربيعي",
    "المعرفة في الخدمات السحابية لـ aws وحاويات الإرساء",
  ],
};

function Hero({}: HeroProps) {
  const localActive = useLocale();
  const t = useTranslations("Hero");
  // const language === "en" ? "en" : "ar";

  const [text] = useTypewriter({
    words: [...wordsByLanguage[localActive], "<ButtonLovesToCodeMore />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      className={
        "h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"
      }
    >
      <BackgroundCircles />
      <CloudinaryImage
        width={200}
        height={200}
        url={
          data.hero["1"].url
          // "https://res.cloudinary.com/hamzaostouri/image/upload/v1727841111/selfie_cin_xbu0tx.jpg"
        }
      />
      {/*<ImagesGrid title="Hamza Hero">*/}
      {/*<motion.img*/}
      {/*    className={"relative object-cover rounded-full h-[230px] w-[250px]"}*/}
      {/*    alt={"profile picture"}*/}
      {/*    width={200}*/}
      {/*    height={200}*/}
      {/*/>*/}
      {/*</ImagesGrid>*/}

      <div className={"z-20"}>
        <h2 className={"text-sm uppercase text-gray-500 pb-2 tracking-[15px]"}>
          {t("title")}
        </h2>
        <h1 className={"text-5xl lg:text-6xl font-semibold px-10"}>
          <span>{text}</span>
          <Cursor cursorColor={"#F7AB0A"} />
        </h1>
        <div className={"pt-5 space-x-2"}>
          <Link href={"#about"}>
            <button className={"heroButton"}>{t("routes.aboutMe")}</button>
          </Link>
          <Link href={"#experience"}>
            <button className={"heroButton"}>{t("routes.experience")}</button>
          </Link>
          <Link href={"#skills"}>
            <button className={"heroButton"}>{t("routes.skills")}</button>
          </Link>
          <Link href={"#projects"}>
            <button className={"heroButton"}>{t("routes.projects")}</button>
          </Link>
          <Link href={"#contactMe"}>
            <button className={"heroButton"}>{t("routes.contactMe")}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
