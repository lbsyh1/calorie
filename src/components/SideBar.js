import React from "react";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div>
      <div class="w3-sidebar w3-bar-block" style="width:25%">
        <Link to="/">GoToMainPage</Link>
        <Link to="/">GoToAddPage</Link>
        <Link to="/">GoToEditPage</Link>
        <Link to="/">GoToSearchPage</Link>
        <Link to="/">GoToListPage</Link>
      </div>
    </div>
  );
};

export default SideBar;
