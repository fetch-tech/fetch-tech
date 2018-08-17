import React, { Component } from "react";
import { connect } from "react-redux";

import { getUserStories } from "../../../redux/ducks/usersReducer";

/*
 *  This component displays the current user's stories
 *  Retrieves user's stories from database
 *  If user has no stories, a default message is displayed instead
 */

class StoryArticles extends Component {
  constructor(props) {
    super(props);
  }

  // Retrieves user's stories from redux
  componentDidMount() {
    const { getUserStories } = this.props;

    getUserStories();
  }

  render() {
    // console.log("props: ", this.props);

    const { stories } = this.props.usersReducer;

    // Display template for user's stories
    const displayStories = stories.map((story, i) => {
      return (
        <div key={i}>
          <h3>{story.title}</h3>
          <p>{story.url}</p>
        </div>
      );
    });

    // If user has stories, display them
    // Otherwise, display default message
    return (
      <div className="new-stories">
        {stories[0] ? displayStories : "No stories to show :("}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { getUserStories }
)(StoryArticles);
