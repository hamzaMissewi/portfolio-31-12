"use client";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Typography } from "@mui/material";

type SkillsProps = {};

function Skills({}: SkillsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={
        "flex relative flex-col text-center md:text-left xl:flex-row  max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
      }
    >
      <h3
        className={
          "absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"
        }
      >
        Skills
      </h3>
      <Typography
        component={"h3"}
        className={
          "absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm"
        }
      >
        Hover over a skill for currency proficiency
      </Typography>
      <div className={"grid grid-cols-4 gap-5"}>
        <Skill
          title={"Javascript - Typescript"}
          skillUrl={
            "https://www.adm.ee/wordpress/wp-content/uploads/2023/12/javascript_and_typescript-1.jpg"
          }
          percent={95}
        />
        <Skill
          title={"Node Js (Express - Koa)"}
          skillUrl={
            "https://www.appdevelopmentagency.com/wp-content/uploads/2019/08/koa-vs-express.png"
          }
          percent={90}
        />
        <Skill
          title={"React Js"}
          skillUrl={
            "https://blog.cellenza.com/wp-content/uploads/2015/05/React-JS.png"
          }
          percent={85}
        />
        <Skill
          title={"Graph ql"}
          skillUrl={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSElXpEZNK5ocb5yYy8wfBv6ODmge4N6tGJTA&s"
          }
          percent={85}
        />
        <Skill
          title={"Mongo Db"}
          skillUrl={
            "https://www.threatdown.com/wp-content/uploads/2024/04/MongoDB_data_breach.png"
          }
          percent={80}
        />
        <Skill
          title={"Next Js"}
          skillUrl={
            "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fcdn.filestackcontent.com%2F8MbtJ4hTAaOk3KPcptqZ&w=3840&q=75"
          }
          percent={75}
        />
        <Skill
          title={"React Native"}
          skillUrl={
            "https://devtop.io/wp-content/uploads/2022/10/react-native-1.png"
          }
          percent={65}
        />
        <Skill
          title={"Sanity"}
          skillUrl={
            "https://avatars.githubusercontent.com/u/17177659?s=280&v=4"
          }
          percent={40}
        />
      </div>
    </motion.div>
  );
}

export default Skills;
