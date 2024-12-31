import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "@mui/material";
import TabIcon from "@mui/icons-material/Tab";
import CodeIcon from "@mui/icons-material/Code";
import { ProjectType } from "@/components/Projects";
import AliceCarousel from "react-alice-carousel";
import { responsive } from "@/lib/constants";
import { motion } from "framer-motion";

function ProjectDetails({ project }: { project: ProjectType }) {
  return (
    <div className={"flex relative items-center"}>
      {project.title && (
        <p
          className={
            "text-lg text-center md:text-left uppercase tracking tracking-[20px] text-gray-500"
          }
        >
          {project.title}
        </p>
      )}

      {project.description && (
        <p className={"z-1 text-gray-500 text-md"}>{project.description}</p>
      )}

      {project.thumbnails ? (
        <div>
          <AliceCarousel
            mouseTracking
            infinite
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            items={project.thumbnails.map((thumbnail, index) => (
              <div className="carouselItem" key={index}>
                <Image
                  width={100}
                  height={100}
                  src={thumbnail}
                  alt={`project screenshot ${index}`}
                  onDragStart={(event) => event.preventDefault()}
                  className="carouselItem__img"
                />
                <b className="carouselItem__txt">Screenshot {index}</b>
              </div>
            ))}
            autoPlay
          />

          {project.thumbnails.map((thumbnail, index) => (
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={index}
            >
              <Image
                width={250}
                height={250}
                src={thumbnail}
                alt={"project"}
                objectFit={"contain"}
                className="rounded-md items-center border border-customOrange cursor-pointer object-center p-2"
                onClick={() => {
                  if (project.liveUrl) {
                    window.open(project.liveUrl, "_blank");
                    // router.push(project.liveUrl);
                  }
                }}
              />
            </motion.div>
          ))}
        </div>
      ) : (
        <p>No thumbnail</p>
      )}

      <div
        className={
          "flex items-center absolute top-0 left-0 right-0 w-full space-x-2"
        }
      >
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            rel={"noopener noreferrer"}
            target={"_blank"}
          >
            <Tooltip title={"Live"}>
              <TabIcon fontSize={"small"} color={"error"} />
            </Tooltip>
          </Link>
        )}

        {project.code && (
          <Link
            href={project.code || "#"}
            rel={project.code ? "noopener noreferrer" : undefined}
            target={project.code ? "_blank" : undefined}
          >
            <Tooltip title={"Code"}>
              <CodeIcon fontSize={"small"} color={"error"} />
            </Tooltip>
          </Link>
        )}
      </div>
    </div>
  );
}

export default ProjectDetails;
