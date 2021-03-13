const express = require('express');
const router = express.Router();

module.exports = ({ getAllItineraries }) => {
  router.get('/', (req, res) => {
    getAllItineraries().then(itineraries => res.send(itineraries));
  });

  return router;
};
