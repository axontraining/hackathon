import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../../layout/Footer";
import Navbar2 from "../../layout/Navbar";
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

export default class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }
  async componentDidMount() {}

  render() {
    return (
      <div>
        <Navbar2 />
        <React.Fragment>
          <Jumbotron fluid style={{ backgroundColor: "#0081C4" }}>
            <h3 className="ml-4" style={{ fontSize: "2rem", color: "white" }}>
              ¿Que queres hacer hoy?
            </h3>
          </Jumbotron>
        </React.Fragment>
        <div className="container-fluid">
          <h3>Actividades Recientes</h3>
          <Row>
            <Col sm="6">
              <Card>
                <Media>
                  <Media left href="#">
                    <Media
                      object
                      src="https://axonplataforma.com.ar/images/cursos_portadas/20.png"
                      alt="Generic placeholder image"
                      style={{ width: "200px" }}
                    />
                  </Media>
                  <Media body>
                    <Media heading>
                      <h3>Carrera de Coaching 1er Cuatrimestre</h3>
                    </Media>
                    <Media className="mt-2">
                      <h6>Continuar</h6>
                    </Media>
                    <Button outline color="info" className="ml-2">
                      <Link to="/arbol"> 1-Bienvenida</Link>
                    </Button>
                    <Media className="mt-2 ml-2">
                      <Badge href="#" color="primary">
                        Ver todas las lecciones
                      </Badge>
                    </Media>
                  </Media>
                </Media>
              </Card>
            </Col>
            <Col sm="6">
              <Card>
                <Media>
                  <Media left href="#">
                    <Media
                      object
                      src="https://axonplataforma.com.ar/images/cursos_portadas/20.png"
                      alt="Generic placeholder image"
                      style={{ width: "200px" }}
                    />
                  </Media>
                  <Media body>
                    <Media heading>
                      <h3>Cronograma De Clases</h3>
                    </Media>
                    <Button outline color="info" className="ml-2">
                      Ultima Clase Grabada
                    </Button>
                    <Media className="mt-2 ml-2">
                      <Badge href="#" color="primary">
                        Ver Calendario Completo
                      </Badge>
                    </Media>
                  </Media>
                </Media>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm="6">
              <h3 className="mt-5">Mis Cursos</h3>
              <Card>
                <Media>
                  <Media left href="#">
                    <Media
                      object
                      src="https://axonplataforma.com.ar/images/cursos_portadas/20.png"
                      alt="Generic placeholder image"
                      style={{ width: "200px" }}
                    />
                  </Media>
                  <Media body>
                    <Media heading>
                      <h3>FCD270</h3>
                    </Media>
                    <Media className="mt-2">
                      <h6>Continuar</h6>
                    </Media>
                    <Button outline color="info" className="ml-2">
                      <Link to="/fcd"> Ingresar al 2do Cuatrimestre</Link>
                    </Button>
                    <Media className="mt-2 ml-2">
                      <Badge href="#" color="primary">
                        Ver todas las lecciones
                      </Badge>
                    </Media>
                  </Media>
                </Media>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <h3 className="mt-5">Cursos Complementarios</h3>
            </Col>
          </Row>
          <Row>
            <Col sm="4">
              <Card>
                <Media>
                  <Media left href="#">
                    <Media
                      object
                      src="https://axonplataforma.com.ar/images/cursos_portadas/20.png"
                      alt="Generic placeholder image"
                      style={{ width: "200px" }}
                    />
                  </Media>
                  <Media body>
                    <Media heading>Carrera de Coaching 1er Cuatrimestre</Media>
                    <Media className="mt-2">
                      <h6>Continuar</h6>
                    </Media>
                    <Button outline color="info" className="ml-2">
                      <Link to="/arbol"> 4-Los Juicios</Link>
                    </Button>
                    <Media className="mt-2 ml-2">
                      <Badge href="#" color="primary">
                        Ver todas las lecciones
                      </Badge>
                    </Media>
                  </Media>
                </Media>
              </Card>
            </Col>
            <Col sm="4">
              <Card>
                <Media>
                  <Media left href="#">
                    <Media
                      object
                      src="https://axonplataforma.com.ar/images/cursos_portadas/20.png"
                      alt="Generic placeholder image"
                      style={{ width: "200px" }}
                    />
                  </Media>
                  <Media body>
                    <Media heading>Carrera de Coaching 1er Cuatrimestre</Media>
                    <Media className="mt-2">
                      <h6>Continuar</h6>
                    </Media>
                    <Button outline color="info" className="ml-2">
                      <Link to="/arbol"> 4-Los Juicios</Link>
                    </Button>
                    <Media className="mt-2 ml-2">
                      <Badge href="#" color="primary">
                        Ver todas las lecciones
                      </Badge>
                    </Media>
                  </Media>
                </Media>
              </Card>
            </Col>
            <Col sm="4">
              <Card>
                <Media>
                  <Media left href="#">
                    <Media
                      object
                      src="https://axonplataforma.com.ar/images/cursos_portadas/20.png"
                      alt="Generic placeholder image"
                      style={{ width: "200px" }}
                    />
                  </Media>
                  <Media body>
                    <Media heading>Carrera de Coaching 1er Cuatrimestre</Media>
                    <Media className="mt-2">
                      <h6>Continuar</h6>
                    </Media>
                    <Button outline color="info" className="ml-2">
                      <Link to="/arbol"> 4-Los Juicios</Link>
                    </Button>
                    <Media className="mt-2 ml-2">
                      <Badge href="#" color="primary">
                        Ver todas las lecciones
                      </Badge>
                    </Media>
                  </Media>
                </Media>
              </Card>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    );
  }
}
