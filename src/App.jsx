import React from "react";
import "./index.scss";

import Navbar from "./components/Navbar/Navbar";
import TotalStats from "./components/TotalStats/TotalStats";
import WorldData from "./components/WorldData/WorldData";

function App() {
  return (
    <>
      <Navbar />
      <TotalStats />
      <WorldData />
    </>
  );
}

export default App;
