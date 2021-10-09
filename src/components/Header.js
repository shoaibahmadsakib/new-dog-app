import React from "react";
// import "../css/style.css";
import MainImage from "../assets/bayc-mutant-hero.jpg";
// import Logo1 from "../assets/logo1.svg";
// import Logo2 from "../assets/logo2.svg";
// import Logo3 from "../assets/logo3.svg";
// import Logo4 from "../assets/logo4.svg";
import { Link } from "react-router-dom";
import { NavLink } from "react-bootstrap";
import scrollTo from "gatsby-plugin-smoothscroll";

const Header = () => {
  return (
    <>
      <div
        style={{
          transition: "opacity 400ms ease 0s, transform 400ms ease 0s",
          transform: "none",
          opacity: 1,
        }}
      >
        <div className="common-container">
          <div className="container">
            <div className="mb-5 mb-lg-0 row">
              {/* main logo is here  */}
              <div className="col-lg-4 col-12 offset-lg-4">
                <img
                  className="img-fluid d-block mx-auto custom-logo pt-4 "
                  src="https://ik.imagekit.io/bayc/assets/bayc-logo.png"
                  alt="bayc header logo"
                  width="300px"
                  height="300px"
                />
              </div>

              {/* main icons is here  */}
              <div className="d-none d-lg-flex justify-content-end social-icons col-lg-4">
                <a href="https://discord.gg/dogsontheblock">
                  <i className="fa fa-discord-alt social-icon pr-lg-0" />
                </a>
                <a href="https://twitter.com/dogsontheblock">
                  <i className="fa fa-twitter social-icon pr-lg-0" />
                </a>
              </div>

              {/* it is your main image  */}
              <div className="px-0 col-12">
                <div className="mb-4 mb-lg-5 container">
                  <div className="row">
                    <div className="main-image-header w-100 px-0 col-12 mx-auto">
                      <img src={MainImage} width="100%" alt="#####" />
                      {/* <video className="mx-auto w-100" autoPlay loop id="myVideo">
                        <source src="https://ik.imagekit.io/bayc/assets/club-landing.mp4" type="video/mp4" />
                        </video> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Welcome section of a email  */}
              <div className="col-lg-4 col-12">
                <div className="welcome pt-lg-4 row">
                  <div className="border-bottom px-0 ml-3 ml-lg-0 col-9">
                    <h1 className="common-title mb-3">
                      WELCOME TO
                      <br />
                      THE DOGS ON
                      <br />
                      THE BLOCK
                    </h1>
                    <NavLink href="/buyadog">
                      <button className="bayc-button mb-4 w-100" type="button">
                        ENTER THE SITE
                      </button>
                    </NavLink>
                  </div>
                  <div className="scroll m-auto pr-0 col-2">
                    <div className="rotate my-auto">
                      <blink>← </blink>SCROLL DOWN
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5 row">
              <div className="col-lg-8 col-12">
                <p className="common-p">
                  An NFT collection with 8,888 dogs, where the NFT token itself
                  doubles as your membership to the DOTB Exclusive Members Club.
                  The club is open! Get your DOTB today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

/* <div className="top_Header" id="home">
    //   <div class="header">
    //     <div class="header_twopart">
    //       <div class="empty_thing"></div>
    //       <div class="Header_main_logo">
    //         <img 
    //           class="img-fluid d-block mx-auto custom-logo pt-4"
    //           src="https://ik.imagekit.io/bayc/assets/bayc-logo.png"
    //           alt="bayc header logo"
    //           width="300px"
    //           height="300px"
    //         />
    //       </div>
    //       <div class="top_icon_padding">
    //         <a href="https://discord.gg/dogsontheblock">
    //           <img src={3} alt="_" />
    //         </a>
    //         <a href="https://twitter.com/dogsontheblock">
    //           <img src={4} alt="_" />
    //         </a>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="header_two_part">
    //     <div className="header_textpart">
    //       <div className="Main_part">
    //         <h1 className="text_styles">WELCOME TO THE <br/>Dogs on the Block</h1>
    //         <div className="button_style">
    //           <button className="button_part_style">ENTER THE SITE</button>
    //           <hr className="line_style"/>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    </div>*/
