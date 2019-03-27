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
      <Link to="/home">
        <i class="fa fa-file-signature" style={Home} />
      </Link>
      <Link to="/guild">
        <i class="fa fa-file-download" style={Home} />
      </Link>
      <Link to="/stats">
        <i class="fa fa-user-circle" style={Home} />
      </Link>
    </div>
  );
}

export default BottomNav;
