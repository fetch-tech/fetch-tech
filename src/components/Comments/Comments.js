import { Avatar, Card, Input } from "antd";
import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../../redux/ducks/usersReducer";
import "./comments.css";
import SingleComment from "./SingleComment";

class Comments extends Component {
  state = {
    article: this.props.article,
    reply: false,
    url: this.props.url,
    desc: this.props.desc,
    comments: [],
    userId: "",
    userProfilePic: "",
    articleId: null
  };

  checkOrAddComment = async () => {
    const articleId = await axios
      .post(`/api/commentArticles/comment/`, {
        url: this.state.url
      })
      .then(response => {
        response.data.article.length &&
          this.setState({ articleId: response.data.article[0].article_id });
      });
    const comments =
      this.state.articleId &&
      (await axios
        .get(`/api/comments/commentArticles/${this.state.articleId}`)
        .then(response => {
          this.setState({ comments: response.data.comments });
        }));
    return articleId;
  };

  async componentDidMount() {
    const { getUser } = this.props;
    await getUser();
    await this.setState({ userId: this.props.usersReducer.user.user_id });
    await this.setState({
      userProfilePic: this.props.usersReducer.user.profile_pic
    });
    await this.checkOrAddComment();
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
    const { article, comment, userId } = this.state;
    axios
      .post(`/api/comments/articles`, {
        article,
        comment,
        userId
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
              </span>
              <div>
                <SingleComment comment={comment} />
              </div>
            </div>
          );
        })
      : null;

    return (
      <Card hoverable className="commentsWrapper">
        <div className="display-comments">{commentsDisplay}</div>
        <form className="commentForm" onSubmit={this.onCommentSubmit}>
          <span style={{ display: "flex", margin: "10px" }}>
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

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  {
    getUser
  }
)(Comments);
