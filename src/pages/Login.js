import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userLogin } from "../store/actions";

import Loader from "../components/Loader";
import Error from "../components/Error";
import Button from "../components/Button";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("tracey.ramos@reqres.in");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const { loading, error, token } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (token) {
      history.push("/");
    }
  }, [history, token]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (email.trim().length === 0 || password.trim().length === 0) {
      alert("Invalid Input");
    } else {
      dispatch(userLogin(email, password));
    }
  };

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }

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
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit">Sumit</Button>
      </form>
    </>
  );
};

export default Login;
