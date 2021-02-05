import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <Wrapper onClick={props.onClick}></Wrapper>,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
