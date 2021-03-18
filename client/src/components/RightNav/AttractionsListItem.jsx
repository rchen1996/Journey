export default function AttractionsListItem(props) {
  const { attraction, dayId, addMyLocation } = props;

  const addToMyLocations = () => {
    // function add attraction using attraction id
    // add as an activity using itinerary id with no day id
    // once added needs to dispatch to update itinerary
    // display message upon successfully added
  };

  const addToDay = () => {
    // add attraction as an activity to the current day displayed
    // need day id
    // once added needs to dispatch to update itinerary
    // display message upon successfully added
  };

  return (
    <div>
      <h4>{attraction.name}</h4>
      <img src={attraction.image} alt='attraction' />
      <p>{attraction.description}</p>
      {/* do one of those on hover effects for the buttons - use some kind of icon instead? */}
      <button type='button' onClick={addToMyLocations}>
        Add to My Locations List
      </button>
      <button type='button' onClick={addToDay}>
        Add to Day
      </button>
    </div>
  );
}
