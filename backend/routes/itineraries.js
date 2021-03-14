const express = require('express');
const router = express.Router();
const { itineraryObj, parseTravelParty} = require('../helpers/dataHelpers');

module.exports = ({
  getAllItineraries,
  createNewItinerary,
  createTravelParty,
  getDetailedItinerary,
  getTravelParty,
  deleteCollaborator
  
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
      res.send(parseTravelParty(party));
    });
  });

  router.get('/:itinerary_id', (req, res) => {
    const itinerary_id = req.params.itinerary_id;
    getDetailedItinerary(itinerary_id).then((resultArr) => {
      const itinerary = itineraryObj(resultArr);

      res.send(itinerary);
    });
  });

  router.delete('/:itinerary_id/users/:user_id', (req, res) => {
    const {itinerary_id, user_id} = req.params
    deleteCollaborator(itinerary_id, user_id).then(result => {
      res.send(result)
    })
  })

  return router;
};
