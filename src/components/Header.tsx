"use client";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { ButtonGroup, Stack } from "@mui/material";
import Image from "next/image";
import { SignedIn, SignedOut, SignOutButton, UserButton } from "@clerk/nextjs";

import { useUser } from "@clerk/clerk-react";
import { useTranslations } from "next-intl";
import NextTopLoader from "nextjs-toploader";
import { ThemeToggler } from "./movies/sonny/ThemeToggler";
import LocaleSwitcher from "./LocaleSwitcher";
import { Button } from "./ui/button";
// import SearchInput from "@/components/movies/sonny/SearchInput";

// const b2bAliveLogo =
// "https://media.licdn.com/dms/image/C4E0BAQECttqhzuGqBw/company-logo_200_200/0/1651029832992/b2b_alive_logo?e=2147483647&v=beta&t=yaQVzsyhkQw3LhBJexMtVjWovIEQXEzzxRmGTF20RHk";
// "disney": "https://links.papareact.com/a943ae"

const Header: React.FC = () => {
  // const { isSignedIn, signOut } = useAuth();
  const { user, isSignedIn, isLoaded } = useUser();
  const router = useRouter();
  const t = useTranslations("Navbar");

  return (
    <div
      className={
        "sticky flex items-center justify-between backdrop-blur-0 bg-slate-800 dark:bg-white w-full z-20 border min-w-screen" +
        " border-red-500"
      }
    >
      <Link href="/" className="mr-10 bg-slate-800">
        <Image
          src={"/assets/b2b-alive-ltd-icon.svg"}
          alt="Society Logo"
          width={70}
          height={50}
          objectFit={"cover"}
          style={{ position: "relative", padding: 1 }}
          className={"cursor-pointer invert"}
        />

        {/*<h1 className="text-4xl mb-4 font-semibold">{t("title")}</h1>*/}
        {/*<p>{t("description")}</p>*/}
      </Link>

      <div className={"flex flex-grow"}>
        <LocaleSwitcher />
        <ThemeToggler />
      </div>

      <div>
        {user && isSignedIn ? (
          <Stack direction={"row"} alignItems={"center"}>
            <h1 className={"text-xl text-black"}>
              {t("welcome", { username: user?.username })}
            </h1>
            <UserButton />
            <SignedIn>
              <SignOutButton />
            </SignedIn>
          </Stack>
        ) : (
          // <SignedOut>
          <ButtonGroup color={"inherit"} size={"small"}>
            <Button
              type={"button"}
              asChild
              color={"info"}
              onClick={() => {
                router.push("/signIn");
              }}
            >
              {t("signIn")}
            </Button>

            <Button
              asChild
              color={"warning"}
              onClick={() => {
                router.push("/signUp");
              }}
            >
              {t("signUp")}
            </Button>
          </ButtonGroup>
          // </SignedOut>
        )}
      </div>
      <NextTopLoader color="#000" showSpinner={false} />

      {/*<div className="flex flex-row space-x-2 flex-wrap my-2 px-2">*/}
      {/*<SearchInput />*/}
      {/*<ThemeToggler />*/}
      {/*</div>*/}

      {/*<div className={"fixed top-0 w-full items-start justify-between mx-auto z-20 p-5 flex xl:items-center"}>*/}

      <motion.div
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className={"flex flex-row items-center"}
      >
        <SocialIcon
          url={"https://www.youtube.com/@hamza-topg"}
          bgColor={"transparent"}
          fgColor={"gray"}
          target={"_blank"}
        />
        <SocialIcon
          url={"https://www.github.com/HamzaOstouri"}
          bgColor={"transparent"}
          fgColor={"gray"}
          target={"_blank"}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 500, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className={"flex flex-row items-center text-gray-300 cursor-pointer"}
      >
        <SocialIcon
          className={"cursor-pointer"}
          network={"email"}
          fgColor={"gray"}
          bgColor={"transparent"}
        />

        <Link href={"mailto:hamza.missaoui47@gmail.com?subject=want_require"}>
          <p
            className={"uppercase hidden md:inline-flex text-sm text-gray-400"}
          >
            Get in Touch
          </p>
        </Link>
      </motion.div>
    </div>
  );
};

export default Header;
