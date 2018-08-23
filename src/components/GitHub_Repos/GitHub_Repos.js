import { Card, Tag, Avatar } from "antd";
import fetch from "node-fetch";
import React, { Component } from "react";
import "./GitHub_Repos.css";

export default class GitHub_Repos extends Component {
  state = {
    trends: []
  };

  componentDidMount() {
    fetch(
      "https://github-trending-api.now.sh/developers?language=javascript&since=weekly"
    )
      .then(response => {
        return response.json();
      })
      .then(gitTrends => {
        console.log(gitTrends);
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
            <Avatar src={gitTrend.avatar} />
            <h3>
              <a target="_blank" href={gitTrend.url}>
                <span className="text-normal">
                  {gitTrend.repo.name} / {gitTrend.name}
                </span>
              </a>
            </h3>
            <Tag>
              <a target="_blank" href={gitTrend.repo.url}>
                <i className="fas fa-star" />
                {gitTrend.stars}
              </a>
            </Tag>
          </div>
          <div className="description">
            <p style={{ color: "#586069 !important" }}>
              {gitTrend.repo.description}
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
      <div className="github-wrapper display-dev-articles">
        <Card className="github-repos">
          <h1>
            <i className="fab fa-github" /> Trending Repos
          </h1>
          {trendsDisplay}
          <h4>jfjsdj</h4>
        </Card>
      </div>
    );
  }
}
