import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import AppTheme from "./Colors";


const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currectTheme = AppTheme[theme];

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currectTheme.backgroundColor}`,
        color: `${currectTheme.textColor}`,
        textAlign: "center",
        height:"60vh"
      }}
    >
      <h1>Welcome To My New Project</h1>
      <p>This project is about how to use context Api in your project and how to switch to diffirent themes using Context </p>
      <button
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          color: "#FFF",
          border: `${currectTheme.border}`
        }}
      >
       Explore More
      </button>
    </div>
  );
};

export default HeroSection;
