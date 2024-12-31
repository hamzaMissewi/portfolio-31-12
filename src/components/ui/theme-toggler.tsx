"use client";
import * as React from "react";
import { Moon, MoonIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  // hamza added
  const [mounted, setMounted] = useState(false);
  // After the component mounts, we can safely use the theme
  useEffect(() => setMounted(true), []);
  console.log("global theme ", theme);

  if (!mounted) return null; // Prevents hydration mismatch

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        // className={
        //     "border dark:border-white border-black dark:bg-black bg-white"
        // }
      >
        <Button variant="outline" size="icon">
          <Sun
            className={cn(
              "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
              theme === "light" ? "text-black" : "text-white",
            )}
          />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        {/*  TODO HAMZA ADDED */}
        {/*<Button*/}
        {/*  variant="outline"*/}
        {/*  size="icon"*/}
        {/*  // style={{ backgroundColor: theme === "light" ? "black" : "white" }}*/}
        {/*  onClick={() =>*/}
        {/*    setTheme((value) => (value === "light" ? "dark" : "light"))*/}
        {/*  }*/}
        {/*  // onClick={() => setTheme(value => value === "light" ? "dark" : "light")}*/}
        {/*  className="p-2 bg-gray-200 dark:bg-gray-800 rounded"*/}
        {/*>*/}
        {/*  {theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}*/}
        {/*</Button>*/}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        // hamza classname
        // className={`absolute right-1 top-2 ${theme === "light" ? "text-black bg-white" : "text-white bg-black"}`}
      >
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
