import React, { Component } from "react";
import { connect } from "react-redux";

import { getUserComments } from "../../../redux/ducks/usersReducer";

/*
 *  This component displays the current user's comments
 *  Retrieves user's comments from database
 *  If user has no comments, a default message is displayed instead
 */

class CommentArticles extends Component {
  constructor(props) {
    super(props);
  }

  // Retrieves user's comments from redux
  componentDidMount() {
    const { getUserComments } = this.props;

    getUserComments();
  }

  render() {
    const { comments } = this.props.usersReducer;

    // Display template for user's comments
    const displayComments = comments.map((comment, i) => {
      return (
        <div key={i}>
          <h3>{comment.title}</h3>
          <p>{comment.comment_text}</p>
          <p>{comment.url}</p>
        </div>
      );
    });

    // If user has comments, display them
    // Otherwise, display default message
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
