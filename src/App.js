
import React from "react";
import Registeration from "./Registeration";
import HomePage from "./HomePage"
import "./style.css"
import { Route, Routes } from "react-router-dom";
import CategoryPage from "./CategoryPage";
import BrowseEntertainmentPage from "./BrowseEntertainmentPage";
function App() {
  return (
    <div className="Apps">
 <Routes>
  <Route path="/" element={<Registeration/>}></Route>
 </Routes>
 <Routes>
  <Route path="/CategoryPage" element={<CategoryPage/>}></Route>
 </Routes>
 <Routes>
  <Route path="/HomePage" element={<HomePage />}></Route>
 </Routes>
 <Routes>
  <Route path="/BrowseEntertainmentPage" element={<BrowseEntertainmentPage />}></Route>
 </Routes>
 
      </div>
  );
}

export default App;
