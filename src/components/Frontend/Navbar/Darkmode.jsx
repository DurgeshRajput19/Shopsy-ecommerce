import React from "react";
import Lightpng from "../../assets/night-mode-7110354_1280.png";
import Darkpng from "../../assets/night-mode-7110365_1280.png";

export default function Darkmode() {
  const [theme, settheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative ">
      <img
        src={Lightpng}
        onClick={() => settheme(theme === "light" ? "dark" : "light")}
        alt="Darkmode"
        className={`w-12 cursor-pointer drop-shadow[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } `}
      />
      <img
        src={Darkpng}
        onClick={() => settheme(theme === "light" ? "dark" : "light")}
        alt="Lightmode"
        className="w-12 cursor-pointer drop-shadow[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 "
      />
    </div>
  );
}
