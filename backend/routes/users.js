const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = ({ getUser, getUserByEmail, addUser }) => {
  router.post('/logout', (req, res) => {
    req.session.userId = null;
    res.send({ message: 'successful logout' });
  });

  router.post('/login', (req, res) => {
    getUserByEmail(req.body.email).then((user) => {
      if (user && bcrypt.compareSync(req.body.password, user.password)) {
        req.session.userId = user.id;
        res.send(user);
      } else {
        res.send({ error: 'Error' });
      }
    });
  });

  router.get('/:user_id', (req, res) => {
    getUser(req.session.userId)
      .then(user => res.send(user))
      .catch(err =>
        res.send({
          error: err.message,
        })
      );
  });

  router.post('/', (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    const hash = bcrypt.hashSync(password, saltRounds);
    getUserByEmail(email)
      .then((user) => {
        if (user) {
          res.json({
            msg: 'Sorry, a user account with this email already exists',
          });
        } else {
          req.session.userId = user.id;
          return addUser(first_name, last_name, email, hash);
        }
      })
      .then((newUser) => res.json(newUser))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  return router;
};
