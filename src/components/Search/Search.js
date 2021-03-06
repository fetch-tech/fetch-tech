import { Card, Spin } from "antd";
import axios from "axios";
import React, { Component } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Article from "../Article/Article";
import "../GenTech/genTech.css";
import Stories from "../Stories/Stories";

class Search extends Component {
  state = {
    articles: [],
    tweets: [],
    loader: false
  };

  componentDidMount() {
    this.setState({ loader: true });
    const url = this.props.match.url;
    if (this.props.match.params.search === "twitter") {
      axios.get(`/api${url}`).then(response => {
        this.setState({ tweets: response.data.tweets.statuses });
      });
    } else {
      axios.get(`/api${url}`).then(response => {
        this.setState({ articles: response.data.articles.articles });
      });
    }
  }

  render() {
    const noImage =
      "http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg";
    const { articles, tweets } = this.state;
    const tweetsDisplay = tweets.map((tweet, i) => {
      return (
        <div style={{ margin: "0 auto" }} key={i}>
          <div
            style={{
              margin: "0 auto"
            }}
          >
            <TwitterTweetEmbed tweetId={tweet.id_str} />
            {this.state.loader && (
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
    const articleDisplay = articles.map((article, i) => {
      return (
        // <div className="wrapper" key={i}>
        //   <div style={{ display: "flex" }}>
        //     <Card
        //       hoverable
        //       style={{
        //         marginLeft: 371,
        //         width: 800,
        //         marginTop: 5,
        //         display: "flex"
        //       }}
        //     >
        //       <div className="articleWrapper">
        //         <div
        //           style={{ display: "flex", justifyContent: "space-between" }}
        //         >
        //           <div style={{ display: "flex" }}>
        //             <img
        //               className="urlToImage"
        //               src={article.urlToImage}
        //               alt=""
        //             />
        //             <div className="aricle-center">
        //               <h2>{article.title}</h2>
        //               <div style={{ fontSize: "16px" }}>
        //                 {article.description}
        //               </div>
        //               <div className="article-bottom">
        //                 <div className="source">{article.source.name}</div>
        //               </div>
        //               <a target="_blank" href={article.url} target="_blank">
        //                 <Button>
        //                   Read
        //                   <Icon type="right" />
        //                 </Button>
        //               </a>
        //             </div>
        //           </div>
        //           <div className="article-sidebar" />
        //         </div>
        //       </div>
        //     </Card>
        //     <span style={{ marginRight: 270 }}>
        //       <Claps article={article} url={article.url} />
        //       <span style={{ margin: 10 }}>
        //         <Bookmark article={article} url={article.url} />
        //       </span>
        //       <span style={{ margin: 10 }}>
        //         <AddToStories article={article} url={article.url} />
        //       </span>
        //     </span>
        //   </div>
        //   <Comments
        //     article={article}
        //     url={article.url}
        //     desc={article.description}
        //   />
        // </div>
        <div>
          <Article article={article} i={i} noImage={noImage} />
        </div>
      );
    });

    return (
      <div className="parentWrapper">
        <Stories />
        <div className="genNewsWrapper">
          {this.state.articles.length > 0 ? articleDisplay : tweetsDisplay}
        </div>
      </div>
    );
  }
}

export default Search;
