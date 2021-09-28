import React, { useState } from "react";
import selectors from "./selectors/user";
import Exercise from "./Exercise";
const userData = require("./data/user-data.json");

function Level(props) {
  const { level, index, isCompleted } = props;
  const [closed, setClosed] = useState(isCompleted);
  const handleClick = (e, _level) => {
    setClosed(!closed);
  };

  return (
    <div>
      <div className="levelTitle" onClick={(e) => handleClick(e, level)}>
        Level {index + 1}: {level.name}
      </div>
      <div className={"collapse" + (closed ? "" : " in")}>
        {level.exercises.map((exercise, i) => {
          return <Exercise key={i} exercise={exercise} />;
        })}
      </div>
    </div>
  );
}

export default function Levels(props) {
  const userMap = selectors.getUserExerciseMap(userData);
  const { levels } = props;
  return levels.map((level, index) => {
    const isCompleted = level.exercises.every((ex)=> userMap[ex.id]);
    return <Level level={level} key={index} index={index} isCompleted={isCompleted} />;
  });
}
