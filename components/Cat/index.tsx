import { useTheme } from "next-themes";
import React, {
  useEffect,
  useState,
} from "react";
import { Cloud } from "@/utils/icons";

const Cat = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="windowDay dark:window z-10 hidden laptop:block"
      onClick={() =>
        setTheme(
          theme === "dark" ? "light" : "dark"
        )
      }
    >
      <div className="mountain-1"></div>
      <div className="mountain-2"></div>
      <div className="kitty">
        <div className="ear"></div>
      </div>
      <div className="sun dark:moon"></div>
      <div className="dark:star"></div>
      <div className="w-full h-full relative overflow-hidden opacity-100 dark:opacity-0 transition-all duration-200">
        <div className="absolute top-[0%] right-[25%] -z-10">
          <Cloud />
        </div>
        <div className="absolute top-[38%] right-[75%] -z-10">
          <Cloud />
        </div>
        <div className="absolute top-[35%] right-[10%] -z-10">
          <Cloud />
        </div>
        <div className="absolute top-[15%] right-[-10%] -z-10">
          <Cloud />
        </div>
      </div>
    </div>
  );
};

export default Cat;
