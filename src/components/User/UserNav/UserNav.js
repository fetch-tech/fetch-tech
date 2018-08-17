import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./userNav.css";

class UserNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user-nav">
        <div className="stories hover-cursor">
          <Link to="/user/stories">
            <h2>Stories</h2>
          </Link>
        </div>
        <div className="claps hover-cursor">
          <Link to="/user/claps">
            <h2>Claps</h2>
          </Link>
        </div>
        <div className="bookmarks hover-cursor">
          <Link to="/user/bookmarks">
            <h2>Bookmarks</h2>
          </Link>
        </div>
        <div className="comments hover-cursor">
          <Link to="/user/comments">
            <h2>Comments</h2>
          </Link>
        </div>
      </div>
    );
  }
}

export default UserNav;
