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
                  <Dropdown.Item href="#/action-1">Galaxy</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Solana</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Clouds</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Light Blue</Dropdown.Item>
                  <Dropdown.Item href="#/action-3" 
                  onClick={()=>console.log( filterItem("Light Blue"))}
                  >Light Blue</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Dark Blue</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Green</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Light Yellow</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Light Pink</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Purple</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Gray</Dropdown.Item>
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
                  <Dropdown.Item href="#/action-1">Radioactive</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Galaxy</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Solana</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Zombie</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Psychedelic</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Tiger Stripes</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Rainbow</Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    onClick={() => filterItem("Yellow")}
                  >
                    Zebra Stripes
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Tattoos</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Clouds</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Splatter</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Pink</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Orange</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Purple</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Gray</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Light Brown</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Black</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">White</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Yellow</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Tan</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Brown</Dropdown.Item>
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
                  <Dropdown.Item href="#/action-1">Solana DOTB Tee</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Solana Collar</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Astronaut Suit</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Galaxy Collar</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Psychedelic Collar</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Diamond Collar</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Lab Coat</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Pearl Necklace</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Chef Outfit</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Pirate Outfit</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Fisherman</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Light Saber</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Farmer</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Gold DOTB Puffer</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Elvish</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Gentlemans Smoker Jacket</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Dollar Gold Chain</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Wizard Outfit</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Gold Chain</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Black DOTB Puffer</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Rainbow DOTB Puffer</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Builder Outfit</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Green DOTB Puffer</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Musketeer</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Christmas Sweater</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Ying-Yang Shirt</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Yuck Fou Shirt</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Hawaiian Tee</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Samurai</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">DOTB Chain</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Rainbow Shirt</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Blue DOTB Hoodie</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Sports Top</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Leo Suit</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">HODL Shirt</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Black Suit</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Rockers DOTB Jacket</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Black DOTB Hoodie</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Hippy Outfit</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Solana DOTB Hoodie</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Orange DOTB Hoodie</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Skull Shirt</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">DOTB Shirt</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Red DOTB Hoodie</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Tuxedo</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Tudor</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Tie Dye Tee</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Turqoise DOTB Hoodie</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">No Outfit</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="reset_button">
              <Button variant="secondary" size="lg">
                RESET FILTERS
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
