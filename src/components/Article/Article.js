import React, { Component } from "react";
import { Button, Card, Icon } from "antd";

import Comments from "../Comments/Comments";
import Claps from "../Claps/Claps";
import Bookmark from "../Bookmark/Bookmark";
import AddToStories from "../Stories/AddToStories";

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleComments: false
    };
  }

  toggleHandler = () => {
    this.setState({
      toggleComments: !this.state.toggleComments
    });
  };

  render() {
    const { article, e, noImage } = this.props;

    if (this.state.toggleComments) {
      return (
        <div className="wrapper" key={e}>
          <div className="card-sidebar">
            <div className="card-comment">
              <Card hoverable className="card-body">
                <div className="articleWrapper">
                  <img
                    className="urlToImage"
                    src={article.urlToImage ? article.urlToImage : noImage}
                    alt=""
                  />
                  <div className="aricle-center">
                    <h2>{article.title}</h2>
                    <div className="article-description">
                      {article.description}
                    </div>
                  </div>
                </div>
                <div className="card-bottom">
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
                <div className="showComment">
                  <Button onClick={this.toggleHandler}>
                    Hide Comments
                    <Icon type="up" />
                  </Button>
                </div>
              </Card>
              <Comments
                article={article}
                url={article.url}
                desc={article.description}
              />
            </div>

            <div className="sidebar">
              {/* <Claps clapped={article.author} /> */}
              <div>
                <Claps article={article} url={article.url} />
              </div>
              <div>
                <Bookmark article={article} url={article.url} />
              </div>
              <div>
                <AddToStories article={article} url={article.url} />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="wrapper" key={e}>
          <div className="card-sidebar">
            <div className="card-comment">
              <Card hoverable className="card-body">
                <div className="articleWrapper">
                  <img
                    className="urlToImage"
                    src={article.urlToImage ? article.urlToImage : noImage}
                    alt=""
                  />
                  <div className="aricle-center">
                    <h2>{article.title}</h2>
                    <div className="article-description">
                      {article.description}
                    </div>
                  </div>
                </div>
                <div className="card-bottom">
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
                <div className="showComment">
                  <Button onClick={this.toggleHandler}>
                    Show Comments
                    <Icon type="down" />
                  </Button>
                </div>
              </Card>
            </div>

            <div className="sidebar">
              {/* <Claps clapped={article.author} /> */}
              <div>
                <Claps article={article} url={article.url} />
              </div>
              <div>
                <Bookmark article={article} url={article.url} />
              </div>
              <div>
                <AddToStories article={article} url={article.url} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Article;
