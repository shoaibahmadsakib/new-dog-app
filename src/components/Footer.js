import React from "react";
import "../css/style.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="Footer">
      <hr class="footer_top_line" />
      <div class="container">
        <div className="row">
          {/* section one  */}

          <div className="col-md-4 col-lg-4 col-12 col-sm-12">
            <div className="email-container   my-auto text-left">
              <span className="email-label  ">GET ON THE LIST</span>
              <br />
              <div class="d-flex email-flex">
                <br />
                {/* form is Started  */}
                <form id="email-submit" className="email-form">
                  <input
                    id="email-address"
                    className="m-0 email-input-text"
                    type="email"
                    placeholder="Email Address"
                    required
                  />
                  <div
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-5000px" }}
                  >
                    <input
                      type="text"
                      name="b_c979ffabc41007fd79ffe121b_b785550a9e"
                      tabIndex={-1}
                      defaultValue
                    />
                  </div>
                  <button
                    name="subscribe"
                    className="email-submit"
                    type="submit"
                  ></button>
                </form>
                {/* form is Ended  */}
              </div>
            </div>
          </div>

          {/* section two */}
          <div className="col-md-4 col-lg-4 col-12 col-sm-12">
            <div class="footer_logo">
              <img
                class="img-fluid footer-logo"
                src="https://ik.imagekit.io/bayc/assets/bayc-footer.png"
                alt="logo"
              />
            </div>
          </div>

          {/* section Third*/}
          <div className="col-md-4 col-lg-4 col-12 col-sm-12">
            <div class="third_item">
              <div className="text-lg-right col-sm-12 col-12">
                <a href="https://www.youtube.com/watch?v=xeDDq6BkScc">
                  <i className="fa fa-youtube-play social-icon pr-lg-0" />
                </a>
                <a href="https://www.instagram.com/boredapeyachtclub">
                  <i className="fa fa-instagram social-icon pr-lg-0" />
                </a>
                <a href="https://discord.gg/3P5K3dzgdB">
                  <i className="fa fa-discord-alt social-icon pr-lg-0" />
                </a>
                <a href="https://twitter.com/BoredApeYC">
                  <i className="fa fa-twitter social-icon pr-lg-0" />
                </a>
              </div>

              <div className="col-lg-12 col-sm-6 ">
                <p className="copyright float-right ">
                  <span className="copy-left text-right">
                    © 2021 Yuga Labs LLC
                  </span>
                </p>
              </div>

              <div className="col-lg-12 col-sm-6 col-6 d-inline-block p-0 ">
                <p id="terms" class="copyright text-right">
                  <Link class="link" to="/terms">
                     BAYC Terms &amp; Conditions 
                  </Link>
                  <br />
                  <a className="link" href="#/mayc/terms">
                    MAYC Terms &amp; Conditions
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// <div class="third_item_icon">
// <div class="icon_padding">
//   <a href="https://www.youtube.com/watch?v=xeDDq6BkScc">
//     <img src={Logo1} alt="" />
//   </a>
//   <a href="https://www.instagram.com/boredapeyachtclub">
//     <img src={Logo2} alt="" />
//   </a>
//   <a href="https://discord.gg/3P5K3dzgdB">
//     <img src={Logo3} alt="" />
//   </a>
//   <a href="https://twitter.com/BoredApeYC">
//     <img src={Logo4} alt="" />
//   </a>
// </div>
// <div class="copyright_text">
//   <p class="copyright_text_right">
//     <span className="copy-left">Dogs on the Block © 2021</span>
//   </p>
// </div>
// <div class="copyright_text">
//   <p id="terms" class="copyright_text-right">
//     <Link class="link" to="/terms">
//       BAYC Terms &amp; Conditions
//     </Link>
//     <br />
//     <a class="link" href="/mayc/terms">
//       MAYC Terms &amp; Conditions abc
//     </a>
//   </p>
// </div>
// </div>
