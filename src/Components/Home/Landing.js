import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import "./Landing.scss";

import Navbar from "../Universal/Navbar";
import Footer from "../Universal/Footer";

// Auth 
import Login from '../Auth/Login'
import Register from "../Auth/Register";

class Landing extends Component {

  state = {
    showAuth: false,
    authMode: null
  }

  showAuth = (args) => {
    console.log(args)
    this.setState({showAuth: true, authMode: args})
  }

  hideAuth = () => {
    this.setState({showAuth: false, authMode: null})
  }

  render () {
    return (
      <div>
        <Navbar showAuth={this.showAuth} /> 
        {
          this.state.showAuth ? ( this.state.authMode == 'login' ? (<Login hideAuth={this.hideAuth} />) : (<Register hideAuth={this.hideAuth} /> ) ) : (null)
        }
        <div className="landing">
          <div className="landing__title display6">
            The Next Generation Lawyer
          </div>
          <div className="landing__subtitle display8">
            Get all your legal documents hassle free.
          </div>
          <Search />
        </div>
        <div className="landing__services">
          <div className="display6 text-center">Legal made so easy.</div>
          <div className="display8 text-center p-3">
            Some of our popular services.
          </div>
          <div className="col-6 float-left landing__services--button">
            <a href="" className="btn btn-primary col-12">
              Service 1
            </a>
          </div>
          <div className="col-6 float-left landing__services--button">
            <a href="" className="btn btn-primary col-12">
              Service 2
            </a>
          </div>
          <div className="col-6 float-left landing__services--button">
            <a href="" className="btn btn-outline-primary col-12">
              Service 1
            </a>
          </div>
          <div className="col-6 float-left landing__services--button">
            <a href="" className="btn btn-outline-primary col-12">
              Service 2
            </a>
          </div>
          <div className="col-6 float-left landing__services--button">
            <a href="" className="btn btn-primary col-12">
              Service 1
            </a>
          </div>
          <div className="col-6 float-left landing__services--button">
            <a href="" className="btn btn-primary col-12">
              Service 2
            </a>
          </div>
          <div className="text-center font-weight-light display9 p-3">
            See More
          </div>
        </div>
        <div className="landing__contact-us  bg-blue">
          <div className="text-center display6 color-white font-weight-light">
            Any Questions ?
            <br />
            <Link to="/contact-us" className="btn btn-outline-light btn-lg">
              Contact Us !
            </Link>
          </div>
        </div>
        <div className="landing__how-it-works clearfix" id="how-it-works">
          <div className="display7 text-center">How does TNL work ?</div>
          <div className="display8 text-center font-weight-light p-3">
            Its as simple as 1, 2, 3 !
          </div>
          <div className="col-4 float-left landing__how-it-works--card-container">
            <div className="card text-center">
              <div className="display4">1</div>
              <div className="card-body jumbotron__pricing--card-body">
                <h5 className="card-title display8 ">Our Templates</h5>
                <div className="card-text ">
                  we have a pre existing, precise database stored with legal
                  document templates. These are made in accordance with the
                  consitution of India.
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 float-left landing__how-it-works--card-container">
            <div className="card text-center">
              <div className="display4">2</div>
              <div className="card-body jumbotron__pricing--card-body">
                <h5 className="card-title display8 ">Your details</h5>
                <div className="card-text ">
                  You provide us with the missing pieces of our templates, ie.
                  your details which we embed into the templates to generate your
                  legal documents.
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 float-left landing__how-it-works--card-container">
            <div className="card text-center">
              <div className="display4">3</div>
              <div className="card-body jumbotron__pricing--card-body">
                <h5 className="card-title display8 ">Your Documents</h5>
                <div className="card-text ">
                  Once our process is complete, the system generates your desired
                  documents for you to download and print however many times you
                  may want to !
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
};

export default Landing
