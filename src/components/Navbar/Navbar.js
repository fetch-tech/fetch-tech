
import React, {Component} from "react";
import Fetch_Tech_Logo from "../../images/Fetch_Tech_Logo.png";
import {Link} from "react-router-dom";
import './Navbar.css';


export default class Navbar extends Component {
    render() {
      return (
        <div className="mainNav">
            <div className="logo">
            <Link to="/">
              <img src={Fetch_Tech_Logo} width="150" height="60" alt="logo" />
              </Link>
            </div>
            <div className="nav_wrap">
              <Link to="/gentech" className="Nlinks">
                Top Tech
              </Link>
              <Link to="/devtech" className="Nlinks">
                Dev Tech
              </Link>
              <Link to="/funtech" className="Nlinks">
                Tech Humor
              </Link>
              <div>Search</div>
              <Link to="/bookmark" className="Nlinks">
                Book Mark
              </Link>
              <Link to="/profile" className="Nlinks">
                Profile
              </Link>
            </div>
        </div>
      );
    }
  }
