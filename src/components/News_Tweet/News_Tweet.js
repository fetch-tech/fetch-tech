import React, { Component } from "react";
import {Link} from 'react-router-dom';


export default class News_Tweet extends Component {
  render() {
    return (
      <div>
        <Link to='/article' className='articleLink'>
        <div>Topic Tag</div>
        <section className='tweet'>
          <div className="tweet_img">Image</div>
          <div className='twords'>250 words</div>
          <div>Closing Topic Tag</div>
        </section>
        </Link>
       
      </div>
    );
  }
}
