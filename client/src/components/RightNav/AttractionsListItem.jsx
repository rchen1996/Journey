export default function AttractionsListItem(props) {
  const { attraction } = props;

  const addToMyLocations = attractionId => {
    // function add attraction using attraction id
    // add as an activity using itinerary id with no day id
    // once added needs to dispatch to update itinerary
  };

  const addToDay = (attractionId, dayId) => {
    // add attraction as an activity to the current day displayed
    // need day id
    // once added needs to dispatch to update itinerary
  };

  return (
    <div>
      <h4>{attraction.name}</h4>
      <img src={attraction.image} alt='attraction' />
      <p>{attraction.description}</p>
      <button type='button' onClick={addToMyLocations}>
        Add to My Locations List
      </button>
      <button type='button' onClick={addToDay}>
        Add to Day
      </button>
    </div>
  );
}
