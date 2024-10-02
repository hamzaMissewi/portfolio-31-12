"use client";
// import React from "react";
import { motion } from "framer-motion";
import { Stack, Typography } from "@mui/material";

type SkillProps = {
  directionLeft?: boolean;
  skillUrl: string;
  percent: number;
  title: string;
};

function Skill({ directionLeft, skillUrl, percent, title }: SkillProps) {
  return (
    <Stack className={"relative flex flex-col py-2 items-center"} spacing={2}>
      <Typography
        sx={{ color: "black", backgroundColor: "white", fontWeight: "bold" }}
        fontSize={"medium"}
      >
        {title}
      </Typography>

      <div className={"group relative flex cursor-pointer"}>
        <motion.img
          initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src={skillUrl}
          className={
            "rounded-full bg-white border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
          }
        />
        <div
          className={
            "absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
          }
        >
          <div className={"flex items-center justify-center h-full"}>
            <p className={"text-3xl font-bold text-black opacity-100"}>
              {percent}%
            </p>
          </div>
        </div>
      </div>
    </Stack>
  );
}

export default Skill;
