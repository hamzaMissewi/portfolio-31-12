"use client";
import { motion } from "framer-motion";
import Link from "next/link";

function Education() {
  return (
    <div className={"min-h-screen snap-start"}>
      <h3 className={"text-center text-lg"}>Education</h3>
      <article
        className={
          "flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[200px] md:w-[600px] xl:w-[900px]" +
          " snap-center dark:bg-[#292929] bg-lightBackground p-10 hover:opacity-100 opacity-40 cursor-pointer" +
          " transition-opacity duration-200" +
          " overflow-hidden"
        }
      >
        <div className={"flex flex-col w-full px-0 md:px-10"}>
          <p className={"font-bold text-2xl mb-1"}>University ULT</p>
          <Link
            href={"https://www.ult-tunisie.com/"}
            rel={"noopener noreferrer"}
            target={"_blank"}
          >
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={
                "w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-fill object-center bg-white"
              }
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvTYjHM0eyAaO-4ekxHljFwe_tnpl4U5huaQ&s"
              alt={"université libre de tunis ULT"}
            />
          </Link>
          <p
            className={"font-bold text-darkBackground dark:text-white text-md"}
          >
            September 01, 2019 - September 01, 2022
          </p>
          <p className={"text-wrap text-md text-gray-darkest dark:text-white"}>
            Throughout my engineering studies, I explored a variety of subjects,
            including software development, design and architecture, data
            structures and algorithms, web and mobile programming, database
            management, as well as cloud computing and virtualization. I gained
            proficiency in multiple programming languages and investigated
            others, such as JavaScript,TypeScript, Python, C#, Java, and PHP.
            Additionally, I undertook projects across diverse topics utilizing
            frameworks like Spring Boot, Asp .Net, Angular, django and java
            android. I also earned certifications including AWS academy and
            cisco network CCNA 1 and 2
          </p>
        </div>

        <div className={"flex flex-col w-full px-0 md:px-10"}>
          <p className={"font-bold text-2xl mb-1"}>
            FST Faculté des sciences de Tunis El Manar
          </p>
          <Link
            href={"https://fst.rnu.tn/fr"}
            rel={"noopener noreferrer"}
            target={"_blank"}
          >
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={
                "w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-fill object-center bg-white"
              }
              src="https://upload.wikimedia.org/wikipedia/fr/thumb/8/8d/FSTLOGO.svg/1200px-FSTLOGO.svg.png"
              alt={"Faculté des sciences de tunis El Manar: FST"}
            />
          </Link>

          <p
            className={"font-bold text-darkBackground dark:text-white text-md"}
          >
            September 01, 2015 - September 31, 2017
          </p>
          <p>
            I completed a preparatory cycle in the mathematics and physics
            section to qualify for engineering schools. The curriculum was
            extensive, encompassing subjects such as programming, automation,
            mathematics, physics, chemistry, English, and French. I successfully
            passed the preparatory cycle competition for engineering school
            admission,earning an honorable degree in mathematics and software.
          </p>
        </div>

        <div className={"px-0 md:px-10"}>
          <p className={"font-bold text-2xl mb-1"}>Lycée Mourouj 1</p>
          <Link
            href={
              "https://www.ecoles.com.tn/etablissements/secondaire/lycee-mourouj-1"
            }
            rel={"noopener noreferrer"}
            target={"_blank"}
          >
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={
                "w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-fill object-center bg-white"
              }
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnUbCEVHS5_b9P5Dba3OWCbJGwzMZEOzMHyw&s"
              alt={"Lycée el mourouj"}
            />
          </Link>

          <p
            className={"font-bold text-darkBackground dark:text-white text-md"}
          >
            September 01, 2014 - September 01, 2015
          </p>
          <p>
            Bachelor's degree in mathematics: September 2014 - June 2015
            Achieved success in the national baccalaureate competition in June
            2015,mathematics section, with an average surpassing 15/20.
          </p>
        </div>
      </article>
      {/*<ExperienceCard*/}
      {/*  key={5}*/}
      {/*  companyLogo={*/}
      {/*    "https://upload.wikimedia.org/wikipedia/fr/thumb/8/8d/FSTLOGO.svg/1200px-FSTLOGO.svg.png"*/}
      {/*  }*/}
      {/*  title={"Faculté des sciences"}*/}
      {/*  description={"Study of engineering in FST"}*/}
      {/*  companyLink={"https://fst.rnu.tn/fr"}*/}
      {/*  // images={[competences[6]]}*/}
      {/*/>*/}
      {/*<ExperienceCard*/}
      {/*  key={6}*/}
      {/*  companyLogo={*/}
      {/*    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvTYjHM0eyAaO-4ekxHljFwe_tnpl4U5huaQ&s"*/}
      {/*  }*/}
      {/*  title={"ULT (université libre de tunis)"}*/}
      {/*  companyLink={"https://www.ult-tunisie.com/"}*/}
      {/*  // images={competences.slice(0, 3)}*/}
      {/*/>*/}
    </div>
  );
}

export default Education;
