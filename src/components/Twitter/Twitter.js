import React, { Component } from "react";
import axios from "axios";

class Twitter extends Component {
  constructor() {
    super();
    this.state = {
      twitterJS: [],
      twitterReact: [],
      twitterRedux: [],
      twitterVue: [],
      twitterAngular: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:3001/api/tweet/javascript").then(response => {
      this.setState({ twitterJS: response.data });
    });
    axios.get("http://localhost:3001/api/tweet/react").then(response => {
      this.setState({ twitterReact: response.data });
      console.log("----->", this.state.twitterReact);
    });
    axios.get("http://localhost:3001/api/tweet/redux").then(response => {
      this.setState({ twitterRedux: response.data });
    });
    axios.get("http://localhost:3001/api/tweet/redux").then(response => {
      this.setState({ twitterVue: response.data });
    });
    axios.get("http://localhost:3001/api/tweet/redux").then(response => {
      this.setState({ twitterAngular: response.data });
      console.log("----->", this.state.twitterAngular);
    });
  }

  addFavorite = () => {};

  render() {
    // -----------------JavaScript-----------------------
    const { twitterJS } = this.state;
    const displayTweet = twitterJS.map((tweet, index) => {
      return (
        <div key={index} className="tweet-wrapper">
          <span class="first">
            {tweet.user.name}
            <span class="icon-edit new" />
          </span>
          <ul class="timeline">
            <li>
              <div class="avatar">
                <img src={tweet.user.profile_image_url_https} />
                <div class="hover">
                  <div class="icon-twitter" />
                </div>
              </div>
              <div class="bubble-container">
                <div class="bubble">
                  <div class="retweet">
                    <div class="icon-retweet" />
                  </div>
                  <h3>@{tweet.user.screen_name}</h3>
                  <br />
                  {tweet.text}
                  <div class="over-bubble">
                    <div class="icon-mail-reply action" />
                    <div class="icon-retweet action" />
                    <div class="icon-star" />
                  </div>
                </div>

                <div class="arrow" />
              </div>
            </li>
          </ul>
        </div>
      );
    });
    // ------------------React---------------------

    const { twitterReact } = this.state;

    const displayReactTweet = twitterReact.map((reactTweet, index) => {
      return (
        <div key={index} className="tweet-wrapper">
          <span class="first">
            {reactTweet.user.name}
            <span class="icon-edit new" />
          </span>
          <ul class="timeline">
            <li>
              <div class="avatar">
                <img src={reactTweet.user.profile_image_url_https} />
                <div class="hover">
                  <div class="icon-twitter" />
                </div>
              </div>
              <div class="bubble-container">
                <div class="bubble">
                  <div class="retweet">
                    <div class="icon-retweet" />
                  </div>
                  <h3>@{reactTweet.user.screen_name}</h3>
                  <br />
                  {reactTweet.text}
                  <div class="over-bubble">
                    <div class="icon-mail-reply action" />
                    <div class="icon-retweet action" />
                    <div class="icon-star" />
                  </div>
                </div>

                <div class="arrow" />
              </div>
            </li>
          </ul>
        </div>
      );
    });

    // ------------------Redux---------------------
    const { twitterRedux } = this.state;

    const displayReduxTweet = twitterRedux.map((tweetRedux, index) => {
      return (
        <div key={index} className="tweet-wrapper">
          <span class="first">
            {tweetRedux.user.name}
            <span class="icon-edit new" />
          </span>
          <ul class="timeline">
            <li>
              <div class="avatar">
                <img src={tweetRedux.user.profile_image_url_https} />
                <div class="hover">
                  <div class="icon-twitter" />
                </div>
              </div>
              <div class="bubble-container">
                <div class="bubble">
                  <div class="retweet">
                    <div class="icon-retweet" />
                  </div>
                  <h3>@{tweetRedux.user.screen_name}</h3>
                  <br />
                  {tweetRedux.text}
                  <div class="over-bubble">
                    <div class="icon-mail-reply action" />
                    <div class="icon-retweet action" />
                    <div class="icon-star" />
                  </div>
                </div>

                <div class="arrow" />
              </div>
            </li>
          </ul>
        </div>
      );
    });

    // ------------------Vue---------------------

    const { twitterVue } = this.state;

    const displayvueTweet = twitterVue.map((tweetVue, index) => {
      return (
        <div key={index} className="tweet-wrapper">
          <span class="first">
            {tweetVue.user.name}
            <span class="icon-edit new" />
          </span>
          <ul class="timeline">
            <li>
              <div class="avatar">
                <img src={tweetVue.user.profile_image_url_https} />
                <div class="hover">
                  <div class="icon-twitter" />
                </div>
              </div>
              <div class="bubble-container">
                <div class="bubble">
                  <div class="retweet">
                    <div class="icon-retweet" />
                  </div>
                  <h3>@{tweetVue.user.screen_name}</h3>
                  <br />
                  {tweetVue.text}
                  <div class="over-bubble">
                    <div class="icon-mail-reply action" />
                    <div class="icon-retweet action" />
                    <div class="icon-star" />
                  </div>
                </div>

                <div class="arrow" />
              </div>
            </li>
          </ul>
        </div>
      );
    });
    // ------------------Angular---------------------
    const { twitterAngular } = this.state;

    const displayAngular = twitterAngular.map((tweetAnglular, index) => {
      return (
        <div key={index} className="tweet-wrapper">
          <span class="first">
            {tweetAnglular.user.name}
            <span class="icon-edit new" />
          </span>
          <ul class="timeline">
            <li>
              <div class="avatar">
                <img src={tweetAnglular.user.profile_image_url_https} />
                <div class="hover">
                  <div class="icon-twitter" />
                </div>
              </div>
              <div class="bubble-container">
                <div class="bubble">
                  <div class="retweet">
                    <div class="icon-retweet" />
                  </div>
                  <h3>@{tweetAnglular.user.screen_name}</h3>
                  <br />
                  {tweetAnglular.text}
                  <div class="over-bubble">
                    <div class="icon-mail-reply action" />
                    <div class="icon-retweet action" />
                    <div class="icon-star" />
                  </div>
                </div>

                <div class="arrow" />
              </div>
            </li>
          </ul>
        </div>
      );
    });

    return (
      <div>
        <h3 className="tweet-text">JavaScript Trending Tweet</h3> <br />
        <hr className="hr" />
        {displayTweet}
        <h3 className="tweet-text">React Trending Tweet</h3> <br />
        <hr className="hr" />
        {displayReactTweet}
        <h3 className="tweet-text">Redux Trending Tweet</h3> <br />
        <hr className="hr" />
        {displayReduxTweet}
        <h3 className="tweet-text">Vue Trending Tweet</h3> <br />
        <hr className="hr" />
        {displayvueTweet}
        <h3 className="tweet-text">Angular Trending Tweet</h3> <br />
        <hr className="hr" />
        {displayAngular}
      </div>
    );
  }
}
export default Twitter;
