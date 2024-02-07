import React, { Component } from "react";
import "./Sidebar.css";
import "../../styles/utils.css";
import Concept from "./Concept";
import Pages from "./Pages";
import Main from "./Main";

class Sidebar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Main />
        <Concept />
        <Pages />
      </>
    );
  }
}

export default Sidebar;
