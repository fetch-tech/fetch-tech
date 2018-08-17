import React from "react";
import { Route, Switch } from "react-router-dom";
import StoryArticles from "../userContent/StoryArticles";
import ClapArticles from "../userContent/ClapArticles";
import BookmarkArticles from "../userContent/BookmarkArticles";
import CommentArticles from "../userContent/CommentArticles";

/****** ROUTES FOR USERNAV COMPONENT ******/

export default (
  <Switch>
    <Route component={StoryArticles} path="/user/stories" />
    <Route component={ClapArticles} path="/user/claps" />
    <Route component={BookmarkArticles} path="/user/bookmarks" />
    <Route component={CommentArticles} path="/user/comments" />
  </Switch>
);
