"use client";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { ButtonGroup } from "@mui/material";
import Image from "next/image";
import { SignedIn, SignOutButton, UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";
import { useLocale, useTranslations } from "next-intl";
import { ThemeToggler } from "./movies/sonny/ThemeToggler";
import LocaleSwitcher from "./LocaleSwitcher";
import { Button } from "./ui/button";
import UpdateLanguageDialog, {
  useUpdateLanguageDialog,
} from "./common/UpdateLanguage";
// import SearchInput from "@/components/movies/sonny/SearchInput";

// const b2bAliveLogo =
// "https://media.licdn.com/dms/image/C4E0BAQECttqhzuGqBw/company-logo_200_200/0/1651029832992/b2b_alive_logo?e=2147483647&v=beta&t=yaQVzsyhkQw3LhBJexMtVjWovIEQXEzzxRmGTF20RHk";
// "disney": "https://links.papareact.com/a943ae"

const Header: React.FC = () => {
  // const { isSignedIn, signOut } = useAuth();
  const { user, isSignedIn, isLoaded } = useUser();
  const router = useRouter();
  const t = useTranslations("Navbar");

  // const [openUpdateLanguageDialog, setOpenUpdateLanguageDialog] = useState(false);

  const { updateLanguageDialogProps, openUpdateLanguageDialog } =
    useUpdateLanguageDialog();
  const locale = useLocale();

  return (
    <div
      className={
        "fixed flex items-center justify-between backdrop-blur-0 border border-darkBackground dark:border-customBlue" +
        " bg-lightBackground" +
        " dark:bg-darkBackground" +
        " w-full z-20 min-w-screen max-h-[200px]" // px-2
      }
    >
      <motion.div
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className={`flex flex-start space-x-2 items-center ${locale === "ar" ? "ml-10" : "mr-10"}`}
      >
        <Link
          href="https://b2b-alive.com"
          rel={"noopener noreferrer"}
          target={"_blank"}
        >
          <Image
            src={"/assets/b2b-alive-ltd-icon.svg"}
            alt="Society Logo"
            width={40}
            height={20}
            objectFit={"cover"}
            className={
              "cursor-pointer bg-lightBackground w-15 h-full relative p-1 my-1"
            }
          />
        </Link>
      </motion.div>

      {/*<div className={"flex flex-grow"} />*/}

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
        <ThemeToggler />
        {/*<SearchInput />*/}
      </div>

      <div className="sm:hidden flex w-xl">
        {user && isSignedIn ? (
          <div className={"flex flex-row space-x-2 items-center"}>
            <h1 className={"text-xl font-semibold"}>
              {t("welcome", { username: user?.username })}
            </h1>
            <UserButton />
            <SignedIn>
              <SignOutButton />
            </SignedIn>
          </div>
        ) : (
          // <SignedOut>
          <ButtonGroup color={"success"} size={"small"}>
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
        )}
      </div>

      {/*<NextTopLoader color="#000" showSpinner={false} />*/}

      {/*<div className={"fixed top-0 w-full items-start justify-between mx-auto z-20 p-5 flex xl:items-center"}>*/}

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

        <Link href={"mailto:hamza.missaoui@b2b-alive.com?subject=want_require"}>
          <SocialIcon
            className={"cursor-pointer"}
            network={"email"}
            fgColor={"gray"}
            bgColor={"transparent"}
          />
          <p className={" hidden md:inline-flex text-md"}>{t("getInTouch")}</p>
        </Link>
      </motion.div>
      <UpdateLanguageDialog {...updateLanguageDialogProps} />
    </div>
  );
};

export default Header;
