import React, { Component } from "react";

class ClapArticles extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div key={this.props.uniqueKey}>
        <h3>{this.props.clap.title}</h3>
        <p>Claps given: {this.props.clap.number}</p>
        <p>{this.props.clap.url}</p>
      </div>
    );
  }
}

export default ClapArticles;
