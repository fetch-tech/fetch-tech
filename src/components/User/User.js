import { Collapse, Modal } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getUser,
  getUserFollowers,
  getUserFollowing
} from "../../redux/ducks/usersReducer";
import "./user.css";
import FollowerList from "./userContent/FollowerList";
import FollowingList from "./userContent/FollowingList";
import UserNav from "./UserNav/UserNav";
import UserRoutes from "./UserRoutes/UserRoutes";

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
    const { getUser, getUserFollowers, getUserFollowing } = this.props;

    // Mounts user data to component
    getUser();
    getUserFollowers();
    getUserFollowing();
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

    const { user, followers, following } = this.props.usersReducer;

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
            <a href="http://localhost:3001/login">Login</a>
            {/* <a href={process.env.REACT_APP_LOGIN}>Login</a> */}
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
    getUserFollowers,
    getUserFollowing
  }
)(User);
