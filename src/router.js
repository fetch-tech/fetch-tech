import React from "react";
import GenTech from "./components/GenTech/GenTech";
import DevTech from "./components/DevTech/DevTech";
import Entertainment from "./components/Entertainment/Entertainment";
import Gif from "./components/Gif/Gif";

import { Switch, Route } from "react-router-dom";

//import and route Followers & Following plus your bookmarks.

export default (
  <Switch>
    <Route component={Gif} path="/gif" />
    <Route exact component={Entertainment} path="/entertainment" />
    <Route exact component={GenTech} path="/" />
    <Route component={DevTech} path="/devtech" />
    </Switch>
);
