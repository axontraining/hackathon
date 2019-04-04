import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

//Docentes

import Arbol from "./components/pages/arbol/Arbol";
import FCD from "./components/pages/fcd/FCD";
import Home from "./components/pages/home/Home";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/*Rutas*/}
          <Route exact path="/arbol" component={Arbol} />
          <Route exact path="/fcd" component={FCD} />
          <Route exact path="/" component={Home} />
        </Switch>
        }
      </Router>
    );
  }
}
