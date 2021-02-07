import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  margin: 100px auto;
  border: 2px solid red;
  padding: 10px;
`;

const Error = () => {
  return (
    <Wrapper>
      <h3>A error has Ocurred. Plese try Again</h3>
    </Wrapper>
  );
};

export default Error;
