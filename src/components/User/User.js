import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Collapse } from "antd";

import {
  getUser,
  getUserClaps,
  getUserBookmarks,
  getUserComments,
  getUserFollowers,
  getUserFollowing,
  getUserStories
} from "../../redux/ducks/usersReducer";
import UserNav from "./UserNav/UserNav";
// import ClapArticles from "./userContent/ClapArticles";
// import BookmarkArticles from "./userContent/BookmarkArticles";
// import CommentArticles from "./userContent/CommentArticles";
// import StoryArticles from "./userContent/StoryArticles";
import FollowerList from "./userContent/FollowerList";
import FollowingList from "./userContent/FollowingList";
import UserRoutes from "./UserRoutes/UserRoutes";

import "./user.css";

const Panel = Collapse.Panel;

/*
 *  User component is responsible for displaying useful user data
 *  User's default avatar is imported when first logging in with a Google account
 *  User is able to change avatar and cover photo
 *  Includes user's comment, clap, and bookmark activity
 */

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followerVisible: false,
      followingVisible: false
    };
  }

  componentDidMount = () => {
    // Pulled in from usersReducer
    const {
      getUser,
      getUserClaps,
      getUserBookmarks,
      getUserComments,
      getUserFollowers,
      getUserFollowing,
      getUserStories
    } = this.props;

    // Mounts user data to component
    getUser();
    getUserClaps();
    getUserBookmarks();
    getUserComments();
    getUserFollowers();
    getUserFollowing();
    getUserStories();
  };

  /****** FOLLOWER MODAL ******/

  showFollowerModal = () => {
    this.setState({
      followerVisible: true
    });
  };

  handleOkFollower = event => {
    // console.log(event);
    this.setState({
      followerVisible: false
    });
  };

  handleCancelFollower = event => {
    // console.log(event);
    this.setState({
      followerVisible: false
    });
  };

  /****** FOLLOWER MODAL ******/

  /****** FOLLOWING MODAL ******/

  showFollowingModal = () => {
    this.setState({
      followingVisible: true
    });
  };

  handleOkFollowing = event => {
    // console.log(event);
    this.setState({
      followingVisible: false
    });
  };

  handleCancelFollowing = event => {
    // console.log(event);
    this.setState({
      followingVisible: false
    });
  };

  /****** FOLLOWING MODAL ******/

  render() {
    // console.log("props: ", this.props);

    const {
      user,
      claps,
      bookmarks,
      comments,
      followers,
      following,
      stories
    } = this.props.usersReducer;

    // // Rendering articles user has clapped on
    // const displayClappedArticles = claps.map((clap, i) => {
    //   return <ClapArticles uniqueKey={i} clap={clap} i={i} />;
    // });

    // // Rendering user's bookmarked articles
    // const displayBookmarks = bookmarks.map((bookmark, i) => {
    //   return <BookmarkArticles uniqueKey={i} bookmark={bookmark} i={i} />;
    // });

    // // Rendering user's comments on articles
    // const displayComments = comments.map((comment, i) => {
    //   return <CommentArticles uniqueKey={i} comment={comment} i={i} />;
    // });

    // // Rendering user's stories
    // const displayStories = stories.map((story, i) => {
    //   return <StoryArticles uniqueKey={i} story={story} i={i} />;
    // });

    // Displaying user's follower count
    let followerCount = 0;
    followers.forEach(follower => (followerCount += 1));

    // Rendering user's list of followers
    const displayFollowers = followers.map((follower, i) => {
      return <FollowerList uniqueKey={i} follower={follower} i={i} />;
    });

    // Displaying user's following count
    let followingCount = 0;
    following.forEach(following => (followingCount += 1));

    // Rendering user's following list
    const displayFollowing = following.map((followedUser, i) => {
      return <FollowingList uniqueKey={i} followedUser={followedUser} i={i} />;
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
          <div
            className="follow-display hover-cursor"
            onClick={this.showFollowerModal}
          >
            <h2>Followers</h2>
            <h2>{followerCount}</h2>
          </div>
          <div
            className="follow-display hover-cursor"
            onClick={this.showFollowingModal}
          >
            <h2>Following</h2>
            <h2>{followingCount}</h2>
          </div>
        </div>
        <UserNav />
        <div className="follower-modal">
          <Modal
            title="Followers"
            visible={this.state.followerVisible}
            onOk={this.handleOkFollower}
            onCancel={this.handleCancelFollower}
          >
            {followers[0] ? displayFollowers : "User has no follower :("}
          </Modal>
          <Modal
            title="Following"
            visible={this.state.followingVisible}
            onOk={this.handleOkFollowing}
            onCancel={this.handleCancelFollowing}
          >
            {following[0]
              ? displayFollowing
              : "User is not following anyone :("}
          </Modal>
        </div>
        <br />
        <br />
        {UserRoutes}
        {/* <Collapse bordered={false}>
          <Panel header="Stories" key="1">
            <div className="user-stories">
              {stories ? displayStories : "No stories to show :("}
            </div>
          </Panel>
          <Panel header="Article Claps" key="2">
            <div className="claps">
              {claps
                ? displayClappedArticles
                : "No clapped articles to show :("}
            </div>
          </Panel>
          <Panel header="Bookmarked Articles" key="3">
            <div className="bookmarks">
              {bookmarks ? displayBookmarks : "No bookmarks to show :("}
            </div>
          </Panel>
          <Panel header="User's Comments" key="4">
            <div className="comments">
              {comments ? displayComments : "No comments to show :("}
            </div>
          </Panel>
        </Collapse> */}
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
    getUserFollowers,
    getUserFollowing,
    getUserStories
  }
)(User);
