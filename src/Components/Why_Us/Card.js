import React, { Component } from "react";
import "./Card.scss";
// import law from "../../res/img/icons8-law-100.png";
const law = require("../../res/img/icons8-law-100.png");
class Card extends Component {
  constructor(props) {
    super();
  }
  render() {
    const { card_title, card_info, font_awesome_loader } = { ...this.props };
    return (
      <div className="card-container">
        <div className="card">
          <div className="card__first-half">
            <div className="card-title">{card_title}</div>
          </div>
          <div className="card__second-half">
            <div className="card-icon-holder">
              <i className={font_awesome_loader} />
            </div>
            <div className="card-info">{card_info}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
