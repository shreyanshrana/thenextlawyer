import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home";
import Services from "./Components/Services/Services";
import why_us_final from "./Components/Why_Us/why_us_final";
import Contact from "./Components/Contact";
import Dashboard from "./Components/Dashboard";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Main Router for the App */}
        <BrowserRouter>
          {/* Browser Router can only have one child */}
          <React.Fragment>
            <Route exact path="/" component={Home} />
            <Route exact path="/services" component={Services} />
            <Route path="/contact-us" component={Contact} />
            <Route path="/why-us" component={why_us_final} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/dashboard/services" component={Dashboard} />
          </React.Fragment>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
