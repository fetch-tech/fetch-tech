import React, { Component } from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import "antd/dist/antd.css";
import store from "./redux/store";
import routes from "./router";
import Navbar from "./components/Navbar/Navbar";
import DevTech from "./components/DevTech/DevTech";
import "./components/DevTech/devTech.css";

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
