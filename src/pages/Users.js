import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userList, userLogout } from '../actions/users';

import Loader from '../components/Loader';
import User from '../components/User'

const Users = () => {
  const dispatch = useDispatch();

  const usersListState = useSelector((state) => state.userList);
  const { loading, error, users } = usersListState;

  const { token } = useSelector((state) => state.userLogin);

  useEffect(() => {
    dispatch(userList());
  }, [dispatch]);

  const logoutHandler = () => {
    dispatch(userLogout());
  };

  return (
    <>
      <h1>Users</h1>
      {loading && <Loader />}
      {token ? <button onClick={logoutHandler}>Logout</button> : <Link to='/login'>Login</Link>}

      {users.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </>
  );
};

export default Users;
