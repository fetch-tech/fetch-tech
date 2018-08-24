import { Avatar, Input } from "antd";
import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../../redux/ducks/usersReducer";
import "./comments.css";

class SingleComment extends Component {
  state = {
    reply: false,
    comment: "",
    commentId: this.props.comment.comment_id,
    userId: "",
    comments: [],
    userProfilePic: ""
  };

  async componentDidMount() {
    const { commentId } = this.state;
    const { getUser } = this.props;
    await getUser();
    await this.setState({ userId: this.props.usersReducer.user.user_id });
    await this.setState({
      userProfilePic: this.props.usersReducer.user.profile_pic
    });
    await axios
      .get(
        `${
          process.env.REACT_APP_LOGIN
        }/api/commentArticles/comment/comment/${commentId}`
      )
      .then(response => {
        this.setState({ comments: response.data.commentsComments });
      });
  }

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
      .post(`/api/commentArticles/comment/comment`, {
        commentId,
        comment,
        userId
      })
      .then(response => {
        this.setState({ comment: "" });
        this.setState({
          comments: response.data.insertedComment
        });
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
              </span>
            </div>
          );
        })
      : null;
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

        <div>{commentsDisplay}</div>
        {this.state.reply && (
          <form onSubmit={this.onCommentSubmit}>
            <span
              style={{
                display: "flex",
                marginTop: "10px",
                marginBottom: "10px",
                marginLeft: 100,
                width: "inherit"
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

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  {
    getUser
  }
)(SingleComment);
