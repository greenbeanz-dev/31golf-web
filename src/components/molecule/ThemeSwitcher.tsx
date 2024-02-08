import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      isSelected={theme === "light"}
      size="md"
      onClick={toggleTheme}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <MdLightMode className={className} />
        ) : (
          <MdDarkMode className={className} />
        )
      }
    ></Switch>
  );
};

import { Switch } from "@nextui-org/react";
