import React, { Component } from "react";
import BottomNav from "./Home/BottomNav";
import Landing from "./Home/Landing";
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Landing />
        <BottomNav />
      </div>
    );
  }
}
