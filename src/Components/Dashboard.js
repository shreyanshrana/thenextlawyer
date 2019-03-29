import React, { Component } from "react";
import Sidebar from "./Dashboard/Sidebar";
import Topbar from "./Dashboard/Topbar";
import { BrowserRouter, Route } from "react-router-dom";
import Services_Container from "./Dashboard/Services_Container";
import Profile from "./Profile/Profile";
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
          {/* Browser Router can only have one child */}
          <React.Fragment>
            <Route
              exact
              path="/dashboard/services"
              component={Services_Container}
            />
            <Route exact path="/dashboard/profile" component={Profile} />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default Dashboard;
