import React from "react";
import "../css/style.css";
import { Nav, NavItem, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../assets/mainLogo.png";
import scrollTo from "gatsby-plugin-smoothscroll";

const Navigation = () => {
  return (
    <div>
      <Navbar expand="lg" variant="dark">
        <Container className="navigation_container">
          <Navbar.Brand href="/">
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <NavLink
                className="link_color"
                onClick={() => scrollTo("#buyadog")}
                to="/buyadog"
              >
                BUY A DOTB
              </NavLink>
              <NavLink
                className="link_color"
                onClick={() => scrollTo("#roadmap")}
                to="/roadmap"
              >
                ROADMAP
              </NavLink>
              <NavLink
                className="link_color"
                onClick={() => scrollTo("#team")}
                to="/team"
              >
                TEAM
              </NavLink>
              <NavLink
                className="link_color"
                onClick={() => scrollTo("#dotb")}
                to="/dotb"
              >
                DOTB
              </NavLink>
              <NavLink
                className="link_color"
                onClick={() => scrollTo("#gallery")}
                to="/gallery"
              >
                Gallery
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
