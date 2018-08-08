import React, { Component } from "react";
import { connect } from "react-redux";

import { getUserClaps } from "../../redux/ducks/usersReducer";

class User extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const { getUserClaps } = this.props;

    // getUserClaps();
  };

  render() {
    console.log("props: ", this.props);

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
          <p>Article Claps: </p>
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

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { getUserClaps }
)(User);
