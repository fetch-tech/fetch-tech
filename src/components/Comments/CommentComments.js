import { Avatar, Input } from "antd";
import axios from "axios";
import React, { Component } from "react";
import "./comments.css";

class CommentComments extends Component {
  state = {
    reply: this.props.reply,
    comment: "",
    comments: [],
    commentId: this.props.comment.comment_id,
    userId: "google-oauth2|105906369999808829473",
    userProfilePic:
      "http://marketline.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
  };

  componentDidMount() {
    const { commentId } = this.state;
    axios
      .get(
        `http://localhost:3001/api/commentArticles/comment/comment/${commentId}`
      )
      .then(response => {
        this.setState({ comments: response.data.commentsComments });
      });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.reply !== this.props.reply) {
      this.setState({ reply: nextProps.reply });
    }
  }

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
      });
  };

  render() {
    const { comments } = this.state;
    const commentsDisplay = comments.length
      ? comments.map((comment, i) => {
          return (
            <div key={i} className="comments-children">
              <span style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ display: "flex" }}>
                  <Avatar src={comment.profile_pic} />
                  <span className="comment-display">
                    <span className="comments-username">
                      {comment.username}
                    </span>
                    {comment.comments_comment_text}
                  </span>
                </span>
                {this.state.reply && (
                  <form onSubmit={this.onCommentSubmit}>
                    <span style={{ display: "flex", marginTop: "10px" }}>
                      <Avatar src={this.state.userProfilePic} />
                      <Input
                        onChange={this.onInputChange}
                        placeholder="write a comment"
                        value={this.state.comment}
                      />
                    </span>
                  </form>
                )}
              </span>
            </div>
          );
        })
      : null;
    return <div>{commentsDisplay}</div>;
  }
}

export default CommentComments;
