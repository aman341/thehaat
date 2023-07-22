import React from 'react';
import './Style/Footer.css';
import 'boxicons/css/boxicons.min.css';
import blinkitLogo from '../Images/blinkit_logo.png';

function Footer() {
  return (
    <div>
      <footer>
        <div className="container footer__container">
          <div className="footer__top">
            <a href="#" className="logo">
            <img src={blinkitLogo} alt="logo" className="logo__image" style={{margin:'10px'}} />
            </a>
          </div>
          <div className="footer__main">
            <article>
              <p style={{margin:'27px'}}>Company</p>
              <ul className="footer__links">
                <li><a href="#">Profile</a></li>
                <li><a href="#">Leadership Team</a></li>
                <li><a href="#">Accolades</a></li>
                <li><a href="#">Media</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </article>
            <article>
              <p style={{margin:'27px'}}>Solutions</p>
              <ul className="footer__links">
                <li><a href="#">Omnichannel CX</a></li>
                <li><a href="#">Contact Centre</a></li>
                <li><a href="#">Marketing Solutions</a></li>
                <li><a href="#">Remote Team Solution</a></li>
              </ul>
            </article>
            <article>
              <p style={{margin:'27px'}}>Resources</p>
              <ul className="footer__links">
                <li><a href="#">Blog</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Videos</a></li>
                <li><a href="#">Webinar</a></li>
                <li><a href="#">Ebooks</a></li>
                <li><a href="#">Press Release</a></li>
                <li><a href="#">Glossary</a></li>
                <li><a href="#">Developer Center</a></li>
              </ul>
            </article>
            <article>
              <p style={{margin:'27px'}}>Support</p>
              <ul className="footer__links">
                <li>IND: +91 93110 42121</li>
                <li>IDN: +62.813.1099.1035</li>
                <li>UAE: +971.45.973.945</li>
                <li>USA: +1.551.800.1110</li>
              </ul>
            </article>
            <article>
              <div className="footer__socials">
                <p style={{margin:'27px'}}>Stay Connected</p>
                <ul>
                  <li><a href="#"><i className="bx bxl-facebook"></i></a></li>
                  <li><a href="#"><i className="bx bxl-twitter"></i></a></li>
                  <li><a href="#"><i className="bx bxl-linkedin"></i></a></li>
                  <li><a href="#"><i className="bx bxl-instagram"></i></a></li>
                  <li><a href="#"><i className="bx bxl-youtube"></i></a></li>
                </ul>
              </div>

            </article>
          </div>
          <div className="footer__bottom">
            <div className="footer__bottom-links">
              <a href="#" style={{marginLeft:'5px'}}>Privacy Policy</a>
              <a href="#">Terms of Use</a>
            </div>
            <p>Copyright © 2023 C-Zentrix. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
