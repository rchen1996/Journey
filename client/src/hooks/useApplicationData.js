import { useEffect, useReducer } from 'react';
import dataReducer, {
  SET_USER,
  SET_MY_ITINERARIES,
  SET_ITINERARY,
  SET_BOOKMARKS,
  SHOW_SIDEBAR,
} from '../reducers/application';
import axios from 'axios';
import { io } from 'socket.io-client';

export default function useApplicationData() {
  const [state, dispatch] = useReducer(dataReducer, {
    user: {},
    itinerary: null,
    myItineraries: [],
    bookmarks: [],
    sideNav: {
      belowBreak: false,
      rightNav: {
        collapsed: false,
        breakPointCollapsed: false,
        userCollapsed: false,
      },
      leftNav: {
        collapsed: false,
        breakPointCollapsed: false,
        userCollapsed: false,
      },
    },
    key: Math.random(),
  });

  useEffect(() => {
    if (!state.user.id) {
      axios.get(`/api/users/:user_id`).then(res => {
        const user = res.data;
        if (res.data.id) {
          dispatch({
            type: SET_USER,
            user: user,
          });
        }
      });
    }
  }, [state.user.id]);

  const login = function (email, password) {
    const user = {
      email: email,
      password: password,
    };

    return axios.post('/api/users/login', user);
  };

  const logout = () => {
    return axios.post(`/api/users/logout`).then(() => {
      dispatch({
        type: SET_USER,
        user: {},
      });
    });
  };

  const register = function (first_name, last_name, email, password) {
    return axios.post(`/api/users/`, {
      first_name,
      last_name,
      email,
      password,
    });
  };

  const createItinerary = function (itinerary, visibility) {
    const completeItinerary = { ...itinerary, visible: visibility };
    return axios.post('/api/itineraries', completeItinerary);
  };

  useEffect(() => {
    if (state.user.id) {
      axios.get(`/api/users/${state.user.id}/itineraries`).then(res => {
        const myItineraries = res.data;

        if (Array.isArray(myItineraries) && myItineraries.length > 0) {
          dispatch({
            type: SET_MY_ITINERARIES,
            myItineraries: myItineraries,
          });
        }
      });
    }
  }, [state.user, state.itinerary]);

  function removeCollaborator(itineraryId, userId) {
    axios
      .delete(`/api/itineraries/${itineraryId}/users/${userId}`)
      .then(res => {
        dispatch({
          type: SET_ITINERARY,
          itinerary: { ...state.itinerary, users: res.data },
        });
      })
      .catch(err => console.log(err));
  }

  const createActivity = (activity, itineraryId, dayId) => {
    return axios.post(
      `/api/itineraries/${itineraryId}/days/${dayId}/activities`,
      activity
    );
  };

  function addCollaborator(itineraryId, email) {
    return axios
      .post(`/api/itineraries/${itineraryId}/users`, { email })
      .then(res => {
        if (res.data.error) {
          return { error: res.data.error };
        } else {
          dispatch({
            type: SET_ITINERARY,
            itinerary: { ...state.itinerary, users: res.data },
          });
          return { party: res.data, success: 'user added to travel party' };
        }
      })
      .catch(err => console.log(err));
  }

  function setItinerary(itinerary_id) {
    Promise.all([
      axios.get(`/api/itineraries/${itinerary_id}`),
      axios.get(`/api/itineraries/${itinerary_id}/collaborators`),
    ])
      .then(([itinerary, users]) => {
        dispatch({
          type: SET_ITINERARY,
          itinerary: { ...itinerary.data, users: users.data },
        });
      })
      .catch(err => console.log(err));
  }

  function addDayWithLocation(itinerary_id, location_name, new_day_order) {
    return axios
      .post(`/api/itineraries/${itinerary_id}`, {
        location_name,
        new_day_order,
      })
      .then(res => {
        if (res.data.error) {
          return { error: res.data.error };
        } else {
          dispatch({
            type: SET_ITINERARY,
            itinerary: { ...state.itinerary, ...res.data },
          });
          return { itinerary: res.data };
        }
      });
  }

  const deleteItinerary = itineraryId => {
    return axios.delete(`/api/itineraries/${itineraryId}`);
  };

  useEffect(() => {
    if (state.user.id) {
      axios.get(`/api/users/${state.user.id}/bookmarks`).then(res => {
        const bookmarks = res.data;

        if (Array.isArray(bookmarks) && bookmarks.length > 0) {
          dispatch({
            type: SET_BOOKMARKS,
            bookmarks: bookmarks,
          });
        }
      });
    }
  }, [state.user]);

  const deleteBookmark = bookmarkId => {
    return axios.delete(`/api/users/${state.user.id}/bookmarks/${bookmarkId}`);
  };

  const addBookmark = itineraryId => {
    return axios.post(`/api/users/${state.user.id}/bookmarks`, { itineraryId });
  };

  function deleteDayFromItinerary(itinerary_id, day_id) {
    return axios
      .delete(`/api/itineraries/${itinerary_id}/days/${day_id}`)
      .then(res => {
        if (res.data.error) {
          return { error: res.data.error };
        }
        dispatch({
          type: SET_ITINERARY,
          itinerary: { ...state.itinerary, ...res.data },
        });
        return { success: 'day deleted' };
      });
  }

  /**
   * Updates menu states when size of the window is changed.
   * @param {boolean} breakpointTrigger Overrided from menu button
   */
  function updateSidebar(right, rightUser, left, leftUser) {
    dispatch({
      type: SHOW_SIDEBAR,
      belowBreak: window.innerWidth < 1024,
      rightNav: {
        collapsed: right !== null ? right : state.sideNav.rightNav.collapsed,
        breakPointCollapsed: state.sideNav.rightNav.breakPointCollapsed,
        userCollapsed:
          rightUser !== null ? rightUser : state.sideNav.rightNav.userCollapsed,
      },
      leftNav: {
        collapsed: left !== null ? left : state.sideNav.leftNav.collapsed,
        breakPointCollapsed: false,
        userCollapsed:
          leftUser !== null ? leftUser : state.sideNav.leftNav.userCollapsed,
      },
    });
  }

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 1024) {
        dispatch({
          type: SHOW_SIDEBAR,
          belowBreak: false,
          rightNav: {
            collapsed: false,
            breakPointCollapsed: true,
            userCollapsed: false,
          },
          leftNav: {
            collapsed: false,
            breakPointCollapsed: true,
            userCollapsed: false,
          },
        });
      } else {
        dispatch({
          type: SHOW_SIDEBAR,
          belowBreak: true,
          rightNav: {
            collapsed: true,
            breakPointCollapsed: false,
            userCollapsed: true,
          },
          leftNav: {
            collapsed: true,
            breakPointCollapsed: false,
            userCollapsed: true,
          },
        });
      }
    };

    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const deleteActivity = (itineraryId, dayId, activityId) => {
    return axios
      .delete(
        `/api/itineraries/${itineraryId}/days/${dayId}/activities/${activityId}`
      )
      .then(res => {
        if (res.data.error) {
          return { error: res.data.error };
        } else {
          dispatch({
            type: SET_ITINERARY,
            itinerary: { ...state.itinerary, ...res.data },
          });

          return { success: 'Activity Deleted' };
        }
      });
  };

  const changePassword = password => {
    return axios.put(`/api/users/:user_id`, password);
  };

  const editActivity = (itinerary_id, activity_id, activityForm) => {
    return axios
      .put(
        `/api/itineraries/${itinerary_id}/activities/${activity_id}`,
        activityForm
      )
      .then(res => {
        if (res.data.error) {
          return { error: res.data.error };
        }
        dispatch({
          type: SET_ITINERARY,
          itinerary: { ...state.itinerary, ...res.data },
        });
        return { success: 'Activity Updated' };
      });
  };

  const editItinerary = (itinerary, visibility) => {
    const completeItinerary = { ...itinerary, visible: visibility };
    return axios.put(`/api/itineraries/${itinerary.id}`, completeItinerary);
  };

  useEffect(() => {
    const socket = io('https://journey-lighthouse.herokuapp.com/');
    socket.on('connect', function () {
      socket.emit('itinerary_id', state.itinerary && state.itinerary.id);
    });
    socket.on('message', data => {
      console.log(data);
    });
    socket.on('itinerary', data => {
      dispatch({
        type: SET_ITINERARY,
        itinerary: { ...state.itinerary, ...data },
      });
    });
    return () => socket.disconnect();
  }, [state.itinerary]);

  const searchAttractions = (locationName, query, categories) => {
    return axios.get(`/api/attractions/${locationName}/${query}/${categories}`);
  };

  const addMyLocation = (attractionId, itineraryId) => {
    return axios.post(`/api/itineraries/${itineraryId}/activities`, {
      attractionId,
      itineraryId,
    });
  };

  const updateActivityDay = (activityId, dayId, itineraryId) => {
    return axios.put(
      `/api/itineraries/${itineraryId}/activities/${activityId}`,
      { dayId }
    );
  };

  const deleteActivityWithoutDay = (activityId, itineraryId) => {
    return axios.delete(
      `/api/itineraries/${itineraryId}/activities/${activityId}`
    );
  };

  const searchItineraries = (query, type, length) => {
    return axios.get(`/api/itineraries/${query}/${type}/${length}`);
  };

  const addTripNote = (itinerary_id, noteString, important) => {
    return axios.post(`/api/itineraries/${itinerary_id}/notes`, {
      note: noteString,
      important,
    });
  };

  const deleteTripNote = (itinerary_id, note_id) => {
    return axios.delete(`/api/itineraries/${itinerary_id}/notes/${note_id}`);
  };

  const editTripNote = (itinerary_id, note_id, noteStr, important) => {
    return axios.put(`/api/itineraries/${itinerary_id}/notes/${note_id}`, {
      note: noteStr,
      important,
    });
  };

  return {
    state,
    dispatch,
    login,
    register,
    logout,
    createItinerary,
    removeCollaborator,
    createActivity,
    addCollaborator,
    setItinerary,
    addDayWithLocation,
    deleteItinerary,
    deleteBookmark,
    addBookmark,
    deleteDayFromItinerary,
    updateSidebar,
    deleteActivity,
    changePassword,
    editActivity,
    editItinerary,
    searchAttractions,
    addMyLocation,
    updateActivityDay,
    deleteActivityWithoutDay,
    searchItineraries,
    addTripNote,
    deleteTripNote,
    editTripNote,
  };
}
