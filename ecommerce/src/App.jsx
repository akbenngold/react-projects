import React, { Component } from "react";
import Header from "./Header";
import Info from "./Info";

class App extends Component {
  constructor() {
    super();
    this.state = {
      others: [
        "src/assets/images/others1.jpg",
        "src/assets/images/others2.jpg",
        "src/assets/images/others3.jpg",
      ],
    };
  }
  render() {
    return (
      <>
        <Header />
        <Info src="src/assets/images/dog.jpg" others={this.state.others} />
      </>
    );
  }
}

export default App;
