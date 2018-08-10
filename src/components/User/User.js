import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getUser,
  getUserClaps,
  getUserBookmarks,
  getUserComments,
  getUserFollowerCount
} from "../../redux/ducks/usersReducer";
import ClapArticles from "./ClapArticles";
import BookmarkArticles from "./BookmarkArticles";
import CommentArticles from "./CommentArticles";

class User extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const {
      getUser,
      getUserClaps,
      getUserBookmarks,
      getUserComments,
      getUserFollowerCount
    } = this.props;

    getUser();
    getUserClaps("google-oauth2|105906369999808829473");
    getUserBookmarks("google-oauth2|105906369999808829473");
    getUserComments("google-oauth2|105906369999808829473");
    getUserFollowerCount("google-oauth2|105906369999808829473");
  };

  render() {
    console.log("props: ", this.props);

    const {
      user,
      claps,
      bookmarks,
      comments,
      followerCount
    } = this.props.usersReducer;

    // Rendering articles user has clapped on
    const displayClappedArticles = claps.map((clap, i) => {
      return <ClapArticles uniqueKey={i} clap={clap} i={i} />;
    });

    // Rendering user's bookmarked articles
    const displayBookmarks = bookmarks.map((bookmark, i) => {
      return <BookmarkArticles uniqueKey={i} bookmark={bookmark} i={i} />;
    });

    // Rendering user's comments on articles
    const displayComments = comments.map((comment, i) => {
      return <CommentArticles uniqueKey={i} comment={comment} i={i} />;
    });

    return (
      <div>
        <div>
          <h1>{user.username}</h1>
        </div>
        <div className="cover-photo">
          <h2>User cover photo goes here</h2>
        </div>
        <div className="avatar">
          <h2>User avatar goes here</h2>
          <img src={user.profile_pic} alt="User Avatar" />
        </div>
        <div className="follow">
          <h2>Followers: {followerCount[0] && followerCount[0].count}</h2>
          <h2>Following: </h2>
        </div>
        <div className="claps">
          <h2>Article Claps: </h2>
          {claps && displayClappedArticles}
        </div>
        <div className="bookmarks">
          <h2>Bookmarked Articles: </h2>
          {bookmarks && displayBookmarks}
        </div>
        <div className="comments">
          <h2>User's comments: </h2>
          {comments && displayComments}
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
  {
    getUser,
    getUserClaps,
    getUserBookmarks,
    getUserComments,
    getUserFollowerCount
  }
)(User);
