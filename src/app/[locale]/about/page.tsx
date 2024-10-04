"use client";
import { Stack } from "@mui/material";
import About from "@/components/About";
import Experience from "@/components/Projects";

// export const metadata = {
//   title: "About Me",
//   description: "Learn more about me",
// };

export default function AboutPage() {
  return (
    <Stack spacing={2} className={"items-center"}>
      About me page
      <div className="flex h-screen items-center justify-center">
        <About />
      </div>
      <Experience />
    </Stack>
  );
}