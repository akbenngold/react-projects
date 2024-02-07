import React, { Component } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Header />
        <Sidebar />
      </>
    );
  }
}

export default App;
