import React, {Component} from "react";
import Fetch_Tech_Logo from "../images/Fetch_Tech_Logo.png";
import {Link} from "react-router-dom";
import './Navbar.css';


export default class Header extends Component {
    render() {
      return (
        <div className="mainNav">
          <nav>
            <div className="logo">
            <Link to="/">
              <img src={Fetch_Tech_Logo} width="150" height="60" alt="logo" />
              </Link>
            </div>
            <div className="nav_wrap">
              <Link to="/top-tech" className="Nlinks">
                Top Tech
              </Link>
              <Link to="/dev-tech" className="Nlinks">
                Dev Tech
              </Link>
              <Link to="/tech-humor" className="Nlinks">
                Tech Humor
              </Link>
              <Link to="/book-mark" className="Nlinks">
                Book Mark
              </Link>
              <Link to="/profile" className="Nlinks">
                Profile
              </Link>
            </div>
          </nav>
        </div>
      );
    }
  }
