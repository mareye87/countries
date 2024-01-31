import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full px-4 py-6 shadow-md mb-6 bg-slate-50 text-slate-900 dark:bg-slate-800 dark:text-slate-50 z-20">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold">
          <Link
            to="/"
            onClick={() => {
              localStorage.setItem("lastPosition", 0);
            }}
          >
            Where in the world?
          </Link>
        </div>
        <div className="text-2xl md:text-3xl cursor-pointer">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
