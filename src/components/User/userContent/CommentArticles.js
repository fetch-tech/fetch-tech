import React, { Component } from "react";

class CommentArticles extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div key={this.props.uniqueKey}>
        <h3>{this.props.comment.title}</h3>
        <p>{this.props.comment.comment_text}</p>
        <p>{this.props.comment.url}</p>
      </div>
    );
  }
}

export default CommentArticles;
