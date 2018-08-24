import { Card, Spin } from "antd";
import axios from "axios";
import React, { Component } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import "./twitter.css";

class Twitter extends Component {
  constructor() {
    super();
    this.state = {
      tweets: [],
      loader: false
    };
  }
  componentDidMount() {
    axios.get(`/api/tweet`).then(response => {
      this.setState({ tweets: response.data.tweets });
      this.setState({ loader: true });
    });
  }
  waitFunc = () => {
    setTimeout(() => {
      this.setState({ loader: false });
    }, 5000);
  };

  render() {
    const { tweets, loader } = this.state;
    const tweetsDisplay = tweets.map((tweet, i) => {
      return (
        <div key={i}>
          <div>
            <TwitterTweetEmbed tweetId={tweet.id_str} />
            {loader && (
              <Card className="tweets-loader">
                <span style={{ textAlign: "center" }}>
                  <Spin />
                </span>
              </Card>
            )}
            {this.waitFunc()}
          </div>
        </div>
      );
    });

    return (
      <div className="tweets-wrapper display-dev-articles">{tweetsDisplay}</div>
    );
  }
}
export default Twitter;
