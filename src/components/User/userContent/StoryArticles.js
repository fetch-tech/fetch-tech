import React, { Component } from "react";
import { connect } from "react-redux";

import { getUserStories } from "../../../redux/ducks/usersReducer";

class StoryArticles extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getUserStories } = this.props;

    getUserStories();
  }

  render() {
    // console.log("props: ", this.props);

    const { stories } = this.props.usersReducer;

    const displayStories = stories.map((story, i) => {
      return (
        <div key={i}>
          <h3>{story.title}</h3>
          <p>{story.url}</p>
        </div>
      );
    });

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
