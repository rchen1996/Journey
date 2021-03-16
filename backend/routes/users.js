const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = ({
  getUser,
  getUserByEmail,
  addUser,
  getItinerariesForGroup,
  getBookmarksForUser,
  deleteBookmark,
  getBookmark,
  addBookmark,
  getBookmarkByItineraryId,
}) => {
  router.post('/logout', (req, res) => {
    req.session.userId = null;
    res.send({ message: 'successful logout' });
  });

  router.post('/login', (req, res) => {
    getUserByEmail(req.body.email).then(user => {
      if (user && bcrypt.compareSync(req.body.password, user.password)) {
        req.session.userId = user.id;
        const { id, email, first_name, last_name } = user;
        const parsed = { id, email, first_name, last_name };
        res.send(parsed);
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
      .then(user => {
        if (user) {
          res.json({
            msg: 'Sorry, a user account with this email already exists',
          });
        } else {
          return addUser(first_name, last_name, email, hash).then(user => {
            req.session.userId = user.id;
            res.send(user);
          });
        }
      })
      .catch(err =>
        res.json({
          error: err.message,
        })
      );
  });

  router.get('/:user_id/itineraries', (req, res) => {
    const userId = req.session.userId;

    if (userId) {
      getItinerariesForGroup(userId).then(itineraries => {
        res.send(itineraries);
      });
    } else {
      res.send({ error: 'You must be logged in to get itineraries' });
    }
  });

  router.get('/:user_id/bookmarks', (req, res) => {
    const userId = req.session.userId;

    if (userId) {
      getBookmarksForUser(userId).then(bookmarks => {
        res.send(bookmarks);
      });
    } else {
      res.send({ error: 'You must be logged in to get bookmarks' });
    }
  });

  router.post('/:user_id/bookmarks', (req, res) => {
    const userId = req.session.userId;

    if (userId) {
      getBookmarkByItineraryId(req.body.itineraryId, userId).then(result => {
        if (result.length < 1) {
          addBookmark(req.body.itineraryId, userId).then(() => {
            getBookmarksForUser(userId).then(bookmarks => {
              res.send(bookmarks);
            });
          });
        } else {
          res.send({ error: 'Itinerary is already bookmarked' });
        }
      });
    } else {
      res.send({ error: 'You must be logged in to add a bookmark' });
    }
  });

  router.delete('/:user_id/bookmarks/:bookmark_id', (req, res) => {
    const userId = req.session.userId;
    const bookmarkId = req.params.bookmark_id;

    if (!userId) {
      res.send({ error: 'You must be logged in to delete a bookmark.' });
    } else {
      getBookmark(bookmarkId).then(bookmark => {
        if (bookmark.user_id !== userId) {
          res.send({ error: "You cannot delete another user's bookmark" });
        } else {
          deleteBookmark(bookmarkId).then(() => {
            getBookmarksForUser(userId).then(bookmarks => {
              res.send(bookmarks);
            });
          });
        }
      });
    }
  });

  return router;
};
