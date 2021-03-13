const express = require('express');
const router = express.Router();

module.exports = ({ getAllItineraries, createNewItinerary }) => {
  router.get('/', (req, res) => {
    getAllItineraries().then(itineraries => res.send(itineraries));
  });

  router.post('/', (req, res) => {
    const userId = req.session.userId;
    let { name, description, image, tripType, startDate, endDate } = req.body;

    if (startDate === '') {
      startDate = null;
    }

    if (endDate === '') {
      endDate = null;
    }

    if (userId) {
      createNewItinerary({
        ...req.body,
        userId,
        startDate,
        endDate,
      }).then(itinerary => res.send(itinerary));
    } else {
      res.send({ error: 'cannot create itinerary when user does not exist' });
    }
  });

  return router;
};
