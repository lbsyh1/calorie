import React from "react";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div>
      <div className="w3-sidebar w3-bar-block" style={{ width: "25%" }}>
        <nav>
          <Link to="/">GoToHomePage</Link>
          <Link to="/my-calories/add">GoToAddPage</Link>
          <Link to="/my-calories/edit">GoToEditPage</Link>
          <Link to="/search">GoToSearchPage</Link>
          <Link to="/my-calories">GoToCalorieListPage</Link>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
