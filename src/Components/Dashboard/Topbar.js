import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.scss";

const Topbar = props => {
  return (
    <div>
      <div className="topbar__container">
        <div className="topbar__logo">TNL</div>
        <div className="topbar__signout float-right">
          <Link to="/log-out">
            <ion-icon name="log-out" />
          </Link>
        </div>
        <div className="topbar__username">Welcome, {props.name}</div>
      </div>
    </div>
  );
};

export default Topbar;
