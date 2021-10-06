import React from "react";
import "../css/style.css";
import { Link } from "react-router-dom";
import Logo1 from "../assets/logo1.svg";
import Logo2 from "../assets/logo2.svg";
import Logo3 from "../assets/logo3.svg";
import Logo4 from "../assets/logo4.svg";
const Footer = () => {
  return (
    <footer className="Footer">
      <hr className="footer_top_line" />
      <div className="footer_three_item">
        <div className="email-container">
          <span className="email-label">GET ON THE LIST</span>
          <br />
          <div className="email_form">
            <br />
            <form
              id="email-submit"
              method="post"
              name="mc-embedded-subscribe-form"
              target="_blank"
              className="email-form_here"
            >
              <input
                id="email-address"
                className=""
                type="email"
                placeholder="Email Address"
                name="EMAIL"
                required=""
                value=""
              />

              <button name="subscribe" className="email-submit" type="submit">
                →
              </button>
            </form>
          </div>
        </div>
        <div className="footer_logo">
          <img
            className="img-fluid footer-logo"
            src="https://ik.imagekit.io/bayc/assets/bayc-footer.png"
            alt="logo"
          />
        </div>

        <div className="third_item">
          <div className="third_item_icon">
            <div className="icon_padding">
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
            <div className="copyright_text">
              <p className="copyright_text_right">
                <span className="copy-left">Dogs on the Block © 2021</span>
              </p>
            </div>
            <div className="copyright_text">
              <p id="terms" className="copyright_text-right">
                <Link className="link" to="/terms">
                  BAYC Terms &amp; Conditions
                </Link>
                <br />
                <a className="link" href="/mayc/terms">
                  MAYC Terms &amp; Conditions abc
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
