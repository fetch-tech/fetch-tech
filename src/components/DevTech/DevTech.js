import { Button, Card, Icon } from "antd";
import axios from "axios";
import React, { Component } from "react";
import GitHub_Repos from "../GitHub_Repos/GitHub_Repos";
import Twitter from "../Twitter/Twitter";
import Claps from "../Claps/Claps";
import Bookmark from "../Bookmark/Bookmark";
import AddToStories from "../Stories/AddToStories";
import "./devTech.css";

export default class DevTech extends Component {
  constructor() {
    super();
    this.state = {
      devArticles: []
    };
  }
  componentDidMount() {
    axios.get("/api/home/articles/dev").then(response => {
      this.setState({ devArticles: response.data.articles.articles });
    });
  }

  render() {
    const noImage =
      "http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg";

    const { devArticles } = this.state;

    const displayDevArticle = devArticles.map((devArticle, d) => {
      return (
        <div className="line-tech" key={d}>
          <div className="dev-card">
            <Card
              className="devCard"
              hoverable
              key={devArticle.urlToImage}
              // style={{
              //   marginLeft: 80,
              //   marginRight: 80,
              //   marginTop: 5,
              //   display: "flex"
              // }}
            >
              <div className="articleWrapper ">
                <img
                  className="urlToImage"
                  src={devArticle.urlToImage ? devArticle.urlToImage : noImage}
                  alt=""
                />

                <div className="aricle-center">
                  <h2>{devArticle.title}</h2>
                  <div className="devArticleDescript">
                    {devArticle.description}
                  </div>
                </div>
                <div className="article-bottom">
                  <div>
                    <div className="source">{devArticle.author}</div>
                  </div>
                  <a target="_blank" href={devArticle.url} target="_blank">
                    <Button>
                      Read More
                      <Icon type="right" />
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </div>
          {/* <div className="sidebar">
            <div>
              <Claps article={devArticle} url={devArticle.url} />
            </div>
            <div>
              <Bookmark article={devArticle} url={devArticle.url} />
            </div>
            <div>
              <AddToStories article={devArticle} url={devArticle.url} />
            </div>
          </div> */}
        </div>
      );
    });

    return (
      <div className="devPage">
        <Twitter />
        <div className="display-dev-articles">{displayDevArticle}</div>
        <GitHub_Repos />
      </div>
    );
  }
}
