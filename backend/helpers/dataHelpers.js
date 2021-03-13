// if need to reformat output of queries for easier manipulation on front end
// do that in here

const itineraryObj = (resultArr) => {
  const {
    id,
    name,
    description,
    image,
    trip_type,
    visible,
    creator_id,
    start_date,
    end_date,
  } = resultArr[0];

  const itinerary = {
    id,
    name,
    description,
    image,
    trip_type,
    visible,
    creator_id,
    start_date,
    end_date,
    days: [],
  };

  resultArr.forEach((day) => {
    itinerary.days.push({
      id: day.day_id,
      day_order: day.day_order,
      location: { id: day.location_id, name: day.location_name },
      latitude: day.latitude,
      longitude: day.longitude,
      country: day.country,
    });
  });
  return itinerary;
};

module.exports = { itineraryObj };
