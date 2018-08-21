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

const searchTwitter = (req, res, next) => {
  T.get(
    "search/tweets",
    { q: `${req.params.item} since:${todayDate}`, language: "en", count: 50 },
    (err, data, response) => {
      res.send({ tweets: data });
    }
  );
};

module.exports = {
  searchTwitter
};
