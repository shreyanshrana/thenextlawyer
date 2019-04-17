import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Components/Home/Landing";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact";
import Dashboard from "./Components/Dashboard";
import why_us_final from "./Components/why_us_final";

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
            <Route path="/dashboard/services" component={Services} />
            <Route path="/contact-us" component={Contact} />
            <Route path="/why-us" component={why_us_final} />
            <Route path="/dashboard/services" component={Dashboard} />
            <Route path="/dashboard/download-form" component={Dashboard} />
          </React.Fragment>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
