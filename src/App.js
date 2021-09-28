import React from "react";
import "./App.css";
import Module from "./Module";
import Switcher from "./Switcher";
import SwitcherClassBased from './SwitcherClassBased';

function App() {
  return (
    <div className="App">
      <Switcher />
      {/* <SwitcherClassBased /> */}
      <Module />
    </div>
  );
}

export default App;
