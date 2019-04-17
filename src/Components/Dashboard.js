import React, { Component } from "react";
import Sidebar from "./Dashboard/Sidebar";
import Topbar from "./Dashboard/Topbar";
import { BrowserRouter, Route } from "react-router-dom";
import Services_Container from "./Dashboard/Services_Container";
import Download from "./Dashboard/Download";
import BottomNav from "./Dashboard/bottomNav";
class Dashboard extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <Topbar name="Aditya Sharma" />
        <Sidebar />
        <BottomNav />
        <BrowserRouter>
          <React.Fragment>
            <Route
              exact
              path="/dashboard/services"
              component={Services_Container}
            />

            <Route exact path="/dashboard/download-form" component={Download} />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default Dashboard;
