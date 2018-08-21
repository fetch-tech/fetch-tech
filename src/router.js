import React from "react";
import { Route, Switch } from "react-router-dom";
import DevTech from "./components/DevTech/DevTech";
import Entertainment from "./components/Entertainment/Entertainment";
import GenTech from "./components/GenTech/GenTech";
import Gif from "./components/Gif/Gif";
import GitHub_Repos from "./components/GitHub_Repos/GitHub_Repos";
import Search from "./components/Search/Search";
import Bookmarks from "./components/User/Profile/Bookmarks";
import Claps from "./components/User/Profile/Claps";
import Followers from "./components/User/Profile/Followers";
import Following from "./components/User/Profile/Following";

export default (
  <Switch>
    <Route exact component={GenTech} path="/" />
    <Route component={DevTech} path="/devtech" />
    <Route component={Entertainment} path="/entertainment" />
    <Route component={Gif} path="/gif" />
    <Route component={GitHub_Repos} path="/githubrepos" />
    <Route path="/search/:search/:item" exact component={Search} />
    <Route path="/user/claps/:userId" exact component={Claps} />
    <Route path="/user/bookmarks/:userId" exact component={Bookmarks} />
    <Route path="/user/following/:userId" exact component={Following} />
    <Route path="/user/followers/:userId" exact component={Followers} />
  </Switch>
);
