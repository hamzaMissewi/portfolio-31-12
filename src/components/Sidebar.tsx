// "use client";
import { MenuItem, MenuList } from "@mui/material";
import { Link } from "@/lib/intl";
import { useLocale, useTranslations } from "next-intl";

function Sidebar() {
  const t = useTranslations("Sidebar");
  const locale = useLocale();

  return (
    <div
      className={
        "space-y-2" +
        "bg-lightBackground dark:bg-darkBlueBackground border border-black dark:border-white  shadow" +
        " hover:shadow-slate-700 hidden xl:flex flex-col"
      }
    >
      {/*<Typography component={"h5"} style={{ color: "#ccc" }}>*/}
      {/*  Sidebar*/}
      {/*</Typography>*/}
      <div
        className={"rounded-lg shadow-sm transition-colors hover:bg-gray-50"}
      >
        <MenuList>
          <Link href={"/"}>
            <MenuItem>{t("mainPage")}</MenuItem>
          </Link>
          <Link href={`/${locale}/movies`}>
            <MenuItem>{t("moviesPage")}</MenuItem>
          </Link>
          <Link href={`/${locale}/profile`}>
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
