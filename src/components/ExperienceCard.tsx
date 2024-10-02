"use client";
import { motion } from "framer-motion";
import Link from "next/link";

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
        "flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[200px] md:w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
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
              // <Image key={i}
              //        className={"h-12 w-12 rounded-full object-fill bg-white"}
              //        width={100}
              //        height={100}
              //        alt={image.name}
              //        src={image.url}
              // />

              <img
                key={i}
                className={"h-12 w-12 rounded-full object-fill bg-white"}
                alt={image.name}
                src={image.url}
              />

              //     : <>
              //     <img className={"h-10 w-10 rounded-full"}
              //          alt={"typescript"}
              //          src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png"}
              //     />
              //     <img className={"h-10 w-10 rounded-full"}
              //          alt={"react-next"}
              //          src={"https://miro.medium.com/v2/resize:fit:1400/1*1itDSqxMNCT_XMksG99r-A.png"}
              //     />
              //     <img className={"h-10 w-10 rounded-full bg-white"}
              //          alt={"node-js"}
              //          src={"https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"}
              //     />
              //     <img className={"h-10 w-10 rounded-full"}
              //          alt={"graphql-apollo"}
              //          src={"https://spin.atomicobject.com/wp-content/uploads/GraphQL-Apollo.jpg"}
              //     />
              //     <img className={"h-10 w-10 rounded-full bg-white"}
              //          alt={"amazon-s3"}
              //          src={"https://cdn-blog.lawrencemcdaniel.com/wp-content/uploads/2021/01/30083957/aws-s3-logo.png"}
              //     />
              //     <img className={"h-10 w-10 rounded-full bg-white"}
              //          alt={"mongo-db"}
              //          src={"https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png"}
              //     />
              // </>
            ))}
        </div>
        <p>{description}</p>

        <ul className={"list-disc space-y-4 ml-5 text-lg"}>
          {/*    <li>Proven Expertise: "Experienced software developer with 2 years in web developing,including*/}
          {/*        cloud-based solutions."*/}
          {/*    </li>*/}
          {/*    <li>Innovation and Efficiency: "Implemented automated testing frameworks and CI/CD pipelines that*/}
          {/*        reduced deployment time by 40% and increased code quality."*/}
          {/*    </li>*/}
          {/*    <li>Leadership and Mentoring: "Experienced in mentoring junior developers and leading technical*/}
          {/*        teams, fostering a collaborative environment that encourages innovation and professional*/}
          {/*        growth."*/}
          {/*    </li>*/}
          {/*    /!*<li>Workflow</li>*!/*/}
          {/*    /!*<li>Communications</li>*!/*/}
          {/*    /!*<li>Summary points</li>*!/*/}
        </ul>
      </div>
      {/*<h3 className={"absolute top-24 "}>Experience</h3>*/}
    </article>
  );
};

export default ExperienceCard;
