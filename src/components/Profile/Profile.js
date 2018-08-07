import React, { Component } from "react";
import News_Tweet from "../News_Tweet/News_Tweet";
import Navbar from '../Navbar/Navbar';

export default class Profile extends Component {


//
  render() {
    return (
      <div>
        <div>
          <Navbar />
          <button className='followers'>Followers</button>
          <button className='following'>Following</button>
          <div className='profileImg'>Profile image</div>
            <div><News_Tweet/></div>
        </div>

        <div />
      </div>
    );
  }
}
