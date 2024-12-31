"use client";
import { Divider } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";
import ProjectDetails from "@/components/ProjectDetails";
import ProjectsCarousal from "@/components/ProjectsCarousal";

export type ProjectType = {
  title?: string;
  description?: string;
  thumbnails: string[];
  liveUrl?: string;
  code?: string;
};

const projectsData: {
  professional: ProjectType[];
  personal: ProjectType[];
} = {
  personal: [
    {
      title: "ecommerce web app",
      description:
        "Concept and Develop a web application saas with nextjs and typescript",
      thumbnails: [
        "/projects/ecommerce_app/home.png",
        "/projects/ecommerce_app/product_details.png",
        "https://res.cloudinary.com/hamzaostouri/image/upload/v1735649572/Capture_d_%C3%A9cran_2024-12-23_070914_vnyrqs.png",
        "https://res.cloudinary.com/hamzaostouri/image/upload/v1735649573/Capture_d_%C3%A9cran_2024-12-25_130821_bimfow.png",
        "https://res-console.cloudinary.com/hamzaostouri/thumbnails/v1/image/upload/v1735649572/Q2FwdHVyZV9kX8OpY3Jhbl8yMDI0LTEyLTI1XzEzMDg0MV9sYnk4cHI=/drilldown",
        // "/projects/ecommerce_app/details2.png",
        // "/projects/ecommerce_app/success_order.png",
        // "/projects/ecommerce_app/order_page.png",
      ],
      liveUrl: "https://hamza-missaoui-ecommerce-app.vercel.app/",
    },
    {
      title: "quran application",
      thumbnails: [],
      description:
        "Build an application to listen to quran with different reciters audio",
      liveUrl: "https://hamza-missaoui-listen-quran.vercel.app/",
    },
    {
      title: "movies web application",
      thumbnails: [
        "https://user-images.githubusercontent.com/51760520/124705920-1172ac80-df14-11eb-9568-1e91968b1273.png",
        "https://res.cloudinary.com/hamzaostouri/image/upload/v1728135248/Capture_d_%C3%A9cran_2024-10-05_143358_eawvpb.png",
      ],
      liveUrl: "https://quirky-wright-757726.netlify.app/",
    },
    {
      title: "old portfolio app",
      thumbnails: [
        // "https://res.cloudinary.com/hamzaostouri/image/upload/v1728134489/Capture_d_%C3%A9cran_2024-10-05_142025_vusnbp.png",
        "https://res.cloudinary.com/hamzaostouri/image/upload/v1735649575/Capture_d_%C3%A9cran_2024-12-31_135112_d6vekr.png",
      ],
      liveUrl: "https://hamza-missaoui-resume.netlify.app/",
    },
  ],
  professional: [
    {
      thumbnails: [
        "https://res.cloudinary.com/hamzaostouri/image/upload/v1728022057/Capture_d_%C3%A9cran_2024-08-18_145746_kvt6eh.png",
        "https://res.cloudinary.com/hamzaostouri/image/upload/v1724472245/Capture_d_%C3%A9cran_2024-08-22_131442_utriiu.png",
        "https://res.cloudinary.com/hamzaostouri/image/upload/v1728022099/Capture_d_%C3%A9cran_2024-03-18_192908_xsd9iw.png",
        "https://res.cloudinary.com/hamzaostouri/image/upload/v1728022087/Capture_d_%C3%A9cran_2024-03-19_161306_nblwjp.png",
        "https://res.cloudinary.com/hamzaostouri/image/upload/v1728022637/b2b-ui-schedule-page_biyxel.png",
      ],
    },
    {
      thumbnails: [
        "https://res.cloudinary.com/hamzaostouri/image/upload/v1724472245/Capture_d_%C3%A9cran_2024-08-22_131452_kjywl9.png", // GOOD
        "https://res.cloudinary.com/hamzaostouri/image/upload/v1724472244/Capture_d_%C3%A9cran_2024-08-24_014409_pbkn4x.png",
        "https://res.cloudinary.com/hamzaostouri/image/upload/v1728022637/graphql-playground_mprfrb.png",
      ],
    },
  ],
};

function Projects() {
  const t = useTranslations("Experience");

  return (
    <div className={"min-h-screen flex flex-col justify-evenly mx-auto"}>
      <div className="flex flex-col space-y-2 snap-x snap-mandatory max-w-6xl tracking tracking-[20px]">
        <h3 className="uppercase text-gray-500 text-2xl tracking tracking-[20px]">
          {t("personalProjects.title")}
        </h3>

        {/*TODO carousel*/}
        <ProjectsCarousal projects={projectsData.personal} />

        {/*{Array.from(*/}
        {/*  { length: projectsData.personal.length - 1 },*/}
        {/*  (_, index) => index,*/}
        {/*)*/}
        <div className={"space-y-5"}>
          {projectsData.personal.map((project, index) => (
            <div
              key={index}
              className={
                "relative h-fit flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44"
              }
            >
              <ProjectDetails project={project} />
              <Divider sx={{ pt: 2 }} />
              <div className={"absolute bottom-2 right-2"}>
                <p className="text-lg text-center md:text-left font-semibold bg-white text-black decoration-[#F7AB0A]/50">
                  {index + 1}/{projectsData.personal.length} -{" "}
                  {t(`personalProjects.projects.${index}.description`)}
                  {/*Case Study {index + 1} of {projectsData.personal.length}*/}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={"relative w-full flex flex-wrap snap-x snap-mandatory"}>
        <h3 className="uppercase tracking tracking-[20px] text-gray-500 text-2xl">
          {t("professionalProjects.title")}
        </h3>

        {projectsData.professional.map((project, index) => (
          <div
            key={index}
            className={
              "relative h-fit flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44"
            }
          >
            <ProjectDetails project={project} />
            <Divider sx={{ pt: 2 }} />

            {/*<h3 className={"text-lg text-center md:text-left"}>*/}
            {/*  {t(`professionalProjects.projects.${index}.society`)}*/}
            {/*</h3>*/}
            {/*<p className={"text-lg text-center md:text-left"}>*/}
            {/*  {t(`professionalProjects.projects.${index}.description`)}*/}
            {/*</p>*/}

            <div className={"absolute bottom-2 right-2"}>
              <p className="text-lg text-center md:text-left font-semibold bg-white text-black decoration-[#F7AB0A]/50">
                {index + 1}/{projectsData.professional.length} -{" "}
                {t(`professionalProjects.projects.${index}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
