import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RightSection from "./components/rightSection";
import LeftSection from "./components/leftSection";
import MiddleSection from "./components/middleSection";
import TopSection from "./components/topSection";
import React from "react";
import { UserProvider } from "./helper/userContext";

// const StateContext = React.createContext();
// const DispatchContext = React.createContext();

function App() {
  return (
    <UserProvider>
      <div className='containerTop'>
        <TopSection />
        <div className='containerMiddle'>
          <LeftSection />
          <MiddleSection />
          <RightSection />
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
