import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const User = ({ user }) => {
  const { token } = useSelector((state) => state.userLogin);
  console.log(user.email);
  return (
    <>
      <div>{user.first_name}</div>
      <div>
        {token ? (
          <Link to={`/user/${user.id}`}>
            <FaEye />
          </Link>
        ) : null}
      </div>
    </>
  );
};

export default User;
