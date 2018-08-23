import { Avatar, Button, Icon, Modal } from "antd";
import axios from "axios";
import Carousel from "nuka-carousel";
import React, { Component } from "react";
import "../GenTech/genTech.css";
import "./stories.css";

export default class Stories extends Component {
  state = {
    stories: [],
    userId: "google-oauth2|105906369999808829473"
  };
  componentDidMount() {
    const { userId } = this.state;
    axios
      .post(`http://localhost:3001/api/stories/genStories`, { userId })
      .then(response => {
        this.setState({ stories: response.data.stories });
        response.data.stories.map(story => {
          this.state[story.username] = false;
        });
      });
  }

  handleCancel = username => {
    this.setState({ [username]: false });
  };

  onAvatarClick = username => {
    this.setState({ [username]: true });
  };

  render() {
    const { stories } = this.state;
    const storiesDisplay = stories.length ? (
      stories.map((story, i) => {
        console.log("story: ", story);
        return (
          <div className="storyWrapper" key={i}>
            <Avatar
              onClick={() => this.onAvatarClick(story.username)}
              size={60}
              src=""
            />
            <Modal
              title={story.username}
              visible={this.state[story.username]}
              onCancel={() => this.handleCancel(story.username)}
              // bodyStyle={{ height: "50vh" }}
              footer={null}
            >
              <Carousel className="story-card-body">
                {story.stories.map((single, i) => {
                  return (
                    <div key={i} className="story-card-wrapper">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between"
                        }}
                      >
                        <div
                        // style={{ display: "flex" }}
                        >
                          <div>
                            <div>
                              <img
                                className="urlToImage"
                                style={{ height: "200px", width: "100%" }}
                                src={single.image_url}
                                alt=""
                              />
                            </div>
                            <div>
                              <div className="article-center">
                                <div>
                                  <h2>{single.title}</h2>
                                  <div style={{ fontSize: "16px" }}>
                                    {single.description}
                                  </div>
                                </div>
                                <div className="story-card-bottom">
                                  <div className="source">
                                    {single.source_name}
                                  </div>
                                  <div>
                                    <a
                                      target="_blank"
                                      href={single.url}
                                      target="_blank"
                                    >
                                      <Button>
                                        Read
                                        <Icon type="right" />
                                      </Button>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="article-sidebar" />
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </Modal>
            <h2 className="story-username">
              {story.username.replace(/ .*/, "")}
            </h2>
          </div>
        );
      })
    ) : (
      <h4>Follow More People To See Their Stories</h4>
    );
    return <div className="stories_wrapper">{storiesDisplay}</div>;
  }
}
