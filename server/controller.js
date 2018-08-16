const NewsAPI = require("newsapi");
var moment = require("moment");
const giphy = require("giphy-api")(process.env.GIPHY_API_KEY);

const newsapi = new NewsAPI(process.env.NEWS_API_KEY);
// const giphyapi = new GiphyAPI(process.env.GIPHY_API_KEY);

const todayDate = moment().format("YYYY-MM-DD");
const yesterdayDate = moment(todayDate)
  .subtract(1, "days")
  .format("YYYY-MM-DD");

// const lastMonth = momment(todayDate)
// .subtract(30, 'days')
// .format('YYY-MM-DD');

const homePageArticles = (req, res, next) => {
  newsapi.v2
    .topHeadlines({
      from: yesterdayDate,
      to: todayDate,
      category: "technology",
      language: "en",
      country: "us"
    })
    .then(response => {
      res.send({ articles: response });
    });
};

const queries = ["programming", "javascript", "python", "web programming"];

const devArticlesOptions = () => {
  let q = Math.floor(Math.random() * queries.length);
  return q;
};

const devPageArticles = (req, res, next) => {
  newsapi.v2
    .everything({
      q: queries[devArticlesOptions()],
      from: yesterdayDate,
      to: todayDate,
      sortBy: "relevancy",
      language: "en"
    })
    .then(response => {
      res.send({ articles: response });
    });
};

const entertainmentPageArticles = (req, res, next) => {
  newsapi.v2
    .topHeadlines({
      from: yesterdayDate,
      to: todayDate,
      category: "entertainment",
      language: "en",
      country: "us"
    })
    .then(response => {
      res.send({ articles: response });
    });
};

const searchArticles = (req, res, next) => {
  const q = req.params.searchTerm;
  newsapi.v2
    .everything({
      q: q,
      from: yesterdayDate,
      to: todayDate,
      sortBy: "relevancy",
      language: "en"
    })
    .then(response => {
      res.send({ articles: response });
    });
};

//
const giphyGifs = (req, res, next) => {
  giphy
    .search({
      q: ["programmer", "javascript", "web programming"],
      limit: 58,
      rating: "PG-13"
    })
    .then(function(response) {
      res.send({ gifs: response });
      console.log(response);
    });
};
const giphyGifs2 = (req, res, next) => {
  giphy
    .search({
      q: ["Boss", "co-workers", "computer", "funny"],
      limit: 54,
      rating: "PG-13"
    })
    .then(function(response) {
      res.send({ gifs2: response });
    });
};
const giphyGifs3 = (req, res, next) => {
  giphy
    .search({
      q: ["gamming", "robots", "teacher"],
      limit: 50,
      rating: "PG-13"
    })
    .then(function(response) {
      res.send({ gifs3: response });
    });
};
const giphyGifs4 = (req, res, next) => {
  giphy
    .search({
      q: ["knockout", "movie quotes", "fails", "sports"],
      limit: 62,
      rating: "PG-13"
    })
    .then(function(response) {
      res.send({ gifs4: response });
    });
};

module.exports = {
  homePageArticles,
  devPageArticles,
  entertainmentPageArticles,
  searchArticles,
  giphyGifs,
  giphyGifs2,
  giphyGifs3,
  giphyGifs4
};
