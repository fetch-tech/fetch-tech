import { Icon } from "antd";
import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../../redux/ducks/usersReducer";

class AddStories extends Component {
  state = {
    article: this.props.article,
    url: this.props.url,
    type: "plus-circle-o",
    selected: false,
    userId: "",
    articleId: null
  };

  checkforArticle = async () => {
    await axios
      .post(`http://localhost:3001/api/articles/articleExistence`, {
        url: this.state.url
      })
      .then(response => {
        response.data.article.length > 0 &&
          this.setState({ articleId: response.data.article[0].article_id });
      });
    this.state.articleId &&
      (await axios
        .get(
          `http://localhost:3001/api/articles/storyStatus/${
            this.state.articleId
          }/${this.state.userId}`
        )
        .then(res => {
          if (res.data.story.length > 0) {
            this.setState({ selected: true });
            this.setState({ type: "close-circle" });
          }
        }));
  };

  async componentDidMount() {
    const { getUser } = this.props;
    await getUser();
    await this.setState({ userId: this.props.usersReducer.user.user_id });
    await this.checkforArticle();
  }
  onModifyStoryClick = () => {
    this.setState({ selected: !this.state.selected });
    if (this.state.selected) {
      this.setState({ type: "close-circle" });
    } else {
      this.setState({ type: "plus-circle-o" });
    }
    if (!this.state.selected) {
      const { article, userId } = this.state;
      axios
        .post("http://localhost:3001/api/articles/stories", {
          article,
          userId
        })
        .then(response => {
          this.setState({ type: "close-circle" });
        });
    } else {
      axios
        .post(
          `http://localhost:3001/api/articles/removeStory/${
            this.state.articleId
          }/${this.state.userId}`
        )
        .then(res => {
          this.setState({ type: "plus-circle-o" });
        });
    }
  };
  render() {
    return (
      <div>
        <div style={{ marginTop: 70 }}>
          {this.state.selected ? (
            <Icon
              onClick={this.onModifyStoryClick}
              style={{ fontSize: "32px", cursor: "pointer" }}
              type="close-circle"
            />
          ) : (
            <Icon
              onClick={this.onModifyStoryClick}
              style={{ fontSize: "32px", cursor: "pointer" }}
              type="plus-circle-o"
            />
          )}
        </div>
      </div>
    );
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
)(AddStories);
