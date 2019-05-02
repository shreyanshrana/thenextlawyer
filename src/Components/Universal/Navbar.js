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
        <div
          class="modal fade"
          id="modalLoginForm"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header text-center">
                <h4 class="modal-title w-100 font-weight-bold">Sign in</h4>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body mx-3">
                <div class="md-form mb-5">
                  <i class="fas fa-envelope prefix grey-text" />
                  <input
                    type="email"
                    id="defaultForm-email"
                    class="form-control validate"
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    for="defaultForm-email"
                  >
                    Your email
                  </label>
                </div>

                <div class="md-form mb-4">
                  <i class="fas fa-lock prefix grey-text" />
                  <input
                    type="password"
                    id="defaultForm-pass"
                    class="form-control validate"
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    for="defaultForm-pass"
                  >
                    Your password
                  </label>
                </div>
              </div>
              <div class="modal-footer d-flex justify-content-center">
                <button class="btn btn-default">Login</button>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center">
          <a
            href=""
            class="btn btn-default btn-rounded mb-4"
            data-toggle="modal"
            data-target="#modalLoginForm"
          >
            Launch Modal Login Form
          </a>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top animated fadeIn">
          <Link className="navbar-brand" to="/">
            <img src="./src/res/img/logo.png" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link" to="/why-us">
                Why Us
              </Link>
              <a className="nav-item nav-link" href="#how-it-works">
                How It Works
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
