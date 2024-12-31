"use client";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  SignedIn,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import { Button } from "./ui/button";
import UpdateLanguageDialog, {
  useUpdateLanguageDialog,
} from "./common/UpdateLanguage";
import { ModeToggle } from "@/components/ui/theme-toggler";
import { usePositionedToast } from "@/hooks/usePositionedToast";
import { ArrowDownCircle, ArrowUpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
// import { SearchMoviesInput } from "@/components/movies/sonny/SearchMoviesInput";

const Header: React.FC = () => {
  const { user, isSignedIn } = useUser();
  const router = useRouter();
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const { updateLanguageDialogProps, openUpdateLanguageDialog } =
    useUpdateLanguageDialog();
  // const { signOut } = useAuth();

  const [open, setOpen] = useState<boolean>(true);
  const handleOpen = () => setOpen(!open);

  const { positionedToast } = usePositionedToast();
  const createClerkPasskey = async () => {
    if (!user) return;
    try {
      await user.createPasskey();
      positionedToast(`create passkey successfully`);
    } catch (error: any) {
      console.error("Error creating passkey", error);
      positionedToast(`Error creating passkey ${error?.message}`, {
        type: "error",
      });
      throw error;
    }
  };

  return (
    <header
      className={
        "border border-darkBackground dark:border-customBlue bg-lightBackground dark:bg-darkBackground w-full z-20" +
        " min-w-screen max-h-[200px]"
      }
    >
      <motion.div
        // initial={{ y: "100%" }}
        // animate={{ y: 0 }}
        // transition={{ duration: 0.5 }}
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className={cn(
          `fixed items-center justify-between mx-auto z-20 p-5 flex flex-start space-x-2 backdrop-blur-0 top-0 bg-slate-150 w-full bg-[#F0F3F4]`,
          locale === "ar" ? "ml-10" : "mr-10",
          open ? `h-40` : `h-14`,
        )}
      >
        <Link href="/">Home</Link>
        <Link
          href="https://b2b-alive.com"
          rel={"noopener noreferrer"}
          target={"_blank"}
        >
          <Image
            src={"/assets/b2b-alive-ltd-icon.svg"}
            alt="Society Logo"
            width={40}
            height={30}
            className={
              "cursor-pointer bg-lightBackground w-15 h-full relative p-1 my-1"
            }
          />
        </Link>
      </motion.div>

      <div
        className={
          // "flex justify-center space-x-2 border child:border-black dark:bg-black bg-white  grid grid-cols-3 gap-2"
          "grid grid-cols-2 gap-2"
        }
      >
        <Button asChild onClick={openUpdateLanguageDialog} color={"info"}>
          Update Language
        </Button>
        <LocaleSwitcher />
        <ModeToggle />
        {/*<ThemeToggler />*/}
      </div>

      {/*<div className="sm:hidden flex w-xl">*/}
      {/*{user && isSignedIn ? (): (*/}
      {/*    // <SignedOut>*/}
      {/*    <ButtonGroup color={"success"} size={"small"}>*/}
      {/*      <Button*/}
      {/*          type={"button"}*/}
      {/*          asChild*/}
      {/*          color={"info"}*/}
      {/*          onClick={() => {*/}
      {/*            router.push("/signIn");*/}
      {/*          }}*/}
      {/*      >*/}
      {/*        {t("signIn")}*/}
      {/*      </Button>*/}

      {/*      <Button*/}
      {/*          asChild*/}
      {/*          color={"warning"}*/}
      {/*          onClick={() => {*/}
      {/*            router.push("/signUp");*/}
      {/*          }}*/}
      {/*      >*/}
      {/*        {t("signUp")}*/}
      {/*      </Button>*/}
      {/*    </ButtonGroup>*/}
      {/*  )}*/}
      {/*</div>*/}

      {isSignedIn && user && (
        <div className={"flex flex-row space-x-2 items-center"}>
          <h1 className={"text-xl font-semibold"}>
            Welcome back {user?.username} !
            {/*{t("welcome", { username: user?.username })}*/}
          </h1>
          <UserButton />
        </div>
      )}

      {user && user.passkeys.length === 0 && (
        <Button
          type={"button"}
          size={"sm"}
          className="cursor-pointer text-sm border border-blue-400 text-nowrap items-center px-2 animate-pulse dark:text-white text-gray-darkfont-bold rounded-md hover:shadow-md hover:text-white hover:bg-blue-800 transition-all duration-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          //   "p-1 rounded w-fit border border-blue-300 text-nowrap md:flex hidden font-bold text-sm h-fit"
          onClick={createClerkPasskey}
        >
          Create passkey
        </Button>
      )}

      {!isSignedIn || !user ? (
        <>
          <SignInButton mode={"modal"}>
            <Button
              type={"button"}
              size={"sm"}
              // className="flex text-sm w-fit text-nowrap z-10 items-center px-3 inset-0 h-fit border-full border-blue-500 animate-pulse bg-cyan-800 text-white font-semibold rounded-lg shadow-lg transition-all duration-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              className="cursor-pointer text-sm hover:bg-emerald-800 hover:text-white border border-emerald-800 text-nowrap items-center px-2 animate-pulse dark:text-white text-gray-darkfont-bold rounded-md hover:shadow-md hover:shadow-emerald-800 transition-all duration-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Sign in
            </Button>
          </SignInButton>
          <SignUpButton mode={"modal"}>
            <Button
              type={"button"}
              size={"sm"}
              className="cursor-pointer font-bold text-sm hover:bg-emerald-800 border border-emerald-800 hover:text-white text-nowrap items-center px-2 animate-pulse dark:text-white text-gray-darkrounded-md hover:shadow-md hover:shadow-emerald-800 transition-all duration-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Sign up
            </Button>
          </SignUpButton>
        </>
      ) : (
        <SignedIn>
          <SignOutButton />
          <Button
            type={"button"}
            size={"sm"}
            className="cursor-pointer font-bold text-sm text-nowrap border border-red-800 hover:bg-red-600 hover:shadow-red-800 items-center px-2 animate-pulse dark:text-white text-gray-darkrounded-md hover:shadow-md transition-all duration-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            // className="cursor-pointer hover:bg-red-600 flex text-md text-nowrap items-center px-2 animate-pulse text-red-700 border bg-white border-red-dark font-bold rounded-md shadow-lg transition-all duration-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Sign Out
          </Button>
        </SignedIn>
      )}

      <motion.div
        initial={{ opacity: 0, x: 500, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className={`flex flex-row items-center cursor-pointer ${locale === "ar" ? "ml-2" : "mr-2"}`}
      >
        <SocialIcon
          url={"https://www.youtube.com/@hamza-topg"}
          bgColor={"transparent"}
          fgColor={"gray"}
          target={"_blank"}
        />

        <SocialIcon
          url={"https://www.github.com/hamzaMissewi"}
          bgColor={"transparent"}
          fgColor={"gray"}
          target={"_blank"}
        />

        {/*<Link href={"mailto:hamza.missaoui@b2b-alive.com?subject=want_require"}>*/}
        <div
          className="flex items-center cursor-pointer border border-bg-customOrange"
          onClick={() =>
            router.push(
              "mailto:hamza.missaoui@b2b-alive.com?subject=want_require",
            )
          }
        >
          <SocialIcon
            // className={"cursor-pointer"}
            network={"email"}
            fgColor={"gray"}
            bgColor={"transparent"}
            // href={"mailto:hamza.missaoui@b2b-alive.com?subject=want_require"}
          />
          <p className={"hidden md:inline-flex text-sm"}>{t("getInTouch")}</p>
        </div>
      </motion.div>
      <UpdateLanguageDialog {...updateLanguageDialogProps} />

      <div className="absolute top-0 right-0 mt-2 mr-4 w-6 h-6 rounded-full bg-white hover:bg-gray-200 flex items-center justify-center cursor-pointer">
        <div className="m-4">
          {open ? (
            <ArrowUpCircle className={"w-6 h-6"} onClick={handleOpen} />
          ) : (
            <ArrowDownCircle className={"w-6 h-6"} onClick={handleOpen} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
