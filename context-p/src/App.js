import React, { useState,Fragment,useContext } from "react";
import ThemeContext from "./ThemeContext";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Provider from "./provider"
import Context from "./context"
import AppTheme from "./Colors";

// const Agents = () => {
//   return <AgentOne />;
// };

// const AgentOne = () => {
//   return <AgentTwo />;
// };

// const AgentTwo = () => {
//   return <AgentBond />;
// };

// const AgentBond = () => {
//   const mode = useContext(ThemeContext)[0];
//   const currTheme = AppTheme[mode];
//   return (
//     // <Context.Consumer>
//     //   {context => (
//     //     <Fragment>
//     //         <div
//     //   style={{
//     //     padding: "1rem",
//     //     backgroundColor: `${currTheme.backgroundColor}`,
//     //     color: `${currTheme.textColor}`,
//     //     textAlign: "center"
//     //   }}
//     // >
//     //       {/* <h3>Agent Information</h3>
//     //       <p>Mission Name: {context.data.mname}</p>
//     //       <h2>Mission Status: {context.data.accept}</h2>
//     //       <button onClick={context.isMissionAccepted}>Choose to accept</button> */}
//     //       </div>
//     //     </Fragment>
//     //   )}
//     // </Context.Consumer>
//   );
// };

const App = () => {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
    <div>
      <Header />
        <HeroSection />
      {/* <Provider>
        <Agents />
      </Provider> */}
    </div>
    </ThemeContext.Provider>
  );
};

export default App;
