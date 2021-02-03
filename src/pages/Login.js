import React, { useState, useEffect } from 'react';
import { userLogin } from '../actions/users';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('tracey.ramos@reqres.in');
  const [password, setPassword] = useState('');
  let history = useHistory();

  const { loading, error, token } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (token) {
      history.push('/');
    }
  }, [history, token]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (email.trim().length === 0 || password.trim().length === 0) {
      alert('Invalid Input');
    } else {
      console.log('email', email);
      console.log('passwo', password);
      dispatch(userLogin(email, password));
    }
  };

  return (
    <>
      <header>
        <h2>Sign In</h2>
      </header>
      <form
        onSubmit={submitHandler}
        // onSubmit={
        //   props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        // }
      >
        <div>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Sumit</button>
      </form>
    </>
  );
};

export default Login;
