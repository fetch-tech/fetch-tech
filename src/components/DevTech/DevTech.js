import React, { Component } from "react";
import axios from "axios";
import { Button, Card, Icon } from "antd";
import Twitter from "../Twitter/Twitter";
import GitHub_Repos from "../GitHub_Repos/GitHub_Repos";
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
    const { devArticles } = this.state;
    // console.log("ART-----> ", devArticles);

    const displayDevArticle = devArticles.map((devArticle, d) => {
      return (
        <div className="line-tech" key={d}>
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
              <img className="urlToImage" src={devArticle.urlToImage} alt="" />

              <div className="aricle-center">
                <h2>{devArticle.title}</h2>
                <div className="devArticleDescript">
                  {devArticle.description}
                </div>
                <div className="article-bottom">
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
      );
    });

    return (
      <div className="devPage">
        <Twitter />

        <div>{displayDevArticle}</div>
        <GitHub_Repos />
      </div>
    );
  }
}
