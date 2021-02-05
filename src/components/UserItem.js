import React from "react";
import { FaEye } from "react-icons/fa";
import { useSelector } from "react-redux";
import Button from "../components/Button";

import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: 1px solid #808080;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  align-items: center;
  background-color: #f5f5f5;
  .button {
    text-align: right;
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    div {
      margin-bottom: 10px;
    }
  }
`;

const User = ({ user }) => {
  const { token } = useSelector((state) => state.userLogin);
  return (
    <Wrapper>
      <div>
        <b>First Name: </b> {user.first_name}
      </div>
      <div>
        <b>Last Name: </b>
        {user.last_name}
      </div>

      <div className="button">
        {token ? (
          <Button to={`/user/${user.id}`}>
            <FaEye />
          </Button>
        ) : null}
      </div>
    </Wrapper>
  );
};

export default User;
