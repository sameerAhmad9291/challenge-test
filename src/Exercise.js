import React from "react";
import Headphones from "./Headphones";

export default function Exercise(props) {
  
  const { exercise } = props;
  return (
    <div className="exercise" key={exercise.id}>
      <div className="exerciseTitle">{exercise.name}</div>
      <div className="exerciseContent">
        <Headphones />
      </div>
    </div>
  );
}
