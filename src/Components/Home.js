import React, { Component } from "react";
import BottomNav from "./Home/BottomNav";
import Landing from "./Home/Landing";
import Auth from "./Auth/Auth";
import AuthChasis from "./Auth/AuthChasis";
import "./Home/Navbar.scss";

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <AuthChasis />
                <Landing />
                <BottomNav />
            </div>
        );
    }
}
