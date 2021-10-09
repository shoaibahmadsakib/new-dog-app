import React from "react";
import "../css/style.css";
import { Nav, NavItem, Navbar, Container, Dropdown } from "react-bootstrap";
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
                GALLERY
              </NavLink>
              <NavLink className="link_color" to="/">
                PROVENANCE
              </NavLink>
              {/* <NavLink
                className="link_color"
                onClick={() => scrollTo("#members")}
                to="/members"
              >
                  MEMBERS
             
             
              </NavLink> */}
              <Dropdown>
                <Dropdown.Toggle style={{backgroundColor:"black" ,border:'none' }} id="dropdown-basic">
                  MEMBER
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="#/action-1" style={{color:'white',textAlign:"center" }}>Comming soon</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
