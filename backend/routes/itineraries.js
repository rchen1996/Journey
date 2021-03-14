const express = require('express');
const router = express.Router();
const { itineraryObj, itineraryObj2 } = require('../helpers/dataHelpers');

module.exports = ({
  getAllItineraries,
  createNewItinerary,
  createTravelParty,
  getDetailedItinerary,
  getTravelParty,
}) => {
  router.get('/', (req, res) => {
    getAllItineraries().then((itineraries) => res.send(itineraries));
  });

  router.post('/', (req, res) => {
    const userId = req.session.userId;
    let { startDate, endDate } = req.body;

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
      }).then((itinerary) => {
        createTravelParty(itinerary.id, userId).then((travelParty) =>
          res.send(itinerary)
        );
      });
    } else {
      res.send({ error: 'cannot create itinerary when user does not exist' });
    }
  });

  router.get('/:itinerary_id/collaborators', (req, res) => {
    const itinerary_id = req.params.itinerary_id;
    getTravelParty(itinerary_id).then((party) => {
      res.send(party);
    });
  });

  router.get('/:itinerary_id', (req, res) => {
    const itinerary_id = req.params.itinerary_id;
    getDetailedItinerary(itinerary_id).then((resultArr) => {
      const itinerary = itineraryObj(resultArr);

      res.send(itinerary);
    });
  });

  return router;
};
