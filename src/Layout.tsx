import { useEffect, useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router";
function Layout() {
  const websiteTitle = "Where in the world?";
  const [isDarkMode, setIsDarkMode] = useState(false);

  // load the theme on page render (empty dependency array)
  useEffect(() => {
    const storedTheme = localStorage.getItem("storedTheme");
    if (storedTheme) {
      if (storedTheme === "dark") setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  // change the stored theme variable when the theme state changes
  useEffect(() => {
    const themeToStore = isDarkMode ? "dark" : "light";
    localStorage.setItem("storedTheme", themeToStore);
  }, [isDarkMode]);

  function handleThemeChange() {
    console.log(isDarkMode);
    setIsDarkMode(!isDarkMode);
  }
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="bg-grey-50 font-nunito-sans dark:bg-blue-950 dark:text-white">
        <Header
          isDarkMode={isDarkMode}
          onThemeChange={handleThemeChange}
          websiteTitle={websiteTitle}
        />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
