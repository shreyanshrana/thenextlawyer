import React from "react";
import { Link } from "react-router";
import "./Topbar.scss";

const Topbar = props => {
  return (
    <div>
      <div className="topbar__container">
        <div className="topbar__logo">TNL</div>
        <div className="topbar__username">Welcome, {props.name}</div>
        <div className="topbar__signout">
          <a href="/log-out">
            <i className="fa fa-sign-out-alt" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
