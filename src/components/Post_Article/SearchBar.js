import React, { Component } from "react";
import axios from "axios";
import data from "./data";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      filterString: ""
    };
  }

  handleFilterChange(filter) {
    this.setState({ filterString: filter });
  }
  render() {
    let displaySearched = data
      .filter((element, index) => {
        return `${element.firstName} ${element.lastName}`.includes(
          this.state.filterString // Dose first and last name include what the typed in ?
        );
      })
      .map((element, index) => {
        //if so, map over it.
        return (
          <h2 key={index}>{element.firstName + " " + element.lastName}</h2>
        );
      });

    return (
      <div>
        <input
          onChange={e => this.handleFilterChange(e.target.value)}
          type="text"
          placeholder="Search For..."
        />
        {displaySearched}
      </div>
    );
  }
}

export default SearchBar;
