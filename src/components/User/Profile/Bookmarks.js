import { Button, Card, Icon } from "antd";
import axios from "axios";
import React, { Component } from "react";
import "./profile.css";
import UserProfile from "./UserProfile";

export default class Bookmarks extends Component {
  state = {
    viewUserId: "",
    bookmarks: []
  };
  async componentDidMount() {
    await this.setState({ viewUserId: this.props.match.params.userId });

    await axios
      .post(`http://localhost:3001/api/users/bookmarks/`, {
        userId: this.state.viewUserId
      })
      .then(res => {
        this.setState({ bookmarks: res.data.bookmarks });
      });
  }
  render() {
    const { bookmarks } = this.state;
    const bookmarksDisplay = bookmarks.map((article, i) => {
      return (
        <div className="clap-article-wrapper" key={i}>
          <Card
            hoverable
            className="clap-article-card"
            // style={{
            //   marginLeft: 371,
            //   width: 800,
            //   marginTop: 5,
            //   display: "flex"
            // }}
          >
            <div className="clap-article-body">
              <div className="clap-article-top">
                <h2>{article.title}</h2>
                <div style={{ fontSize: "16px" }}>{article.description}</div>
                <div className="article-bottom">
                  {/* <div className="source">{article.source.name}</div> */}
                </div>
              </div>
              <div className="clap-article-bottom">
                <a target="_blank" href={article.url} target="_blank">
                  <Button>
                    Read
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
      <div className="user-page-claps">
        <div>
          <UserProfile />
        </div>
        <div className="display-clap-articles">{bookmarksDisplay}</div>
      </div>
    );
  }
}
