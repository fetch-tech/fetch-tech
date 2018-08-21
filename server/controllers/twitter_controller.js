const Twit = require("twit");

let tweetJS = [];
let tweetReact = [];
let tweetRedux = [];
let tweetVue = [];
let tweetAngular = [];
let query = "javaScript";

let error = false;

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

// Search JavaScript Tweet //
const searchTweet = (req, res) => {
  T.get(
    "search/tweets",
    { q: query, count: 2, language: "en" },
    (err, data) => {
      const searchArr = data.statuses;

      const searchArrWithIndex = searchArr.map((object, index) => {
        return object;
      });

      tweetJS = searchArrWithIndex;
      res.status(200).send(tweetJS);
    }
  );
};

// Search React Tweet //
const searchReact = (req, res) => {
  T.get(
    "search/tweets",
    { q: "#React", count: 2, language: "en" },
    (err, data) => {
      const searchReactArr = data.statuses;

      const searchReactArrWithIndex = searchReactArr.map((object, index) => {
        return object;
      });

      tweetReact = searchReactArrWithIndex;
      res.status(200).send(tweetReact);
    }
  );
};

// Search Redux Tweet //
const searchRedux = (req, res) => {
  T.get(
    "search/tweets",
    { q: "#Redux", count: 2, language: "en" },
    (err, data) => {
      const searchRedux = data.statuses;

      const searchReduxWithIndex = searchRedux.map((object, index) => {
        return object;
      });

      tweetRedux = searchReduxWithIndex;
      res.status(200).send(tweetRedux);
    }
  );
};
// Search Vue Tweet //
const searchVue = (req, res) => {
  T.get(
    "search/tweets",
    { q: "#Vue", count: 2, language: "en" },
    (err, data) => {
      const searchVue = data.statuses;

      const searchVueArrWithIndex = searchVue.map((object, index) => {
        return object;
      });

      tweetVue = searchVueArrWithIndex;
      res.status(200).send(tweetVue);
    }
  );
};

const searchAngular = (req, res) => {
  T.get(
    "search/tweets",
    { q: "#angular", count: 2, language: "en" },
    (err, data) => {
      const seearchAngular = data.statuses;

      const searchAngularWithIndex = seearchAngular.map((object, index) => {
        return object;
      });

      tweetAngular = searchAngularWithIndex;
      res.status(200).send(tweetAngular);
    }
  );
};

module.exports = {
  searchTweet,
  searchReact,
  searchRedux,
  searchVue,
  searchAngular
};
