import React, { Component } from "react";
import Sidebar from "./Dashboard/Sidebar";
import Topbar from "./Dashboard/Topbar";
import { BrowserRouter, Route } from "react-router-dom";
import Services_Container from "./Dashboard/Services_Container";
import Download from "./Dashboard/Download";
import BottomNav from "./Dashboard/bottomNav";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Topbar name="Aditya Sharma" />
        <Sidebar />
        <BottomNav />
        <Services_Container/>
      </div>
    );
  }
}

export default Dashboard;
