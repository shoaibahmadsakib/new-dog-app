import React from "react";
import "../css/style.css"
import { Link} from 'react-router-dom'
import Logo1 from "../assets/logo1.svg";
import Logo2 from "../assets/logo2.svg";
import Logo3 from "../assets/logo3.svg";
import Logo4 from "../assets/logo4.svg";
const Footer = () => {
  return (
    <footer class="Footer">
      <hr class="footer_top_line" />
      <div class="footer_three_item">
        <div class="email-container">
          <span class="email-label">GET ON THE LIST</span>
          <br />
          <div class="d-flex email-flex">
            <br />
            <form
              id="email-submit"
              method="post"
              name="mc-embedded-subscribe-form"
              target="_blank"
              class="email-form"
            >
              <input
                id="email-address"
                class=""
                type="email"
                placeholder="Email Address"
                name="EMAIL"
                required=""
                value=""
              />

              <button name="subscribe" class="email-submit" type="submit">
                →
              </button>
            </form>
          </div>
        </div>
        <div class="footer_logo">
          <img
            class="img-fluid footer-logo"
            src="https://ik.imagekit.io/bayc/assets/bayc-footer.png"
            alt="logo"
          />
        </div>

        <div class="third_item">
          <div class="third_item_icon">
            <div class="icon_padding">
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
            <div class="copyright_text">
              <p class="copyright_text_right">
                <span class="copy-left">© 2021 Yuga Labs LLC</span>
              </p>
            </div>
            <div class="copyright_text">
              <p id="terms" class="copyright_text-right">
                <Link class="link" to="/terms">
                  BAYC Terms &amp; Conditions
                </Link>
                <br />
                <a class="link" href="/mayc/terms">
                  MAYC Terms &amp; Conditions
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
