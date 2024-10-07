"use client";
// import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
// import { InstagramIcon, TwitterIcon } from "lucide-react";
import { LinkedIn, Twitter } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import YoutubeIcon from "@mui/icons-material/YouTube";
import { FacebookIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("Footer");

  const handleClickLocationMap = () => {
    const query = encodeURIComponent("El Mourouj 1");
    // const url = `https://www.google.com/maps/search/?api=${process.env.GOOGLE_MAPS_KEY}&query=${query}`;
    const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
    window.open(url, "_blank");
  };

  return (
    <div className="sticky w-full dark:bg-darkBlueBackground bg-lightBackground">
      <Link href={"#hero"}>
        <Image
          width={100}
          height={100}
          className="w-12 h-12 rounded-full filter grayscale hover:grayscale-0"
          src={
            "https://res.cloudinary.com/hamzaostouri/image/upload/v1663664915/avatar_photos/ra3cbssf64n3ihc2fw0o.png"
          }
          alt={"hamza-logo"}
        />
      </Link>
      <div>
        <p>
          <b>Whatsapp</b>: (+216) 56521184
        </p>

        <span onClick={handleClickLocationMap} className="cursor-pointer">
          <b>{t("address.title")}</b>: {t("address.value")}
        </span>

        <p>
          <b>{t("email")}</b>: hamza.missaoui@b2b-alive.com -
          hamza.missaoui47@gmail.com
        </p>
      </div>

      <div className={"flex items-center justify-between"}>
        <div className={"flex space-x-2"}>
          <Link
            href="https://www.linkedin.com/in/hamza-missaoui/"
            rel={"noopener noreferrer"}
            target={"_blank"}
            className={"flex items-center space-x-1"}
          >
            <i>
              <LinkedIn />
            </i>
            <p>Linkedin</p>
          </Link>

          <Link
            href="https://github.com/HamzaMissewi"
            // https://github.com/HamzaOstouri
            rel={"noopener noreferrer"}
            target={"_blank"}
            className={"flex items-center space-x-1"}
          >
            <i>
              <GitHubIcon />
            </i>
            <p>Github</p>
          </Link>

          <Link
            href="https://facebook.com/HamzaMissewi"
            rel={"noopener noreferrer"}
            target={"_blank"}
            className={"flex items-center space-x-1"}
          >
            <i>
              <FacebookIcon />
            </i>
            <p>Facebook</p>
          </Link>

          <Link
            href="https://www.twitter.com/hamzaostouri/"
            rel={"noopener noreferrer"}
            target={"_blank"}
            className={"flex items-center space-x-1"}
          >
            <i>
              {/*<TwitterIcon />*/}
              <Twitter />
            </i>
            <p>Twitter</p>
          </Link>

          <Link
            href="https://www.youtube.com/hamzatopg/"
            rel={"noopener noreferrer"}
            target={"_blank"}
            className={"flex space-x-1"}
          >
            <i>
              {/*<TwitterIcon />*/}
              <YoutubeIcon />
            </i>
            <p>Youtube</p>
          </Link>

          {/*<Link*/}
          {/*  href="https://www.instagram.com/hamza missaoui/"*/}
          {/*  rel={"noopener noreferrer"}*/}
          {/*  target={"_blank"}*/}
          {/*  className={"flex space-x-1"}*/}
          {/*>*/}
          {/*  <i>*/}
          {/*    <InstagramIcon />*/}
          {/*  </i>*/}
          {/*  <p>Instagram</p>*/}
          {/*</Link>*/}
        </div>

        <div className="flex flex-row space-x-1">
          <Link href="/" className={"hover:underline text-blue-500"}>
            <span>Homepage</span>
          </Link>
          <Link href="/about" className={"hover:underline text-blue-500"}>
            <span>About</span>
          </Link>
          <Link href="/Projects" className={"hover:underline text-blue-500"}>
            Projects
          </Link>
          <a href="/skills" className={"hover:underline text-blue-500"}>
            Skills
          </a>
        </div>

        <div className="text-center">
          <h2>&copy; {t("copyright")}</h2>
          {/*<h2>&copy; 2024 Hamza Missaoui. All rights reserved.</h2>*/}
        </div>
      </div>
    </div>
  );
};

export default Footer;
