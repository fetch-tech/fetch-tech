import React, { Component } from "react";
import axios from "axios";
import "./Entertainment.css";
import Stories from "../Stories/Stories";
import { Button, Card, Icon } from "antd";

export default class Entertainment extends Component {
  state = {
    entertainments: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/home/articles/entertainment")
      .then(response => {
        this.setState({ entertainments: response.data.articles.articles });
      });
  }

  render() {
    const { entertainments } = this.state;
    console.log(entertainments);
    const entertainmentDisplay = entertainments.map(entertainment => {
      return (
        <Card
          hoverable
          key={entertainment.urlToImage}
          style={{
            marginLeft: 300,
            marginRight: 300,
            marginTop: 5,
            display: "flex"
          }}
        >
          <div className="articleWrapper">
            <img className="urlToImage" src={entertainment.urlToImage} alt="" />
            <div className="aricle-center">
              <h2>{entertainment.title}</h2>
              <div style={{ fontSize: "16px" }}>
                {entertainment.description}
              </div>
              <div className="article-bottom">
                <div className="source">{entertainment.source.name}</div>
              </div>
              <a target="_blank" href={entertainment.url} target="_blank">
                <Button>
                  Read
                  <Icon type="right" />
                </Button>
              </a>
            </div>
          </div>
        </Card>
      );
    });
    return (
      <div className="genNewsWrapper">
        <div>
          <Button className="gifButton">Gifs</Button>
        </div>
        <Stories />

        {entertainmentDisplay}
      </div>
    );
  }
}
