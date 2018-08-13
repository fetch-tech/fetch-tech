import React, { Component } from "react";

class BookmarkArticles extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div key={this.props.uniqueKey}>
        <h3>{this.props.bookmark.title}</h3>
        <p>{this.props.bookmark.url}</p>
      </div>
    );
  }
}

export default BookmarkArticles;
