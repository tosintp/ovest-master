import { $api } from "../../helpers/$api";
import { API_URL } from "../../helpers/config";
import { Dispatcher } from "../../helpers/dipatcher";
import {
  GET_PROFILE_SUCCESS,
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  LOGOUT_USER,
  UPDATE_USER_SUCCESS,
  SET_PROFILE_IMAGE_SUCCESS,
} from "./user.constants";

export const login = (credentials) => {
  return async (dispatch) => {
    const payload = await $api.user.login(credentials);

    console.log(payload);

    dispatch({ type: LOGIN_SUCCESS, payload });
  };
};

export const createUserAction = (credentials) => {
  return async (dispatch) => {
    const payload = await $api.user.register(credentials);

    dispatch({ type: SIGNUP_SUCCESS, payload });
  };
};

export const updateUserAction = (update) => {
  return async (dispatch) => {
    const payload = await $api.user.updateUserProfile(update);

    dispatch({ type: UPDATE_USER_SUCCESS, payload });
  };
};

export const getProfileAction = () => {
  return async (dispatch) => {
    const payload = await $api.user.profile();

    // Set $dispatch method
    Dispatcher.$dispatch = dispatch;

    dispatch({ type: GET_PROFILE_SUCCESS, payload });
  };
};

export const logoutUserAction = () => {
  return async (dispatch) => {
    $api.updateRequestConfig({ headers: { Authorization: "" } });

    dispatch({ type: LOGOUT_USER });
  };
};

export const updateProfileImageAction = (file) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("image", file);

      const {
        message: { data: payload },
      } = await $api.user.request({
        method: "POST",
        url: `${API_URL}/user/profile/update`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      dispatch({ type: SET_PROFILE_IMAGE_SUCCESS, payload });
    } catch (error) {
      console.debug(error);
    }
  };
};
