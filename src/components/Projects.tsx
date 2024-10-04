"use client";
import { useCallback } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CodeIcon from "@mui/icons-material/Code";
import TabIcon from "@mui/icons-material/Tab";

// export type ProjectType = {
//   title: string;
//   description?: string;
//   url?: string;
//   code?: string;
//   live?: string;
// };

const projectUrls: {
  professional: { title?: string; thumbnail?: string; live?: string }[];
  personal: { title?: string; thumbnail?: string; live?: string }[];
} = {
  professional: [
    {
      thumbnail: "https://res.cloudinary.com/hamzaostouri/image/upload/v1724472245/Capture_d_%C3%A9cran_2024-08-22_131442_utriiu.png",
      // live: "",
    },
    {
      thumbnail: "https://res.cloudinary.com/hamzaostouri/image/upload/v1728022099/Capture_d_%C3%A9cran_2024-03-18_192908_xsd9iw.png",
      // live: ""
    },
    {
      thumbnail: "https://res.cloudinary.com/hamzaostouri/image/upload/v1728022087/Capture_d_%C3%A9cran_2024-03-19_161306_nblwjp.png",
      // live: ""
    },
    {
      thumbnail: "https://res.cloudinary.com/hamzaostouri/image/upload/v1728022637/b2b-ui-schedule-page_biyxel.png",
      // live: ""
    },
    {
      thumbnail: "https://res.cloudinary.com/hamzaostouri/image/upload/v1728022637/graphql-playground_mprfrb.png",
      // live: ""
    },
    // {thumbnail: schedulePageCapture.src, live: ""},
  ],
  personal: [
    {title: "netlify movies react web app", live: "https://quirky-wright-757726.netlify.app/"},
    {live: "https://clone-127fa.web.app/"},
    {live: "https://calendar.google.com/calendar/u/0/r?pli=1"},
    {live: "https://hamza-missaoui-resume.netlify.app/"},
  ],
};

//   "I Worked on main application of visual content company in Typescript on different features and tasks , allowed me to gain hands-on experience withReact and TypeScript for the front-end, and Node.js with Koa js for the back-end, Some tasks like working on medias and upload them to AWS s3 bucket.Thisexperience not only honed my technical skills but also providedvaluable insights into real-world enterprise workflows andproject management. My commitment to learning programming and myenthusiasm for software development drive me to continuallyenhance my expertise and deliver high-quality code, user-focusedhybrid applications.Besides developing i did some tests ofqueries and mutations of graphql",

function Experience() {
  const t = useTranslations("Experience");
  const router = useRouter();
  // const projectRef = useRef<HTMLDivElement | null>(null);

  const numberPersonalProjects = Array.from(
      {length: projectUrls.personal.length},
      (_, index) => index, //+ 1,
  );
  const numberProfessionalProjects = Array.from(
      {length: projectUrls.professional.length},
      (_, index) => index,
  );

  const handleOpenCodeDemo = useCallback((code?: string) => {
    if (!code) return;
    router.push(code);
  }, []);

  // const handleOpenLiveDemo = useCallback((live?: string) => {
  //   if (!live) return;
  //   router.push(live);
  // }, []);

  return (
    <motion.div
      className={
          "h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto" +
          " items-center z-0"
      }
    >
      <div className={"flex flex-col "}>
        <h3 className="z-1 uppercase tracking tracking-[20px] text-gray-500 text-2xl">
          {t("title")}
        </h3>
        <p className={"relative z-1 text-gray-500 text-md"}>
          {t("description")}
        </p>
      </div>

      <div className="w-full flex flex-wrap snap-x snap-mandatory z-10  max-w-6xl">
        <h3 className="z-1 uppercase tracking tracking-[20px] text-gray-500 text-2xl">
          {t("personalProjects.title")}
        </h3>

        {Array.from(
            {length: projectUrls.personal.length - 1},
            (_, index) => index,
        ).map((i) => (
          <div
            key={i}
            className={
                "relative h-fit flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20" +
                " md:p-44"
            }
          >
            <p className={"text-lg text-center md:text-left"}>
              {t(`personalProjects.projects.${i}.description`)}
            </p>

            <div className="relative">
              {projectUrls.personal[i] && (
                  <motion.img
                      initial={{y: -300, opacity: 0}}
                      transition={{duration: 1.2}}
                      whileInView={{opacity: 1, y: 0}}
                      viewport={{once: true}}
                      src={projectUrls.personal[i].thumbnail}
                      alt={"project name"}
                      className="rounded-md w-[100%] md:h-[550px] sm:w-10 sm:h-10 items-center object-center p-2"
                  />
              )}

              <div className={"right-0 top-0 z-15"}>
                {projectUrls.personal[i] && (
                    <Link
                        href={projectUrls.personal[i].live}
                        rel={
                          projectUrls.personal[i]
                              ? "noopener noreferrer"
                              : undefined
                        }
                        target={projectUrls.personal[i] ? "_blank" : undefined}
                    >
                      <TabIcon fontSize={"small"} color={"error"}/>
                      <p>Live {projectUrls.personal[i].thumbnail}</p>
                    </Link>
                )}
                {/*TODO*/}
                <CodeIcon fontSize={"small"} color={"error"}/>
              </div>
            </div>

            <div className={"space-y-10 px-0 md:px-10"}>
              <h4 className={"text-4xl font-semibold text-center"}>
                <span className={"underline decoration-[#F7AB0A]/50"}>
                  Case Study {i + 1} of {projectUrls.personal.length}
                </span>
              </h4>
            </div>
          </div>
        ))}
      </div>

      <div
          className={
            "relative w-full flex flex-wrap overflow-y-hidden snap-x snap-mandatory z-20"
          }
      >
        <h3 className="z-1 uppercase tracking tracking-[20px] text-gray-500 text-2xl">
          {t("professionalProjects.title")}
        </h3>

        {Array.from(
            {length: projectUrls.professional.length - 1},
            (_, index) => index,
        ).map((index) => {
          // const url = t(`professionalProjects.projects.${index}`);
          return (
              <div>
                <h3 className={"text-lg text-center md:text-left"}>
                  {t(`professionalProjects.projects.${index}.society`)}
                </h3>
                <p className={"text-lg text-center md:text-left"}>
                  {t(`professionalProjects.projects.${index}.description`)}
                </p>

                {projectUrls.professional[index] && (
                    <motion.img
                        initial={{y: -300, opacity: 0}}
                        transition={{duration: 1.2}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        src={projectUrls.professional[index].thumbnail}
                        width={250}
                        height={250}
                        alt={`${index} professional project`}
                        className={
                          "rounded-md md:w-[100%] md:h-[550px] sm:w-10 sm:h-10 items-center object-center p-2"
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
          );
        })}
      </div>
    </motion.div>
  );
}

export default Experience;
