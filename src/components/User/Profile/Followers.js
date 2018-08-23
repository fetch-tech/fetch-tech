import { Avatar, Card } from "antd";
import axios from "axios";
import React, { Component } from "react";
import "./profile.css";
import UserProfile from "./UserProfile";

export default class Following extends Component {
  state = {
    viewUserId: "",
    following: []
  };
  async componentDidMount() {
    await this.setState({ viewUserId: this.props.match.params.userId });
    await axios
      .post(`http://localhost:3001/api/users/followers/`, {
        userId: this.state.viewUserId
      })
      .then(res => {
        this.setState({ following: res.data.users });
      });
  }
  render() {
    const { following } = this.state;
    console.log(following);
    const followersDisplay = following.map((user, i) => {
      return (
        <div key={i}>
          <Card className="follow-card-body">
            <div className="user-following">
              <Avatar src={user.profile_pic} size={64} icon="user" />
              <div className="follow-name">
                <h1>{user.username}</h1>
              </div>
            </div>
          </Card>
        </div>
      );
    });
    return (
      <div className="user-page-follow">
        <div>
          <UserProfile />
        </div>
        <div className="display-following">{followersDisplay}</div>
      </div>
    );
  }
}
