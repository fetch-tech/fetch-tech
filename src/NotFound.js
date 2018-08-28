import React, { Component } from "react";
import logo from "./images/ft_logo.png";
import "./login.css";

class NotFound extends Component {
  render() {
    // console.log("render", this.state.user);

    return (
      <div className="loginbody">
        {" "}
        <div>
          <img className="loginImage" src={logo} />
        </div>
        <div className="login-button">
          <h1>SORRY PAGE NOT FOUND</h1>
        </div>
      </div>
    );
  }
}

export default NotFound;
