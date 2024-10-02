"use client";
import { MenuItem, MenuList, Typography } from "@mui/material";

function Sidebar() {
  return (
    <div
      className={
        "max-w-[500px] flex flex-col space-y-2 mr-1 shadow shadow-slate-700 bg-white"
      }
    >
      <Typography component={"h5"} style={{ color: "#ccc" }}>
        Sidebar
      </Typography>
      <div
        className={
          "rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800"
        }
      >
        <MenuList>
          {/*<Link href={"/skills"}>*/}
          <MenuItem>Skills</MenuItem>
          <MenuItem>Education</MenuItem>
          <MenuItem>Projects</MenuItem>
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
