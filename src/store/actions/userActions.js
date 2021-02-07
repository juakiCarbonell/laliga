import api from "../../apis/api";

import {
  USER_LIST_FAIL,
  USER_LIST_SUCCESS,
  USER_LIST_REQUEST,
  USER_DETAILS_FAIL,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_REQUEST,
  USER_DELETE_FAIL,
  USER_DELETE_RESET,
  USER_DELETE_SUCCESS,
  USER_DELETE_REQUEST,
  USER_UPDATE_FAIL,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_REQUEST,
} from "../../costants/user";

export const userList = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    });

    const { data } = await api.get("/users");
    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload: error,
    });
  }
};

export const userDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

    const { data } = await api.get(`/users/${id}`);
    // const { data } = await axios.get('/users');
    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: error,
    });
  }
};

export const userDelete = (id) => async (dispatch) => {
  try {
    dispatch({
      type: USER_DELETE_REQUEST,
    });
    await api.delete(`/users/${id}`);
    dispatch({
      type: USER_DELETE_SUCCESS,
    });
    dispatch({
      type: USER_DELETE_RESET,
    });
  } catch (error) {
    dispatch({
      type: USER_DELETE_FAIL,
      payload: error,
    });
  }
};

export const userUpdate = (user) => async (dispatch) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST,
    });
    await api.put(`/users/${user.id}`, user);
    dispatch({
      type: USER_UPDATE_SUCCESS,
    });
    dispatch(userDetails(user.id));
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload: error,
    });
  }
};
