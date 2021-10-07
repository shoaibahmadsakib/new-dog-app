import React from "react";
import Navigation from "../components/Navigation";
import { Dropdown, Navbar, Nav, Button } from "react-bootstrap";

const Gallary = ({ data }) => {
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
                  BACKGROUND
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Aquamarine</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Army Green</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Blue</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Gray</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Blue</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">New Punk Blue</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Orange</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Purple</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Yellow</Dropdown.Item>
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
                  CLOTHES
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    Admitrals Coat
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Bayc T Black</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Bayc T Red</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Bandelier</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Biker Vest</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Black Holest</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Black Suit</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Black T</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Blue Dress</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Bone Necklace</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Bone Tee</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Caveman Pelt</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Cowboy Shirt</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Guayabera</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Hawaiian</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Hip Hop</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Kings Robe</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Lab Coat</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Leather Jacket
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Leather Punk Jacket
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Lumberjack Shirt
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Navy Striped Tee
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Pimp Coat</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Prison Jumpsuit
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Work Vest</Dropdown.Item>
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
                  EARRING
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Diamond Stud</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Gold Hoop</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Gold Stud</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Silver Hoop</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Silver Stud</Dropdown.Item>
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
              {data.map(function (d, index) {
                return (
                  <div
                    key={index}
                    style={{ width: "180px", height: "180px" }}
                    className="grid_image"
                  >
                    <img src={d} alt={d} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
