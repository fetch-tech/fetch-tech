import { Avatar, Input } from "antd";
import React, { Component } from "react";
import "./comments.css";

class CommentComments extends Component {
  state = {
    reply: this.props.reply
  };
  render() {
    console.log(this.props);
    return (
      <div className="comments-children">
        <span style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ display: "flex" }}>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <span className="comment-display">
              <span className="comments-username">User</span>
              Child Comments
            </span>
          </span>
          {this.state.reply && (
            <Input
              style={{ width: 400, marginTop: "20px", marginLeft: "40px" }}
              placeholder="Comment On Comment"
            />
          )}
        </span>
      </div>
    );
  }
}

export default CommentComments;
