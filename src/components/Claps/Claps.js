import React, { Component } from "react";
import ClapComponent from "react-clap";

class Clap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clapsCount: 0,
      totalClapCount: 20
    };
  }

  handleClapChange = (newClapCount, diff) => {
    this.setState({
      clapsCount: newClapCount,
      totalClapCount: this.state.totalClapCount + diff
    });
  };

  render() {
    return (
      <div>
        <ClapComponent
          popupClapCount={this.state.clapsCount}
          maxClapCount={20}
          onChange={this.handleClapChange}
        />
      </div>
    );
  }
}
export default Clap;
