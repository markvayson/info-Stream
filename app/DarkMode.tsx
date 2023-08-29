"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function DarkMode() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <MoonIcon
          className="h-6 w-6 cursor-pointer text-indigo-500"
          onClick={() => setTheme("light")}
        />
      ) : (
        <SunIcon
          className="h-6 w-6 cursor-pointer text-yellow-500"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}

export default DarkMode;
