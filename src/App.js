import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import Search from "./page/Search";
import AddFoodCalorie from "./page/AddFoodCalorie";
import MyCalorieList from "./page/MyCalorieList";
import EditFoodCalorie from "./page/EditFoodCalorie";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="my-calories" element={<MyCalorieList />} />
          <Route path="my-calories/add" element={<AddFoodCalorie />} />
          <Route path="my-calories/edit" element={<EditFoodCalorie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
