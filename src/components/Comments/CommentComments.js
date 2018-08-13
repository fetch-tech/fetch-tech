import { Avatar } from "antd";
import axios from "axios";
import React, { Component } from "react";
import "./comments.css";

class CommentComments extends Component {
  state = {
    comments: [],
    commentId: this.props.comment.comment_id
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

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.reply !== this.props.reply) {
  //     this.setState({ reply: nextProps.reply });
  //   }
  // }

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
    return <div>{commentsDisplay}</div>;
  }
}

export default CommentComments;
