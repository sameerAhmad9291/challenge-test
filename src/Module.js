import React from "react";
import selectors from "./selectors/module";
import Levels from "./Levels";
const moduleData = require("./data/module-data.json");


export default function Module() {
  const levels = selectors.getModuleLevels(moduleData);

  return (
    <div className="moduleContainer">
      <div>
        <div className="moduleTitle">{selectors.getModuleName(moduleData)}</div>
      </div>
      <div className="moduleContent">
        <Levels levels={levels}/>
      </div>
    </div>
  );
}
