import { Button, Card, Icon } from "antd";
import axios from "axios";
import React from "react";
import Claps from "../Claps/Claps";
import Comments from "../Comments/Comments";
import Stories from "../Stories/Stories";
import "./genTech.css";

export default class extends React.Component {
  state = {
    articles: []
  };

  componentDidMount() {
    //2- fetch data, get API from "index.js"/ and calling API from the backend.
    axios.get("http://localhost:3001/api/home/articles").then(response => {
      this.setState({ articles: response.data.articles.articles });
    });
  }

  render() {
    const { articles } = this.state;
    console.log(articles);
    // 3-map
    const articleDisplay = articles.map(article => {
      return (
        <div className="wrapper" key={i}>
          <div style={{ display: "flex" }}>
            <Card
              hoverable
              style={{
                marginLeft: 371,
                width: 800,
                marginTop: 5,
                display: "flex"
              }}
            >
              <div className="articleWrapper">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ display: "flex" }}>
                    <img
                      className="urlToImage"
                      src={article.urlToImage}
                      alt=""
                    />
                    <div className="aricle-center">
                      <h2>{article.title}</h2>
                      <div style={{ fontSize: "16px" }}>
                        {article.description}
                      </div>
                      <div className="article-bottom">
                        <div className="source">{article.source.name}</div>
                      </div>
                      <a target="_blank" href={article.url} target="_blank">
                        <Button>
                          Read
                          <Icon type="right" />
                        </Button>
                      </a>
                    </div>
                  </div>
                  <div className="article-sidebar" />
                </div>
              </div>
            </Card>
            <span style={{ marginRight: 300 }}>
              <Claps clapped={article.author} />
            </span>
          </div>
          <Comments
            article={article}
            url={article.url}
            desc={article.description}
          />
        </div>
      );
    });
    return (
      <div className="genNewsWrapper">
        <Stories />
        {articleDisplay}
      </div>
    );
  }
}
