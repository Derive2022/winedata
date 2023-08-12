import React from "react";
import FlavanoidTable from "./component/FlavanoidTable";
import GammaTable from "./component/GammaTable";

function App() {
  return (
    <div className="appContainer">
      <h1>Wine Data Set</h1>
      <FlavanoidTable />
      <GammaTable />
    </div>
  );
}

export default App;
