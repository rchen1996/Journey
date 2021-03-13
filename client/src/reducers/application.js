export const SET_USER = 'SET_USER';
export const SET_ALL_ITINERARIES = 'SET_ALL_ITINERARIES';
export const SET_ITINERARY = 'SET_ITINERARY';
export const SET_MY_ITINERARIES = 'SET_MY_ITINERARIES';

const dataReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case SET_ALL_ITINERARIES:
      return {
        ...state,
        itineraries: action.itineraries,
      };
    case SET_ITINERARY:
      return {
        ...state,
        itinerary: action.itinerary,
      };
    case SET_MY_ITINERARIES:
      return {
        ...state,
        myItineraries: action.myItineraries,
      };
    default:
      return state;
  }
};

export default dataReducer;
