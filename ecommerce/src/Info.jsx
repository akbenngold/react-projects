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
        <div>
          <h1>Samurai King Resting</h1>
          <img src={this.props.src} alt="image of dog" className="main" />
          <button>ADD TO CART</button>
        </div>
        <div>
          <div className="subheading">About the Samurai King Resting</div>
          <p>
            So how did the classical Latin become so incoherent? According to
            McClintock, a 15th century typesetter likely scrambled part of
            Cicero's De Finibus in order to provide placeholder text to mockup
            various fonts for a type specimen book.
          </p>
        </div>
        <div>
          <div className="subheading">People also buy</div>
          <div className="flex">
            {this.props.others.map((item) => {
              return <img src={item} className="buy" />;
            })}
          </div>
        </div>
        <div>
          <div className="subheading">Details</div>
          <p>
            Size: 1020 x 1020 pixel <br /> Size: 15 mb
          </p>
        </div>
      </div>
    );
  }
}

export default Info;
