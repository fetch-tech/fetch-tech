import { Button, Card, Icon } from "antd";
import axios from "axios";
import React, { Component } from "react";
import "../../GenTech/genTech.css";
import "./profile.css";
import UserProfile from "./UserProfile";

export default class Claps extends Component {
  state = {
    viewUserId: "",
    claps: []
  };
  async componentDidMount() {
    await this.setState({ viewUserId: this.props.match.params.userId });
    await axios
      .post(`http://localhost:3001/api/users/claps/`, {
        userId: this.state.viewUserId
      })
      .then(res => {
        this.setState({ claps: res.data.claps });
      });
  }
  render() {
    const { claps } = this.state;
    const articleDisplay = claps.map((article, i) => {
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
                    <div className="aricle-center">
                      <h2>{article.title}</h2>
                      <div style={{ fontSize: "16px" }}>
                        {article.description}
                      </div>
                      <div className="article-bottom">
                        {/* <div className="source">{article.source.name}</div> */}
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
          </div>
        </div>
      );
    });

    return (
      <div>
        <div>
          <UserProfile />
        </div>
        <div className="articles">{articleDisplay}</div>
      </div>
    );
  }
}
