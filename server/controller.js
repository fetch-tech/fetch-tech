const NewsAPI = require("newsapi");
var moment = require("moment");

const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

const todayDate = moment().format("YYYY-MM-DD");
const yesterdayDate = moment(todayDate)
  .subtract(1, "days")
  .format("YYYY-MM-DD");

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

module.exports = {
  homePageArticles,
  devPageArticles,
  entertainmentPageArticles,
  searchArticles
};
