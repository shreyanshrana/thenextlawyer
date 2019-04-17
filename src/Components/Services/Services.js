import React, { Component } from "react";
import { Route } from "react-router-dom";
import Individuals from "./Individuals";
import Advocates from "./Advocates";
import NRIs from "./NRIs";
import Companies from "./Companies";

class Services extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="services">
          <Route path="/services/individuals" component={Individuals} />
          <Route path="/services/advocates" component={Advocates} />
          <Route path="/services/NRIs" component={NRIs} />
          <Route path="/services/companies" component={Companies} />
        </div>
      </React.Fragment>
    );
  }
}

export default Services;
