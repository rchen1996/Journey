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
  deleteDayFromItinerary,
  reorderDays,
  deleteActivity,
  updateActivity,
  editItinerary,
}) => {
  router.get('/', (req, res) => {
    getAllItineraries().then(itineraries => res.send(itineraries));
  });

  router.post('/', (req, res) => {
    const userId = req.session.userId;
    let { startDate, image } = req.body;

    if (startDate === '') {
      startDate = null;
    }

    if (image === '') {
      image =
        'https://images.unsplash.com/photo-1503221043305-f7498f8b7888?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80';
    }

    if (userId) {
      createNewItinerary({
        ...req.body,
        userId,
        startDate,
        image,
      }).then(itinerary => {
        createTravelParty(itinerary.id, userId).then(travelParty => {
          getTravelParty(itinerary.id).then(users => {
            getDetailedItinerary(itinerary.id).then(fullItinerary => {
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

  router.put('/:itinerary_id', (req, res) => {
    const userId = req.session.userId;
    let { startDate, image } = req.body;

    if (startDate === '') {
      startDate = null;
    }

    if (image === '') {
      image =
        'https://images.unsplash.com/photo-1503221043305-f7498f8b7888?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80';
    }

    if (userId) {
      getTravelParty(req.body.id).then(travelParty => {
        let allowed = false;

        travelParty.forEach(member => {
          if (member.user_id === userId) {
            allowed = true;
          }
        });

        if (allowed) {
          editItinerary({ ...req.body, startDate, image }).then(() => {
            getDetailedItinerary(req.body.id).then(fullItinerary => {
              const parsed = itineraryObj(fullItinerary);

              const users = parseTravelParty(travelParty);

              const io = req.app.get('socketio');

              io.sockets.in(parsed.id).emit('itinerary', {
                ...parsed,
                users: users,
              });

              res.send({ ...parsed, users: users });
            });
          });
        } else {
          res.send({
            error: 'You do not have permissions to edit this itinerary',
          });
        }
      });
    } else {
      res.send({ error: 'You must be logged in to edit an itinerary' });
    }
  });

  router.get('/:itinerary_id/collaborators', (req, res) => {
    const itinerary_id = req.params.itinerary_id;
    getTravelParty(itinerary_id).then(party => {
      res.send(parseTravelParty(party));
    });
  });

  router.post('/:itinerary_id/users', (req, res) => {
    const { email } = req.body;
    const { itinerary_id } = req.params;
    getTravelParty(itinerary_id)
      .then(party => {
        for (const user of party) {
          if (user.email === email) {
            return res.send({ error: 'User already in party.' });
          }
        }

        addCollaborator(itinerary_id, email)
          .then(result => {
            if (result.message) {
              res.send({ error: 'No user with this email.' });
            } else {
              getTravelParty(itinerary_id).then(party => {
                const parsed = parseTravelParty(party);

                const io = req.app.get('socketio');

                io.sockets.in(Number(itinerary_id)).emit('itinerary', {
                  users: parsed,
                });

                res.send(parsed);
              });
            }
          })
          .catch(err => res.send(err));
      })
      .catch(err => res.send(err));
  });

  router.get('/:itinerary_id', (req, res) => {
    const itinerary_id = req.params.itinerary_id;
    getDetailedItinerary(itinerary_id).then(resultArr => {
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
      getTravelParty(itinerary_id).then(party => {
        const parsed = parseTravelParty(party);

        const io = req.app.get('socketio');

        io.sockets.in(Number(itinerary_id)).emit('itinerary', {
          users: parsed,
        });

        res.send(parsed);
      });
    });
  });

  router.delete(
    '/:itinerary_id/days/:day_id/activities/:activity_id',
    (req, res) => {
      const { itinerary_id, activity_id } = req.params;
      const userId = req.session.userId;

      if (!userId) {
        res.send({ error: 'You must be logged in to delete an activity' });
      } else {
        getTravelParty(itinerary_id).then(travelParty => {
          let allowed = false;
          travelParty.forEach(member => {
            if (member.id === userId) {
              allowed = true;
            }
          });

          if (!allowed) {
            res.send({
              error: "You don't have permissions to delete this activity",
            });
          } else {
            deleteActivity(activity_id).then(() => {
              getDetailedItinerary(itinerary_id).then(result => {
                const itinerary = itineraryObj(result);

                const io = req.app.get('socketio');

                io.sockets.in(itinerary.id).emit('itinerary', itinerary);

                res.send(itinerary);
              });
            });
          }
        });
      }
    }
  );

  router.post('/:itinerary_id/days/:day_id/activities', (req, response) => {
    const { itinerary_id, day_id } = req.params;
    const userId = req.session.userId;

    getTravelParty(itinerary_id).then(userArr => {
      let userOfParty;
      for (const user of userArr) {
        if (user.user_id === userId) {
          userOfParty = true;
        }
      }

      if (userOfParty) {
        let {
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
            if (res.data.features.length < 1) {
              response.send({ addressError: 'This is not a valid address' });
            } else {
              const coordinatesArr = res.data.features[0].geometry.coordinates;
              const location = `${coordinatesArr[0]},${coordinatesArr[1]}`;

              if (image === '') {
                image =
                  'https://images.unsplash.com/photo-1523496922380-91d5afba98a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80';
              }

              createAttraction({
                name,
                description,
                category,
                image,
                address,
                location,
              }).then(attraction => {
                if (start === '') {
                  start = null;
                }

                if (end === '') {
                  end = null;
                }

                const activity = {
                  dayId: day_id,
                  start: start,
                  end: end,
                  attractionId: attraction.id,
                  itineraryId: itinerary_id,
                };
                createActivity(activity).then(activity => {
                  getDetailedItinerary(itinerary_id).then(itinerary => {
                    const parsed = itineraryObj(itinerary);

                    const io = req.app.get('socketio');

                    io.sockets.in(parsed.id).emit('itinerary', parsed);

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
    const { location_name, new_day_order } = req.body;
    addDayWithLocation(itinerary_id, location_name).then(result => {
      if (result.message) {
        res.send({ error: 'No such location in database' });
      } else {
        getDetailedItinerary(itinerary_id).then(resultArr => {
          let newItinerary = itineraryObj(resultArr);
          const last_day_order = newItinerary.locations
            .slice(-1)[0]
            .days.slice(-1)[0].day_order;

          console.log(
            'new_day_order:',
            new_day_order,
            'last day order:',
            last_day_order,
            'newItinerary:',
            newItinerary
          );
          if (new_day_order && last_day_order !== new_day_order) {
            console.log('does reorder');
            const daysIdArr = [];
            const daysOrderArr = [];
            newItinerary.locations.forEach(location => {
              location.days.forEach(day => {
                daysIdArr.push(day.id);
                daysOrderArr.push(day.day_order);
              });
            });
            daysIdArr.splice(new_day_order - 1, 0, daysIdArr.pop());

            reorderDays(daysIdArr, daysOrderArr).then(result => {
              if (result.message) {
                res.send({ error: result.message });
              } else {
                getDetailedItinerary(itinerary_id).then(resultArr => {
                  const parsed = itineraryObj(resultArr);

                  const io = req.app.get('socketio');

                  io.sockets.in(Number(itinerary_id)).emit('itinerary', parsed);

                  res.send(parsed);
                });
              }
            });
          } else {
            const io = req.app.get('socketio');

            io.sockets.in(newItinerary.id).emit('itinerary', newItinerary);
            res.send(newItinerary);
          }
        });
      }
    });
  });

  router.delete('/:itinerary_id/days/:day_id', (req, res) => {
    const { itinerary_id, day_id } = req.params;
    const io = req.app.get('socketio');

    deleteDayFromItinerary(day_id).then(result => {
      if (result.message) {
        res.send({ error: 'there was an error' });
      } else {
        getDetailedItinerary(itinerary_id).then(resultArr => {
          const bufferItinerary = itineraryObj(resultArr);
          const daysIdArr = [];
          const daysOrderArr = [];
          bufferItinerary.locations.forEach(location => {
            location.days.forEach(day => {
              daysIdArr.push(day.id);
              daysOrderArr.push(day.day_order);
            });
          });
          const newOrderArr = daysOrderArr.map((i, index) => index + 1);

          if (newOrderArr.length === 0) {
            io.sockets
              .in(bufferItinerary.id)
              .emit('itinerary', bufferItinerary);

            res.send(bufferItinerary);
          } else {
            reorderDays(daysIdArr, newOrderArr).then(result => {
              if (result.message) {
                res.send({
                  error: `error with reorderDays: ${result.message}`,
                });
              } else {
                getDetailedItinerary(itinerary_id).then(resultArr => {
                  const parsed = itineraryObj(resultArr);
                  const io = req.app.get('socketio');

                  io.sockets.in(Number(itinerary_id)).emit('itinerary', parsed);

                  res.send(parsed);
                });
              }
            });
          }
        });
      }
    });
  });

  router.put('/:itinerary_id/activities/:activity_id', (req, res) => {
    const { itinerary_id, activity_id } = req.params;
    let { start_time, end_time, notes } = req.body;
    if (start_time === '') start_time = null;
    if (end_time === '') end_time = null;
    updateActivity(start_time, end_time, notes, activity_id).then(result => {
      if (result.message) {
        res.send({ error: `apiHelpers: ${result.message}` });
      } else {
        getDetailedItinerary(itinerary_id).then(resultArr => {
          const parsed = itineraryObj(resultArr);

          const io = req.app.get('socketio');

          io.sockets.in(Number(itinerary_id)).emit('itinerary', parsed);
          res.send(parsed);
        });
      }
    });
  });

  return router;
};
