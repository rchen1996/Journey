import { SET_ITINERARY } from '../../reducers/application';

export default function AttractionsListItem(props) {
  const {
    attraction,
    dayId,
    addMyLocation,
    itinerary,
    dispatch,
    createActivity,
  } = props;

  const addToMyLocations = () => {
    addMyLocation(attraction.id, itinerary.id).then(res => {
      if (res.data.error) {
        // display error => must be logged in, or don't have permissions becuase not part of travel party
      } else {
        dispatch({
          type: SET_ITINERARY,
          itinerary: res.data,
        });

        // display message upon successfully added
      }
    });
  };

  const addToDay = () => {
    const activity = { attractionId: attraction.id };
    createActivity(activity, itinerary.id, dayId).then(res => {
      if (res.data.error) {
        // dispay error => must be logged in, or don't have permissions because they are not part of travel party
      } else {
        dispatch({
          type: SET_ITINERARY,
          itinerary: res.data,
        });

        // display message upon successfully added
      }
    });
  };

  return (
    <div>
      <h4>{attraction.name}</h4>
      <img src={attraction.image} alt='attraction' />
      <p>{attraction.description}</p>
      {/* do one of those on hover effects for the buttons perhaps - use some kind of icon instead? */}
      <button type='button' onClick={addToMyLocations}>
        Add to My Locations List
      </button>
      <button type='button' onClick={addToDay}>
        Add to Day
      </button>
    </div>
  );
}
