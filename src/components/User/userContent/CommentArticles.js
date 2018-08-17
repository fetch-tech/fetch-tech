import React, { Component } from "react";
import { connect } from "react-redux";

import { getUserComments } from "../../../redux/ducks/usersReducer";

class CommentArticles extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getUserComments } = this.props;

    getUserComments();
  }

  render() {
    const { comments } = this.props.usersReducer;

    const displayComments = comments.map((comment, i) => {
      return (
        <div key={i}>
          <h3>{comment.title}</h3>
          <p>{comment.comment_text}</p>
          <p>{comment.url}</p>
        </div>
      );
    });

    return (
      <div>
        {comments[0]
          ? displayComments
          : "User has not commented on any articles :("}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { getUserComments }
)(CommentArticles);
