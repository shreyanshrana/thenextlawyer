import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Topbar.scss";

// Auth COntext
import AuthContext from "../../Context/AuthContext";

class Topbar extends Component {
  static contextType = AuthContext;

  render() {
    return (
      <div>
        <div className="topbar__container">
          <div className="topbar__logo">TNL</div>
          <div className="topbar__signout float-right">
            <a onClick={this.context.logout}>
              <ion-icon name="log-out" />
            </a>
          </div>
          <div className="topbar__username hide-phone">
            Welcome, {this.props.name}
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
