const express = require('express');
const router = express.Router();

module.exports = ({ getAllItineraries, createNewItinerary }) => {
  router.get('/', (req, res) => {
    getAllItineraries().then(itineraries => res.send(itineraries));
  });

  router.post('/', (req, res) => {
    const { name, description, tripType, image, startDate, endDate } = req.body;
    const userId = req.session.userId;

    if (userId) {
      createNewItinerary(
        name,
        description,
        image,
        tripType,
        userId,
        startDate,
        endDate
      ).then(itinerary => res.send(itinerary));
    } else {
      res.send({ error: 'cannot create itinerary when user does not exist' });
    }
  });

  return router;
};
