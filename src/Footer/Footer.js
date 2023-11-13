import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <svg
          className="svg-wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fillOpacity="1"
            d="M0,160L80,138.7C160,117,320,75,480,74.7C640,75,800,117,960,144C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
        <div className="container">
          <div className="lists">
            <div className="one flex-center">B</div>
            <div className="two">
              <ul>
                <li>Let us help you</li>
                <li>Privacy Policy</li>
                <li>Warranty Policy</li>
                <li>Delivery Information</li>
                <li>T&C</li>
              </ul>
            </div>
            <div className="three">
              <ul>
                <li>Get to know us</li>
                <li>About Baladi</li>
                <li>Contact Us</li>
                <li>Delivery Information</li>
                <li>FAQ’s</li>
              </ul>
            </div>
            <div className="four">
              <p>Subscribe to our newsletter</p>
              <div className="inp">
                <input type="mail" placeholder="Your Email" />
                <i className="fa-regular fa-paper-plane"></i>
              </div>
            </div>
          </div>
          <div className="social flex-center">
            <p>
              <a href="#">Become a Partner</a>
            </p>
            <div className="icons flex-center">
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="download">
              <a href="#" className="market-btn apple-btn">
                <span className="market-button-subtitle">Download on the</span>
                <span className="market-button-title">App Store</span>
              </a>
              <a href="#" className="market-btn google-btn">
                <span className="market-button-subtitle">Download on the</span>
                <span className="market-button-title">Google Play</span>
              </a>
            </div>
          </div>
          <div className="rights">
            Copyright © 2023 Baladi Express. All Rights Reserved
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
