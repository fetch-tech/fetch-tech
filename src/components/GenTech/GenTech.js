import axios from "axios";
import React from "react";
import Article from "../Article/Article";
import Stories from "../Stories/Stories";
import "./genTech.css";

export default class extends React.Component {
  state = {
    articles: []
  };

  componentDidMount() {
    axios.get("http://localhost:3001/api/home/articles").then(response => {
      this.setState({ articles: response.data.articles.articles });
    });
  }

  render() {
    const noImage =
      "http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg";
    const { articles } = this.state;
    const articleDisplay = articles.map((article, i) => {
      return (
        // <div className="wrapper" key={i}>
        //   <div className="card-sidebar">
        //     <div className="card-comment">
        //       <Card hoverable className="card-body">
        //         <div className="articleWrapper">
        //           <img
        //             className="urlToImage"
        //             src={article.urlToImage ? article.urlToImage : noImage}
        //             alt=""
        //           />
        //           <div className="aricle-center">
        //             <h2>{article.title}</h2>
        //             <div className="article-description">
        //               {article.description}
        //             </div>
        //           </div>
        //         </div>
        //         <div className="card-bottom">
        //           <div className="article-bottom">
        //             <div className="source">{article.source.name}</div>
        //           </div>
        //           <a target="_blank" href={article.url}>
        //             <Button>
        //               Read
        //               <Icon type="right" />
        //             </Button>
        //           </a>
        //         </div>
        //       </Card>
        //       <Comments
        //         article={article}
        //         url={article.url}
        //         desc={article.description}
        //       />
        //     </div>
        //     <div className="sidebar">
        //       <div>
        //         <Claps article={article} url={article.url} />
        //       </div>
        //       <div>
        //         <Bookmark article={article} url={article.url} />
        //       </div>
        //       <div>
        //         <AddToStories article={article} url={article.url} />
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <div key={i}>
          <Article article={article} i={i} noImage={noImage} />
        </div>
      );
    });

    return (
      <div className="parentWrapper">
        <Stories />
        <div className="page-title">
          <h1 className="underline">Trending Tech</h1>
        </div>
        <div className="genNewsWrapper">{articleDisplay}</div>
      </div>
    );
  }
}
