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

  const getTravelParty = itineraryId => {
    const query = {
      text: `select * from travel_parties 
      JOIN users ON user_id = users.id
      WHERE itinerary_id = $1;`,
      values: [itineraryId],
    };

    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err);
  };

  const getDetailedItinerary = itineraryId => {
    const query = {
      text: `select
      itineraries.* ,
      days.id as day_id,
      days.day_order as day_order,
      locations.name as location_name,
      locations.id as location_id,
      activities.id as activity_id,
      activities.start_time as activity_start_time,
      activities.end_time as activity_end_time,
      attractions.name as attraction_name,
      attractions.image as attraction_image,
      attractions.address as attraction_address,
      attractions.location as attraction_location,
      attractions.visible as attraction_visibility,
      attractions.category as attraction_category,
      attractions.description as attraction_description

      from itineraries 
      LEFT JOIN days ON itineraries.id = itinerary_id 
      LEFT JOIN locations ON location_id = locations.id
      LEFT JOIN activities ON days.id = day_id
      LEFT JOIN attractions on attractions.id = attraction_id      
      WHERE itineraries.id = $1 
      GROUP BY itineraries.id, days.id, locations.id,activities.id,attractions.id
      ORDER BY days.id;`,
      values: [itineraryId],
    };
    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err);
  };

  return {
    getAllItineraries,
    createNewItinerary,
    createTravelParty,
    getDetailedItinerary,
    getTravelParty,
  };
};
