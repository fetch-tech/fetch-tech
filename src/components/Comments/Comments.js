import { Avatar, Card, Input } from "antd";
import React, { Component } from "react";
import CommentsComments from "./CommentComments";
import "./comments.css";

class Comments extends Component {
  state = {
    reply: false
  };
  onReplyClick = () => {
    this.setState({
      reply: !this.state.reply
    });
  };

  render() {
    return (
      <React.Fragment>
        <Card
          hoverable
          className="commentsWrapper"
          style={{ width: "42%", cursor: "default" }}
        >
          <span style={{ display: "flex" }}>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />

            <span className="comment-display">
              <span className="comments-username">User</span>
              These are comments These are comments
            </span>
            <span className="reply-comment-button">Reply</span>
          </span>
          <div>
            <CommentsComments />
          </div>

          <span style={{ display: "flex" }}>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />

            <span className="comment-display">
              <span className="comments-username">User</span>
              These are comments These are comments
            </span>
            <span onClick={this.onReplyClick} className="reply-comment-button">
              Reply
            </span>
          </span>
          <div>
            <CommentsComments reply={this.state.reply} />
          </div>
          <span style={{ display: "flex" }}>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Input placeholder="write a comment" />
          </span>
        </Card>
      </React.Fragment>
    );
  }
}

export default Comments;
