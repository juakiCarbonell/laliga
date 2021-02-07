import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { userUpdate } from "../store/actions";

import Button from "../components/Button";
import Backdrop from "./Backdrop";

const Wrapper = styled.div`
  z-index: 100;
  position: fixed;
  top: 22vh;
  left: 15%;
  width: 70%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 8px;
  header {
    /* width: 100%; */
    background-color: #25282a;
    color: white;
    display: inline-block;
    width: 100%;
    padding: 0 10%;
    box-sizing: border-box;
  }
  .inputContainer,
  .buttonsContainer {
    width: 80%;
    margin: 20px auto;
  }
`;

const ModalOverlay = (props) => {
  const { user } = props;
  const { first_name, last_name } = user;
  const [firstName, setFirstName] = useState(first_name);
  const [lastName, setLastName] = useState(last_name);
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    if (firstName.trim().length === 0 || lastName.trim().length === 0) {
      alert("Invalid Input");
    } else {
      dispatch(
        userUpdate({ first_name: firstName, last_name: lastName, id: user.id })
      );
      props.onCancel();
    }
  };

  const cancelButtonHandler = (e) => {
    e.preventDefault();
    props.onCancel();
  };

  const content = (
    <Wrapper>
      <header>
        <h3>{props.header}</h3>
      </header>
      <form onSubmit={submitHandler}>
        <div className="inputContainer">
          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lasNamet">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="buttonsContainer">
          <Button type="submit">Sumit</Button>
          <Button
            color="red"
            hoverColor="darkred"
            onClick={cancelButtonHandler}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Wrapper>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;
