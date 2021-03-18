export default function AttractionsListItem(props) {
  const { attraction } = props;

  const addToMyLocations = () => {
    // function add attraction using attraction id
    // add as an activity using itinerary id with no day id
    // once added needs to dispatch to update itinerary
  };

  return (
    <div>
      <h4>{attraction.name}</h4>
      <img src={attraction.image} alt='attraction' />
      <p>{attraction.description}</p>

      {/* drag and drop to add directly to the day? or add another button */}
      <button type='button' onClick={addToMyLocations}>
        Add to My Locations List
      </button>
    </div>
  );
}
