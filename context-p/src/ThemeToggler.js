import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
    >
      <button style={{backgroundColor: "#26ae60",
          width:"100%",
          border:"none",
          padding: "7px 150px",
          fontSize: "20px",
          color: "#FFF",}}>{themeMode === "light" ? "Switch to Dark Mode" : "Switch to light mode"}</button>
    </div>
  );
};

export default ThemeToggler;
