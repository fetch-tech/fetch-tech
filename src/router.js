import React from "react";
import GenTech from "./components/GenTech/GenTech";
import DevTech from "./components/DevTech/DevTech";
import Entertainment from "./components/Entertainment/Entertainment";
import Gif from "./components/Gif/Gif";
import User from "./components/User/User";

import { Switch, Route } from "react-router-dom";

//import and route Followers & Following plus your bookmarks.

export default (
  <Switch>
    <Route exact component={GenTech} path="/" />
    <Route component={DevTech} path="/devtech" />
    <Route component={Entertainment} path="/entertainment" />
    <Route component={Gif} path="/gif" />
    <Route component={User} path="/user" />
  </Switch>
);
