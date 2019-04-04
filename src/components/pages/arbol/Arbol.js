import React, { Component } from "react";
import Navbar2 from "../../layout/Navbar";
import Leccion from "./Leccion";
import Footer from "../../layout/Footer";
export default class Arbol extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    fetch("https://api.axontraining.com/lecciones")
      .then(response => response.json())
      .then(responseJson => {
        // this.setTimeout(() => {
        // console.log(responseJson);
        this.setState({
          data: responseJson,
          animating: true
        });
        // }, 5);
      });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar2 />
        <div className="container">
          <h1 className="mt-5">20L - Carrera de Coaching 1er cuatrimestre</h1>
          <div style={styles.container}>
            <div
              style={styles.container}
              contentContainerStyle={styles.contentContainer}
            >
              <div style={styles.welcomeContainer}>
                {this.state.data.map(item => (
                  <Leccion data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#efefef"
  },
  item: {
    backgroundColor: "#fff",
    height: 70,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: "#d8d8d8"
  },
  itemText: {
    color: "black",
    fontSize: 15,
    fontWeight: "100",
    paddingLeft: 15
  },
  contenido: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: "100%"
  }
};
