module.exports = db => {
  const getAllItineraries = () => {
    const query = {
      text: 'SELECT * FROM itineraries LIMIT 25;',
    };

    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err);
  };

  const createNewItinerary = itinerary => {
    const query = {
      text: `INSERT INTO itineraries (name, description, image, trip_type, creator_id, start_date, end_date) 
      VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`,
      values: [
        itinerary.name,
        itinerary.description,
        itinerary.image,
        itinerary.tripType,
        itinerary.userId,
        itinerary.startDate,
        itinerary.endDate,
      ],
    };

    return db
      .query(query)
      .then(result => result.rows[0])
      .catch(err => err);
  };

  const createTravelParty = (itineraryId, userId) => {
    const query = {
      text: `INSERT INTO travel_parties (itinerary_id, user_id)
      VALUES($1, $2) RETURNING *;`,
      values: [itineraryId, userId],
    };

    return db
      .query(query)
      .then(result => result.rows[0])
      .catch(err => err);
  };

  return {
    getAllItineraries,
    createNewItinerary,
    createTravelParty,
  };
};
