import React from "react";
import "../css/style.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-bootstrap"
import scrollTo from "gatsby-plugin-smoothscroll";
import FooterLogo from "../assets/Footer Transparent.png"

const Footer = () => {
  return (
    <footer class="Footer">
      <hr class="footer_top_line" />
      <div class="container">
        <div className="row">
          {/* section one  */}

          <div className="col-md-4 col-lg-4 col-12 col-sm-12">
            <div className="email-container   my-auto text-centre">
              <span className="email-label  ">JOIN US TODAY!</span>
              <br />
              <div class="d-flex email-flex">
                <br />
          
              </div>
            </div>
          </div>

          {/* section two */}
          <div className="col-md-4 col-lg-4 col-12 col-sm-12">
            <div class="footer_logo">
              <img
                class="img-fluid footer-logo"
                src={FooterLogo}
                alt="logo"
              />
            </div>
          </div>

          {/* section Third*/}
          <div className="col-md-4 col-lg-4 col-12 col-sm-12">
            <div class="third_item">
              <div className="text-lg-right col-sm-12 col-12">
                <a href="https://discord.gg/dogsontheblock">
                  <i className="fa fa-discord-alt social-icon pr-lg-0" />
                </a>
                <a href="https://twitter.com/dogsontheblock">
                  <i className="fa fa-twitter social-icon pr-lg-0" />
                </a>
              </div>

              <div className="footer_align1 col-lg-12 col-sm-6 ">
                <p className="copyright float-right ">
                  <span className="copy-left text-right">
                    Dogs on The Block © 2021
                  </span>
                </p>
              </div>

              <div className="footer_align2 col-lg-12 col-sm-6 col-6 d-inline-block p-0 ">
                <p id="terms" class="copyright text-right">
                  {/* <NavLink
                    class="link"
                    onClick={() => scrollTo("#terms")}
                    href="/terms"
                  >
                    BAYC Terms &amp; Conditions
                  </NavLink> */}
                  <br />
                  {/* <a className="link" href="#/mayc/terms">
                    MAYC Terms &amp; Conditions
                  </a> */}
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

