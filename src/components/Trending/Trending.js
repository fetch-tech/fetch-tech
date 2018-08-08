import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Trending.css";

export default class Trending extends Component {
  //This component will hold Trending icon logic....
  render() {
    return (
      <div className="mainTrending">
        <div className="trending">
          {" "}
          {"<"}Trending{">"}
        </div>
        <Link to="/trends" className="trendingIcons">
          <div className="trending_img"> icons logic here </div>
        </Link>
        <div className="trending2">/Trending</div>
      </div>
    );
  }
}
