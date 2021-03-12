export const SET_USER = 'SET_USER';

const dataReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        user: action.user,
      };
    default:
      return state;
  }
};

export default dataReducer;
