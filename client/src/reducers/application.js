export const SET_USER = 'SET_USER';
export const SET_ALL_ITINERARIES = 'SET_ALL_ITINERARIES';
export const SET_ITINERARY = 'SET_ITINERARY';
export const SET_MY_ITINERARIES = 'SET_MY_ITINERARIES';
export const SET_KEY = 'SET_KEY';
export const SET_BOOKMARKS = 'SET_BOOKMARKS';
export const SHOW_MENU = 'SET_MENU';
export const SET_ATTRACTIONS = 'SET_ATTRACTIONS';

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
    case SET_KEY:
      return {
        ...state,
        key: action.key,
      };
    case SET_BOOKMARKS:
      return {
        ...state,
        bookmarks: action.bookmarks,
      };
    case SHOW_MENU:
      return {
        ...state,
        isRightNavOpen: action.isRightNavOpen,
        isLeftNavOpen: action.isLeftNavOpen,
      };
    case SET_ATTRACTIONS:
      return {
        ...state,
        attractions: action.attractions,
      };
    default:
      return state;
  }
};

export default dataReducer;
