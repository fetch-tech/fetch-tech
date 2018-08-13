import { Avatar, Input } from "antd";
import axios from "axios";
import React, { Component } from "react";
import "./comments.css";

export default class SingleComment extends Component {
  state = {
    reply: false,
    comment: "",
    commentId: this.props.comment.comment_id,
    userId: "google-oauth2|105906369999808829473",
    userProfilePic:
      "http://marketline.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
  };
  onReplyClick = () => {
    this.setState({ reply: !this.state.reply });
  };
  onInputChange = e => {
    this.setState({ comment: e.target.value });
  };
  onCommentSubmit = e => {
    e.preventDefault();
    const { commentId, comment, userId } = this.state;
    axios
      .post("http://localhost:3001/api/commentArticles/comment/comment", {
        commentId,
        comment,
        userId
      })
      .then(response => {
        console.log(response.data);
        this.setState({ comment: "" });
      });
  };
  render() {
    console.log(this.state.reply);
    return (
      <div>
        {!this.state.reply ? (
          <span onClick={this.onReplyClick} className="reply-comment-button">
            Reply
          </span>
        ) : (
          <span
            onClick={this.onReplyClick}
            className="reply-comment-button"
            style={{ color: "red", fontSize: "16px" }}
          >
            X
          </span>
        )}

        {this.props.children}
        {this.state.reply && (
          <form onSubmit={this.onCommentSubmit}>
            <span
              style={{
                display: "flex",
                marginTop: "10px",
                marginBottom: "10px",
                marginLeft: 100,
                width: 500
              }}
            >
              <Avatar src={this.state.userProfilePic} />
              <Input
                onChange={this.onInputChange}
                placeholder="write a Child comment"
                value={this.state.comment}
              />
            </span>
          </form>
        )}
      </div>
    );
  }
}
