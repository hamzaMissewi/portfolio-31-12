"use client";
import { motion } from "framer-motion";
import ExperienceCard from "@/components/ExperienceCard";
import { englishRawData } from "@/lib/data/english";

const competences: { name: string; url: string }[] = [
  {
    name: "typescript",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
  },
  {
    name: "react js",
    url: "https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png",
  },
  {
    name: "next js",
    url: "https://miro.medium.com/v2/resize:fit:1400/1*BQZAbczBfLYtPp-6HmN0ZQ.jpeg",
  },
  {
    name: "react native",
    url: "https://devtop.io/wp-content/uploads/2022/10/react-native-1.png",
  },
  {
    name: "react - next",
    url: "https://miro.medium.com/v2/resize:fit:1400/1*1itDSqxMNCT_XMksG99r-A.png",
  },
  {
    name: "node js",
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "graphql apollo",
    url: "https://spin.atomicobject.com/wp-content/uploads/GraphQL-Apollo.jpg",
  },
  {
    name: "amazon s3",
    url: "https://cdn-blog.lawrencemcdaniel.com/wp-content/uploads/2021/01/30083957/aws-s3-logo.png",
  },
  {
    name: "mongo db",
    url: "https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png",
  },
  {
    name: "python",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZqZkpMyiN2uSuT7GAf6JSkJ44YsZqoQHdw&s",
  },
  {
    name: "elasticsearch",
    url: "https://miro.medium.com/v2/resize:fit:1400/1*BmvPfSSm2G8C-khX1rhCGg.png",
  },
];

function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={
        "snap-start relative flex flex-col md:flex-row w-full px-10" +
        " justify-evenly mx-auto items-center space-y-4 max-w-full"
      }
    >
      {/*<h3 className="absolute top-0 uppercase text-gray-500 tracking-[20px] text-3xl">*/}
      {/*  Experience*/}
      {/*</h3>*/}

      <div
        className={
          "w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory"
        }
      >
        <ExperienceCard
          key={1}
          title={englishRawData.work_experience.title}
          companyLogo={
            "https://media.licdn.com/dms/image/C4E0BAQECttqhzuGqBw/company-logo_200_200/0/1651029832992/b2b_alive_logo?e=2147483647&v=beta&t=yaQVzsyhkQw3LhBJexMtVjWovIEQXEzzxRmGTF20RHk"
          }
          companyLink={englishRawData.work_experience.site}
          companyName={englishRawData.work_experience.name}
          date={englishRawData.work_experience.date}
          // date={"October 1, 2022 – November 1, 2024"}
          description={englishRawData.work_experience.content.join(" ")}
          usedTechs={competences.slice(0, 6)}
        />
        <ExperienceCard
          key={2}
          // title={"End of studies internship (stage PFE) in b2b alive"}
          title={englishRawData.internships.pfe.title}
          companyLogo={
            "https://media.licdn.com/dms/image/C4E0BAQECttqhzuGqBw/company-logo_200_200/0/1651029832992/b2b_alive_logo?e=2147483647&v=beta&t=yaQVzsyhkQw3LhBJexMtVjWovIEQXEzzxRmGTF20RHk"
          }
          companyLink={"https://www.b2b-alive.com/en/"}
          companyName={englishRawData.internships.pfe.company}
          description={englishRawData.internships.pfe.content}
        />
        <ExperienceCard
          key={3}
          title={englishRawData.internships.technician.title}
          companyLogo={
            "https://www.gnet.tn/wp-content/uploads/2018/11/logo-gnet-1.png"
          }
          companyName={englishRawData.internships.technician.company}
          description={englishRawData.internships.technician.content}
          companyLink={"https://www.3s.com.tn/groupe-3s-tunisie/"}
          usedTechs={[competences[10], competences[9]]}
        />
        <ExperienceCard
          key={4}
          title={englishRawData.internships.initial.title}
          companyLogo={
            "https://www.gnet.tn/wp-content/uploads/2018/11/logo-gnet-1.png"
            // "https://www.sofrecom.com/media/layout/img/sofrecom-meta-logo-small.png"
          }
          companyName={englishRawData.internships.initial.company}
          companyLink={"https://www.3s.com.tn/groupe-3s-tunisie/"}
          usedTechs={[competences[7], competences[8]]}
          // companyLink={"https://www.sofrecom.com/"}
          // image="https://res.cloudinary.com/hamzaostouri/image/upload/c_thumb,w_200,g_face/v1724472245/Capture_d_%C3%A9cran_2024-08-22_131452_kjywl9.png"
        />
      </div>
    </motion.div>
  );
}

export default Experience;
