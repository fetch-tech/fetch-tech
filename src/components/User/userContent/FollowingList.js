import React, { Component } from "react";

class FollowingList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div key={this.props.uniqueKey}>
        <h3>{this.props.followedUser.username}</h3>
      </div>
    );
  }
}

export default FollowingList;
