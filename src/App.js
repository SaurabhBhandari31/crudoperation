import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js//bootstrap.bundle";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Adduser from "./Components/Adduser";
import Edit from "./Components/Edit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/adduser" element={<Adduser />} />
        <Route exact path="/edituser/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
