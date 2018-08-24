import { AutoComplete, Avatar, Icon, Input, Radio, Tooltip } from "antd";
import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { getUser } from "../../redux/ducks/usersReducer";
import logoName from "../../images/ft-name.png";
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
      avatarUrl: "",
      genTech: false,
      devTech: false,
      entertainmentTech: false
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

  genTechHandler = () => {
    this.setState({
      genTech: true,
      devTech: false,
      entertainmentTech: false
    });
  };

  devTechHandler = () => {
    this.setState({
      genTech: false,
      devTech: true,
      entertainmentTech: false
    });
  };

  entertainmentTechHandler = () => {
    this.setState({
      genTech: false,
      devTech: false,
      entertainmentTech: true
    });
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

    const active = "no-link active-link";
    const notActive = "no-link nav-link";

    return (
      <div className="nav">
        <div className="logo-container">
          <img
            className="logoPic"
            src="https://s3.us-east-2.amazonaws.com/fetch-tech/fetch-dog.png"
            alt="logo"
          />
          <img className="logo-name" src={logoName} />
        </div>
        <div className="navButtons">
          <Link
            // className="no-link nav-link"
            className={this.state.genTech ? active : notActive}
            onClick={this.genTechHandler}
            // activeClassName="active-link"
            to="/"
          >
            {/* <Button className="nav_btn">Trending Tech</Button> */}
            TRENDING TECH
          </Link>
          <Link
            // className="no-link nav-link"
            className={this.state.devTech ? active : notActive}
            onClick={this.devTechHandler}
            // activeClassName="active-link"
            to="/devtech"
          >
            {/* <Button className="nav_btn">Dev Tech</Button> */}
            DEV TECH
          </Link>
          <Link
            // className="no-link nav-link"
            className={this.state.entertainmentTech ? active : notActive}
            onClick={this.entertainmentTechHandler}
            // activeClassName="active-link"
            to="/entertainment"
          >
            {/* <Button className="nav_btn">Entertainment</Button> */}
            ENTERTAINMENT
          </Link>
        </div>
        <div className="right-corner">
          <div className="search-userPic">
            <Link to={`/user/claps/${userId}`}>
              <Avatar
                style={{ marginLeft: "15%" }}
                src={avatarUrl}
                size={36}
                icon="user"
              />
            </Link>
            <div className="certain-category-search-wrapper">
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
                dropdownStyle={{ width: 200 }}
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
  )(Navbar)
);
