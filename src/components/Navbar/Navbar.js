import { Avatar, Button, Card, Input } from "antd";
import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom';

const Search = Input.Search;

export default () => {
  return (
    <div className="nav">
      <Card
        hoverable
        style={{
          width: "100vw",
          color: "red",
          cursor: "pointer",
          height: "80px"
        }}
      >
        <div className="nav-items">
          <h4>Logo</h4>
          <div className="navButtons">
            <Button className="nav_btn">Trending Tech</Button>
            <Button className="nav_btn">Dev Tech</Button>
            <Link to='/entertainment'>
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
