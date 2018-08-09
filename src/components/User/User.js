import React, { Component } from "react";
import { connect } from "react-redux";

import { getUserClaps } from "../../redux/ducks/usersReducer";
import ClapArticles from "./ClapArticles";

class User extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const { getUserClaps } = this.props;

    getUserClaps("google-oauth2|105906369999808829473");
  };

  render() {
    console.log("props: ", this.props);

    const { claps } = this.props.usersReducer;

    // Rendering articles user has clapped on
    const displayClappedArticles = claps.map((clap, i) => {
      return <ClapArticles uniqueKey={i} clap={clap} i={i} />;
    });

    return (
      <div>
        <div>
          <h1>USER PROFILE</h1>
        </div>
        <div className="cover-photo">
          <h2>User cover photo goes here</h2>
        </div>
        <div className="avatar">
          <h2>User avatar goes here</h2>
        </div>
        <div className="follow">
          <h2>Followers: </h2>
          <h2>Following: </h2>
        </div>
        <div className="claps">
          <h2>Article Claps: </h2>
          {claps && displayClappedArticles}
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
