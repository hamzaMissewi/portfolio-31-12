"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type AboutProps = {};

function About({}: AboutProps) {
  const t = useTranslations("AboutMe");

  const skillKeys = [
    "technicalProficiency",
    "problemSolving",
    "projectManagement",
  ] as const;

  return (
    <div
      // md:flex-row max-w-7xl
      className={
        "relative flex flex-col space-y-4 h-screen md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center"
      }
    >
      {/*<div className={"relative flex flex-col justify-center space-y-4"}>*/}
      <h3
        className={"text-center uppercase tracking-[20px] text-2xl text-black"}
      >
        {t("title")}
      </h3>

      <div className={"relative flex flex-row items-center"}>
        <motion.img
          className={
            "self-start mt-2 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-fill md:rounded-lg "
            // "md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
          }
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9a2kU-lkyJTp7tUBqh02YhJqtbHBBZYVuw&s"
          }
        />

        <div className={"space-y-10 px-0 md:px-10"}>
          <h4 className={"text-4xl font-semibold"}>
            {t("intro")}
            {/*<span className={"underline decoration-[#F7AB0A]/50"}>*/}
          </h4>
          <p className={"text-base"}>{t("details")}</p>
          <ul>
            {skillKeys.map((key) => (
              <li>{t(`skills.${key}`)}</li>
            ))}

            {/*<li>Cross-Functional Collaboration: "Proven track record of working effectively with*/}
            {/*    cross-functional teams, including designers, product managers, and stakeholders, to deliver*/}
            {/*    user-centric solutions."*/}
            {/*</li>*/}
            {/*<li>Achievements: "Successfully led the development of a high-traffic e-commerce platform, resulting*/}
            {/*    in a 30% increase in user engagement and a 20% boost in revenue within the first year."*/}
            {/*</li>*/}
            {/*<li>Continuous Learning: "Committed to staying updated with industry trends and best practices,*/}
            {/*    including recent certifications in cloud computing and cybersecurity."*/}
            {/*</li>*/}
            {/*<li>Customer Focus: "Strong understanding of client requirements and business objectives, with a*/}
            {/*    history of delivering tailored software solutions that exceed expectations and drive growth."*/}
            {/*</li>*/}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
