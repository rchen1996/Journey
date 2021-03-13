export const SET_USER = 'SET_USER';
export const SET_ALL_ITINERARIES = 'SET_ALL_ITINERARIES';

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
    default:
      return state;
  }
};

export default dataReducer;
