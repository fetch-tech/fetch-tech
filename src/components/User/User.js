import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getUserClaps,
  getUserBookmarks,
  getUserComments
} from "../../redux/ducks/usersReducer";
import ClapArticles from "./ClapArticles";
import BookmarkArticles from "./BookmarkArticles";
import CommentArticles from "./CommentArticles";

class User extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const { getUserClaps, getUserBookmarks, getUserComments } = this.props;

    getUserClaps("google-oauth2|105906369999808829473");
    getUserBookmarks("google-oauth2|105906369999808829473");
    getUserComments("google-oauth2|105906369999808829473");
  };

  render() {
    console.log("props: ", this.props);

    const { claps, bookmarks, comments } = this.props.usersReducer;

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
  { getUserClaps, getUserBookmarks, getUserComments }
)(User);
