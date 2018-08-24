import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { Link } from "react-router-dom";

import { getUser } from "./redux/ducks/usersReducer";
import logo from "./images/ft_logo.png";

import "./login.css";

class Login extends Component {
  state = {
    loggedIn: false,
    user: ""
  };

  async componentDidMount() {
    const { getUser } = this.props;
    const userState = await getUser();

    await console.log("compMount", userState.value.data && "true");
    (await userState.value.data)
      ? this.setState({ loggedIn: true, user: userState })
      : this.setState({ loggedIn: false });
  }

  onLoggedClick = () => {
    this.setState({ loggedIn: true });
  };

  render() {
    // console.log("render", this.state.user);
    const { loggedIn } = this.state;

    return (
      <div className="loginbody">
        {" "}
        <div>
          <img className="loginImage" src={logo} />
        </div>
        <div className="login-button">
          {!loggedIn ? (
            <a href={process.env.REACT_APP_LOGIN}>
              <Button className="loginButton">Login</Button>
            </a>
          ) : (
            <div>
              <Link to="/">
                <Button className="loginButton">Gen Tech</Button>
              </Link>
              <Link to="/devtech">
                <Button className="loginButton">Dev Tech</Button>
              </Link>
              <Link to="/entertainment">
                <Button className="loginButton">Entertainment</Button>
              </Link>
            </div>
          )}
          {/* <a href="http://localhost:3001/login">
            <Button className="loginButton">Login</Button>
          </a> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { getUser }
)(Login);
