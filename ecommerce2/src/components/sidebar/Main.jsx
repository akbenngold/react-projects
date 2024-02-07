import React, { Component } from "react";
import "./Sidebar.css";
import "../../styles/utils.css";
import mainIcons from "../../assets/icons/mainSideBarIcons";

class Main extends Component {
  constructor() {
    super();
    this.state = { icons: Object.keys(mainIcons) };
  }

  render() {
    return (
      <div className="sidebar">
        {this.state.icons.map((iconName, index) => (
          <div className="sidebar__item" key={index}>
            <div className="sidebar__icon">
              <img src={mainIcons[iconName]} alt="" />
            </div>
            <div className="sidebar__item__title">{iconName}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Main;
