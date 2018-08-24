import { Badge } from "antd";
import axios from "axios";
import React, { Component } from "react";
import SVG from "react-inlinesvg";
import { connect } from "react-redux";
import { getUser } from "../../redux/ducks/usersReducer";
import "./claps.css";
import leftHand from "./leftHand.svg";
import rightHand from "./rightHand.svg";

class Claps extends Component {
  state = {
    article: this.props.article,
    url: this.props.url,
    classesLeft: "clap hand-left",
    classesRight: "clap hand-right",
    count: 0,
    initialUserCount: 0,
    userCount: 0,
    userId: "",
    articleId: null
  };
  checkAndFetchClaps = async () => {
    const articleId = await axios
      .post(`/api/commentArticles/comment/`, {
        url: this.state.url
      })
      .then(response => {
        response.data.article.length &&
          this.setState({ articleId: response.data.article[0].article_id });
      });
    const claps =
      this.state.articleId &&
      (await axios
        .get(
          `/api/userArticleClap/${this.state.articleId}/${this.state.userId}`
        )
        .then(response => {
          // response.data.userClaps.length > 0 &&
          //   this.setState({
          //     initialUserCount: response.data.userClaps[0].number
          //   });
        }));
    const clapsNumber =
      this.state.articleId &&
      (await axios
        .get(`/api/articleClaps/${this.state.articleId}`)
        .then(response => {
          this.setState({ count: response.data.claps[0].sum });
        }));
    return articleId;
  };

  async componentDidMount() {
    const { getUser } = this.props;
    await getUser();
    await this.setState({ userId: this.props.usersReducer.user.user_id });
    await this.checkAndFetchClaps();
  }
  handleMouseEnter = () => {
    this.setState({ classesLeft: "clap hand-left clap-start" });
    this.setState({ classesRight: "clap hand-right clap-start" });
  };
  handleMouseLeave = async () => {
    const { initialUserCount, userCount, article, userId } = this.state;
    await this.setState({ classesLeft: "clap hand-left" });
    await this.setState({ classesRight: "clap hand-right" });
    if (initialUserCount !== userCount && initialUserCount !== 20) {
      axios
        .post(`/api/clapArticle/clap`, {
          article,
          number: userCount,
          initialNumber: initialUserCount,
          userId
        })
        .then(response => {});
    }
  };
  handleMouseDown = () => {
    this.setState({ classesLeft: "clap hand-left clapping" });
    this.setState({ classesRight: "clap hand-right clapping" });
    this.setState({ userCount: parseInt(this.state.userCount) + 1 });
    if (this.state.userCount < 20) {
      this.setState({ count: parseInt(this.state.count) + 1 });
    }
  };
  handleMouseUp = () => {
    this.setState({ classesLeft: "clap hand-left clap-start" });
    this.setState({ classesRight: "clap hand-right clap-start" });
  };
  render() {
    const { classesRight, classesLeft, count, userCount } = this.state;
    return (
      <div>
        <Badge
          count={count}
          overflowCount={99999}
          style={{
            backgroundColor: "#fff",
            color: "#999",
            boxShadow: "0 0 0 1px #d9d9d9 inset"
          }}
        >
          <div className="clapcontainer">
            <div
              className="clap-button"
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
              onMouseDown={this.handleMouseDown}
              onMouseUp={this.handleMouseUp}
            >
              <div className="clap-animation">
                <div className={classesLeft}>
                  <SVG src={leftHand} preloader={<p>loading...</p>} />
                </div>
                <div className={classesRight}>
                  <SVG src={rightHand} preloader={<p>loading...</p>} />
                </div>
              </div>
            </div>
          </div>
        </Badge>
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
)(Claps);
