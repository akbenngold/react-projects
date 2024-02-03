import React, { Component } from "react";
import Header from "./Header";
import Info from "./Info";
import Photography from "./Photography";
import Hr from "./Hr";
class App extends Component {
  constructor() {
    super();
    this.state = {
      others: [
        "src/assets/images/others1.jpg",
        "src/assets/images/others2.jpg",
        "src/assets/images/others3.jpg",
      ],
      people: [
        {
          image: "src/assets/images/people1.jpg",
          category: "People",
          title: "Red Bench",
          price: 3.89,
        },
        {
          image: "src/assets/images/people2.jpg",
          category: "Food",
          title: "Egg Balloon",
          price: 93.89,
        },
        {
          image: "src/assets/images/people30.png",
          category: "People",
          title: "Man",
          price: 100,
        },
        {
          image: "src/assets/images/people4.jpg",
          category: "Landmarks",
          title: "Architecture",
          price: 101,
        },
      ],
    };
  }
  render() {
    return (
      <>
        <Header />
        <Hr />
        <Info src="src/assets/images/dog.jpg" others={this.state.others} />
        <Hr />
        <Photography people={this.state.people} />
      </>
    );
  }
}

export default App;
