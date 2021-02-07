import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { userLogout } from "../store/actions";
import Button from "./Button";

const Wrapper = styled.div`
  height: 70px;
  width: 100%;
  background-color: #25282a;
  color: white;
  header {
    display: flex;
    width: 80%;
    margin: auto;
    justify-content: space-between;
    align-items: center;
  }
`;

const Header = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(userLogout());
  };
  const { token } = useSelector((state) => state.userLogin);
  return (
    <Wrapper>
      <header>
        <h3>LA LIGA</h3>
        {token ? (
          <Button onClick={logoutHandler}>Logout</Button>
        ) : (
          <Button to="/login">Login</Button>
        )}
      </header>
    </Wrapper>
  );
};

export default Header;
