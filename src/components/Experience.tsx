"use client";
// import React from 'react';
import { motion } from "framer-motion";
import ExperienceCard from "@/components/ExperienceCard";

type ExperienceProps = {};

const competences: { name: string; url: string }[] = [
  {
    name: "typescript",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
  },
  {
    name: "react-next",
    url: "https://miro.medium.com/v2/resize:fit:1400/1*1itDSqxMNCT_XMksG99r-A.png",
  },
  {
    name: "node-js",
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "graphql-apollo",
    url: "https://spin.atomicobject.com/wp-content/uploads/GraphQL-Apollo.jpg",
  },
  {
    name: "amazon-s3",
    url: "https://cdn-blog.lawrencemcdaniel.com/wp-content/uploads/2021/01/30083957/aws-s3-logo.png",
  },
  {
    name: "mongo-db",
    url: "https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png",
  },
  {
    name: "python",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZqZkpMyiN2uSuT7GAf6JSkJ44YsZqoQHdw&s",
  },
  {
    name: "next js",
    url: "https://miro.medium.com/v2/resize:fit:1400/1*BQZAbczBfLYtPp-6HmN0ZQ.jpeg",
  },
  {
    url: "https://miro.medium.com/v2/resize:fit:1400/1*BmvPfSSm2G8C-khX1rhCGg.png",
    name: "elasticsearch",
  },
  {
    url: "https://miro.medium.com/v2/resize:fit:522/0*Hdm7hBTZ-hKlbtlV.png",
    name: "react js",
  },
  {
    url: "https://devtop.io/wp-content/uploads/2022/10/react-native-1.png",
    name: "react native",
  },
];

function WorkExperience({}: ExperienceProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={
        "h-screen flex relative overflow-hidden flex-col text-left md:flex-row mac-w-full px-10 justify-evenly mx-auto items-center"
      }
    >
      <h3
        className={
          "absolute top-4 uppercase tracking-[20px] text-gray-500 text-2xl"
        }
      >
        Experience
      </h3>
      <div
        className={
          "w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory"
        }
      >
        <ExperienceCard
          key={1}
          image={
            "https://media.licdn.com/dms/image/C4E0BAQECttqhzuGqBw/company-logo_200_200/0/1651029832992/b2b_alive_logo?e=2147483647&v=beta&t=yaQVzsyhkQw3LhBJexMtVjWovIEQXEzzxRmGTF20RHk"
          }
          imageLink={"https://www.b2b-alive.com/en/"}
          // image="https://res.cloudinary.com/hamzaostouri/image/upload/c_thumb,w_200,g_face/v1724472245/Capture_d_%C3%A9cran_2024-08-22_131452_kjywl9.png"
          companyName="B2b alive Ltd"
          title="Senior web developer expert in typescript, react, graphql, mongodb, node koa framework and other knowledge in many technologies"
          description="Started work on first october 2022 until today ,gain skills in Typescript and list of technologies and tools"
          images={competences.slice(0, 6)}
        />
        <ExperienceCard
          key={2}
          title={"Done internship of end of studies in globalnet"}
          // image={"https://res.cloudinary.com/hamzaostouri/image/upload/v1724392322/1000038266_pzd2ji.jpg"}
          image={
            "https://www.gnet.tn/wp-content/uploads/2018/11/logo-gnet-1.png"
          }
          companyName="Globalnet 3s"
          images={[competences[10], competences[9]]}
        />
        <ExperienceCard
          key={3}
          image={
            "https://www.sofrecom.com/media/layout/img/sofrecom-meta-logo-small.png"
          }
          title={"sofrecom"}
          // image={"https://res.cloudinary.com/hamzaostouri/image/upload/v1663579330/avatar_photos/gjyv2ua2oh43thk1xw5z.jpg"}/>
        />

        <ExperienceCard
          key={4}
          image={
            "https://upload.wikimedia.org/wikipedia/fr/thumb/8/8d/FSTLOGO.svg/1200px-FSTLOGO.svg.png"
          }
          title={"Faculté des sciences"}
          description={"Study of engineering in FST"}
          images={[competences[6]]}
          imageLink={"https://fst.rnu.tn/fr"}
        />

        <ExperienceCard
          key={5}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvTYjHM0eyAaO-4ekxHljFwe_tnpl4U5huaQ&s"
          }
          title={"ULT (université libre de tunis)"}
          description={""}
          images={competences.slice(0, 3)}
          imageLink={"https://www.ult-tunisie.com/"}
        />

        {/*Experience Card*/}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
