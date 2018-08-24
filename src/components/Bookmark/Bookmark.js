import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../../redux/ducks/usersReducer";
import "./boomark.css";
class Bookmark extends Component {
  state = {
    article: this.props.article,
    url: this.props.url,
    class: "bookmark far fa-bookmark fa-3x",
    selected: false,
    userId: "",
    articleId: null
  };

  checkforArticle = async () => {
    await axios
      .post(`/api/articles/articleExistence`, {
        url: this.state.url
      })
      .then(response => {
        response.data.article.length > 0 &&
          this.setState({ articleId: response.data.article[0].article_id });
      });
    this.state.articleId &&
      (await axios
        .get(
          `/api/articles/bookmartStatus/${this.state.articleId}/${
            this.state.userId
          }`
        )
        .then(res => {
          if (res.data.bookmark.length > 0) {
            this.setState({ selected: true });
            this.setState({ class: "bookmark fas fa-bookmark fa-3x" });
          }
        }));
  };

  async componentDidMount() {
    const { getUser } = this.props;
    await getUser();
    await this.setState({ userId: this.props.usersReducer.user.user_id });
    await this.checkforArticle();
  }
  onBookmarkClick = () => {
    if (this.state.selected) {
      this.setState({ class: "bookmark far fa-bookmark fa-3x" });
    } else {
      this.setState({ class: "bookmark fas fa-bookmark fa-3x" });
    }
    this.setState({ selected: !this.state.selected });
    if (!this.state.selected) {
      const { article, userId } = this.state;
      axios
        .post(`/api/articles/bookmarks`, {
          article,
          userId
        })
        .then(response => {});
    } else {
      axios
        .post(
          `/api/articles/removeBookmark/${this.state.articleId}/${
            this.state.userId
          }`
        )
        .then(res => {});
    }
  };
  render() {
    return (
      <div>
        <div style={{ marginTop: 70 }}>
          <i onClick={this.onBookmarkClick} className={this.state.class} />
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
)(Bookmark);
