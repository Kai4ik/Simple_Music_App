import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Title = styled.h1``;

const MenuBtn = styled.button`
  background: transparent;
  border: 2px solid rgb(65, 65, 65);
  padding: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background: rgb(65, 65, 65);
    color: white;
  }

  @media screen and (max-width: 768px) {
    z-index: 2;
  }
`;

export default function Navigation({ menuStatus, setMenuStatus }) {
  return (
    <Nav>
      <Title>Relaxing Music</Title>
      <MenuBtn onClick={() => setMenuStatus(!menuStatus)}>
        Library <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
      </MenuBtn>
    </Nav>
  );
}
