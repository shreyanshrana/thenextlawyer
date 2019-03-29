import React, { Component } from "react";
import "./Profile.scss";

export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div>
          <i className="fa fa-user-circle profile__user" />
        </div>
        <div className="profile__outbox">
          <div className="profile__text">Name :</div>
          <div className="profile__info">Shruti Sharma</div>
          <div className="profile__text">Age :</div>
          <div className="profile__info">100 years old</div>
          <div className="profile__text">Sex :</div>
          <div className="profile__info">Female</div>
          <div className="profile__text">Address :</div>
          <div className="profile__info">Ravenclaw Common Room, Hogwarts</div>
          <div className="profile__text">Forms Filled :</div>
          <div className="profile__info">None</div>
        </div>
      </div>
    );
  }
}
