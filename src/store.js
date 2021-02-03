import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { userList, userDetails, userDelete, userLogin } from './reducers/users';
// import {} from './reducers/user';
// import {} from './reducers/login';

const reducer = combineReducers({
  userList,
  userDetails,
  userDelete,
  userLogin,
});

const middleware = [thunk];

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('token'))
  : null;

const initalState = {userLogin: { token: userInfoFromStorage }};

const store = createStore(reducer, initalState, applyMiddleware(...middleware));
// const store = createStore(
//   reducer,
//   initalState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

export default store;
