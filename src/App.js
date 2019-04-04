import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar"
import Home from "./components/pages/home/Home"
class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar></Navbar>
        <Home></Home>
      </div>
    );
  }
}

export default App;
