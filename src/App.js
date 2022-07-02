import logo from "./logo.svg";
import "./App.css";
import MainPage from "./components/MainPage";
import { BrowserRouter, Router, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import AddPage from "./components/AddPage";
import ListPage from "./components/ListPage";
import EditPage from "./components/EditPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <Route path="/" exact component={MainPage} />
          <Route path="/search" exact component={SearchPage} />
          <Route path="/list" exact component={ListPage} />
          <Route path="/add" exact component={AddPage} />
          <Route path="/edit" exact component={EditPage} />
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
