import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProjectType } from "@/components/Projects";
import ProjectDetails from "@/components/ProjectDetails";
import { Divider } from "@mui/material";

function ProjectsCarousal({ projects }: { projects: ProjectType[] }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent className={"space-y-3"}>
        {/*{Array.from({ length: 5 }).map((_, index) => (*/}
        {projects.map((project, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col aspect-square projects-center justify-center p-6">
                  <ProjectDetails project={project} />
                  <span className="text-3xl font-semibold">{index + 1}</span>

                  <Divider sx={{ pt: 2 }} />
                  {/*<div className={"absolute bottom-2 right-2"}>*/}
                  <p className="text-lg text-center md:text-left font-semibold bg-white text-black decoration-[#F7AB0A]/50">
                    {index + 1}/{projects.length} -{" "}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default ProjectsCarousal;
