import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
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
import Login from "./Login";
import store from "./redux/store";

const isAuthenticated = () => {
  const user = store.getState().usersReducer.user;
  return !!user.user_id;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        // window.location.assign('http://localhost:3001/login')
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      )
    }
  />
);

export default (
  <Switch>
    <Route path="/login" exact component={Login} />
    <PrivateRoute exact component={GenTech} path="/" />
    <Route component={DevTech} path="/devtech" />
    <PrivateRoute component={Entertainment} path="/entertainment" />
    <PrivateRoute component={Gif} path="/gif" />
    <PrivateRoute component={GitHub_Repos} path="/githubrepos" />
    <PrivateRoute path="/search/:search/:item" exact component={Search} />
    <PrivateRoute path="/user/claps/:userId" exact component={Claps} />
    <PrivateRoute path="/user/bookmarks/:userId" exact component={Bookmarks} />
    <PrivateRoute path="/user/following/:userId" exact component={Following} />
    <PrivateRoute path="/user/followers/:userId" exact component={Followers} />
  </Switch>
);
