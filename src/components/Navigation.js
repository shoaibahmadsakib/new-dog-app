import React from "react";
import "../css/style.css";
import { Nav, NavItem, Navbar, Container ,  NavLink} from "react-bootstrap";
import { Link } from "react-router-dom"
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
              <NavLink className="link_color" href="/buyanapp">
                BUY AN APE
              </NavLink>
              <NavLink className="link_color" href="/rodemap">
                ROADMAP
              </NavLink>
              <NavLink className="link_color" href="/team">
                TEAM
              </NavLink>
              <NavLink className="link_color" href="/mayc">
                MAYC
              </NavLink>
              <NavLink className="link_color" href="/gallary">
                Gallary
              </NavLink>
              <NavLink className="link_color" href="/">
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
