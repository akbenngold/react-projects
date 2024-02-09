import React, { Component } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
// import MainPage from "./components/main/Mainpage";
// import BlueButton from "./components/utilities/BlueButton";
class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Header />
        <Sidebar />
        {/* <MainPage />
        <BlueButton name="button" /> */}
      </>
    );
  }
}

export default App;
