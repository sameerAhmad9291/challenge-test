import React from "react";

export default function Switcher() {
  const [currentStage, setCurrentStage] = React.useState(1);

  const inputs = React.useRef({
    1: null,
    2: null,
    3: null,
  });

  React.useEffect(() => {
    inputs.current[1].focus();
  }, []);

  function move(direction) {
    if (direction === "forwards") {
      setCurrentStage(currentStage + 1);
    }

    const input = inputs.current[currentStage];
    if (input) {
      inputs.current[currentStage].focus();
    }
  }

  return (
    <>
      {currentStage <= 3 && (
        <div className="switcherContainer">
          <div className="switcherItems">
            <div className={`switcherItemsInner stage${currentStage}`}>
              <div className="switcherItem" style={{ backgroundColor: "red" }}>
                <input ref={(r) => (inputs.current[1] = r)} type="number" />
              </div>
              <div
                className="switcherItem"
                style={{ backgroundColor: "green" }}
              >
                <input ref={(r) => (inputs.current[2] = r)} type="number" />
              </div>
              <div className="switcherItem" style={{ backgroundColor: "blue" }}>
                <input ref={(r) => (inputs.current[3] = r)} type="number" />
              </div>
            </div>
          </div>
          <button onClick={() => move("forwards")}>
            {currentStage < 3 ? "Next" : "Submit"}
          </button>
        </div>
      )}
    </>
  );
}
