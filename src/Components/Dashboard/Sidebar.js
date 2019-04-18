import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: true,
      downloads: false,
      profile: false
    };
  }
  serviceshandleClick = () => {
    this.setState({
      services: true,
      downloads: false,
      profile: false
    });
    console.log(this.state);
  };

  downloadhandleClick = () => {
    this.setState({
      services: false,
      downloads: true,
      profile: false
    });
    console.log(this.state);
  };
  profilehandleClick = () => {
    this.setState({
      services: false,
      downloads: false,
      profile: true
    });
    console.log(this.state);
  };
  render() {
    // console.log(this.state);
    return (
      <div>
        <div className="sidebar__container">
          <div className="sidebar__icon-container">
            <Link
              to="/dashboard/services"
              className={
                this.state.services
                  ? "float-left col-12 display9 sidebar__option sidebar__icon-focussed"
                  : "float-left col-12 display9 sidebar__option"
              }
              onClick={this.serviceshandleClick}
            >
              <span className="display6 col-4 float-left">
                <ion-icon name="document" />
              </span>

              <span className="col-8 float-left">Create New Document</span>
            </Link>
            <Link
              to="/dashboard/download-form"
              className={
                this.state.downloads
                  ? "float-left col-12 display9 sidebar__option sidebar__icon-focussed"
                  : "float-left col-12 display9 sidebar__option"
              }
              onClick={this.downloadhandleClick}
            >
              <span className="display6 col-4 float-left">
                <ion-icon name="filing" />
              </span>
              <span className="col-8 float-left">Previous Documents</span>
            </Link>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
