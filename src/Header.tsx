import { Link } from "react-router";
import { IoMoonSharp, IoMoonOutline } from "react-icons/io5";
function Header({ websiteTitle, isDarkMode, onThemeChange }) {
  return (
    <header className="shadow-grey-400/20 dark:shadow-grey-950/10 mb-5 flex justify-between p-3 shadow-lg dark:bg-blue-900">
      <Link to="/">
        <h1 className="text-lg font-bold">{websiteTitle}</h1>
      </Link>
      <button
        onClick={onThemeChange}
        className="flex place-items-center justify-between gap-2"
      >
        {isDarkMode ? (
          <IoMoonSharp className="text-lg" />
        ) : (
          <IoMoonOutline className="text-lg" />
        )}
        <span className="">{isDarkMode ? "Dark" : "Light"} Mode</span>
      </button>
    </header>
  );
}

export default Header;
