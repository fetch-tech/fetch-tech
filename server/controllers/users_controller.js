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
  const { user_id } = req.params;

  const db = req.app.get("db");

  db.get_user_claps([user_id])
    .then(userClaps => res.status(200).send(userClaps))
    .catch(err => res.status(500).send({ getUserClapsError: err }));
};

// Retrieves user's bookmarks
const getUserBookmarks = (req, res, next) => {
  const { user_id } = req.params;

  const db = req.app.get("db");

  db.get_user_bookmarks([user_id])
    .then(userBookmarks => res.status(200).send(userBookmarks))
    .catch(err => res.status(500).send({ getUserBookmarksError: err }));
};

// Retrieves user's article comments
const getUserComments = (req, res, next) => {
  const { user_id } = req.params;

  const db = req.app.get("db");

  db.get_user_comments([user_id])
    .then(userComments => res.status(200).send(userComments))
    .catch(err => res.status(500).send({ getUserCommentsError: err }));
};

// Retrieves user's follower count
const getUserFollowerCount = (req, res, next) => {
  const { user_id } = req.params;

  const db = req.app.get("db");

  db.get_user_follower_count([user_id])
    .then(followerCount => res.status(200).send(followerCount))
    .catch(err => res.status(500).send({ getUserFollowerCountError: err }));
};

// Retrieves user's following count
const getUserFollowingCount = (req, res, next) => {
  const { user_id } = req.params;

  const db = req.app.get("db");

  db.get_user_following_count([user_id])
    .then(followingCount => res.status(200).send(followingCount))
    .catch(err => res.status(500).send({ getUserFollowingCountError: err }));
};

module.exports = {
  getUser,
  getUserClaps,
  getUserBookmarks,
  getUserComments,
  getUserFollowerCount,
  getUserFollowingCount
};
