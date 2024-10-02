"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import TabIcon from "@mui/icons-material/Tab";
import CodeIcon from "@mui/icons-material/Code";
import Link from "next/link";
// import {signal, computed, useSignal, Signal} from "@preact/signals-react";
import playgroundCapture from "@/../public/assets/graphql-playground.png";
import schedulePageCapture from "@/../public/assets/b2b-ui-schedule-page.png";
import { useTranslations } from "next-intl";

export type ProjectType = {
  url: string;
  code?: string;
  live?: string;
  description?: string;
};
// const projects = signal<ProjectType[]>([{

const projects: ProjectType[] = [
  {
    url: "https",
    description: "portfolio",
    live: "https://hamza-missaoui-resume.netlify.app/",
  },
  {
    url: "https://res.cloudinary.com/hamzaostouri/image/upload/v1724472245/Capture_d_%C3%A9cran_2024-08-22_131442_utriiu.png",
    description:
      "I Worked on main application of visual content company in Typescript on different features and tasks , allowed me to gain hands-on experience withReact and TypeScript for the front-end, and Node.js with Koa js for the back-end, Some tasks like working on medias and upload them to AWS s3 bucket.Thisexperience not only honed my technical skills but also providedvaluable insights into real-world enterprise workflows andproject management. My commitment to learning programming and myenthusiasm for software development drive me to continuallyenhance my expertise and deliver high-quality code, user-focusedhybrid applications.Besides developing i did some tests ofqueries and mutations of graphql",
  },
  { url: schedulePageCapture.src },
  { url: playgroundCapture.src },
];

function Projects({}) {
  const t = useTranslations("Projects");

  const projectRef = useRef<HTMLDivElement | null>(null);
  // const handleOpenLiveDemo = useCallback((code?: string) => {
  //     if (!code) return
  //     navigate(code)
  // }, [])

  // const handleOpenLiveDemo = useCallback((live?: string) => {
  //     if (!live) return
  //     navigate(live)
  // }, [])

  return (
    <motion.div
      className={
        "h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
      }
    >
      <h3
        className={
          "absolute top-14 z-1 uppercase tracking tracking-[20px] text-gray-500 text-2xl"
        }
      >
        Projects
      </h3>

      <div
        className={
          "w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20"
        }
      >
        {projects.map((project, i) => (
          <div
            key={i}
            ref={projectRef}
            className={
              "w-screen relative flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            }
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project.url}
              alt={"project name"}
              className={
                "rounded-md md:w-[100%] md:h-[550px] sm:w-10 sm:h-10 object-contain object-center p-2"
              }
            />

            <div className={"flex flex-row absolute right-0 bottom-0"}>
              <Link
                href={project.code || ""}
                rel={project.code ? "noopener noreferrer" : undefined}
                target={project.code ? "_blank" : undefined}
              >
                <CodeIcon fontSize={"small"} color={"error"} />
                <p>Code</p>
              </Link>

              <Link
                href={project.live || ""}
                rel={project.live ? "noopener noreferrer" : undefined}
                target={project.live ? "_blank" : undefined}
              >
                <TabIcon fontSize={"small"} color={"error"} />
                <p>Live</p>
              </Link>
            </div>

            <div className={"space-y-10 px-0 md:px-10 max-w-6xl"}>
              <h4 className={"text-4xl font-semibold text-center"}>
                <span className={"underline decoration-[#F7AB0A]/50"}>
                  Case Study {i + 1} of {projects.length}
                </span>
              </h4>

              <p className={"text-lg text-center md:text-left"}>
                {project.description}
                {/*{t("description")}*/}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
