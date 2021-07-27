import { merge } from "lodash";
import axios from "axios";

import {
  GET_PROFILE_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  SET_PROFILE_IMAGE_SUCCESS,
  SIGNUP_SUCCESS,
  UPDATE_USER_SUCCESS,
} from "./user.constants";

export default function user(state = null, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
    case GET_PROFILE_SUCCESS:
    case UPDATE_USER_SUCCESS:
    case SET_PROFILE_IMAGE_SUCCESS:
      const newState = merge({}, state, action.payload);

      const { token } = newState;
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      localStorage.authToken = token;

      return newState;
    case LOGOUT_USER:
      delete localStorage.authToken;
      axios.defaults.headers.common["Authorization"] = "";
      return null;
    default:
      return state;
  }
}
