export const SET_USER = 'SET_USER';
export const SET_ALL_ITINERARIES = 'SET_ALL_ITINERARIES';
export const SET_ITINERARY = 'SET_ITINERARY';
export const SET_MY_ITINERARIES = 'SET_MY_ITINERARIES';
export const SET_BOOKMARKS = 'SET_BOOKMARKS';
export const SHOW_SIDEBAR = 'SHOW_SIDEBAR';
export const SET_ATTRACTIONS = 'SET_ATTRACTIONS';
export const SET_KEY = 'SET_KEY';

const dataReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
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
    case SET_BOOKMARKS:
      return {
        ...state,
        bookmarks: action.bookmarks,
      };
    case SHOW_SIDEBAR:
      return {
        ...state,
        sideNav: {
          belowBreak: action.belowBreak,
          rightNav: {
            collapsed: action.rightNav.collapsed,
            breakPointCollapsed: action.rightNav.breakPointCollapsed,
            userCollapsed: action.rightNav.userCollapsed,
          },
          leftNav: {
            collapsed: action.leftNav.collapsed,
            breakPointCollapsed: action.leftNav.breakPointCollapsed,
            userCollapsed: action.leftNav.userCollapsed,
          },
        },
      };
    case SET_ATTRACTIONS:
      return {
        ...state,
        attractions: action.attractions,
      };
    case SET_KEY:
      return {
        ...state,
        key: action.key,
      };
    default:
      return state;
  }
};

export default dataReducer;
