"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type ExperienceCardType = {
  companyLogo?: string;
  companyName?: string;
  companyLink?: string;
  date?: string;
  title?: string;
  description?: string;
  workScreenshots?: { url: string; name: string }[];
  usedTechs?: { url: string; name: string }[];
};

const ExperienceCard = ({
  companyLogo,
  companyName,
  companyLink,
  date,
  title,
  description,
  workScreenshots,
  usedTechs,
}: ExperienceCardType) => {
  return (
    <article
      className={
        "flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[200px] md:w-[600px] xl:w-[900px]" +
        " snap-center dark:bg-[#292929] bg-lightBackground p-10 hover:opacity-100 opacity-40 cursor-pointer" +
        " transition-opacity duration-200" +
        " overflow-hidden"
      }
    >
      {/*<div className={"px-0 md:px-10"}>*/}
      <p className={"font-bold text-2xl mt-1"}>{companyName}</p>
      <Link
        href={companyLink || "B2b Alive"}
        rel={companyLink ? "noopener noreferrer" : undefined}
        target={companyLink ? "_blank" : undefined}
      >
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={
            "w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-fill object-center bg-white"
          }
          src={companyLogo}
          alt={""}
        />
      </Link>
      <p className={"font-bold text-darkBackground dark:text-white text-md"}>
        {date}
      </p>
      <h4 className={"text-4xl font-light"}>{title}</h4>
      <p className={"text-wrap text-md text-gray-darkest dark:text-white"}>
        {description}
      </p>

      {workScreenshots && (
        <div className={"flex space-x-2 my-2"}>
          {workScreenshots.map((image, i) => (
            <Image
              key={i}
              width={100}
              height={100}
              className={"h-12 w-12 rounded-full object-fill"}
              alt={image.name}
              src={image.url}
            />
          ))}
        </div>
      )}

      {/*    TECH USED*/}
      {usedTechs && (
        <div className={"flex space-x-2 my-2"}>
          {usedTechs.map((image, i) => (
            <Image
              key={i}
              width={100}
              height={100}
              className={"h-12 w-12 rounded-full object-fill"}
              alt={image.name}
              src={image.url}
            />
          ))}
        </div>
      )}

      <ul className={"list-disc space-y-4 ml-5 text-lg"}>
        <li>
          <span>
            Proven Expertise: Experienced software developer with 2 years in web
            developing,including cloud-based solutions.
          </span>
        </li>
        <li>
          <span>
            Innovation and Efficiency: Implemented automated testing frameworks
            and CI/CD pipelines that reduced deployment time by 40% and
            increased code quality.
          </span>
        </li>
        <li>
          <span>
            Leadership and Mentoring: Experienced in mentoring junior developers
            and leading technical teams, fostering a collaborative environment
            that encourages innovation and professional growth.
          </span>
        </li>
      </ul>
      {/*</div>*/}
    </article>
  );
};

export default ExperienceCard;
