import React, { Component } from "react";
import { connect } from "react-redux";

import { getUserClaps } from "../../../redux/ducks/usersReducer";

/*
 *  This component displays the current user's claps
 *  Retrieves user's claps from database
 *  If user has no claps, a default message is displayed instead
 */

class ClapArticles extends Component {
  constructor(props) {
    super(props);
  }

  // Retrieves user's claps from redux
  componentDidMount() {
    const { getUserClaps } = this.props;

    getUserClaps();
  }

  render() {
    const { claps } = this.props.usersReducer;

    // Display template for user's claps
    const displayClaps = claps.map((clap, i) => {
      return (
        <div key={i}>
          <h3>{clap.title}</h3>
          <p>Claps given: {clap.number}</p>
          <p>{clap.url}</p>
        </div>
      );
    });

    // If user has claps, display them
    // Otherwise, display default message
    return (
      <div>
        {claps[0] ? displayClaps : "User has not clapped for any articles :("}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { getUserClaps }
)(ClapArticles);
