"use client";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import React, {
  useState,
  useEffect,
} from "react";
import Button from "../../Button";

import { Sun, Moon } from "@/utils/icons";

const NavBar = ({ handleScroll }: any) => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const router = useRouter();

  return (
    <div className="pt-2 flex flex-row items-center justify-between sticky dark:text-white top-0 z-10">
      <h1
        onClick={() => router.push("/")}
        className="font-medium cursor-pointer m-0 my-auto"
      >
        Christos.
      </h1>
      <div className="flex flex-row items-end laptop:items-center">
        <Button
          onClick={() => handleScroll(0)}
          classes="p-2"
        >
          Projects
        </Button>
        <Button
          onClick={() => handleScroll(1)}
          classes="p-2"
        >
          Assignments
        </Button>
        {/* <Button onClick={() => handleScroll(2)}>
            About
          </Button> */}
        <Button
          classes="p-2"
          onClick={() =>
            setTheme(
              theme === "dark" ? "light" : "dark"
            )
          }
        >
          {/* have to show something while mounted is false. */}
          {!mounted && (
            <span className="h-8 w-8">
              <Sun />
            </span>
          )}
          {mounted && (
            <span className="h-8 w-8">
              {theme === "dark" && <Sun />}
              {theme === "light" && <Moon />}
            </span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
