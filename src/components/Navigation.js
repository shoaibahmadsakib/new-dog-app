import React from "react";
import "../css/style.css";
import { Nav, NavItem, Navbar, Container } from "react-bootstrap";
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
              <Nav.Link className="link_color" href="/buyanapp">
                BUY AN APE
              </Nav.Link>
              <Nav.Link className="link_color" href="/rodemap">
                ROADMAP
              </Nav.Link>
              <Nav.Link className="link_color" href="/team">
                TEAM
              </Nav.Link>
              <Nav.Link className="link_color" href="/mayc">
                MAYC
              </Nav.Link>
              <Nav.Link className="link_color" href="/gallary">
                Gallary
              </Nav.Link>
              <Nav.Link className="link_color" href="/">
                PROVENANCE
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
