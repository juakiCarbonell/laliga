import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  div {
    padding: 8px 16px;
    cursor: pointer;
    border: 1px solid #ddd;
  }
`;

const Item = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  border: 1px solid #ddd;
  background: ${(props) => (props.active ? "#25282a" : "white")};
  color: ${(props) => (props.active ? "white" : "inherit")};
`;

const Paginate = ({ usersPerPage, totalUsers, paginate, currentPage }) => {
  const maxPages = Math.ceil(totalUsers / usersPerPage);
  const pageNumbers = [...Array(maxPages + 1).keys()].slice(1);
  return (
    <Wrapper>
      {pageNumbers.map((number) => {
        const active = currentPage === number ? true : false;
        return (
          <Item active={active} key={number} onClick={() => paginate(number)}>
            {number}
          </Item>
        );
      })}
    </Wrapper>
  );
};

export default Paginate;
