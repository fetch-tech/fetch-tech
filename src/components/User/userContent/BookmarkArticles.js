import React, { Component } from "react";
import { connect } from "react-redux";

import { getUserBookmarks } from "../../../redux/ducks/usersReducer";

class BookmarkArticles extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getUserBookmarks } = this.props;

    getUserBookmarks();
  }

  render() {
    const { bookmarks } = this.props.usersReducer;

    const displayBookmarks = bookmarks.map((bookmark, i) => {
      return (
        <div key={i}>
          <h3>{bookmark.title}</h3>
          <p>{bookmark.url}</p>
        </div>
      );
    });

    return (
      <div key={this.props.uniqueKey}>
        {bookmarks[0]
          ? displayBookmarks
          : "User does not have any bookmarks :("}
      </div>
    );
  }
}

const mapStateToProp = state => {
  return state;
};

export default connect(
  mapStateToProp,
  { getUserBookmarks }
)(BookmarkArticles);
