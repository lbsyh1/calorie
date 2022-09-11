import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DehazeIcon from "@mui/icons-material/Dehaze";

const Wrapper = styled.div`
  top: 0;
  width: 100%;
`;
const Icon = styled.div`
  position: absolute;
  z-index: 3;
`;
const Section = styled.section`
  position: absolute;
  top: 0;
  width: 80%;
  height: 100%;
  background: #fcfacb;
  transition: all 1s;
  z-index: 2;
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;
const SideBar = () => {
  const [isActive, setIsActive] = useState(false);

  const onClickIcon = () => {
    setIsActive(!isActive);
  };

  const onClickNav = () => {
    setIsActive(!isActive);
  };
  return (
    <Wrapper>
      <Icon onClick={onClickIcon}>
        {isActive ? <ArrowBackIosIcon /> : <DehazeIcon />}
      </Icon>

      {isActive && (
        <Section>
          <Nav onClick={onClickNav}>
            <Link to="/">GoToHomePage</Link>
            <Link to="/my-calories/add">GoToAddPage</Link>
            <Link to="/my-calories/edit">GoToEditPage</Link>
            <Link to="/search">GoToSearchPage</Link>
            <Link to="/my-calories">GoToCalorieListPage</Link>
          </Nav>
        </Section>
      )}
    </Wrapper>
  );
};

export default SideBar;
