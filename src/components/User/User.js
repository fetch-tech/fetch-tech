import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h1>USER PROFILE</h1>
        </div>
        <div className="cover-photo">
          <p>User cover photo goes here</p>
        </div>
        <div className="avatar">
          <p>User avatar goes here</p>
        </div>
        <div className="follow">
          <p>Followers: </p>
          <p>Following: </p>
        </div>
        <div className="claps">
          <p>Number of claps: </p>
        </div>
        <div className="bookmarks">
          <h2>Bookmarked Articles: </h2>
        </div>
        <div className="posts">
          <h2>User's posts: </h2>
        </div>
      </div>
    );
  }
}

export default User;
