import React, { Component } from "react";
import "./Info.css";

class Info extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="info">
        {console.log(this.props.others)}
        <h1>Samurai King Resting</h1>
        <img src={this.props.src} alt="image of dog" className="main" />
        <button>ADD TO CART</button>
        <div className="subheading">About the Samurai King Resting</div>
        <p>
          So how did the classical Latin become so incoherent? According to
          McClintock, a 15th century typesetter likely scrambled part of
          Cicero's De Finibus in order to provide placeholder text to mockup
          various fonts for a type specimen book.
        </p>
        <div className="subheading">People also buy</div>
        <div className="flex">
          {this.props.others.map((item) => {
            return <img src={item} className="buy" />;
          })}
        </div>
        <div className="subheading">Details</div>
        Size: 1020 x 1020 pixel Size: 15 mb
      </div>
    );
  }
}

export default Info;
