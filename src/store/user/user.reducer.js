import { merge } from "lodash";

import { $api } from "../../helpers/$api";

import {
  GET_PROFILE_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  SIGNUP_SUCCESS,
} from "./user.constants";

export default function user(state = null, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
    case GET_PROFILE_SUCCESS:
      const { token } = action.payload;
      $api.updateRequestConfig({
        headers: { authorization: `Bearer ${token}` },
      });
      localStorage.authToken = token;
      return merge({}, state, action.payload);
    case LOGOUT_USER:
      delete localStorage.authToken;
      $api.updateRequestConfig({
        headers: { authorization: "" },
      });
      return null;
    default:
      return state;
  }
}
