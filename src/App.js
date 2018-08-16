import "antd/dist/antd.css";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import "./App.css";
import "./components/DevTech/devTech.css";
import "./components/Twitter/twitter.css";
import Navbar from "./components/Navbar/Navbar";
import store from "./redux/store";
import routes from "./router";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <React.Fragment>
            <Navbar />
            <div>{routes}</div>
          </React.Fragment>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
