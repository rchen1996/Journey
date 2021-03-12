const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

module.exports = ({ getUsers, getUserByEmail, addUser }) => {
  router.get('/', (req, res) => {
    getUsers()
      .then(users => res.json(users))
      .catch(err =>
        res.json({
          error: err.message,
        })
      );
  });

  router.post('/', (req, res) => {
    const { first_name, last_name, email, password } = req.body;

    getUserByEmail(email)
      .then(user => {
        if (user) {
          res.json({
            msg: 'Sorry, a user account with this email already exists',
          });
        } else {
          return addUser(first_name, last_name, email, password);
        }
      })
      .then(newUser => res.json(newUser))
      .catch(err =>
        res.json({
          error: err.message,
        })
      );
  });

  router.post('/logout', (req, res) => {
    req.session.userId = null;
  });

  router.post('/login', (req, res) => {
    const user = getUserByEmail(req.body.email);

    // if able to find user by email aka user exists
    if (req.user && bcrypt.compareSync(user.password, req.body.password)) {
      req.session.userId = user.id;
    }
  });

  return router;
};
