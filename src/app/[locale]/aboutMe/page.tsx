"use client";
import { Stack } from "@mui/material";
import schedulePageCapture from "../../../../public/assets/b2b-ui-schedule-page.png";
import playgroundCapture from "../../../../public/assets/graphql-playground.png";
import { ProjectType } from "@/components/Projects";
import Link from "next/link";
import CodeIcon from "@mui/icons-material/Code";
import TabIcon from "@mui/icons-material/Tab";
import About from "@/components/About";

function Page() {
  const projects: ProjectType[] = [
    {
      url: "https://res.cloudinary.com/hamzaostouri/image/upload/v1724472245/Capture_d_%C3%A9cran_2024-08-22_131442_utriiu.png",
      description: "hamza portfolio",
      code: "http://github.com/",
      live: "https://hamza-missaoui-resume.netlify.app/",
    },
    { url: schedulePageCapture.src },
    { url: playgroundCapture.src },
  ];

  return (
    <Stack spacing={2} className={"items-center"}>
      About me page
      <div className="flex h-screen items-center justify-center">
        <About />
      </div>
      {projects.map((project) => (
        <div>
          <img src={project.url} width={250} height={250} alt={"project"} />
          <p className={"text-md text-white"}>{project.description}</p>

          {/*<div className={"flex flex-row absolute right-0 bottom-0"}>*/}
          <div
            className={"flex flex-row right-0 bottom-0 space-x-2 absolute z-2"}
          >
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
        </div>
      ))}
    </Stack>
  );
}

export default Page;
