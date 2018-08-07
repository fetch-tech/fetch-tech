/* user_controller contains all methods that deal with the user's information within the application */

const getUser = (req, res, next) => {
  const { id } = req.params;

  const db = req.app.get('db');

  db.get_user([id])
    .then(user => res.status(200).send(user))
    .catch(err => res.status(500).send({ getUserError: err }));
}

module.exports = {
  getUser
}