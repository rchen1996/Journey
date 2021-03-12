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

  return {
    getAllItineraries,
  };
};
