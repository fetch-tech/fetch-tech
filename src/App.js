import React, { Component } from "react";

import "./App.css";
import "./components/Post_Article/post_article.css";

import Post_Article from "./components/Post_Article/Post_Article";

class App extends Component {
  render() {
    return (
      <div>
        <Post_Article />
      </div>
    );
  }
}

export default App;
