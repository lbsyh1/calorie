import React from "react";
import styled from "@emotion/styled";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/page/Home";
import Search from "@/page/Search";
import AddFoodCalorie from "@/page/AddFoodCalorie";
import MyCalorieList from "@/page/MyCalorieList";
import EditFoodCalorie from "@/page/EditFoodCalorie";

import SideBar from "./components/SideBar";
import "@/reset.css";

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const PageWrapper = styled.section`
  margin-top: 50px;
`;
function App() {
  return (
    <Wrapper className="App">
      <BrowserRouter>
        <SideBar />
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="my-calories" element={<MyCalorieList />} />
            <Route path="my-calories/add" element={<AddFoodCalorie />} />
            <Route path="my-calories/edit" element={<EditFoodCalorie />} />
          </Routes>
        </PageWrapper>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
