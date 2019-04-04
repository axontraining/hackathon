import React, { Component } from "react";
import "./App.css";
import Home from "./components/pages/home/Home";
import Arbol from "./components/pages/arbol/Arbol";
import Routes from "./Routes";
class App extends Component {
  state = {
    step: false
  };
  toggleStep = () => {
    this.setState({ step: !this.state.step });
  };
  render() {
    return <Routes />;
  }
}

export default App;
