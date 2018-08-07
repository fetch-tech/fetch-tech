import React, { Component } from "react";
import axios from "axios";

const { API_KEY } = process.env;
const API_URL = "http://api.musicgraph.com/api/v2/artist/suggest";

class Search extends Component {
  state = {
    query: "",
    results: []
  };

  getInfo = () => {
    axios.get(`https://swapi.co/api/people/1`).then(({ results }) => {
      this.setState({
        results: results.data
      });
    });
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo();
          }
        }
      }
    );
  };

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </form>
    );
  }
}

export default Search;
