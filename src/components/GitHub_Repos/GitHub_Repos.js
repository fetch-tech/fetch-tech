import { Card, Tag } from "antd";
import fetch from "node-fetch";
import React, { Component } from "react";
import "./GitHub_Repos.css";

export default class GitHub_Repos extends Component {
  state = {
    trends: []
  };

  componentDidMount() {
    fetch("https://github-trending-api.now.sh/repositories")
      .then(response => {
        return response.json();
      })
      .then(gitTrends => {
        this.setState({ trends: gitTrends });
      });
  }

  render() {
    const { trends } = this.state;
    console.log(trends);
    const trendsDisplay = trends.map((gitTrend, t) => {
      return (
        <div className="wrapperG" key={t}>
          <div className="title">
            <h3>
              <a target="_blank" href={gitTrend.url}>
                <span className="text-normal">
                  {gitTrend.author} / {gitTrend.name}
                </span>
              </a>
            </h3>
            <Tag>
              <i className="fas fa-star" />
              {gitTrend.stars}
            </Tag>
          </div>
          <div className="description">
            <p style={{ color: "#586069 !important" }}>
              {gitTrend.description}
            </p>
          </div>
          <div>
            <i className="fas fa-code-branch" />
            {gitTrend.forks}
          </div>
          <hr />
        </div>
      );
    });
    return (
      <div>
        <Card className="github-repos">
          <h1>
            <i className="fab fa-github" /> Trending Repos
          </h1>
          {trendsDisplay}
        </Card>
      </div>
    );
  }
}
