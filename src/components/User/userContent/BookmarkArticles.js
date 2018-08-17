import React, { Component } from "react";
import { connect } from "react-redux";

import { getUserBookmarks } from "../../../redux/ducks/usersReducer";

/*
 *  This component displays the current user's bookmarks
 *  Retrieves user's bookmarks from database
 *  If user has no bookmarks, a default message is displayed instead
 */

class BookmarkArticles extends Component {
  constructor(props) {
    super(props);
  }

  // Retrieves user's bookmarks from redux
  componentDidMount() {
    const { getUserBookmarks } = this.props;

    getUserBookmarks();
  }

  render() {
    const { bookmarks } = this.props.usersReducer;

    // Display template for user's bookmarks
    const displayBookmarks = bookmarks.map((bookmark, i) => {
      return (
        <div key={i}>
          <h3>{bookmark.title}</h3>
          <p>{bookmark.url}</p>
        </div>
      );
    });

    // If user has bookmarks, display them
    // Otherwise, display default message
    return (
      <div>
        {bookmarks[0]
          ? displayBookmarks
          : "User does not have any bookmarks :("}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { getUserBookmarks }
)(BookmarkArticles);
