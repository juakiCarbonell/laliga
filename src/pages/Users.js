import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userList } from "../store/actions";

import Loader from "../components/Loader";
import Error from "../components/Error";
import UserItem from "../components/UserItem";
import Paginate from "../components/Paginate";

const Users = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 3;

  const usersListState = useSelector((state) => state.userList);
  const { loading, error, users } = usersListState;

  useEffect(() => {
    dispatch(userList());
  }, [dispatch]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Get Users
  const indexOfLastUser = currentPage * usersPerPage;
  const indeyOfFisrstPost = indexOfLastUser - usersPerPage;
  const usersToShow = users.slice(indeyOfFisrstPost, indexOfLastUser);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <>
      <h3>Users</h3>

      {usersToShow.map((user) => {
        return <UserItem key={user.id} user={user} />;
      })}
      <Paginate
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};

export default Users;
