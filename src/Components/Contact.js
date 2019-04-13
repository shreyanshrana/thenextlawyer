import React, { Component } from "react";
import Navbar from "./Universal/Navbar";
import Footer from "./Universal/Footer";
import "./Contact.scss";
export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="contact">
          <Navbar />
          <div className="contact__container">
            <h1 className="contact__heading">Contact Us</h1>
            <h4 className="contact__subheading">
              Got a question? We'd like to hear from you.
              <br /> Send us a message and we'll respond as soon as possible.
            </h4>
            <form>
              <input
                type="text"
                className="contact__textbox"
                placeholder="Name"
              />
              <input
                type="text"
                className="contact__textbox"
                placeholder="Email"
              />
              <input
                type="text"
                className="contact__textbox"
                placeholder="Phone"
              />
              <input
                type="text"
                className="contact__textbox"
                placeholder="Message"
              />
              <button className="contact__Send btn btn-outline-primary">
                Send
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
