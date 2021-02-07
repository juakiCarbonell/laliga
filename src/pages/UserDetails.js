import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";

import { userDetails, userDelete } from "../store/actions";

import Loader from "../components/Loader";
import Error from "../components/Error";
import EditForm from "../components/EditForm";
import Button from "../components/Button";

const Wrapper = styled.div`
  width: 50%;
  margin: auto;
  .detailsContainer {
    padding: 40px;
    border: 2px solid darkgray;
    border-radius: 5px;
    .userInfo {
      margin: 20px 0;
    }
    .actionButtons {
      margin-top: 40px;
      display: flex;
    }
  }
  @media only screen and (max-width: 600px) {
    width: 80%;
    .actionButtons {
      flex-direction: column;
      button {
        margin-bottom: 20px;
      }
    }
  }
`;

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

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <>
      <EditForm
        show={showForm}
        onCancel={closeFormHandler}
        header="Edit"
        user={user}
      ></EditForm>
      <Button to="/">Back To Users List</Button>

      <Wrapper>
        <h3>User</h3>
        <div className="detailsContainer">
          <div className="userInfo">
            <b>First Name: </b> {user.first_name}
          </div>
          <div className="userInfo">
            <b>Last Name: </b>
            {user.last_name}
          </div>
          <div className="actionButtons">
            <Button
              color="blue"
              hoverColor="darkblue"
              onClick={openFormHandler}
            >
              Edit
            </Button>
            <Button
              color="red"
              hoverColor="darkred"
              onClick={() => deleteHandler(user.id)}
            >
              Delete
            </Button>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default User;
