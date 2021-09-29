import React from "react";
import "../css/style.css"
import { Link} from 'react-router-dom'
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
          <div class="row">
            <div class="icon_padding">
              <a href="https://www.youtube.com/watch?v=xeDDq6BkScc">
                <i class="fa fa-youtube-play social-icon pr-lg-0"></i>
              </a>
              <a href="https://www.instagram.com/boredapeyachtclub">
                <i class="fa fa-instagram social-icon pr-lg-0"></i>
              </a>
              <a href="https://discord.gg/3P5K3dzgdB">
                <i class="fa fa-discord-alt social-icon pr-lg-0"></i>
              </a>
              <a href="https://twitter.com/BoredApeYC">
                <i class="fa fa-twitter social-icon pr-lg-0"></i>
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
