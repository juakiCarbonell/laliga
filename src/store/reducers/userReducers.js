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

const initialUsersState = {
  loading: false,
  error: null,
  users: [],
};
const initialUserState = {
  loading: false,
  error: null,
  user: {},
};
const initialUserDeleteState = {
  loading: false,
  error: null,
  sucess: false,
};

export const userList = (state = initialUsersState, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { ...state, loading: true };
    case USER_LIST_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case USER_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export const userDetails = (state = initialUserState, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case USER_DETAILS_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case USER_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userDelete = (state = initialUserDeleteState, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return { ...state, loading: true };
    case USER_DELETE_SUCCESS:
      return { ...state, loading: false, success: true };
    case USER_DELETE_FAIL:
      return { ...state, loading: false, success: false };
    case USER_DELETE_RESET:
      return { ...initialUserDeleteState };
    default:
      return state;
  }
};

export const userUpdate = (state = initialUserState, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { ...state, loading: true };
    case USER_UPDATE_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case USER_UPDATE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
