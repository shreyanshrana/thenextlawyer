// Basic Functionality
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
/*import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Primary Components 
import Home from "./Components/Home";
import Services from "./Components/Services/Services";
import why_us_final from "./Components/Why_Us/why_us_final";
import Contact from "./Components/Contact";
import Dashboard from './Components/Dashboard';

// Primary Functionality
// Probably Chat like the one already on the website.

// Auth Context
// import AuthContext from './Components/context/AuthContext';

/***** Truncate prior to final deploy *******/
// Testing or To-Be-Integrated Components


// Maintainance Components
// Dynamic Linking to Backend probably
//  Add a form Edit and Delete Accorind to Backend

// Import Stylesheet (Custom)
// import './styles/sass/main.scss';

// class App extends Component {

    // state = {
    //     email: null,
    //     id: null,
    //     name: null,
    //     secret: null,
    //     password: null,
    //     isLoggedIn: false
    // }

    // login = (email, id, name, password, secret) => {
    //     console.log('Now logged in with the status: ', secret);
    //     this.setState({
    //         isLoggedIn: true,
    //         email: email,
    //         id: id,
    //         name: name,
    //         secret: secret,
    //         password: password,
    //     })
    // }

    // logout = () => {
    //     this.setState({
    //         email: null,
    //         name: null,
    //         id: null,
    //         secret: null,
    //         password: null,
    //         isLoggedIn: false
    //     })
    // }
  
    /*render() {
        return (
            <React.Fragment>
                {/* Main Router for the App */}
               // <BrowserRouter>
                    {/* Browser Router can only have one child */}
                    //<React.Fragment>
                        //<Switch>
                            {/*  */}
                            {/* {this.state.isLoggedIn && <Redirect from='/' to='/services' exact />} */}
//                             <Route exact path="/" component={Home} />
//                             <Route path="/services" component={Services} />
//                             <Route path="/contactus" component={Contact} />
//                             <Route path="/why-us" component={why_us_final} />
//                             <Route path='/dashboard' component={Dashboard}/>
//                             <Route path="/dashboard/services" component={Dashboard} />
//                         </Switch>
//                     </React.Fragment>
//                 </BrowserRouter>
//             </React.Fragment>
//         );
//     }
// }

export default App;
