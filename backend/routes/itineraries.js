const axios = require('axios');
const express = require('express');
const router = express.Router();
const { itineraryObj, parseTravelParty } = require('../helpers/dataHelpers');

module.exports = ({
  getAllItineraries,
  createNewItinerary,
  createTravelParty,
  getDetailedItinerary,
  getTravelParty,
  deleteCollaborator,
  createAttraction,
}) => {
  router.get('/', (req, res) => {
    getAllItineraries().then(itineraries => res.send(itineraries));
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
      }).then(itinerary => {
        createTravelParty(itinerary.id, userId).then(travelParty =>
          res.send(itinerary)
        );
      });
    } else {
      res.send({ error: 'cannot create itinerary when user does not exist' });
    }
  });

  router.get('/:itinerary_id/collaborators', (req, res) => {
    const itinerary_id = req.params.itinerary_id;
    getTravelParty(itinerary_id).then(party => {
      res.send(parseTravelParty(party));
    });
  });

  router.get('/:itinerary_id', (req, res) => {
    const itinerary_id = req.params.itinerary_id;
    getDetailedItinerary(itinerary_id).then(resultArr => {
      const itinerary = itineraryObj(resultArr);

      res.send(itinerary);
    });
  });

  router.delete('/:itinerary_id/users/:user_id', (req, res) => {
    const { itinerary_id, user_id } = req.params;
    deleteCollaborator(itinerary_id, user_id).then(() => {
      getTravelParty(itinerary_id).then(party => {
        res.send(parseTravelParty(party));
      });
    });
  });

  router.post('/:itinerary_id/days/:day_id/activities', (req, res) => {
    const {
      start,
      end,
      name,
      description,
      image,
      category,
      street,
      city,
      state,
      country,
      postal,
    } = req.body;
    const address = `${street} ${city}, ${state}, ${country} ${postal}`;
    const addressNoPostal = `${street} ${city}, ${state}, ${country}`;
    const query = addressNoPostal.replace(/\s/g, '+').replace(/,/g, '%2C');
    axios
      .get(
        `https://nominatim.openstreetmap.org/search?q=${query}&format=geojson`
      )
      .then(res => {
        const coordinatesArr = res.data.features[0].geometry.coordinates;
        const location = `${coordinatesArr[0]},${coordinatesArr[1]}`;
        createAttraction({
          name,
          description,
          category,
          image,
          address,
          location,
        }).then(attraction => {
          console.log(attraction);
        });
      });
  });

  return router;
};
