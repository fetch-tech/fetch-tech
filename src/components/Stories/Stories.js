import { Avatar } from "antd";
import React from "react";
import "./stories.css";

export default () => {
  return (
    <div className="stories_wrapper">
      <span className="trending-opening">{"<Trending>"}</span>

      <div className="stories_border">
        <Avatar
          style={{ marginLeft: "15%" }}
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          size={48}
          icon="user"
          style={{ width: "200px", cursor: "pointer" }}
        />
        <Avatar
          style={{ marginLeft: "15%" }}
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          size={48}
          icon="user"
          style={{ width: "200px", cursor: "pointer" }}
        />
        <Avatar
          style={{ marginLeft: "15%" }}
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          size={48}
          icon="user"
          style={{ width: "200px", cursor: "pointer" }}
        />
        <Avatar
          style={{ marginLeft: "15%" }}
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          size={48}
          icon="user"
          style={{ width: "200px", cursor: "pointer" }}
        />
      </div>
      <span className="trending-closing">{"</Trending>"}</span>
    </div>
  );
};
