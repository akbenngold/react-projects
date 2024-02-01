import React, { Component } from "react";

class TextAreaCounter extends Component {
  constructor() {
    super();
    this.state = {
      textValue: "",
      textArea: "",
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
          disabled={this.state.textArea}
        ></textarea>
        <p>number of characters typed are {this.state.textValue}</p>
      </>
    );
  }

  handleChange = (event) => {
    const maxLength = 10;
    const currentLength = event.target.value.length;
    currentLength <= maxLength
      ? this.setState({ textValue: currentLength })
      : this.setState({ textArea: "disabled" });
  };
}

export default TextAreaCounter;
