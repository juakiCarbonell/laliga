import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';


import { userDetails, userDelete } from '../actions/users';

import Loader from '../components/Loader';
import Modal from '../components/Modal'
import { PrimaryBtn } from '../components/Button';

const User = () => {
  const [showForm, setShowForm] = useState(false);
  let { id } = useParams();
  let history = useHistory();

  const dispatch = useDispatch();


  const openMapHandler = () => setShowForm(true);
  const closeMapHandler = () => setShowForm(false);

  const { loading, error, user } = useSelector((state) => state.userDetails);

  const { success: successDelete } = useSelector((state) => state.userDelete);

  useEffect(() => {
    if (successDelete) {
      history.push('/');
    } else {
      dispatch(userDetails(id));
    }
  }, [dispatch, id, successDelete, history]);


  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(userDelete(id));
    }
  };

  return (
    <>
      <Modal
        show={showForm}
        onCancel={closeMapHandler}
        header='Edit'
        user={user}
        footer={<button onClick={closeMapHandler}>CLOSE</button>}
      >
      </Modal>
      <Link to='/'>Back To Users List</Link>
      <h1>User</h1>
      {loading && <Loader />}
      <p>First Name: {user.first_name}</p>
      <p>Last Name: {user.last_name}</p>
      {/* <PrimaryBtn primary onClick={() => editHandler(user.id)}>
        EDIT
      </PrimaryBtn> */}
      <PrimaryBtn primary onClick={openMapHandler}>
        Edit
      </PrimaryBtn>
      <PrimaryBtn onClick={() => deleteHandler(user.id)}>Delete</PrimaryBtn>
    </>
  );
};

export default User;