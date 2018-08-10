import React, { Component } from "react";
import ClapComponent from "react-clap-button";

class Claps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      children: null
    };
  }

  handleClapChange = (newClapCount, diff) => {
    this.setState({
      clapsCount: newClapCount,
      totalClapCount: this.state.totalClapCount + diff
    });
  };

  onClap = () => {
    this.setState({ author: this.props.clapped });
    // console.log(this.props.clapped);
  };

  render() {
    console.log(this.state.author);
    return (
      <div onClick={this.onClap}>
        <ClapComponent
          maxCount={10}
          theme={{
            secondaryColor: "#0b7fc6"
          }}
          children={this.state.children}
        />
      </div>
    );
  }
}
export default Claps;
