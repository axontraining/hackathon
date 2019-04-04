import React, { Component } from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Jumbotron,
  CardImg,
  CardBody,
  Media,
  Badge
} from "reactstrap";
export default class Leccion extends Component {
  render() {
    const { idleccion, nombre, imagen, click, habilitada } = this.props.data;

    return (
      <div className="mt-5 mb-5 col-12">
        <div style={{ display: "flex" }}>
          <div className="col-1">
            <img
              style={{ width: 50, height: 50, borderRadius: 25 }}
              src={imagen}
            />
          </div>
          <div className="col-11">
            <p>
              {idleccion}- {nombre}{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#efefef"
  },
  item: {
    display: "flex",
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
  },
  itemBlock: {
    backgroundColor: "#bfc0c1",
    height: 70,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: "#d8d8d8"
  },
  itemTextBlock: {
    color: "#79797a",
    fontSize: 15,
    fontWeight: "100",
    paddingLeft: 15,
    width: "80%"
  }
};
