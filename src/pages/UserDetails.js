import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";

import { userDetails, userDelete } from "../actions/users";

import Loader from "../components/Loader";
import EditForm from "../components/EditForm";
import { PrimaryBtn } from "../components/Button";

const User = () => {
  const [showForm, setShowForm] = useState(false);
  let { id } = useParams();
  let history = useHistory();

  const dispatch = useDispatch();

  const openFormHandler = () => setShowForm(true);
  const closeFormHandler = () => setShowForm(false);

  const { loading, error, user } = useSelector((state) => state.userDetails);

  const { success: successDelete } = useSelector((state) => state.userDelete);
  const { token } = useSelector((state) => state.userLogin);

  useEffect(() => {
    console.log("effe");
    if (successDelete || !token) {
      history.push("/");
    } else {
      dispatch(userDetails(id));
    }
  }, [dispatch, id, successDelete, history, token]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(userDelete(id));
    }
  };

  return (
    <>
      <EditForm
        show={showForm}
        onCancel={closeFormHandler}
        header="Edit"
        user={user}
      ></EditForm>
      <Link to="/">Back To Users List</Link>
      <h1>User</h1>
      {loading && <Loader />}
      <p>First Name: {user.first_name}</p>
      <p>Last Name: {user.last_name}</p>
      {/* <PrimaryBtn primary onClick={() => editHandler(user.id)}>
        EDIT
      </PrimaryBtn> */}
      <PrimaryBtn primary onClick={openFormHandler}>
        Edit
      </PrimaryBtn>
      <PrimaryBtn onClick={() => deleteHandler(user.id)}>Delete</PrimaryBtn>
    </>
  );
};

export default User;
