import { Avatar, Card, Input } from "antd";
import axios from "axios";
import React, { Component } from "react";
import CommentsComments from "./CommentComments";
import "./comments.css";

class Comments extends Component {
  state = {
    article: this.props.article,
    reply: false,
    url: this.props.url,
    desc: this.props.desc,
    comments: [],
    userProfilePic:
      "http://marketline.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
    articleId: null
  };

  checkOrAddComment = async () => {
    const articleId = await axios
      .post("http://localhost:3001/api/commentArticles/comment/", {
        url: this.state.url
      })
      .then(response => {
        response.data.article.length &&
          this.setState({ articleId: response.data.article[0].article_id });
      });
    const comments =
      this.state.articleId &&
      (await axios
        .get(
          `http://localhost:3001/api/comments/commentArticles/${
            this.state.articleId
          }`
        )
        .then(response => {
          this.setState({ comments: response.data.comments });
        }));
    return articleId;
  };

  componentDidMount() {
    this.checkOrAddComment();
  }

  onReplyClick = () => {
    this.setState({
      reply: !this.state.reply
    });
  };

  onInputChange = e => {
    this.setState({ comment: e.target.value });
  };

  onCommentSubmit = e => {
    e.preventDefault();
    const { article, comment } = this.state;
    axios
      .post("http://localhost:3001/api/comments/articles", {
        article,
        comment,
        userId: "google-oauth2|105906369999808829473"
      })
      .then(response => {
        this.checkOrAddComment(this.state.url);
      });

    this.setState({ comment: "" });
  };

  render() {
    const { reply, comments, article } = this.state;
    const commentsDisplay = comments.length
      ? comments.map((comment, i) => {
          return (
            <div key={i}>
              <span style={{ display: "flex" }}>
                <Avatar src={comment.profile_pic} />

                <span className="comment-display">
                  <span className="comments-username">{comment.username}</span>
                  {comment.comment_text}
                </span>
                {!this.state.reply ? (
                  <span
                    onClick={this.onReplyClick}
                    className="reply-comment-button"
                  >
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
              </span>
              <div>
                <CommentsComments comment={comment} reply={reply} />
              </div>
            </div>
          );
        })
      : null;
    return (
      <Card
        hoverable
        className="commentsWrapper"
        style={{ width: "42%", cursor: "default" }}
      >
        {commentsDisplay}
        <form onSubmit={this.onCommentSubmit}>
          <span style={{ display: "flex" }}>
            <Avatar src={this.state.userProfilePic} />
            <Input
              onChange={this.onInputChange}
              placeholder="write a comment"
              value={this.state.comment}
            />
          </span>
        </form>
      </Card>
    );
  }
}

export default Comments;
