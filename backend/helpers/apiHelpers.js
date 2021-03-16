module.exports = db => {
  const getAllItineraries = () => {
    const query = {
      text: `SELECT itineraries.*, COUNT(days.id) AS days FROM itineraries
      LEFT JOIN days ON itineraries.id = days.itinerary_id
      GROUP BY itineraries.id
      LIMIT 25;`,
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

  const deleteCollaborator = (itineraryId, userId) => {
    const query = {
      text: `delete from travel_parties
      WHERE itinerary_id = $1 AND user_id = $2
      RETURNING *;`,
      values: [itineraryId, userId],
    };

    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err);
  };

  const addCollaborator = (itineraryId, userEmail) => {
    const query = {
      text: `INSERT INTO travel_parties (itinerary_id,user_id)
      VALUES ($1, (SELECT id from users WHERE email= $2))
      RETURNING *`,
      values: [itineraryId, `${userEmail}`],
    };
    return db
      .query(query)
      .then(result => result.rows[0])
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
      activities.notes as activity_notes,
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
      ORDER BY days.day_order;`,
      values: [itineraryId],
    };
    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err);
  };

  const createAttraction = attraction => {
    const query = {
      text: `INSERT INTO attractions (name, description, category, image, address, location)
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
      values: [
        attraction.name,
        attraction.description,
        attraction.category,
        attraction.image,
        attraction.address,
        attraction.location,
      ],
    };

    return db
      .query(query)
      .then(result => result.rows[0])
      .catch(err => err);
  };

  const createActivity = activity => {
    const query = {
      text: `INSERT INTO activities (day_id, start_time, end_time, attraction_id, itinerary_id)
      VALUES($1, $2, $3, $4, $5) RETURNING *;`,
      values: [
        activity.dayId,
        activity.start,
        activity.end,
        activity.attractionId,
        activity.itineraryId,
      ],
    };

    return db
      .query(query)
      .then(result => result.rows[0])
      .catch(err => err);
  };

  const addDayWithLocation = (itineraryId, locationName) => {
    const query = {
      text: `INSERT INTO days (itinerary_id,location_id,day_order )
    VALUES($1,
      (select id from locations where name = $2), 
      (select coalesce(max(day_order),0) from days where itinerary_id = $1)+1)
    RETURNING *;`,
      values: [itineraryId, locationName],
    };
    return db
      .query(query)
      .then(result => {
        console.log('add Day to itinerary:', result.rows[0]);
        return result.rows[0];
      })
      .catch(err => err);
  };
  const getItinerary = itineraryId => {
    const query = {
      text: `SELECT * FROM itineraries WHERE id = $1;`,
      values: [itineraryId],
    };

    return db
      .query(query)
      .then(result => result.rows[0])
      .catch(err => err);
  };

  const deleteItinerary = itineraryId => {
    const query = {
      text: `DELETE FROM itineraries WHERE id = $1 RETURNING *;`,
      values: [itineraryId],
    };

    return db
      .query(query)
      .then(result => result.rows[0])
      .catch(err => err);
  };

  const getItinerariesForGroup = id => {
    const query = {
      text: `SELECT itineraries.* FROM itineraries
      JOIN travel_parties ON itineraries.id = travel_parties.itinerary_id 
      WHERE user_id = $1`,
      values: [id],
    };

    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err);
  };

  const reorderDays = (daysIdArr, daysOrderArr) => {
    const whenStrings = `${daysIdArr
      .map((dayId, index) => {
        return `WHEN id = ${dayId} THEN ${daysOrderArr[index]}`;
      })
      .join(' ')}`;

    const whereString = `${daysIdArr.join(',')}`;
    const query = {
      text: `UPDATE days SET day_order = case
      ${whenStrings}
      END      
      WHERE id IN (${whereString})`,
    };
    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err);
  };

  const deleteDayFromItinerary = day_id => {
    const query = {
      text: `DELETE from days WHERE id = $1 RETURNING *`,
      values: [day_id],
    };
    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err);
  };

  const deleteActivity = activityId => {
    const query = {
      text: `DELETE FROM activities WHERE id = $1 RETURNING *;`,
      values: [activityId],
    };

    return db
      .query(query)
      .then(res => res.rows[0])
      .catch(err => err);
  };

  return {
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
  };
};
