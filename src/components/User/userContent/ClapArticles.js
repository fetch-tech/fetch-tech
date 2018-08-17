import React, { Component } from "react";
import { connect } from "react-redux";

import { getUserClaps } from "../../../redux/ducks/usersReducer";

class ClapArticles extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getUserClaps } = this.props;

    getUserClaps();
  }

  render() {
    const { claps } = this.props.usersReducer;

    const displayClaps = claps.map((clap, i) => {
      return (
        <div key={i}>
          <h3>{clap.title}</h3>
          <p>Claps given: {clap.number}</p>
          <p>{clap.url}</p>
        </div>
      );
    });

    return (
      <div key={this.props.uniqueKey}>
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
