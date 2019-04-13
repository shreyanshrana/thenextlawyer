import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Components/Home/Landing";
import Services from "./Components/Services/Services";
import Why_Us from "./Components/Why_Us";
import Contact from "./Components/Contact";
import Dashboard from "./Components/Dashboard";

import "./styles/sass/main.scss";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Main Router for the App */}
        <BrowserRouter>
          {/* Browser Router can only have one child */}
          <React.Fragment>
            <Route exact path="/" component={Landing} />
            <Route exact path="/services" component={Services} />
            <Route path="/contact-us" component={Contact} />
            <Route path="/why-us" component={Why_Us} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/dashboard/services" component={Dashboard} />
          </React.Fragment>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
