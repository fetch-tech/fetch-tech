import axios from "axios";
import React, { Component } from "react";
import "./boomark.css";

export default class Bookmark extends Component {
  state = {
    article: this.props.article,
    url: this.props.url,
    class: "bookmark far fa-bookmark fa-3x",
    selected: false,
    userId: "google-oauth2|105906369999808829473",
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
          `http://localhost:3001/api/articles/bookmartStatus/${
            this.state.articleId
          }/${this.state.userId}`
        )
        .then(res => {
          console.log(res.data.bookmark);
          if (res.data.bookmark.length > 0) {
            this.setState({ selected: true });
            this.setState({ class: "bookmark fas fa-bookmark fa-3x" });
          }
        }));
  };

  componentDidMount() {
    this.checkforArticle();
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
        .post("http://localhost:3001/api/articles/bookmarks", {
          article,
          userId
        })
        .then(response => {
          // console.log(response);
        });
    } else {
      axios
        .post(
          `http://localhost:3001/api/articles/removeBookmark/${
            this.state.articleId
          }/${this.state.userId}`
        )
        .then(res => {
          console.log("success");
        });
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
