import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

// import Login from "./Login";
//Style
import "./Navbar.scss";

const toggleGetStarted = () => {
  const getStartedOpacity = document.getElementById("getStarted").style.opacity;
  console.log(getStartedOpacity);
  if (getStartedOpacity == 0)
    document.getElementById("getStarted").style.opacity = "1";
  else document.getElementById("getStarted").style.opacity = "0";
};
class Navbar extends Component {
  //   constructor() {
  // super(props);
  //   }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top animated bounceInDown">
          <a className="navbar-brand" href="#">
            <img src="./src/res/img/logo.png" />
          </a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="#about-us">
                About Us
              </a>
              <a className="nav-item nav-link" href="#how-it-works">
                How It Works
              </a>
              <a className="nav-item nav-link " href="#pricing">
                Pricing
              </a>
            </div>
          </div>

          <div className="float-right">
            <a className="nav-link navbar-login">Log-In</a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
