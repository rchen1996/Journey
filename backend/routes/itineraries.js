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
  addCollaborator,
  createActivity,
  addDayWithLocation,
  getItinerary,
  deleteItinerary,
  getItinerariesForGroup,
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
        createTravelParty(itinerary.id, userId).then((travelParty) => {
          getTravelParty(itinerary.id).then((users) => {
            getDetailedItinerary(itinerary.id).then((fullItinerary) => {
              const parsed = itineraryObj(fullItinerary);
              res.send({ ...parsed, users: parseTravelParty(users) });
            });
          });
        });
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

  router.post('/:itinerary_id/users', (req, res) => {
    const { email } = req.body;
    const { itinerary_id } = req.params;
    getTravelParty(itinerary_id)
      .then((party) => {
        for (const user of party) {
          if (user.email === email) {
            return res.send({ error: 'User already in party.' });
          }
        }

        addCollaborator(itinerary_id, email)
          .then((result) => {
            if (result.message) {
              res.send({ error: 'No user with this email.' });
            } else {
              getTravelParty(itinerary_id).then((party) => {
                res.send(parseTravelParty(party));
              });
            }
          })
          .catch((err) => res.send(err));
      })
      .catch((err) => res.send(err));
  });

  router.get('/:itinerary_id', (req, res) => {
    const itinerary_id = req.params.itinerary_id;
    getDetailedItinerary(itinerary_id).then((resultArr) => {
      const itinerary = itineraryObj(resultArr);

      res.send(itinerary);
    });
  });

  router.delete('/:itinerary_id', (req, res) => {
    const itineraryId = req.params.itinerary_id;
    const userId = req.session.userId;

    if (!userId) {
      res.send({ error: 'You must be logged in to delete an itinerary.' });
    } else {
      getItinerary(itineraryId).then(itinerary => {
        if (itinerary.creator_id !== userId) {
          res.send({
            error: 'You must be the creator of an itinerary to delete it.',
          });
        } else {
          deleteItinerary(itineraryId).then(() => {
            getItinerariesForGroup(userId).then(itineraries => {
              res.send(itineraries);
            });
          });
        }
      });
    }
  });

  router.delete('/:itinerary_id/users/:user_id', (req, res) => {
    const { itinerary_id, user_id } = req.params;
    deleteCollaborator(itinerary_id, user_id).then(() => {
      getTravelParty(itinerary_id).then((party) => {
        res.send(parseTravelParty(party));
      });
    });
  });

  router.post('/:itinerary_id/days/:day_id/activities', (req, response) => {
    const { itinerary_id, day_id } = req.params;
    const userId = req.session.userId;

    getTravelParty(itinerary_id).then((userArr) => {
      let userOfParty;
      for (const user of userArr) {
        if (user.user_id === userId) {
          userOfParty = true;
        }
      }

      if (userOfParty) {
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
          .then((res) => {
            if (res.data.features.length < 1) {
              response.send({ addressError: 'This is not a valid address' });
            } else {
              const coordinatesArr = res.data.features[0].geometry.coordinates;
              const location = `${coordinatesArr[0]},${coordinatesArr[1]}`;
              createAttraction({
                name,
                description,
                category,
                image,
                address,
                location,
              }).then((attraction) => {
                const activity = {
                  dayId: day_id,
                  start: start,
                  end: end,
                  attractionId: attraction.id,
                  itineraryId: itinerary_id,
                };

                createActivity(activity).then((activity) => {
                  getDetailedItinerary(itinerary_id).then((itinerary) => {
                    const parsed = itineraryObj(itinerary);

                    response.send(parsed);
                  });
                });
              });
            }
          });
      } else {
        response.send({
          error:
            'You do not have permission to add activities to this itinerary',
        });
      }
    });
  });

  router.post('/:itinerary_id', (req, res) => {
    const { itinerary_id } = req.params;
    const { location_name } = req.body;
    addDayWithLocation(itinerary_id, location_name).then((result) => {
      if (result.message) {
        res.send({ error: 'No such location in database' });
      } else {
        getDetailedItinerary(itinerary_id).then((resultArr) => {
          res.send(itineraryObj(resultArr));
        });
      }
    });
  });

  return router;
};
