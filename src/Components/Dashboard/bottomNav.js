import React from "react";
import { Link } from "react-router-dom";
import "./bottomNav.scss";
var Home = {
  color: "white",
  textAlign: "center",
  display: "inline-block",
  padding: "5px 5px 5px 0px",
  fontSize: "30px",
  width: "33%",
  boxSizing: "border-box"
};

function BottomNav(props) {
  return (
    <div className="test">
      <Link to="/dashboard">
        <span className="display6 col-6 col-xs-6 float-left color-white text-center">
          <ion-icon name="document" />
        </span>
      </Link>
      <Link to="/download-form">
        <span className="display6 col-6 col-xs-6 float-left color-white text-center">
          <ion-icon name="download" />
        </span>
      </Link>
    </div>
  );
}

export default BottomNav;
