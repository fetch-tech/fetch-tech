import { Avatar, Button, Icon, Modal } from "antd";
import axios from "axios";
import Carousel from "nuka-carousel";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../../redux/ducks/usersReducer";
import "../GenTech/genTech.css";
import "./stories.css";

class Stories extends Component {
  state = {
    stories: [],
    userId: ""
  };
  async componentDidMount() {
    const { getUser } = this.props;
    await getUser();
    await this.setState({ userId: this.props.usersReducer.user.user_id });
    await axios
      .post(`http://localhost:3001/api/stories/genStories`, {
        userId: this.state.userId
      })
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
        console.log(story);
        return (
          <div className="storyWrapper" key={i}>
            <Avatar
              onClick={() => this.onAvatarClick(story.username)}
              style={{ marginLeft: "15px" }}
              size={64}
              src={story.stories[0].profile_pic}
            />
            <Modal
              title={story.username}
              visible={this.state[story.username]}
              onCancel={() => this.handleCancel(story.username)}
              bodyStyle={{ height: "50vh" }}
              footer={null}
            >
              <Carousel>
                {story.stories.map((single, i) => {
                  {
                  }
                  return (
                    <div key={i} className="articleWrapper">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between"
                        }}
                      >
                        <div style={{ display: "flex" }}>
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
                              <div className="aricle-center">
                                <h2>{single.title}</h2>
                                <div style={{ fontSize: "16px" }}>
                                  {single.description}
                                </div>
                                <div className="article-bottom">
                                  <div className="source">
                                    {single.source_name}
                                  </div>
                                </div>
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
                        <div className="article-sidebar" />
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </Modal>
            <h2 style={{ marginLeft: "24px" }}>
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

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  {
    getUser
  }
)(Stories);
