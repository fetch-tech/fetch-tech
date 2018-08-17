const _ = require("lodash");
const getGenStories = (req, res, next) => {
  const { userId } = req.body;
  const db = req.app.get("db");
  db.getStories([userId]).then(stories => {
    const result = _(stories)
      .groupBy(story => story.username)
      .map((value, key) => ({ username: key, stories: value }))
      .value();
    res.send({ stories: result });
  });
};

module.exports = {
  getGenStories
};
