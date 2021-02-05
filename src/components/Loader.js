import React from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  margin: 100px auto;
  display: flex;
  justify-content: center;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const Loader = () => {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
};

export default Loader;
