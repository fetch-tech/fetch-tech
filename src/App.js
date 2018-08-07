import React, { Component } from "react";

import "./App.css";
import "./components/Post_Article/post_article.css";

import Post_Article from "./components/Post_Article/Post_Article";
import SearchBar from "./components/Post_Article/SearchBar";

class App extends Component {
  render() {
    return (
      <div>
        <Post_Article />
        <SearchBar />
      </div>
    );
  }
}

export default App;
