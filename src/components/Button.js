import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const NavLink = styled(Link)`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: none;
  /* border: 1px solid #ff0055; */
  border-radius: 5px;
  background: ${(props) => props.color || "#25282a"};
  color: white;
  cursor: pointer;
  margin-right: 1rem;
  text-decoration: none;
  display: inline-block;
  :focus {
    outline: none;
  }

  :hover,
  :active {
    background: ${(props) => props.hoverColor || "#505050"};
    /* border-color: #ff4382; */
  }
`;

const ButtonWrapper = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: none;
  /* border: 1px solid #ff0055; */
  border-radius: 5px;
  background: ${(props) => props.color || "#25282a"};
  /* background: #25282a; */
  color: white;
  cursor: pointer;
  margin-right: 1rem;
  text-decoration: none;
  display: inline-block;
  :focus {
    outline: none;
  }

  :hover,
  :active {
    background: ${(props) => props.hoverColor || "#505050"};
    /* border-color: #ff4382; */
  }
`;

const Button = (props) => {
  if (props.to) {
    return (
      <NavLink to={props.to} exact={props.exact} {...props}>
        {props.children}
      </NavLink>
    );
  }
  return (
    <ButtonWrapper type={props.type} onClick={props.onClick} {...props}>
      {props.children}
    </ButtonWrapper>
  );
};

export default Button;
