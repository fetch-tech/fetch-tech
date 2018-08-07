<<<<<<< HEAD
import React, { Component } from "react";

import "./App.css";
import "./components/Post_Article/post_article.css";

import Post_Article from "./components/Post_Article/Post_Article";
import SearchBar from "./components/Post_Article/SearchBar";
=======
import React, { Component } from 'react';

import { Provider } from 'react-redux';
import {HashRouter} from "react-router-dom";
import store from './redux/store';
import routes from './router';


import './App.css';
>>>>>>> master

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div>
        <Post_Article />
        <SearchBar />
      </div>
=======


      <Provider store={ store }>
      <HashRouter>
        <div className="App">
         <div>{routes}</div>
        </div>
        </HashRouter>
      </Provider>

>>>>>>> master
    );
  }
}

export default App;
