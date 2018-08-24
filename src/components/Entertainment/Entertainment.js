import { Button } from "antd";
import axios from "axios";
import React, { Component } from "react";
import Article from "../Article/Article";
import Stories from "../Stories/Stories";

export default class Entertainment extends Component {
  state = {
    entertainments: []
  };

  componentDidMount() {
    axios.get(`/api/home/articles/entertainment`).then(response => {
      this.setState({ entertainments: response.data.articles.articles });
    });
  }

  render() {
    const noImage =
      "http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg";
    const { entertainments } = this.state;
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
      <div className="parentWrapper">
        <Stories />
        {/* <div>
          <Button className="gifButton">Gifs</Button>
        </div> */}
        <div className="page-title">
          <h1 className="underline">Entertainment</h1>
        </div>
        <div className="genNewsWrapper">{entertainmentDisplay}</div>
      </div>
    );
  }
}
