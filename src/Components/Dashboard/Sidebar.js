import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

const toggleClass = () => {
  this.set;
};

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
            <Link to="/dashboard/services">
              <button style={{ border: 0 }} onClick={this.serviceshandleClick}>
                <i
                  className={
                    this.state.services
                      ? "fa fa-file-signature sidebar__icon sidebar__icon-focussed"
                      : "fa fa-file-signature sidebar__icon"
                  }
                />
              </button>
            </Link>
            <Link to="/dashboard/download-form">
              <button style={{ border: 0 }} onClick={this.downloadhandleClick}>
                <i
                  className={
                    this.state.downloads
                      ? "fa fa-file-download sidebar__icon sidebar__icon-focussed"
                      : "fa fa-file-download sidebar__icon"
                  }
                />
              </button>
            </Link>
            <Link to="/dashboard/profile">
              <button style={{ border: 0 }} onClick={this.profilehandleClick}>
                <i
                  className={
                    this.state.profile
                      ? "fa fa-user-circle sidebar__icon sidebar__icon-focussed"
                      : "fa fa-user-circle sidebar__icon"
                  }
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
