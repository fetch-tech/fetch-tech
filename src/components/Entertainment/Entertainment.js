import React, { Component } from "react";
import axios from "axios";
import "./Entertainment.css";
import Stories from "../Stories/Stories";
import Claps from "../Claps/Claps";
import Comments from "../Comments/Comments";
import Article from "../Article/Article";
import { Button, Card, Icon } from "antd";

export default class Entertainment extends Component {
  state = {
    entertainments: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/home/articles/entertainment")
      .then(response => {
        this.setState({ entertainments: response.data.articles.articles });
      });
  }

  render() {
    const noImage =
      "http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg";
    const { entertainments } = this.state;
    // console.log(entertainments);
    const entertainmentDisplay = entertainments.map((entertainment, e) => {
      return (
        // <div className="wrapper" key={e}>
        //   <div className="card-sidebar">
        //     <div className="card-comment">
        //       <Card
        //         hoverable
        //         // key={entertainment.urlToImage}
        //         className="card-body"
        //       >
        //         <div className="articleWrapper">
        //           <img
        //             className="urlToImage"
        //             src={
        //               entertainment.urlToImage
        //                 ? entertainment.urlToImage
        //                 : noImage
        //             }
        //             alt=""
        //           />
        //           <div className="aricle-center">
        //             <h2>{entertainment.title}</h2>
        //             <div className="article-description">
        //               {entertainment.description}
        //             </div>
        //           </div>
        //         </div>
        //         <div className="card-bottom">
        //           <div className="article-bottom">
        //             <div className="source">{entertainment.source.name}</div>
        //           </div>
        //           <a target="_blank" href={entertainment.url} target="_blank">
        //             <Button>
        //               Read
        //               <Icon type="right" />
        //             </Button>
        //           </a>
        //         </div>
        //       </Card>
        //       <Comments
        //         article={entertainment}
        //         url={entertainment.url}
        //         desc={entertainment.description}
        //       />
        //     </div>

        //     <div className="sidebar">
        //       <Claps clapped={entertainment.author} />
        //     </div>
        //   </div>
        // </div>
        <div>
          <Article article={entertainment} i={e} noImage={noImage} />
        </div>
      );
    });

    return (
      <div>
        <Stories />
        <div>
          <Button className="gifButton">Gifs</Button>
        </div>
        <div className="genNewsWrapper">{entertainmentDisplay}</div>
      </div>
    );
  }
}
