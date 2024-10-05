"use client";
import { useCallback } from "react";
import { motion } from "framer-motion";
// import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Link from "next/link";
import TabIcon from "@mui/icons-material/Tab";
import Image from "next/image";
import { Tooltip } from "@mui/material";
import { useTranslations } from "next-intl";
import { CodeIcon } from "lucide-react";

export type ProjectType = {
  // description?: string;
  title?: string;
  thumbnail?: string;
  liveUrl?: string;
  code?: string;
};

const projectUrls: {
  professional: ProjectType[];
  personal: ProjectType[];
} = {
  personal: [
    {
      title: "netlify movies web app",
      thumbnail:
        "https://res.cloudinary.com/hamzaostouri/image/upload/v1728135248/Capture_d_%C3%A9cran_2024-10-05_143358_eawvpb.png",
      liveUrl: "https://quirky-wright-757726.netlify.app/",
    },
    {
      title: "amazon clone with react",
      thumbnail: "",
      liveUrl: "https://clone-127fa.web.app/",
    },
    {
      title: "google calendar clone app with react",
      thumbnail: "",
      liveUrl: "https://calendar.google.com/calendar/u/0/r?pli=1",
    },
    {
      title: "old portfolio app",
      thumbnail:
        "https://res.cloudinary.com/hamzaostouri/image/upload/v1728134489/Capture_d_%C3%A9cran_2024-10-05_142025_vusnbp.png",
      liveUrl: "https://hamza-missaoui-resume.netlify.app/",
    },
  ],
  professional: [
    {
      thumbnail:
        "https://res.cloudinary.com/hamzaostouri/image/upload/v1724472245/Capture_d_%C3%A9cran_2024-08-22_131442_utriiu.png",
      // live: "",
    },
    {
      thumbnail:
        "https://res.cloudinary.com/hamzaostouri/image/upload/v1728022099/Capture_d_%C3%A9cran_2024-03-18_192908_xsd9iw.png",
      // live: ""
    },
    {
      thumbnail:
        "https://res.cloudinary.com/hamzaostouri/image/upload/v1728022087/Capture_d_%C3%A9cran_2024-03-19_161306_nblwjp.png",
      // live: ""
    },
    {
      thumbnail:
        "https://res.cloudinary.com/hamzaostouri/image/upload/v1728022637/b2b-ui-schedule-page_biyxel.png",
      // live: ""
    },
    {
      thumbnail:
        "https://res.cloudinary.com/hamzaostouri/image/upload/v1728022637/graphql-playground_mprfrb.png",
      // live: ""
    },
  ],
};

function Experience() {
  const t = useTranslations("Experience");

  // const router = useRouter();
  // const handleOpenCodeDemo = useCallback((code?: string) => {
  //   if (!code) return;
  //   router.push(code);
  // }, []);

  return (
    <motion.div
      className={
        "min-h-screen flex flex-col overflow-hidden text-left justify-evenly mx-auto" +
        " z-0"
      }
    >
      {/*<div className={"flex flex-col"}>*/}
      {/*  <h3 className="z-1 uppercase tracking tracking-[20px] text-gray-500 text-2xl">*/}
      {/*    {t("title")}*/}
      {/*  </h3>*/}
      {/*  <p className={"relative z-1 text-gray-500 text-md"}>*/}
      {/*    {t("description")}*/}
      {/*  </p>*/}
      {/*</div>*/}

      <div className="flex flex-col space-y-2 snap-x snap-mandatory z-10  max-w-6xl">
        <h3 className="z-1 uppercase tracking tracking-[20px] text-gray-500 text-2xl">
          {t("personalProjects.title")}
        </h3>

        {/*{Array.from(*/}
        {/*  { length: projectUrls.personal.length - 1 },*/}
        {/*  (_, index) => index,*/}
        {/*)*/}
        {projectUrls.personal.map((personalProject, index) => (
          <div
            key={index}
            className={
              "relative flex-shrink-0"
              // "relative h-fit flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20" +
              // " md:p-44"
            }
          >
            <div className={"flex items-center space-x-2"}>
              {/*<p className={"text-lg text-center md:text-left"}>*/}
              {/*  {t(`personalProjects.projects.1.description`)}*/}
              {/*</p>*/}

              {personalProject.title && (
                <p className={"text-lg text-center md:text-left"}>
                  {personalProject.title}
                </p>
              )}
            </div>

            <div className={"flex items-center justify-center"}>
              <div className={"relative w-fit-content"}>
                {personalProject.thumbnail && (
                  <Image
                    // initial={{ y: -300, opacity: 0 }}
                    // transition={{ duration: 1.2 }}
                    // whileInView={{ opacity: 1, y: 0 }}
                    // viewport={{ once: true }}
                    // src={
                    //   "https://res.cloudinary.com/hamzaostouri/image/upload/v1724472245/Capture_d_%C3%A9cran_2024-08-22_131442_utriiu.png"
                    // }
                    width={250}
                    height={250}
                    src={personalProject.thumbnail}
                    alt={"project"}
                    // sm:w-10 sm:h-10 w-[100%] md:h-[550px]
                    className="rounded-md items-center object-center p-2"
                  />
                )}

                <div
                  className={
                    "absolute absolute z-1 right-0 top-0 flex items-center"
                  }
                ></div>
                {personalProject.liveUrl && (
                  <Link
                    href={personalProject.liveUrl}
                    rel={"noopener noreferrer"}
                    target={"_blank"}
                  >
                    <Tooltip title={"Live"}>
                      <TabIcon fontSize={"small"} color={"error"} />
                    </Tooltip>
                    {/*<p>Live</p>*/}
                  </Link>
                )}
                {personalProject.code && (
                  <Link
                    href={personalProject.code}
                    rel={"noopener noreferrer"}
                    target={"_blank"}
                  >
                    <Tooltip title={"Code"}>
                      <CodeIcon fontSize={"small"} color={"error"} />
                    </Tooltip>
                  </Link>
                )}
              </div>

              <p
                className={
                  "text-sm font-semibold text-center decoration-[#F7AB0A]/50"
                }
              >
                Case Study {index + 1} of {projectUrls.personal.length}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        className={"relative w-full flex flex-wrap snap-x snap-mandatory z-20"}
      >
        <h3 className="z-1 uppercase tracking tracking-[20px] text-gray-500 text-2xl">
          {t("professionalProjects.title")}
        </h3>

        {/*{Array.from(*/}
        {/*  { length: projectUrls.professional.length - 1 },*/}
        {/*  (_, index) => index,*/}
        {/*)*/}
        {projectUrls.professional.map((proProject, index) => (
          <div key={index}>
            {/*<h3 className={"text-lg text-center md:text-left"}>*/}
            {/*  {t(`professionalProjects.projects.${index}.society`)}*/}
            {/*</h3>*/}
            {/*<p className={"text-lg text-center md:text-left"}>*/}
            {/*  {t(`professionalProjects.projects.${index}.description`)}*/}
            {/*</p>*/}

            {proProject.title && (
              <p className={"text-lg text-center md:text-left"}>
                {proProject.title}
              </p>
            )}

            {proProject.thumbnail && (
              <Image
                // initial={{ y: -300, opacity: 0 }}
                // transition={{ duration: 1.2 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true }}
                src={proProject.thumbnail}
                width={250}
                height={150}
                alt={`${index} professional project`}
                className={
                  // md:w-[100%] md:h-[550px] sm:w-10 sm:h-10
                  "rounded-md  items-center object-center p-2"
                }
              />
            )}

            {/*<div*/}
            {/*  className={*/}
            {/*    "flex flex-row absolute right-0 bottom-0 space-x-2 z-2"*/}
            {/*  }*/}
            {/*>*/}
            {/*<Link*/}
            {/*  href={project.code || ""}*/}
            {/*  rel={project.code ? "noopener noreferrer" : undefined}*/}
            {/*  target={project.code ? "_blank" : undefined}*/}
            {/*>*/}
            {/*  <CodeIcon fontSize={"small"} color={"error"} />*/}
            {/*  <p>Code</p>*/}
            {/*    <TabIcon fontSize={"small"} color={"error"} />*/}
            {/*    <p>Live</p>*/}
            {/*</Link>*/}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Experience;
