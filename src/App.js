// Basic Functionality
import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Landing from "./Components/Home/Landing";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact";
import Dashboard from "./Components/Dashboard";
import why_us_final from "./Components/why_us_final";

import "./styles/sass/main.scss";

import AuthContext from "./Context/AuthContext";
import ServiceModule from "./Components/Services/ServiceModule";
import Download from "./Components/Dashboard/Download";

class App extends Component {
  state = {
    token: null,
    userId: null,
    userInfo: null
  };

  login = (token, userId) => {
    this.setState({ token, userId });
  };

  setUserInfo = userInfo => {
    this.setState({ userInfo });
  };

  logout = () => {
    this.setState({ token: null, userId: null, userInfo: null });
  };

  render() {
    return (
      <React.Fragment>
        {/* Main Router for the App */}
        <BrowserRouter>
          {/* Browser Router can only have one child */}
          <React.Fragment>
            <AuthContext.Provider
              value={{
                token: this.state.token,
                userId: this.state.userId,
                userInfo: this.state.userInfo,
                login: this.login,
                setUserInfo: this.setUserInfo,
                logout: this.logout
              }}
            >
              <Switch>
                {!this.state.token ? (
                  <Redirect from="/dashboard/services" to="/" />
                ) : null}
                <Route exact path="/" component={Landing} />
                <Route path="/contact-us" component={Contact} />
                <Route path="/why-us" component={why_us_final} />
                <Route path="/services" component={ServiceModule} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/download-form" component={Download} />
              </Switch>
            </AuthContext.Provider>
          </React.Fragment>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

// // Primary Components
// import Home from "./Components/Home"
// import Services from "./Components/Services/Services"
// import why_us_final from "./Components/Why_Us/why_us_final"
// import Contact from "./Components/Contact"
// import Dashboard from './Components/Dashboard'

// // Primary Functionality
// // Probably Chat like the one already on the website.

// // Auth Context
// // import AuthContext from './Components/context/AuthContext'

// /***** Truncate prior to final deploy *******/
// // Testing or To-Be-Integrated Components

// // Maintainance Components
// // Dynamic Linking to Backend probably
// //  Add a form Edit and Delete Accorind to Backend

// // Import Stylesheet (Custom)
// =======
/*import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

// Primary Components 
import Home from "./Components/Home"
import Services from "./Components/Services/Services"
import why_us_final from "./Components/Why_Us/why_us_final"
import Contact from "./Components/Contact"
import Dashboard from './Components/Dashboard'

// Primary Functionality
// Probably Chat like the one already on the website.

// Auth Context
// import AuthContext from './Components/context/AuthContext'

/***** Truncate prior to final deploy *******/
// Testing or To-Be-Integrated Components

// Maintainance Components
// Dynamic Linking to Backend probably
//  Add a form Edit and Delete Accorind to Backend

// Import Stylesheet (Custom)
// import './styles/sass/main.scss'

// class App extends Component {

//     // state = {
//     //     email: null,
//     //     id: null,
//     //     name: null,
//     //     secret: null,
//     //     password: null,
//     //     isLoggedIn: false
//     // }

//     // login = (email, id, name, password, secret) => {
//     //     console.log('Now logged in with the status: ', secret)
//     //     this.setState({
//     //         isLoggedIn: true,
//     //         email: email,
//     //         id: id,
//     //         name: name,
//     //         secret: secret,
//     //         password: password,
//     //     })
//     // }

//     // logout = () => {
//     //     this.setState({
//     //         email: null,
//     //         name: null,
//     //         id: null,
//     //         secret: null,
//     //         password: null,
//     //         isLoggedIn: false
//     //     })
//     // }

//     render() {
//         return (
//             <React.Fragment>
//                 {/* Main Router for the App */}
//                 <BrowserRouter>
//                     {/* Browser Router can only have one child */}
//                     <React.Fragment>
//                         <Switch>
//                             {/*  */}
//                             {/* {this.state.isLoggedIn && <Redirect from='/' to='/services' exact />} */}
// state = {
//     email: null,
//     id: null,
//     name: null,
//     secret: null,
//     password: null,
//     isLoggedIn: false
// }

// login = (email, id, name, password, secret) => {
//     console.log('Now logged in with the status: ', secret)
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
                {/* Main Router for the App */
// <BrowserRouter>
/* Browser Router can only have one child */
//<React.Fragment>
//<Switch>
/*  */
/* {this.state.isLoggedIn && <Redirect from='/' to='/services' exact />} */
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
//         )
//     }
// }

export default App;
