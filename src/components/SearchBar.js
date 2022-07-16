import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  padding: 10px 20px;
  box-sizing: border-box;

  width: 350px;
  height: 60px;
  border-radius: 15px;
  border: 1px solid black;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  & > svg {
    width: 25px;
    height: 25px;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
`;

const SearchBarOfSearch = () => {
  return (
    <Wrapper>
      <Icon>
        <FontAwesomeIcon icon={faSearch} />
      </Icon>
      <Input type="text" />
    </Wrapper>
  );
};

export default SearchBarOfSearch;
