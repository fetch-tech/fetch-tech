import { Avatar, Button, Card, Input } from "antd";
import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";
import FETCH_TECH_LOGO_TRANS3 from "../../images/FETCH_TECH_LOGO_TRANS3.png";

const Search = Input.Search;

export default () => {
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
          <div>
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              style={{ width: 200, marginLeft: "-30%" }}
            />
            <Avatar
              style={{ marginLeft: "15%" }}
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              size={36}
              icon="user"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
