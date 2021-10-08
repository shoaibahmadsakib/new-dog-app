import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { Dropdown, Navbar, Nav, Button } from "react-bootstrap";

const Gallary = ({ data }) => {
  // useEffect(() => {
  //   fetch("./data/data.json")
  //     .then((response) => response.json())
  //     .then((findresponse) => {
  //       console.log(findresponse.title);
  //       this.setState({
  //         data: findresponse.title,
  //       });
  //     });
  //   return () => {

  //   };
  // }, [input]);
  const [item, setItem] = useState(data);

  // const filterItem = (catagaryItem) => {
  //   const updateItem = data.filter((curElem) => {
  //     return curElem.attributes=== catagaryItem;
  //   });
  //   setItem(updateItem);
  // };

  const filterItem = (name) => {
    const arrProject = data.filter((p) => p.attributes.includes(name));
    setItem(arrProject);
  };

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
                  <Dropdown.Item href="#/action-3" 
                  onClick={()=>console.log( filterItem("Light Blue"))}
                  >Blue</Dropdown.Item>
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
                  SKIN
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
                  <Dropdown.Item
                    href="#/action-3"
                    onClick={() => filterItem("Yellow")}
                  >
                    Black T
                  </Dropdown.Item>
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
                  OUTFIT
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
              {console.log(data)}
              {item.map(function (d, index) {
                return (
                  // <div
                  //   key={index}
                  //   style={{ width: "180px", height: "180px" }}
                  //   className="grid_image"
                  // >
                  //   <img src={d} alt={d} />
                  // </div>

                  <div
                    key={index}
                    className="image_styles"
                    style={{
                      transition:
                        "opacity 400ms ease 0s, transform 400ms ease 0s",
                      transform: "none",
                      opacity: 1,
                    }}
                  >
                    <a href={d.external_url}>
                      <img
                        className="gal-image"
                        src={d.image}
                        alt={d.name}
                        height="100%"
                        width="100%"
                      />
                    </a>

                    <p>{d.name}</p>
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
