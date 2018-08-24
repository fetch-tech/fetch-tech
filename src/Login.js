import React, { Component } from "react";
import { Button } from "antd";

import logo from "./images/ft_logo.png";

import "./login.css";

export default class Login extends Component {
  state = {
    loggedIn: true
  };
  onLoggedClick = () => {
    this.setState({ loggedIn: true });
  };
  render() {
    return (
      <div className="loginbody">
        {" "}
        <div>
          <img className="loginImage" src={logo} />
        </div>
        <a href="http://localhost:3001/login">
          <Button>Login</Button>
          <div>
            {this.state.loggedIn && (
              <div className="btns">
                <Button>GEN TECH</Button>
                <Button>DEV TECH</Button>
                <Button>ENTERTAINMENT</Button>
              </div>
            )}
          </div>
        </a>
      </div>
    );
  }
}
