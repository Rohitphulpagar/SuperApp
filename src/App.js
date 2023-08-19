
import React from "react";
import Registeration from "./Registeration";
import "./style.css"
import { Route, Routes } from "react-router-dom";
import Seconds from "./Seconds";

function App() {
  return (
    
    <div className="Apps">
 <Routes>
  <Route path="/" element={<Registeration/>}></Route>
 </Routes>
  
 <Routes>
  <Route path="/Seconds" element={<Seconds/>}></Route>
 </Routes>
    
      
 
      </div>
  );
}

export default App;
