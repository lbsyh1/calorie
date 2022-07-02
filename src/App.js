import logo from "./logo.svg";
import "./App.css";
import MainPage from "./components/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import AddPage from "./components/AddPage";
import ListPage from "./components/ListPage";
import EditPage from "./components/EditPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="list" element={<ListPage />} />
          <Route path="add" element={<AddPage />} />
          <Route path="edit" element={<EditPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
