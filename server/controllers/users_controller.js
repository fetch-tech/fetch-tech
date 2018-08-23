/* user_controller contains all methods that deal with the user's information within the application */
const _ = require("lodash");

// Retrieves specific user's data from database
const getUser = (req, res, next) => {
  // user_id from params
  // const { user_id } = req.session.passport.user;
  // const db = req.app.get("db");
  // db.get_user([user_id])
  //   .then(user => res.status(200).send(user))
  //   .catch(err => res.status(500).send({ getUserError: err }));
};

const getUserInfo = (req, res, next) => {
  const { userId } = req.body;
  const db = req.app.get("db");
  db.get_user([userId]).then(user => {
    res.send({ user });
  });
};

// Retrieves claps made on articles
const getUserClaps = (req, res, next) => {
  const { userId } = req.body;

  const db = req.app.get("db");

  db.get_user_claps([userId]).then(claps => {
    res.send({ claps });
  });
};

function removeDuplicates(myArr, prop) {
  return myArr.filter((obj, pos, arr) => {
    if (obj.mvtIdentifier) {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    } else {
      return arr.push(obj);
    }
  });
}

// Retrieves user's bookmarks
const getUserBookmarks = (req, res, next) => {
  const { userId } = req.body;

  const db = req.app.get("db");

  db.get_user_bookmarks([userId]).then(bookmarks => {
    res.send({ bookmarks });
  });
};

// Retrieves user's article comments
const getUserComments = (req, res, next) => {
  const { user_id } = req.session.passport.user;

  const db = req.app.get("db");

  db.get_user_comments([user_id])
    .then(userComments => res.status(200).send(userComments))
    .catch(err => res.status(500).send({ getUserCommentsError: err }));
};

// Retrieves user's follower count
const getUserFollowers = (req, res, next) => {
  const { userId } = req.body;

  const db = req.app.get("db");

  db.get_user_followers([userId]).then(users => {
    res.send({ users });
  });
};

// Retrieves user's following count
const getUserFollowing = (req, res, next) => {
  const { userId } = req.body;

  const db = req.app.get("db");

  db.get_user_following([userId]).then(users => {
    res.send({ users });
  });
};

// Retrieves user's stories
const getUserStories = (req, res, next) => {
  const { user_id } = req.session.passport.user;

  const db = req.app.get("db");

  db.get_user_stories([user_id])
    .then(stories => res.status(200).send(stories))
    .catch(err => res.status(500).send({ getUserStoriesError: err }));
};

const postCoverImage = (req, res, next) => {
  const { userId, coverUrl } = req.body;
  const db = req.app.get("db");
  db.updateCoverImage([coverUrl, userId]).then(response => {
    res.send({ success: true });
  });
};

const postProfileImage = (req, res, next) => {
  const { userId, profilerUrl } = req.body;
  const db = req.app.get("db");
  db.updateProfileImage([profilerUrl, userId]).then(response => {
    res.send({ success: true });
  });
};

module.exports = {
  getUser,
  getUserClaps,
  getUserBookmarks,
  getUserComments,
  getUserFollowers,
  getUserFollowing,
  getUserStories,
  postCoverImage,
  postProfileImage,
  getUserInfo
};
