import React from "react";

import "./Footer.scss";

const Footer = props => {
  return (
    <div className="footer clearfix color-white">
      <div className="col-4 float-left display6 text-center">
        <a className="footer__social-media-icons">
          <ion-icon name="logo-facebook" />
        </a>
        <br />
        <div className="display8 font-weight-light ">TheNextLawyer</div>
      </div>

      <div className="col-4 float-left">
        <div className="display7 font-weight-light text-left">Services</div>
        <ul>
          <li className="display10 font-weight-light text-left">
            Take the test
          </li>
          <li className="display10 font-weight-light text-left">
            TheNextLawyer for individual
          </li>

          <li className="display10 font-weight-light text-left">
            TheNextLawyer for buisness
          </li>
        </ul>
      </div>
      <div className="col-4 float-left">
        <div className="display7 font-weight-light text-left">Useful links</div>
        <ul>
          <li className="display10 font-weight-light text-left">About Us</li>
          <li className="display10 font-weight-light text-left">Contact Us</li>

          <li className="display10 font-weight-light text-left">Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
