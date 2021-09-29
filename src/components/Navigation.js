import React from "react";
import "../css/style.css";
import { Nav, NavItem, Navbar, Container } from "react-bootstrap";
import { Link} from "react-router-dom"
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
              <Link className="link_color" to="/buyanapp">
                BUY AN APE
              </Link>
              <Link className="link_color" to="/rodemap">
                ROADMAP
              </Link>
              <Link className="link_color" to="/team">
                TEAM
              </Link>
              <Link className="link_color" to="/mayc">
                MAYC
              </Link>
              <Link className="link_color" to="/gallary">
                Gallary
              </Link>
              <Link className="link_color" to="/">
                PROVENANCE
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
