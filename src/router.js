import React from "react";
import GenTech from "./components/GenTech/GenTech";
import DevTech from "./components/DevTech/DevTech";

import { Switch, Route } from "react-router-dom";

//import and route Followers & Following plus your bookmarks.

export default (
  <Switch>
    <Route exact component={GenTech} path="/" />
    <Route exact component={DevTech} path="/devtech" />
  </Switch>
);
