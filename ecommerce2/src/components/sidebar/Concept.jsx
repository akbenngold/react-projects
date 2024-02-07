import React, { Component } from "react";
import "./Sidebar.css";
import "../../styles/utils.css";
import conceptIcons from "../../assets/icons/conceptSideBarIcons";

class Concept extends Component {
  constructor() {
    super();
    this.state = { icons: Object.keys(conceptIcons) };
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__title">CONCEPTS</div>
        {this.state.icons.map((iconName, index) => (
          <div className="sidebar__item" key={index}>
            <div className="sidebar__icon">
              <img src={conceptIcons[iconName]} alt="" />
            </div>
            <div className="sidebar__item__title">{iconName}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Concept;
