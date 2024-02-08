import React, { Component } from "react";
import "./BlueButton.css";

class BlueButton extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <button className="bluebutton">{this.props.name}</button>
      </>
    );
  }
}

export default BlueButton;
