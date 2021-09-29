import React from "react";
import "../css/style.css";
import { Nav, NavItem, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom"
import Logo from "../assets/mainLogo.png";
const Navigation = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav mr-auto" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <NavLink className="link_color" to="/buyanapp">
                BUY AN APE
              </NavLink>
              <NavLink className="link_color" to="/rodemap">
                ROADMAP
              </NavLink>
              <NavLink className="link_color" to="/team">
                TEAM
              </NavLink>
              <NavLink className="link_color" to="/mayc">
                MAYC
              </NavLink>
              <NavLink className="link_color" to="/gallary">
                Gallary
              </NavLink>
              <NavLink className="link_color" to="/">
                PROVENANCE
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
