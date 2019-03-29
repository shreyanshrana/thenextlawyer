import React from "react";
import Search from "./Search";
import "./Landing.scss";

const Landing = props => {
  return (
    <div>
      <div className="landing">
        <div className="landing__logo">TNL</div>
        <div className="landing__title">theNextLawyer</div>
        <div className="landing__subtitle">
          Making Legal Simple for Everyone.
        </div>
        <Search />
      </div>
    </div>
  );
};

export default Landing;
