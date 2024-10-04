"use client";
// import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { LinkedIn } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { InstagramIcon } from "lucide-react";
import React from "react";
import { Stack } from "@mui/material";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <div className="footer-container">
      <div className="flex flex-col">
        <a href="/">Homepage</a>
        <a href="/about">About</a>
        <a href="/skills">Skills</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </div>

      <div className="footer-content">
        <p>
          <b>Whatsapp: </b>(+216) 56521184
        </p>
        {t("address")}
        <p>
          <b>{t("email")}: </b>hamza.missaoui@b2b-alive.com |
          hamza.missaoui47@gmail.com
          {/*<b>{t("email")}: </b>hamzashadow47@gmail.com*/}
        </p>

        <Stack>
          <a
            href="https://github.com/HamzaMissewi"
            className="footer-social-icon"
          >
            <i>
              <GitHubIcon />
            </i>
            <p>Github</p>
          </a>

          <a
            href="https://www.instagram.com/hamza missaoui/"
            className="footer-social-icon"
          >
            <i>
              <InstagramIcon />
            </i>
            <p>Instagram</p>
          </a>

          <a
            href="https://www.linkedin.com/in/hamza-missaoui/"
            className="footer-social-icon"
          >
            <i>
              <LinkedIn />
            </i>
            <p>Linkedin</p>
          </a>
        </Stack>
      </div>

      <div className="footer-content">
        <img
          className="w-12 h-12 rounded-full filter grayscale hover:grayscale-0"
          src={
            "https://res.cloudinary.com/hamzaostouri/image/upload/v1663664915/avatar_photos/ra3cbssf64n3ihc2fw0o.png"
          }
          alt={"footer-logo"}
        />

        <div className="my-10 text-center">
          <h2>&copy; {t("copyright")}</h2>
          {/*<h2>&copy; 2024 Hamza Missaoui. All rights reserved.</h2>*/}
        </div>
      </div>
    </div>
  );
};

export default Footer;
