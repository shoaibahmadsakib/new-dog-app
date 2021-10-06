import React from "react";
import Navigation from "../components/Navigation";
import { Dropdown, Navbar, Nav, Button } from "react-bootstrap";
import Image from "../assets/1.png";

const Gallary = () => {
  return (
    <div>
      <Navigation />
      <div className="ful_container">
        <div className="gallary_two_part">
          <div className="drop_down_part">
            <div className="dropdown">
              <Dropdown className="dropdown_style">
                <Dropdown.Toggle
                  variant="transperent"
                  id="dropdown-basic"
                  className="dropdown_button"
                >
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="dropdown">
              <Dropdown className="dropdown_style">
                <Dropdown.Toggle
                  variant="transperent"
                  id="dropdown-basic"
                  className="dropdown_button"
                >
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="dropdown">
              <Dropdown className="dropdown_style">
                <Dropdown.Toggle
                  variant="transperent"
                  id="dropdown-basic"
                  className="dropdown_button"
                >
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="reset_button">
              <Button variant="secondary" size="lg">
                Large button
              </Button>
            </div>
          </div>
          <div className="gallary_part">
            <div className="image_part">
              <div className="grid_image">
                <img src={Image} alt="" />
              </div>
              <div className="grid_image">
                <img src={Image} alt="" />
              </div>
              <div className="grid_image">
                <img src={Image} alt="" />
              </div>
              <div className="grid_image">
                <img src={Image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
