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

module.exports = {
  getUser,
  getUserClaps,
  getUserBookmarks
};
