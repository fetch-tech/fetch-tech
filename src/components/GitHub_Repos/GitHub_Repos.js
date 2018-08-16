import React, { Component } from "react";

import Stories from "../Stories/Stories";
import fetch from "node-fetch";

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
        // console.log(gitTrends);
      });
  }

  render() {
    const { trends } = this.state;
    // console.log(this.state);
    const trendsDisplay = trends.map((gitTrend, t) => {
      // console.log(gitTrend);
      return (
        <div className="wrapperG" key={t}>
          <div style={{ display: "flex" }}>
            <a
              className="gitBoxG"
              target="_blank"
              href={gitTrend.url}
              style={{
                marginLeft: 700,
                width: 300,
                marginTop: 5,
                display: "flex",
                padding: 2,
                border: "1px solid black"
              }}
            >
              <div className="articleWrapperG">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ display: "flex" }}>
                    <div className="aricle-centerG">
                      <h2>{gitTrend.name}</h2>
                      <div style={{ fontSize: "16px" }}>
                        {gitTrend.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      );
    });
    return (
      <div>
        <Stories />

        {trendsDisplay}
      </div>
    );
  }
}
