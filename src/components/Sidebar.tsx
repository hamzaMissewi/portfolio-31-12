// "use client";
import {MenuItem, MenuList} from "@mui/material";
import {Link} from "@/lib/intl";
import {useTranslations} from "next-intl";

function Sidebar() {
  const t = useTranslations("Sidebar");

  return (
    <div
      className={
        "max-w-[30%] flex flex-col space-y-2 mr-1 shadow shadow-slate-700 bg-slate-800 border-1 dark:bg-gray-950 dark:hover:bg-gray-800" +
        " border-black"
      }
    >
      {/*<Typography component={"h5"} style={{ color: "#ccc" }}>*/}
      {/*  Sidebar*/}
      {/*</Typography>*/}
      <div
        className={
          "rounded-lg border border-gray-200 p-4 shadow-sm transition-colors hover:bg-gray-50 text-white"
        }
      >
        <MenuList>
          <Link href={"/"}>
            <MenuItem>{t("mainPage")}</MenuItem>
          </Link>
          <Link href={"/movies"}>
            <MenuItem>{t("moviesPage")}</MenuItem>
          </Link>
          <Link href={"/about"}>
            <MenuItem>{t("aboutPage")}</MenuItem>
          </Link>
        </MenuList>
      </div>
    </div>
  );
}

export default Sidebar;

function PlayIcon() {
  return (
    <svg
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}
