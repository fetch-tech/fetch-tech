import React, { Component } from "react";
import Traffic_Light from '../Traffic_Light/Traffic_Light';

export default class News_Tweet extends Component {
  render() {
    return (
      <div>
        <div>Topic Tag</div>
        <section className='tweet'>
          <div className="tweet_img">Image</div>
          <div className='twords'>250 words</div>
          <div>Closing Topic Tag</div>
        </section>
        <div><Traffic_Light/></div>
      </div>
    );
  }
}
