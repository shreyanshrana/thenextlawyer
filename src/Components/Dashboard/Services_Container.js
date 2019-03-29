import React from "react";
import Service_Card from "./Service_Card";
import "./Service_Card.scss";
const Services_Container = props => {
  return (
    <div className="service-card__container">
      <Service_Card
        card_title="Affidavit Regarding Age"
        card_desc="best boi shreyansh"
        gradient="linear-gradient(to right, #1d976c, #93f9b9)"
      />
      <Service_Card
        card_title="Employment Contract"
        card_desc="2nd best boi adi"
        gradient="linear-gradient(to right, #eb3349, #f45c43)"
      />
      <Service_Card
        card_title="Gift Deed"
        card_desc="best boi shreyansh"
        gradient="linear-gradient(to right, #dd5e89, #f7bb97)"
      />
      <Service_Card
        card_title="General Power of Attorney"
        card_desc="best boi shreyansh"
        width="49.5%"
        gradient="linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)"
      />
      <Service_Card
        card_title="Marriage Registeration"
        card_desc="best boi shreyansh"
        width="49.5%"
        gradient="linear-gradient(0deg, #1d2b64, #f8cdda)"
      />
      <Service_Card
        card_title="Name Change Affidavit"
        card_desc="best boi shreyansh"
        gradient="linear-gradient(to right, #ff512f, #f09819)"
      />
      <Service_Card
        card_title="No Third Party Loss"
        card_desc="best boi shreyansh"
        gradient="linear-gradient(to right, #aa076b, #61045f)"
      />
      <Service_Card
        card_title="NDA"
        card_desc="Non Disclosure Agreement"
        gradient="linear-gradient(to right, #f09819, #edde5d)"
      />
      <Service_Card
        card_title="Special Power of Attorney"
        card_desc="best boi shreyansh"
        width="49.5%"
        gradient="linear-gradient(to right, #e55d87, #5fc3e4)"
      />
      <Service_Card
        card_title="Sale/Purchase of Vehicle"
        card_desc="best boi shreyansh"
        width="49.5%"
        gradient="linear-gradient(to right, #cc95c0, #dbd4b4, #7aa1d2)"
      />
      <Service_Card
        card_title="Rent"
        card_desc="best boi shreyansh"
        gradient="linear-gradient(to right, #cc95c0, #dbd4b4, #7aa1d2)"
      />
      <Service_Card
        card_title="Revocation of POA"
        card_desc="best boi shreyansh"
        gradient="linear-gradient(to right, #da22ff, #9733ee)"
      />
      <Service_Card
        card_title="Will"
        card_desc="best boi shreyansh"
        gradient="linear-gradient(to right, #004ff9, #fff94c)"
      />
    </div>
  );
};

export default Services_Container;
