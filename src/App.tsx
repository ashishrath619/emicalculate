import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css"; // or include from a CDN
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import SideView from "./Components/sideView";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SideView" element={<SideView />} />
    </Routes>
  );
}

export default App;
