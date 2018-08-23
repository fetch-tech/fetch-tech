import {
  AutoComplete,
  Avatar,
  Button,
  Card,
  Icon,
  Input,
  Radio,
  Tooltip
} from "antd";
import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import FETCH_TECH_LOGO_TRANS3 from "../../Images/FETCH_TECH_LOGO_TRANS3.png";
import { getUser } from "../../redux/ducks/usersReducer";
import "./Navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        "React",
        "Javascript",
        "Vue",
        "Html",
        "css",
        "Oml",
        "Sequlize",
        "Massive",
        "eey",
        "naah"
      ],
      search: "",
      optionsVisible: false,
      value: "general",
      userId: "",
      avatarUrl: ""
    };
  }

  async componentDidMount() {
    const { getUser } = this.props;
    await getUser();
    await this.setState({ userId: this.props.usersReducer.user.user_id });
    await this.setState({
      avatarUrl: this.props.usersReducer.user.profile_pic
    });
  }

  onAreaFocus = () => {
    this.setState({ optionsVisible: true });
  };
  onOptionChange = e => {
    this.setState({ value: e.target.value });
  };

  onInputChange = e => {
    this.setState({ search: e });
  };

  onEnterKeyPress = e => {
    const { value } = this.state;
    this.setState({ optionsVisible: false });
    const searchItem = e.target.value.toLowerCase();
    this.props.history.push(`/search/${value}/${searchItem}`);
  };

  onSearchSelect = e => {
    const { value } = this.state;
    this.setState({ optionsVisible: false });
    const searchItem = e.toLowerCase();
    this.props.history.push(`/search/${value}/${searchItem}`);
  };

  render() {
    const {
      dataSource,
      search,
      optionsVisible,
      value,
      userId,
      avatarUrl
    } = this.state;

    return (
      <div className="nav">
        <Card
          style={{
            width: "100vw",
            color: "red",
            cursor: "pointer",
            height: "110px"
          }}
        >
          <div className="nav-items">
            <div className="Logo">
              <img
                className="logoPic"
                src={FETCH_TECH_LOGO_TRANS3}
                width="140"
                height="100"
                // border="1px solid black"

                alt="logo"
              />
            </div>
            <div className="navButtons">
              <Link to="/">
                <Button className="nav_btn">Trending Tech</Button>
              </Link>
              <Link to="/devtech">
                <Button className="nav_btn">Dev Tech</Button>
              </Link>
              <Link to="/entertainment">
                <Button className="nav_btn">Entertainment</Button>
              </Link>
            </div>
            <div className="search-userPic">
              <div
                className="certain-category-search-wrapper"
                style={{ width: 250 }}
              >
                {optionsVisible && (
                  <Radio.Group
                    defaultValue="a"
                    buttonStyle="solid"
                    size="small"
                    value={value}
                    onChange={this.onOptionChange}
                  >
                    <Tooltip
                      placement="topLeft"
                      title="Search In General"
                      arrowPointAtCenter
                    >
                      <Radio.Button value="general">General</Radio.Button>
                    </Tooltip>
                  </Radio.Group>
                )}
                <AutoComplete
                  className="certain-category-search"
                  dropdownClassName="certain-category-search-dropdown"
                  dropdownMatchSelectWidth={false}
                  dropdownStyle={{ width: 300 }}
                  size="large"
                  style={{ width: "100%" }}
                  dataSource={dataSource}
                  placeholder="Search"
                  optionLabelProp="value"
                  filterOption={(inputValue, option) =>
                    option.props.children
                      .toUpperCase()
                      .indexOf(inputValue.toUpperCase()) !== -1
                  }
                  onSelect={this.onSearchSelect}
                  defaultActiveFirstOption={false}
                  value={search}
                  onChange={this.onInputChange}
                  onFocus={this.onAreaFocus}
                >
                  <Input
                    onPressEnter={this.onEnterKeyPress}
                    suffix={
                      <Icon type="search" className="certain-category-icon" />
                    }
                  />
                </AutoComplete>
              </div>
              <Link to={`/user/claps/${userId}`}>
                <Avatar
                  style={{ marginLeft: "15%" }}
                  src={avatarUrl}
                  size={36}
                  icon="user"
                />
              </Link>
              <a href="http://localhost:3001/login">LOGIN</a>
            </div>
          </div>
        </Card>
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
  )(Navbar)
);
