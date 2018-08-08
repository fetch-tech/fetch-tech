import React, { Component } from "react";
import FETCH_TECH_LOGO from "../../images/FETCH_TECH_LOGO.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchBar from "../Search/SearchBar";
import Post_Article from "../Post_Article/Post_Article";
import BOOKMARKTRANS from "../../images/BOOKMARKTRANS.png";

export default class Navbar extends Component {
  render() {
    return (
      <div className="mainNav">
        <div className="logo">
          <Link to="/">
            <img src={FETCH_TECH_LOGO} alt="logo" />
          </Link>
        </div>
        <div className="nav_wrap">
          <Link to="/" className="Nlinks">
            Gen Tech
          </Link>
          <Link to="/devtech" className="Nlinks">
            Dev Tech
          </Link>
          <Link to="/funtech" className="Nlinks">
            Fun Tech
          </Link>
          <div className="Nlinks">
            <SearchBar />
          </div>
          <Link to="/bookmark" className="Nlinks">
            <img src={BOOKMARKTRANS} className="bookM" alt="bookmark" />
          </Link>
          <Link to="/profile" className="Nlinks">
            Profile
          </Link>
        </div>
        <div>
          <Post_Article />
        </div>
      </div>
    );
  }
}
