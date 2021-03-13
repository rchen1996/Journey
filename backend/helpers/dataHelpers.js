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

  resultArr.forEach((item) => {
    if (!itinerary.days.some((day) => day.id === item.day_id)) {
      itinerary.days.push({
        id: item.day_id,
        location: { id: item.location_id, name: item.location_name },
        day_order: item.day_order,
        activities: [],
      });
    }

    let activityDay = itinerary.days.find((day) => day.id === item.day_id);

    activityDay.activities.push({
      id: item.activity_id,
      start_time: item.activity_start_time,
      end_time: item.activity_end_time,
      name: item.attraction_name,
      image: item.attraction_name,
      location: item.attraction_location,
      description: item.attraction_description,
      category: item.attraction_category,
    });
  });

  return itinerary;
};

module.exports = { itineraryObj };
