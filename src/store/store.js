import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { userList, userDetails, userDelete } from "./reducers/userReducers";
import { userLogin } from "./reducers/loginReducers";

const reducer = combineReducers({
  userList,
  userDetails,
  userDelete,
  userLogin,
});

const middleware = [thunk];

const userInfoFromStorage = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;

const initalState = { userLogin: { token: userInfoFromStorage } };

const store = createStore(reducer, initalState, applyMiddleware(...middleware));

export default store;
