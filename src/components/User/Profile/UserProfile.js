import { Card, Icon } from "antd";
import axios from "axios";
import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { getUser } from "../../../redux/ducks/usersReducer";
import "./profile.css";

class UserProfile extends Component {
  state = {
    userId: "",
    viewUserId: "",
    acceptedCover: [],
    rejectedCover: [],
    acceptedProfilePic: [],
    rejectedProfilePic: [],
    coverPic: "",
    profilePic: ""
  };
  async componentDidMount() {
    const { getUser } = this.props;
    await getUser();
    await this.setState({ userId: this.props.usersReducer.user.user_id });
    await this.setState({ viewUserId: this.props.match.params.userId });
    await axios
      .post("http://localhost:3001/api/user", {
        userId: this.state.viewUserId
      })
      .then(res => {
        this.setState({ coverPic: res.data.user[0].cover_pic });
        this.setState({ profilePic: res.data.user[0].profile_pic });
      });
  }

  uploadCoverToCloudinary = files => {
    const uploaders = files.map(file => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("tags", `codeinfuse, medium, gist`);
      formData.append("upload_preset", "aqxj7t9m");
      formData.append("api_key", "134694361976584");
      formData.append("timestamp", (Date.now() / 1000) | 0);

      return axios
        .post(
          "https://api.cloudinary.com/v1_1/ianlikono/image/upload",
          formData,
          {
            headers: { "X-Requested-With": "XMLHttpRequest" }
          }
        )
        .then(response => {
          const data = response.data;
          const fileURL = data.secure_url; // You should store this URL for future references in your app
          axios
            .post("http://localhost:3001/api/user/coverImage", {
              userId: this.state.userId,
              coverUrl: fileURL
            })
            .then(res => {});
        });
    });
  };

  uploadAvatarToCloudinary = files => {
    const uploaders = files.map(file => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("tags", `codeinfuse, medium, gist`);
      formData.append("upload_preset", "aqxj7t9m");
      formData.append("api_key", "134694361976584");
      formData.append("timestamp", (Date.now() / 1000) | 0);

      return axios
        .post(
          "https://api.cloudinary.com/v1_1/ianlikono/image/upload",
          formData,
          {
            headers: { "X-Requested-With": "XMLHttpRequest" }
          }
        )
        .then(response => {
          const data = response.data;
          const fileURL = data.secure_url; // You should store this URL for future references in your app
          axios
            .post("http://localhost:3001/api/user/profileImage", {
              userId: this.state.userId,
              profilerUrl: fileURL
            })
            .then(res => {});
        });
    });
  };

  render() {
    const {
      userId,
      viewUserId,
      acceptedCover,
      acceptedProfilePic,
      coverPic,
      profilePic
    } = this.state;

    return (
      <div>
        <div className="top-section">
          <div className="top-wrapper">
            <div className="cover-wrapper">
              <div className="cover-section">
                <div className="cover-img">
                  <Dropzone
                    style={{ width: "100%" }}
                    disabled={userId !== viewUserId && true}
                    accept="image/jpeg, image/png"
                    onDrop={(acceptedCover, rejectedCover) => {
                      this.setState({ acceptedCover, rejectedCover });
                      this.uploadCoverToCloudinary(acceptedCover);
                    }}
                  >
                    {userId === viewUserId && (
                      <Icon
                        style={{
                          fontSize: "24px",
                          marginLeft: "50%",
                          cursor: "pointer"
                        }}
                        type="edit"
                      />
                    )}

                    <img
                      className="cover"
                      alt="COVER IMAGE"
                      src={
                        acceptedCover.length > 0
                          ? acceptedCover[0].preview
                          : coverPic
                      }
                    />
                  </Dropzone>
                </div>
                <div className="avatar-wrapper">
                  <div className="avatar">
                    <Dropzone
                      style={{ width: "100%" }}
                      disabled={userId !== viewUserId && true}
                      accept="image/jpeg, image/png"
                      onDrop={(acceptedProfilePic, rejectedProfilePic) => {
                        this.setState({
                          acceptedProfilePic,
                          rejectedProfilePic
                        });
                        this.uploadAvatarToCloudinary(acceptedProfilePic);
                      }}
                    >
                      <img
                        src={
                          acceptedProfilePic.length > 0
                            ? acceptedProfilePic[0].preview
                            : profilePic
                        }
                        alt="PROFILE IMAGE"
                      />
                    </Dropzone>
                  </div>
                </div>
              </div>
              <div className="lower-section-wrapper">
                <Card hoverable className="tabs-wrapper">
                  <div className="tab-items">
                    <div className="tabs">
                      <Link to={`/user/claps/${viewUserId}`}>
                        <div>
                          <span>
                            <i className="fas fa-hands" />
                            CLAPS
                          </span>
                        </div>
                      </Link>
                      <Link to={`/user/bookmarks/${viewUserId}`}>
                        <div>
                          <span>
                            <i className="fas fa-bookmark" />
                            BOOKMARKS
                          </span>
                        </div>
                      </Link>
                      <Link to={`/user/following/${viewUserId}`}>
                        <div>
                          <span>
                            <i className="fas fa-blind" />
                            FOLLOWING
                          </span>
                        </div>
                      </Link>
                      <Link to={`/user/followers/${viewUserId}`}>
                        <div>
                          <span>
                            <i className="fas fa-walking" />
                            FOLLOWERS
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default withRouter(
  connect(
    mapStateToProps,
    { getUser }
  )(UserProfile)
);
