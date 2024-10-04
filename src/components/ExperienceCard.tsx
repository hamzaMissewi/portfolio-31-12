"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type ExperienceCardType = {
  image?: string;
  companyName?: string;
  title?: string;
  description?: string;
  images?: { url: string; name: string }[];
  imageLink?: string;
};

const ExperienceCard = ({
  image,
  companyName,
  title,
  description,
  images,
  imageLink,
}: ExperienceCardType) => {
  return (
    <article
      className={
        "flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[200px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
      }
    >
      <Link
        href={imageLink || ""}
        rel={imageLink ? "noopener noreferrer" : undefined}
        target={imageLink ? "_blank" : undefined}
      >
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={
            "w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-fill object-center"
          }
          src={image}
          alt={""}
        />
      </Link>

      <div className={"px-0 md:px-10"}>
        <p className={"font-bold text-2xl mt-1"}>{companyName}</p>
        <h4 className={"text-4xl font-light"}>{title}</h4>
        <div className={"flex space-x-2 my-2"}>
          {/*    TECH USED*/}
          {images &&
            images.map((image, i) => (
              <Image
                key={i}
                width={100}
                height={100}
                className={"h-12 w-12 rounded-full object-fill bg-white"}
                alt={image.name}
                src={image.url}
              />
            ))}
        </div>
        <p>{description}</p>

        <ul className={"list-disc space-y-4 ml-5 text-lg"}>
          <li>
            Proven Expertise: "Experienced software developer with 2 years in
            web developing,including cloud-based solutions."
          </li>
          <li>
            Innovation and Efficiency: "Implemented automated testing frameworks
            and CI/CD pipelines that reduced deployment time by 40% and
            increased code quality."
          </li>
          <li>
            Leadership and Mentoring: "Experienced in mentoring junior
            developers and leading technical teams, fostering a collaborative
            environment that encourages innovation and professional growth."
          </li>
          <li>Workflow</li>
          <li>Communications</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
