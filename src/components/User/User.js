import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getUser,
  getUserClaps,
  getUserBookmarks,
  getUserComments,
  getUserFollowerCount,
  getUserFollowingCount,
  getUserStories
} from "../../redux/ducks/usersReducer";
import ClapArticles from "./ClapArticles";
import BookmarkArticles from "./BookmarkArticles";
import CommentArticles from "./CommentArticles";

import "./user.css";

/*
 *  User component is responsible for displaying useful user data
 *  User's default avatar is imported when first logging in with a Google account
 *  User is able to change avatar and cover photo
 *  Includes user's comment, clap, and bookmark activity
 */

class User extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    // Pulled in from usersReducer
    const {
      getUser,
      getUserClaps,
      getUserBookmarks,
      getUserComments,
      getUserFollowerCount,
      getUserFollowingCount,
      getUserStories
    } = this.props;

    // Mounts user data to component
    getUser();
    getUserClaps();
    getUserBookmarks();
    getUserComments();
    getUserFollowerCount();
    getUserFollowingCount();
    getUserStories();
  };

  render() {
    console.log("props: ", this.props);

    const {
      user,
      claps,
      bookmarks,
      comments,
      followerCount,
      followingCount
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
          <button>
            {/* <a href="http://localhost:3001/login">Login</a> */}
            <a href={process.env.REACT_APP_LOGIN}>Login</a>
          </button>
        </div>
        <br />
        <div>
          <button>
            <a href="http://localhost:3001/logout">Logout</a>
            {/* <a href={process.env.REACT_APP_LOGOUT}>Logout</a> */}
          </button>
        </div>
        <br />
        <br />
        <div className="cover-photo">
          <h2>User cover photo goes here</h2>
        </div>
        <div className="avatar">
          <img id="profile-pic" src={user.profile_pic} alt="User Avatar" />
        </div>
        <div>
          <h1>{user.username}</h1>
        </div>
        <div className="follow">
          <div className="follow-display">
            <h2>Followers</h2>
            <h2>{followerCount[0] ? followerCount[0].count : 0}</h2>
          </div>
          <div className="follow-display">
            <h2>Following</h2>
            <h2>{followingCount[0] ? followingCount[0].count : 0}</h2>
          </div>
        </div>
        <br />
        <br />
        <div className="claps">
          <h2>Article Claps: </h2>
          {claps && displayClappedArticles}
        </div>
        <br />
        <br />
        <div className="bookmarks">
          <h2>Bookmarked Articles: </h2>
          {bookmarks && displayBookmarks}
        </div>
        <br />
        <br />
        <div className="comments">
          <h2>User's comments: </h2>
          {comments && displayComments}
        </div>
        <br />
        <br />
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
    getUserFollowerCount,
    getUserFollowingCount,
    getUserStories
  }
)(User);
