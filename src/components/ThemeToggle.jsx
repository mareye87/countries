import { IoSunnyOutline } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const [theme, setTheme] = useState(localStorage.theme);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.theme = theme;
  };

  useEffect(() => {
    toggleTheme();
  }, []);

  return (
    <div onClick={toggleTheme}>
      {theme === "dark" ? <IoSunnyOutline /> : <IoIosMoon />}
    </div>
  );
};

export default ThemeToggle;
