import React, { Component } from "react";

class TextAreaCounter extends Component {
  constructor() {
    super();
    this.state = {
      textValue: "",
    };
  }

  static defaultProps = {
    text: "enter a text",
  };

  render() {
    const place = "";
    return (
      <>
        <textarea
          placeholder={place ? place : this.props.text}
          onChange={this.handleChange}
        ></textarea>
        <p>number of characters typed are {this.state.textValue}</p>
      </>
    );
  }

  handleChange = (event) => {
    this.setState({ textValue: event.target.value.length });
  };
}

export default TextAreaCounter;
