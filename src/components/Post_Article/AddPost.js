import React, { Component } from "react";

class AddPost extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      posts: []
    };
  }
  handleInputChange = value => {
    this.setState({ input: value });
  };
  handleListChange = () => {
    this.setState({
      posts: [...this.state.posts, this.state.input],
      input: ""
    });
  };
  render() {
    let posts = this.state.posts.map((element, index) => {
      return <h3 key={index}> {element} </h3>;
    });
    return (
      <div>
        <input
          value={this.state.input}
          onChange={e => this.handleInputChange(e.target.value)}
          placeholder="Type here..."
        />
        <button onClick={this.handleListChange}>Post</button>
        {posts}
      </div>
    );
  }
}
export default AddPost;
