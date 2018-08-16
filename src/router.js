import React from "react";
import { Route, Switch } from "react-router-dom";
import DevTech from "./components/DevTech/DevTech";
import Entertainment from "./components/Entertainment/Entertainment";
import GenTech from "./components/GenTech/GenTech";
import Gif from "./components/Gif/Gif";
import User from "./components/User/User";
import GitHub_Repos from './components/GitHub_Repos/GitHub_Repos'

//import and route Followers & Following plus your bookmarks.

export default (
  <Switch>
    <Route exact component={GenTech} path="/" />
    <Route component={DevTech} path="/devtech" />
    <Route component={Entertainment} path="/entertainment" />
    <Route component={Gif} path="/gif" />
    <Route component={User} path="/user" />
    <Route component={GitHub_Repos} path='/githubrepos'/>
  </Switch>
);
