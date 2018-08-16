import React, { Component } from "react";

class StoryArticles extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div key={this.props.uniqueKey}>
        <h3>{this.props.story.title}</h3>
        <p>{this.props.story.url}</p>
      </div>
    );
  }
}

export default StoryArticles;
