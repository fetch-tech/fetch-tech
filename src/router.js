import React from "react";
import Gen_Tech from "./components/Gen_Tech/Gen_Tech";
import Dev_Tech from "./components/Dev_Tech/Dev_Tech";
import Fun_Tech from "./components/Fun_Tech/Fun_Tech";
import Profile from "./components/Profile/Profile";

import { Switch, Route } from "react-router-dom";

//import and route Followers & Following plus your bookmarks. 

export default (
  <Switch>
    
    <Route  exact component={Gen_Tech} path="/" />
    <Route component={Dev_Tech} path="/devtech" />
    <Route component={Fun_Tech} path="/funtech" />
 
    <Route component={Profile} path="/profile" />
  </Switch>
);
