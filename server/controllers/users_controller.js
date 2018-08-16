/* user_controller contains all methods that deal with the user's information within the application */

// Retrieves specific user's data from database
const getUser = (req, res, next) => {
  // user_id from params
  const { id } = req.params;

  const db = req.app.get("db");

  db.get_user([id])
    .then(user => res.status(200).send(user))
    .catch(err => res.status(500).send({ getUserError: err }));
};

// Retrieves claps made on articles
const getUserClaps = (req, res, next) => {
  const { user_id } = req.session.passport.user;

  const db = req.app.get("db");

  db.get_user_claps([user_id])
    .then(userClaps => res.status(200).send(userClaps))
    .catch(err => res.status(500).send({ getUserClapsError: err }));
};

// Retrieves user's bookmarks
const getUserBookmarks = (req, res, next) => {
  const { user_id } = req.session.passport.user;

  const db = req.app.get("db");

  db.get_user_bookmarks([user_id])
    .then(userBookmarks => res.status(200).send(userBookmarks))
    .catch(err => res.status(500).send({ getUserBookmarksError: err }));
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
  const { user_id } = req.session.passport.user;

  const db = req.app.get("db");

  db.get_user_followers([user_id])
    .then(followers => res.status(200).send(followers))
    .catch(err => res.status(500).send({ getUserFollowersError: err }));
};

// Retrieves user's following count
const getUserFollowing = (req, res, next) => {
  const { user_id } = req.session.passport.user;

  const db = req.app.get("db");

  db.get_user_following([user_id])
    .then(following => res.status(200).send(following))
    .catch(err => res.status(500).send({ getUserFollowingError: err }));
};

// Retrieves user's stories
const getUserStories = (req, res, next) => {
  const { user_id } = req.session.passport.user;

  const db = req.app.get("db");

  db.get_user_stories([user_id])
    .then(stories => res.status(200).send(stories))
    .catch(err => res.status(500).send({ getUserStoriesError: err }));
};

module.exports = {
  getUser,
  getUserClaps,
  getUserBookmarks,
  getUserComments,
  getUserFollowers,
  getUserFollowing,
  getUserStories
};
