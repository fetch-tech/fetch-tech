/* claps_controller contains all methods that deal with the claps associated with an article and user */

// Retrieves claps
const getUserClaps = (req, res, next) => {
  const { user_id } = req.params;

  const db = req.app.get('db');

  db.get_user_claps([user_idid])
    .then(userClaps => res.status(200).send(userClaps))
    .catch(err => rs.status(500).send({ getUserClapsError: err }));
}

module.exports = {
  getUserClaps
}