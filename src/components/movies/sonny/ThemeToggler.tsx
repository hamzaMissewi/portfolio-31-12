"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // After the component mounts, we can safely use the theme
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Prevents hydration mismatch

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          // style={{ backgroundColor: theme === "light" ? "black" : "white" }}
          onClick={() =>
            setTheme((value) => (value === "light" ? "dark" : "light"))
          }
          // onClick={() => setTheme(value => value === "light" ? "dark" : "light")}
          className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
        >
          {theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </Button>
      </DropdownMenuTrigger>

      {/*<DropdownMenuTrigger asChild>*/}
      {/*  <Button*/}
      {/*    variant="outline"*/}
      {/*    size="icon"*/}
      {/*    style={{ backgroundColor: theme === "light" ? "black" : "white" }}*/}
      {/*    onClick={() =>*/}
      {/*      setTheme((value) => (value === "light" ? "dark" : "light"))*/}
      {/*    }*/}
      {/*  >*/}
      {/*    <Sun*/}
      {/*      className={`${theme === "light" ? "color-black" : "color-white"} h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0`}*/}
      {/*    />*/}
      {/*    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />*/}
      {/*  </Button>*/}
      {/*</DropdownMenuTrigger>*/}
      <DropdownMenuContent align="end">
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

      {/*<DropdownMenuGroup>*/}
      {/*  <DropdownMenu>*/}
      {/*    <DropdownMenuPortal />*/}
      {/*  </DropdownMenu>*/}
      {/*</DropdownMenuGroup>*/}
    </DropdownMenu>
  );
}
