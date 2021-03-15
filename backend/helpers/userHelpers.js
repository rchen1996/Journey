module.exports = db => {
  const getUser = id => {
    const query = {
      text: 'SELECT * FROM users WHERE id = $1;',
      values: [id],
    };

    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err);
  };

  const getUserByEmail = email => {
    const query = {
      text: `SELECT * FROM users WHERE email = $1;`,
      values: [email],
    };

    return db
      .query(query)
      .then(result => result.rows[0])
      .catch(err => err);
  };

  const addUser = (firstName, lastName, email, password) => {
    const query = {
      text: `INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *;`,
      values: [firstName, lastName, email, password],
    };

    return db
      .query(query)
      .then(result => result.rows[0])
      .catch(err => err);
  };

  const getItinerariesForUser = id => {
    const query = {
      text: `SELECT * FROM itineraries WHERE creator_id = $1;`,
      values: [id],
    };

    return db
      .query(query)
      .then(result => result.rows)
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

  const getBookmarksForUser = userId => {
    const query = {
      text: `SELECT itineraries.* FROM itineraries
      JOIN bookmarks ON itineraries.id = bookmarks.itinerary_id
      WHERE user_id = $1;`,
      values: [userId],
    };

    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err);
  };

  return {
    getUser,
    getUserByEmail,
    addUser,
    getItinerariesForUser,
    getItinerariesForGroup,
    getBookmarksForUser,
  };
};
