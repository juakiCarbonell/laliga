import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogout } from "../actions/users";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 70px;
  width: 100%;
  background-color: lightcoral;
`;

const Header = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(userLogout());
  };
  const { token } = useSelector((state) => state.userLogin);
  return (
    <Wrapper>
      <h3>LA LIGA</h3>
      {token ? (
        <button onClick={logoutHandler}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </Wrapper>
  );
};

export default Header;
