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
      text: `SELECT itineraries.*, COUNT(days.id) AS days FROM itineraries
      LEFT JOIN travel_parties ON itineraries.id = travel_parties.itinerary_id
      LEFT JOIN days ON itineraries.id = days.itinerary_id 
      WHERE user_id = $1
      GROUP BY itineraries.id`,
      values: [id],
    };

    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err);
  };

  const getBookmarksForUser = userId => {
    const query = {
      text: `SELECT itineraries.*, bookmarks.id AS bookmark_id, COUNT(days.id) AS days FROM itineraries
      JOIN bookmarks ON itineraries.id = bookmarks.itinerary_id
      LEFT JOIN days ON itineraries.id = days.itinerary_id
      WHERE user_id = $1
      GROUP BY itineraries.id, bookmarks.id;`,
      values: [userId],
    };

    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err);
  };

  const deleteBookmark = bookmarkId => {
    const query = {
      text: `DELETE FROM bookmarks WHERE id = $1 RETURNING *;`,
      values: [bookmarkId],
    };

    return db
      .query(query)
      .then(result => result.rows[0])
      .catch(err => err);
  };

  const getBookmark = bookmarkId => {
    const query = {
      text: `SELECT * FROM bookmarks WHERE id = $1;`,
      values: [bookmarkId],
    };

    return db
      .query(query)
      .then(result => result.rows[0])
      .catch(err => err);
  };

  const addBookmark = (itineraryId, userId) => {
    const query = {
      text: `INSERT INTO bookmarks (itinerary_id, user_id)
      VALUES ($1, $2) RETURNING *;`,
      values: [itineraryId, userId],
    };

    return db
      .query(query)
      .then(result => result.rows[0])
      .catch(err => err);
  };

  const getBookmarkByItineraryId = (itineraryId, userId) => {
    const query = {
      text: `SELECT * FROM bookmarks
      WHERE itinerary_id = $1 AND user_id = $2;`,
      values: [itineraryId, userId],
    };

    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err);
  };

  const updateUserPassword = (newPassword, userId) => {
    const query = {
      text: `UPDATE users
      SET password = $1
      WHERE id = $2
      RETURNING *;`,
      values: [newPassword, userId],
    };

    return db
      .query(query)
      .then(result => result.rows[0])
      .catch(err => err);
  };

  return {
    getUser,
    getUserByEmail,
    addUser,
    getItinerariesForUser,
    getItinerariesForGroup,
    getBookmarksForUser,
    deleteBookmark,
    getBookmark,
    addBookmark,
    getBookmarkByItineraryId,
    updateUserPassword,
  };
};
