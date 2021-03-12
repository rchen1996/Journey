import { useEffect, useReducer } from "react";
import dataReducer, { SET_USERS } from "../reducers/application";
import axios from "axios";

export default function useApplicationData() {
  const [state, dispatch] = useReducer(dataReducer, {
    users: [],
    loading: true,
  });
  useEffect(() => {
    axios({
      method: "GET",
      url: "/api/users",
    })
      .then(({ data }) => {
        console.log(data);
        dispatch({
          type: SET_USERS,
          users: data,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return {
    state,
    dispatch,
  };
}
