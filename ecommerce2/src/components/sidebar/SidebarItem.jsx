import React, { Component } from "react";

class SidebarItem extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__item">
          <div className="sidebar__icon">
            <img src={this.props.iconSvg} className="sidebar__icon" alt="" />
          </div>
          <div className="sidebar__item__title">{this.props.title}</div>
        </div>
      </div>
    );
  }
}

export default SidebarItem;
