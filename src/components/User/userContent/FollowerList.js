import React, { Component } from "react";

class FollowerList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div key={this.props.uniqueKey}>
        <h3>{this.props.follower.username}</h3>
      </div>
    );
  }
}

export default FollowerList;
