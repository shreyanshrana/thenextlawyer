import React from "react";
import "./Service_Card.scss";

const Service_Card = props => {
  return (
    <div className="service-card__holder" style={{ width: props.width }}>
      <div className="service-card" style={{ backgroundImage: props.gradient }}>
        <div className="service-card__title">{props.card_title}</div>
        <div className="service-card__desc">{props.card_desc}</div>
      </div>
    </div>
  );
};

export default Service_Card;
