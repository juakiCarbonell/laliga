import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogout } from '../actions/users';

const Header = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(userLogout());
  };
  const { token } = useSelector((state) => state.userLogin);
  console.log('tolen', token)
  return (
    <div>
      <h1>LA LIGA</h1>
      {token ? (
        <button onClick={logoutHandler}>Logout</button>
      ) : (
        <Link to='/login'>Login</Link>
      )}
    </div>
  );
};

export default Header;
