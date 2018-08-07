import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import SearchBar from "./SearchBar";
import AddPost from "./AddPost";

const options = [
  { value: "one", label: "One" },
  { value: "two", label: "Two" }
];

class NewPost extends Component {
  constructor() {
    super();
    this.state = {
      newPost: "",
      selectedCategory: null,
      selectedSub: null,
      selectedMini: null,
      visible: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleSelectChange = e => {
    const { name } = e.value;
    this.setState({ [name]: name });
  };
  handleToggle() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const { selectedCategory, visible, selectedSub, selectedMini } = this.state;

    return (
      <div>
        <button onClick={this.handleToggle} className="toggle-btn">
          +
        </button>

        {visible && ( // && when true, display <Select />
          <form className="div-form ">
            <input className="url-box" type="text" placeholder="URL" />

            <Select
              className="select-box"
              name={selectedCategory}
              onChange={this.handleSelectChange}
              type="text"
              placeholder="Categories"
              options={options}
            />

            <Select
              className="select-box"
              name={selectedSub}
              onChange={this.handleSelectChange}
              type="text"
              placeholder="Sub Categories"
              options={options}
              name="sub"
            />
            <Select
              className="select-box"
              name={selectedMini}
              onChange={this.handleSelectChange}
              type="text"
              placeholder="Mini Categories"
              options={options}
              name="mini"
            />
          </form>
        )}
        <AddPost />
        <br />
        <br />
        <SearchBar />
      </div>
    );
  }
}
NewPost.propTypes = {
  options: PropTypes.array.isRequired
};

export default NewPost;
