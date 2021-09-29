import React from "react";
import "../css/style.css";
import Logo1 from "../assets/logo1.svg";
import Logo2 from "../assets/logo2.svg";
import Logo3 from "../assets/logo3.svg";
import Logo4 from "../assets/logo4.svg";

const Header = () => {
  return (
    <div className="top_Header" id="home">
      <div class="header">
        <div class="header_twopart">
          <div class="empty_thing"></div>
          <div class="Header_main_logo">
            <img
              class="img-fluid d-block mx-auto custom-logo pt-4"
              src="https://ik.imagekit.io/bayc/assets/bayc-logo.png"
              alt="bayc header logo"
              width="300px"
              height="300px"
            />
          </div>
          <div class="top_icon_padding">
            <a href="https://www.youtube.com/watch?v=xeDDq6BkScc">
              <img src={Logo1} alt="" />
            </a>
            <a href="https://www.instagram.com/boredapeyachtclub">
              <img src={Logo2} alt="" />
            </a>
            <a href="https://discord.gg/3P5K3dzgdB">
              <img src={Logo3} alt="" />
            </a>
            <a href="https://twitter.com/BoredApeYC">
              <img src={Logo4} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="header_two_part">
        <div className="header_textpart">
          <div className="Main_part">
            <h1 className="text_styles">WELCOME TO THE <br/>BORED APE YACHT CLUB</h1>
            <div className="button_style">
              <button className="button_part_style">ENTER</button>
              <hr className="line_style"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
