import React from 'react';

export default class Switcher extends React.Component {

  constructor(props) {
    super(props);
    this.inputs = {
      1: null,
      2: null,
      3: null,
    };
    this.state = {
      currentStage: 1
    };
  }

  componentDidMount() {
    this.inputs[1].focus();
  }

  move = (direction) => {
    const { currentStage } = this.state;
    const { inputs } = this;
    if (direction === "forwards") {
      this.setState({
        currentStage: currentStage + 1
      })
    }

    const input = inputs[currentStage];
    if (input) {
      inputs[currentStage].focus();
    }
  }

  render() {
    const { inputs, move } = this;
    const { currentStage } = this.state;
    return (
      <div className="switcherContainer">
      <div className="switcherItems">
        <div className={`switcherItemsInner stage${currentStage}`}>
          <div className="switcherItem" style={{ backgroundColor: "red" }}>
            <input ref={r => inputs[1] = r} type="number" />
          </div>
          <div className="switcherItem" style={{ backgroundColor: "green" }}>
            <input ref={r => inputs[2] = r} type="number" />
          </div>
          <div className="switcherItem" style={{ backgroundColor: "blue" }}>
            <input ref={r => inputs[3] = r} type="number" />
          </div>
        </div>
      </div>
      <button onClick={() => move("forwards")}>Next</button>
    </div>
    );
  }
}
