const Twit = require("twit");
var moment = require("moment");

const todayDate = moment().format("YYYY-MM-DD");

const {
  consumer_key,
  consumer_secret,
  access_token,
  access_token_secret
} = process.env;

const T = new Twit({
  consumer_key: consumer_key,
  consumer_secret: consumer_secret,
  access_token: access_token,
  access_token_secret: access_token_secret
});
const queries = [
  "programming",
  "javascript",
  "web programming",
  "dan abramov",
  "Reactjs",
  "vuejs",
  "angularjs"
];

const devArticlesOptions = () => {
  let q = Math.floor(Math.random() * queries.length);
  return q;
};

const searchTrendingTweets = (req, res, next) => {
  let params = queries[devArticlesOptions()];
  T.get(
    "search/tweets",
    { q: `${params} since:${todayDate}`, language: "en", count: 50 },
    (err, data, response) => {
      res.send({ tweets: data.statuses });
    }
  );
};

module.exports = {
  searchTrendingTweets
};
