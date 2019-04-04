import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Navbar2 extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: "#101010" }} light expand="md">
          <NavbarBrand href="/">
            <img
              src="https://www.axonplataforma.com.ar/images/axon_logo_blanco.png?v=1"
              alt="Axon"
              style={{ width: "5rem" }}
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <form class="form-inline my-2 my-lg-0">
                    <input
                      class="form-control mr-sm-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <i
                      class="fas fa-search"
                      id="search-icon"
                      style={{ color: "#fff" }}
                    />
                  </form>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  nav
                  caret
                  style={{ color: "#fff", marginTop: "0.4rem" }}
                >
                  Mi Perfil
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Mi Cuenta</DropdownItem>
                  <DropdownItem>Mis actividades</DropdownItem>
                  <DropdownItem>Quiero Coach</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Salir</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
