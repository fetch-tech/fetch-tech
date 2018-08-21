import "antd/dist/antd.css";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./components/DevTech/devTech.css";
import Navbar from "./components/Navbar/Navbar";
import "./components/Twitter/twitter.css";
import store from "./redux/store";
import routes from "./router";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <Navbar />

            <div>{routes}</div>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
