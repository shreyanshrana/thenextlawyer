import React, { Component } from "react";
import Navbar from "./Home/Navbar";
import Card from "./Why_Us/Card";

export default class Why_Us extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <Card
          card_title="Legal Made Easy"
          card_info="We are the most efficient way to make and manage your legal documents. No expertise of any kind is required."
          font_awesome_loader="fa fa-gavel card-icon"
        />
        <Card 
        card_title="Less Clicks.. More Work !" 
        card_info="You get your documents with minimal amount of work. There is no hassle, whatsover. Just fill the fields and get you files in your desired format" 
        font_awesome_loader="fa fa-check card-icon"
        />

        <Card 
        card_title="Faster. Better. Easier" 
        card_info="The documents you create here can be easily exported into any format of your liking. We even provide the ability to email the documents." 
        font_awesome_loader="fa fa-clock card-icon"
        />
      </div>
    );
  }
}
