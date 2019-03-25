import React from "react";
import { Link } from "react-router";
import "./BottomNav.scss";

const BottomNav = props => {
  return (
    <div className="bottomnav">
      <div className="bottomnav__item">
        <a href="/why-us">Why Us</a>
      </div>
      <div className="bottomnav__item">
        <a href="/services">Services</a>
      </div>
      <div className="bottomnav__item">
        <a href="/contact-us">Contact Us</a>
      </div>
    </div>
  );
};

export default BottomNav;
