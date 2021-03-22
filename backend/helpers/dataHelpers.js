const itineraryObj = resultArr => {
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
    locations: [],
  };
  if (resultArr[0].location_id) {
    const dayObjs = [];
    resultArr.forEach(item => {
      if (!dayObjs.some(day => day.id === item.day_id)) {
        dayObjs.push({
          id: item.day_id,
          location_id: item.location_id,
          location_name: item.location_name,
          day_order: item.day_order,
          activities: [],
        });
      }

      let activityDay = dayObjs.find(day => day.id === item.day_id);
      if (item.activity_id) {
        activityDay.activities.push({
          id: item.activity_id,
          start_time: item.activity_start_time,
          end_time: item.activity_end_time,
          notes: item.activity_notes,
          name: item.attraction_name,
          image: item.attraction_image,
          address: item.attraction_address,
          location: item.attraction_location,
          description: item.attraction_description,
          category: item.attraction_category,
        });
      }
    });
    const locationArr = [];
    dayObjs.forEach(day => {
      if (
        !locationArr.slice(-1)[0] ||
        !(locationArr.slice(-1)[0].id === day.location_id)
      ) {
        locationArr.push({
          id: day.location_id,
          name: day.location_name,
          days: [],
        });
      }
      locationArr.slice(-1)[0].days.push({
        id: day.id,
        day_order: day.day_order,
        activities: day.activities,
      });
    });

    itinerary.locations = [...locationArr];
  }

  return itinerary;
};
const parseTravelParty = party => {
  return party.map(user => ({
    id: user.user_id,
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
  }));
};

const parseAttractionObj = attractionObj => {
  const tag_labels = attractionObj.tag_labels;
  let category = 'landmark';
  if (tag_labels.includes('sightseeing') || tag_labels.includes('architecture'))
    category = 'landmark';
  if (tag_labels.includes('cuisine')) category = 'food';
  if (tag_labels.includes('museums') || tag_labels.includes('poitype-Church'))
    category = 'cultural';
  if (tag_labels.includes('adrenaline')) category = 'sport';
  if (tag_labels.includes('amusementparks') || tag_labels.includes('zoos'))
    category = 'amusement';
  if (tag_labels.includes('hotels')) category = 'accomodation';
  if (tag_labels.includes('nightlife')) category = 'adult';
  if (
    tag_labels.includes('camping') ||
    tag_labels.includes('national_park') ||
    tag_labels.includes('exploringnature')
  )
    category = 'nature';

  let address = attractionObj.properties.find(el => el.key === 'address');
  address = (address && address.value) || 'not in database';
  const image =
    (attractionObj.images[0] && attractionObj.images[0].source_url) || null;
  const attraction = {
    name: attractionObj.name,
    description: attractionObj.snippet,
    category: category,
    image: image,
    address: address,
    location: `${attractionObj.coordinates.latitude},${attractionObj.coordinates.longitude}`,
  };

  return attraction;
};

const parseLocationName = locationName => {
  let name = locationName;
  if (name === 'Queenstown') name = 'Queenstown,New Zealand';
  if (name === 'Cinque Terre') name = 'Cinque Terre National Park';
  if (name === 'Sicily') name = 'wv__Sicily';
  if (name === 'Tuscany') name = 'wv__Tuscany';
  if (name === 'Veneto') name = 'wv__Veneto';
  if (name === 'Sardinia') name = 'wv__Sardinia';
  if (name === 'Canary Islands') name = 'wv Canary Islands';
  if (name === 'Catalonia') name = 'wv__Catalonia';
  if (name === 'Andalusia') name = 'wv__Andalusia';
  if (name === 'Syracuse') name = 'Syracuse,Sicily';
  if (name === 'Rhodes') name = 'Rhodes 28city29';
  if (name === 'Corfu') name = 'Corfu 28city29';
  if (name === 'Vienna') name = 'wv__Vienna';
  if (name === 'Chiyoda') name = 'Chiyoda,Tokyo';
  if (name === 'Minato') name = 'Minato,Tokyo';
  if (name === 'Nara') name = 'Nara,Nara';
  if (name === 'Nagano') name = 'Nagano 28city29';
  if (name === 'Newcastle') name = 'Newcastle upon Tyne';
  if (name === 'Phuket') name = 'Phuket 28city29';
  if (name === 'Ko Phi Phi') name = 'Ko Phi Phi Don';
  if (name === 'Berlin') name = 'wv__Berlin';
  if (name === 'Hamburg') name = 'wv__Hamburg';
  if (name === 'Jeju') name = 'wv__Jeju';
  if (name === 'Bali') name = 'wv__Bali';
  if (name === 'Split') name = 'Split,Croatia';
  if (name === 'Hong Kong') name = 'wv__Hong Kong';
  if (name === 'Shanghai') name = 'wv__Shanghai';
  if (name === 'Beijing') name = 'wv__Beijing';
  if (name === 'Macau') name = 'wv__Macau';
  if (name === 'Tianjin') name = 'wv__Tianjin';
  if (name === 'Niagara Falls') name = 'Niagara Falls,Ontario';
  if (name === 'Aspen') name = 'Aspen,Colorado';
  if (name === 'North Cape') name = 'North_Cape_28Norway29';
  if (name === 'Washington') name = 'Washington,D.C.';
  if (name === 'Versailles') name = 'Versailles,Yvelines';
  if (name === 'Banff') name = 'Banff,Alberta';
  if (name === 'Orlando') name = 'Orlando,Florida';
  if (name === 'Tampa') name = 'Tampa,Florida';
  if (name === 'Atlantic City') name = 'Atlantic City,New Jersey';
  if (name === 'Sacramento') name = 'Sacramento,California';
  if (name === 'Memphis') name = 'Memphis,Tennessee';
  if (name === 'Santa Fe') name = 'Santa Fe,New Mexico';
  if (name === 'Penang') name = 'George Town,Penang';
  if (name === 'Malacca') name = 'Malacca City';
  if (name === 'Ho Chi Minh') name = 'Ho Chi Minh City';
  if (name === 'Amalfi Coast') name = 'Amalfi';

  name = name.replace(/\s/g, '_');
  name = name.replace(/,/g, '2C_');
  name = name.replace(/\./g, '2e');
  name = name.replace(/ü/g, 'C3BC');
  name = name.replace(/ú/g, 'C3BA');
  name = name.replace(/é/g, 'C3A9');
  name = name.replace(/á/g, 'C3A1');
  name = name.replace(/ã/g, 'C3A3');
  return name;
};

module.exports = {
  itineraryObj,
  parseTravelParty,
  parseAttractionObj,
  parseLocationName,
};
