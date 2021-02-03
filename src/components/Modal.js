import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { userUpdate } from '../actions/users';

import Backdrop from './Backdrop';

const Wrapper = styled.div`
  z-index: 100;
  position: fixed;
  top: 22vh;
  left: 10%;
  width: 80%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 8px;
  header {
    /* width: 100%; */
    padding: 1rem 0.5rem;
    background: lightcoral;
    color: white;
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
    console.log('firstName.trim().length', firstName.trim().length);
    console.log(firstName);
    console.log(lastName);
    if (firstName.trim().length === 0 || lastName.trim().length === 0) {
      alert('Invalid Input');
    } else {
      dispatch(
        userUpdate({ first_name: firstName, last_name: lastName, id: user.id })
      );
      props.onCancel();
    }
  };

  const content = (
    <Wrapper>
      <header>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={submitHandler}
        // onSubmit={
        //   props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        // }
      >
        <div className={`modal__content ${props.contentClass}`}>
          <input
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button type='submit'>Sumit</button>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </Wrapper>
  );

  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
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
        classNames='modal'
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;
